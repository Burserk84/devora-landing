// src/components/Navbar.tsx
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav className="container mx-auto relative flex items-center p-4 md:p-6">
        <div className="text-2xl font-bold text-white tracking-wider">
          DEVORA
        </div>

        <div className="absolute top-4 md:top-6 end-4 md:end-6">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
};
