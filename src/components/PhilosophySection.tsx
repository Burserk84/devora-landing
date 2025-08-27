"use client";
import React from "react";
import { Reveal } from "./Reveal";
import { useTranslations } from "./TranslationsProvider";

export const PhilosophySection = () => {
  const messages = useTranslations();

  // Split the title to insert the span
  const titleParts = messages.Philosophy.title.split("{span}");

  return (
    <section className="w-full py-24 px-4">
      <Reveal>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="cube-container">
                <div className="cube">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face right"></div>
                  <div className="face left"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-right">
              <h2 className="text-4xl font-bold text-white mb-4">
                {titleParts[0]}
                <span className="text-[var(--color-cyber-purple)]">Devora</span>
                {titleParts[1]}
              </h2>
              <p className="text-lg text-[var(--color-subtle-tech)] leading-relaxed text-shadow">
                {messages.Philosophy.description}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
