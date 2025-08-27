"use client";
import React from "react";
import { Reveal } from "./Reveal";
import { useTranslations } from "./TranslationsProvider";

export const ServicesSection = () => {
  const messages = useTranslations();

  return (
    <section className="w-full py-24 px-4">
      <div className="container mx-auto text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-white mb-2">
            {messages.Services.title}
          </h2>
          <p className="text-lg text-[var(--color-subtle-tech)] mb-16 text-shadow">
            {messages.Services.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="h-full rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 bg-white/5 backdrop-blur-lg border border-[var(--color-cyber-purple)]/20 hover:border-[var(--color-cyber-purple)]/60 hover:shadow-[0_0_25px_rgba(159,84,255,0.2)]">
              <div className="mx-auto mb-6 h-16 w-16 text-[var(--color-cyber-purple)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {messages.Services.card1_title}
              </h3>
              <p className="text-[var(--color-subtle-tech)]">
                {messages.Services.card1_desc}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 bg-white/5 backdrop-blur-lg border border-[var(--color-cyber-purple)]/20 hover:border-[var(--color-cyber-purple)]/60 hover:shadow-[0_0_25px_rgba(159,84,255,0.2)]">
              <div className="mx-auto mb-6 h-16 w-16 text-[var(--color-cyber-purple)]">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="23" cy="23" r="1" fill="currentColor"></circle>
                  <rect
                    x="8"
                    y="22"
                    width="12"
                    height="2"
                    fill="currentColor"
                  ></rect>
                  <circle cx="23" cy="9" r="1" fill="currentColor"></circle>
                  <rect
                    x="8"
                    y="8"
                    width="12"
                    height="2"
                    fill="currentColor"
                  ></rect>
                  <path
                    d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {messages.Services.card2_title}
              </h3>
              <p className="text-[var(--color-subtle-tech)]">
                {messages.Services.card2_desc}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="h-full rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 bg-white/5 backdrop-blur-lg border border-[var(--color-cyber-purple)]/20 hover:border-[var(--color-cyber-purple)]/60 hover:shadow-[0_0_25px_rgba(159,84,255,0.2)]">
              <div className="mx-auto mb-6 h-16 w-16 text-[var(--color-cyber-purple)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {messages.Services.card3_title}
              </h3>
              <p className="text-[var(--color-subtle-tech)]">
                {messages.Services.card3_desc}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
