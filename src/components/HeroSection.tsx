"use client";
import React from "react";
import { useTranslations } from "./TranslationsProvider"; // 👈 Import our custom hook

export const HeroSection = () => {
  const messages = useTranslations(); // 👈 Use the hook

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center p-4 aurora-background">
      <div className="flex flex-col items-center gap-6 z-10">
        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-wider">
          DEVORA
        </h1>
        {/* Access translations like a normal object */}
        <p className="text-xl md:text-2xl text-white max-w-2xl text-shadow">
          {messages.Hero.subtitle}
        </p>
        <button
          onClick={handleScrollToContact}
          className="text-white font-bold py-3 px-8 rounded-lg text-lg mt-4 
                     transition-all duration-300 ease-in-out 
                     shadow-[0_0_10px_var(--color-tech-green)] 
                     hover:shadow-[0_0_25px_var(--color-tech-green)]"
        >
          {messages.Hero.button}
        </button>
      </div>
    </section>
  );
};
