// src/components/Portfolio.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "@/components/TranslationsProvider";
import { projects } from "@/data/projects";

type PortfolioTranslations = {
  Portfolio: {
    title: string;
    view_live: string;
    source_code: string;
  };
};

type Props = {
  locale: "en" | "fa";
};

const Portfolio = ({ locale }: Props) => {
  const translations = useTranslations() as PortfolioTranslations;

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          {translations.Portfolio.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Image
                src={project.image}
                alt={project.title[locale]}
                width={500}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title[locale]}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description[locale]}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
                      {translations.Portfolio.view_live}
                    </span>
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-gray-600 hover:text-gray-800 dark:hover:text-white cursor-pointer">
                      {translations.Portfolio.source_code}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
