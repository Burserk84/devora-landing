import React from "react";
import { Reveal } from "./Reveal";

export const Footer = () => {
  return (
    <footer className="w-full bg-black-20">
      <Reveal>
        <div className="py-20 px-4 text-center bg-gray-900">
          <h2 className="text-4xl font-bold text-white mb-4">
            ایده‌ای در ذهن دارید؟
          </h2>
          <p className="text-lg text-[var(--color-subtle-tech)] mb-8 max-w-2xl mx-auto text-shadow">
            بیایید با هم صحبت کنیم و ببینیم چطور می‌توانیم آن را به یک واقعیت
            دیجیتال شگفت‌انگیز تبدیل کنیم.
          </p>
          <button
            className="text-white font-bold py-3 px-8 rounded-lg text-lg 
                       transition-all duration-300 ease-in-out 
                       shadow-[0_0_10px_var(--color-tech-green)] 
                       hover:shadow-[0_0_25px_var(--color-tech-green)]"
          >
            ارسال پیام برای مشاوره رایگان
          </button>
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
