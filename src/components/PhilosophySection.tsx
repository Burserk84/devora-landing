import React from "react";
import { Reveal } from "./Reveal";

export const PhilosophySection = () => {
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
                Developer + Aura ={" "}
                <span className="text-[var(--color-cyber-purple)]">Devora</span>
              </h2>
              <p className="text-lg text-[var(--color-subtle-tech)] leading-relaxed text-shadow">
                ما معتقدیم که تکنولوژی فقط مجموعه‌ای از خطوط کد نیست. هر پروژه
                یک &quot;Aura&quot; یا هاله منحصر به فرد دارد؛ انرژی‌ای که از
                ترکیب منطق مهندسی و شهود خلاقانه متولد می‌شود. ماموریت ما، دمیدن
                این روح در محصولات دیجیتال شماست.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
