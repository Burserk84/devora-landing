// src/components/TranslationsProvider.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";

// Define the shape of your messages
// You can make this more specific if you want autocompletion
type Messages = unknown;

const TranslationsContext = createContext<Messages | null>(null);

type TranslationsProviderProps = {
  messages: Messages;
  children: ReactNode;
};

export const TranslationsProvider = ({
  messages,
  children,
}: TranslationsProviderProps) => {
  return (
    <TranslationsContext.Provider value={messages}>
      {children}
    </TranslationsContext.Provider>
  );
};

// A custom hook to easily access the translations
export const useTranslations = () => {
  const context = useContext(TranslationsContext);
  if (context === null) {
    throw new Error(
      "useTranslations must be used within a TranslationsProvider"
    );
  }
  return context;
};
