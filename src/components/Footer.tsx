"use client";
import React, { useState } from "react";
import { Reveal } from "./Reveal";
import { useTranslations } from "./TranslationsProvider";

export const Footer = () => {
  const messages = useTranslations();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
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
      const response = await fetch(NEXT_PUBLIC_FORMSPREE_URL!, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setResponseMessage(messages.Contact.success_message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(messages.Contact.error_message);
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage(messages.Contact.error_message + error);
    }
  };

  return (
    <footer className="w-full bg-black-20" id="contact">
      <Reveal>
        <div className="py-20 px-4 text-center bg-gray-900">
          <h2 className="text-4xl font-bold text-white mb-4">
            {messages.Contact.title}
          </h2>
          <p className="text-lg text-[var(--color-subtle-tech)] mb-8 max-w-2xl mx-auto text-shadow">
            {messages.Contact.subtitle}
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
              placeholder={messages.Contact.form_name}
              required
              className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-subtle-tech focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-purple)] transition-all"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={messages.Contact.form_email}
              required
              className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-subtle-tech focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-purple)] transition-all"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={messages.Contact.form_message}
              required
              rows={5}
              className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-subtle-tech focus:outline-none focus:ring-2 focus:ring-[var(--color-cyber-purple)] transition-all"
            ></textarea>

            <button
              type="submit"
              disabled={status === "loading"}
              className="text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-[0_0_10px_var(--color-tech-green)] hover:shadow-[0_0_25px_var(--color-tech-green)] disabled:bg-gray-500 disabled:shadow-none disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? messages.Contact.button_loading
                : messages.Contact.button_submit}
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
          {messages.Footer.copyright}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          {messages.Footer.made_with}
        </p>
      </div>
    </footer>
  );
};
