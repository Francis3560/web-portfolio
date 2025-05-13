import React, { useState } from "react";
import projectImage from "../assets/ContactMe.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessPopup(false);

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("message", formData.message);

      const res = await fetch("http://localhost:8000/send-email", {
        method: "POST",
        body: form,
      });

      const data = await res.json();

      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSuccessPopup(true);
        setTimeout(() => setSuccessPopup(false), 4000);
      } else {
        alert(data?.error || "Error sending message.");
      }
    } catch (error) {
      alert("Error sending message. Try again.");
      console.error("Email send error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white px-4 py-10">
      {successPopup && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 z-50 animate-bounce">
          <AiOutlineCheckCircle className="text-white text-3xl" />
          <span className="font-semibold text-lg">Message sent successfully!</span>
        </div>
      )}

      <div className="flex items-center justify-center mb-12">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <HiOutlineMailOpen className="text-green-400 text-4xl" />
          Reach out
        </h1>
      </div>

      <div className="max-w-6xl border border-green-400 rounded-lg mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        <div className="w-full pl-3 lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            Got a project in <br />
            <span className="text-green-400">mind?</span>
          </h2>
          <img
            src={projectImage}
            alt="Project Illustration"
            className="w-[250px] sm:w-[300px] mt-4"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-black border p-6 mr-3 rounded-lg space-y-4 shadow-xl"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-black border border-green-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-black border border-green-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded bg-black border border-green-400 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-400 text-black font-bold rounded-full hover:bg-green-600 transition duration-300 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <ImSpinner2 className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h8m0 0l-4-4m4 4l-4 4"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
