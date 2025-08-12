import React from "react";

export const HeroSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center p-4 aurora-background">
      <div className="flex flex-col items-center gap-6 z-10">
        <h1 className="text-5xl md:text-8xl font-bold text-white tracking-wider">
          DEVORA
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-2xl text-shadow">
          ما به کد، روح می‌بخشیم. ترکیبی از مهندسی دقیق و طراحی خلاق برای ساخت
          محصولات دیجیتال ماندگار.
        </p>
        <button
          className="text-white font-bold py-3 px-8 rounded-lg text-lg mt-4 
                     transition-all duration-300 ease-in-out 
                     shadow-[0_0_10px_var(--color-tech-green)] 
                     hover:shadow-[0_0_25px_var(--color-tech-green)]"
        >
          پروژه رویایی‌ات رو شروع کن
        </button>
      </div>
    </section>
  );
};
