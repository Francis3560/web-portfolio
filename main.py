from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from email.message import EmailMessage
import aiosmtplib

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/send-email")
async def send_email(
    name: str = Form(...),
    email: str = Form(...),
    message: str = Form(...)
):
    msg = EmailMessage()
    msg["From"] = "jamradi80@gmail.com"  
    msg["To"] = "franklinodhis3560@gmail.com"  
    msg["Subject"] = f"New Message from {name}"

    msg.set_content(f"From: {name} <{email}>\n\n{message}")

    try:
        await aiosmtplib.send(
            msg,
            hostname="smtp.gmail.com",
            port=587,
            start_tls=True,
            username="jamradi80@gmail.com",  
            password="rgrzgufwecbhvqwk"      
        )
        return {"message": "Email sent successfully!"}
    except Exception as e:
        print(f"Email send failed: {e}")
        return {"error": "Failed to send email."}
