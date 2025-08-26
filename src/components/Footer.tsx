"use client"; // This component now needs to be a client component

import React, { useState } from "react";
import { Reveal } from "./Reveal";

export const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // '', 'loading', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mdklozpd", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setResponseMessage("Thanks for your submission!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        if (data.errors && Array.isArray(data.errors)) {
          // This is the corrected part with a proper type assertion
          const errors = data.errors as { message: string }[];
          setResponseMessage(errors.map((error) => error.message).join(", "));
        } else {
          setResponseMessage(data.message || "An unknown error occurred.");
        }
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("Failed to connect. Please try again later." + error);
    }
  };

  return (
    <footer className="w-full bg-black-20" id="contact">
      <Reveal>
        <div className="py-20 px-4 text-center bg-gray-900">
          <h2 className="text-4xl font-bold text-white mb-4">
            ایده‌ای در ذهن دارید؟
          </h2>
          <p className="text-lg text-[var(--color-subtle-tech)] mb-8 max-w-2xl mx-auto text-shadow">
            بیایید با هم صحبت کنیم و ببینیم چطور می‌توانیم آن را به یک واقعیت
            دیجیتال شگفت‌انگیز تبدیل کنیم.
          </p>

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="نام شما"
              required
              className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-subtle-tech focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-purple)] transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ایمیل شما"
              required
              className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-subtle-tech focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-purple)] transition-all"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="پیام شما..."
              required
              rows={5}
              className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-subtle-tech focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-purple)] transition-all"
            ></textarea>

            <button
              type="submit"
              disabled={status === "loading"}
              className="text-white font-bold py-3 px-8 rounded-lg text-lg 
                         transition-all duration-300 ease-in-out 
                         shadow-[0_0_10px_var(--color-tech-green)] 
                         hover:shadow-[0_0_25px_var(--color-tech-green)] 
                         disabled:bg-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "در حال ارسال..."
                : "ارسال پیام برای مشاوره رایگان"}
            </button>
          </form>

          {responseMessage && (
            <div
              className={`mt-4 text-lg ${
                status === "success" ? "text-green-400" : "text-red-400"
              }`}
            >
              {responseMessage}
            </div>
          )}
        </div>
      </Reveal>
      <div className="py-8 text-center border-t border-white/10">
        <p className="text-[var(--color-subtle-tech)]">
          &copy; 2025 Devora. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">طراحی شده با عشق و کد</p>
      </div>
    </footer>
  );
};
