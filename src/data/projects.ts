// src/data/projects.ts

// Define the type for better autocompletion and type checking
type Project = {
  id: number;
  title: { en: string; fa: string };
  description: { en: string; fa: string };
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "AuraSync - Project Manager",
      fa: "AuraSync - مدیریت پروژه",
    },
    description: {
      en: "A full-stack project management app with features like a Kanban board, real-time chat, and authentication.",
      fa: "یک اپلیکیشن فول-استک برای مدیریت پروژه‌ها با قابلیت‌هایی مانند برد Kanban، چت ریل‌تایم و احراز هویت.",
    },
    image: "/images/aurasync.jpg",
    liveUrl: "https://app.devorastudio.ir",
    githubUrl: "https://github.com/Burserk84/devora-pm-tool",
  },
  {
    id: 2,
    title: {
      en: "Personal Website & Store",
      fa: "وب‌سایت شخصی و فروشگاه",
    },
    description: {
      en: "A personal portfolio, blog, and e-commerce store built with a headless architecture using Next.js and Strapi.",
      fa: "وب‌سایت شخصی، وبلاگ و فروشگاه آنلاین که با Next.js و Strapi به صورت Headless ساخته شده است.",
    },
    image: "/images/sharifiasl.jpg",
    liveUrl: "https://sharifiasldev.ir",
    githubUrl: "https://github.com/Burserk84/sharifiasldev.ir",
  },
];
