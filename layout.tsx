import type { Metadata } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZEUS — Guardian of the Purrlight",
  description:
    "An interactive superhero help portal built around ZEUS, the magical cat. Experience an enchanted storybook world where no one faces their darkest moment alone.",
  keywords: [
    "Zeus",
    "Guardian of the Purrlight",
    "Cat superhero",
    "Storybook help portal",
    "Magical sanctuary",
    "Support",
  ],
  authors: [{ name: "Guardian of the Purrlight" }],
  openGraph: {
    title: "ZEUS — Guardian of the Purrlight",
    description:
      "Somewhere out there, someone needs help. Zeus is listening.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFF8EB] text-[#35151D] font-sans antialiased selection:bg-[#D5A642] selection:text-[#FFF4DC]">
        {children}
      </body>
    </html>
  );
}
