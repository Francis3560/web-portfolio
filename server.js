import express from "express";
import cors from "cors";
import multer from "multer";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
];

if (process.env.SERVICE_URL_FRONTEND) {
  // Add configured frontend url, fixing potential typos in protocols
  allowedOrigins.push(process.env.SERVICE_URL_FRONTEND.replace("https//:", "https://"));
  allowedOrigins.push(process.env.SERVICE_URL_FRONTEND);
}

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      
      const normalizedOrigin = origin.trim().replace(/\/$/, "");
      const isAllowed = allowedOrigins.some(
        (o) => o.trim().replace(/\/$/, "") === normalizedOrigin
      );

      if (isAllowed || origin.startsWith("http://localhost:") || origin.endsWith("jamradi.com")) {
        return callback(null, true);
      }
      return callback(new Error("CORS policy blocked access from origin: " + origin), false);
    },
    credentials: true,
  })
);

// Multer middleware to parse multipart/form-data
const upload = multer();

app.post("/send-email", upload.none(), async (req, res) => {
  const { name, email, message, to } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST;
  const port = parseInt(process.env.SMTP_PORT || process.env.EMAIL_PORT) || 587;
  const secure = process.env.SMTP_SECURE === "true" || port === 465;
  const username = process.env.SMTP_USER || process.env.EMAIL_USERNAME || "";
  const password = process.env.SMTP_PASSWORD || process.env.EMAIL_PASSWORD || "";
  const recipient = to || process.env.ADMIN_EMAIL || process.env.EMAIL_RECEIVER || "jamradi80@gmail.com";
  const senderEmail = process.env.SMTP_FROM || process.env.EMAIL_FROM || username || "no-reply@portfolio.com";

  let transportConfig;

  // Configure transporter based on credentials
  if (host) {
    transportConfig = {
      host,
      port,
      secure,
      auth: {
        user: username,
        pass: password,
      },
    };
  } else if (username === "smtp@mailtrap.io") {
    // Mailtrap Live/Production SMTP
    transportConfig = {
      host: "send.smtp.mailtrap.io",
      port: 587,
      auth: {
        user: username,
        pass: password,
      },
    };
  } else if (username.includes("mailtrap") || username.length <= 16) {
    // Mailtrap Sandbox SMTP
    transportConfig = {
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: username,
        pass: password,
      },
    };
  } else {
    // Default to Gmail
    transportConfig = {
      service: "gmail",
      auth: {
        user: username,
        pass: password,
      },
    };
  }

  const transporter = nodemailer.createTransport(transportConfig);

  const mailOptions = {
    from: senderEmail,
    to: recipient,
    replyTo: email, // Allows replying directly to the user who filled the form
    subject: `New Message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email send failed:", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
