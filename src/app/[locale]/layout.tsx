import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { getMessages } from "@/i18n";
import { TranslationsProvider } from "@/components/TranslationsProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Load the messages for the current locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-black-100 text-white font-inter`}
      >
        {/* Wrap the app in the provider */}
        <TranslationsProvider messages={messages}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}
