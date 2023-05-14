import "./globals.css";

import type { Metadata } from "next";

import { Space_Mono } from "next/font/google";
import { CustomCursorWrapper, Header } from "@/components";
const SpaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "David Istrati 🧑‍💻",
  description:
    "I'm an 18-year-old college freshman, startup founder, and machine learning engineer with a passion for democratizing data science and analyzing titanic amounts of data. I'm no stranger to the world of developing, starting from Grade 7! I've worked as a data scientist since Grade 10, founded Measure, worked as a freelancer, won multiple hackathons and Kaggle medals, and most recently, served as a data engineer at Soleadify. Now, I'm excited to put all that experience to use to build the amazing ProductSpark! I'm ready to continue my mission of technology democratization.",
  applicationName: "David Istrati's website",
  authors: [{ name: "David Istrati" }],
  generator: "Next.js",
  keywords: [
    "David Istrati",
    "ML Engineer",
    "Startup Founder",
    "16 yead old founder",
    "Veridion",
    "Soleadify",
    "Colby College",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${SpaceMono.className} ${SpaceMono.variable} font-spaceMono`}>
      <body>
        <CustomCursorWrapper />
        <div className="flex flex-col w-screen min-h-screen overflow-hidden">
          <Header></Header>
          {children}
        </div>
      </body>
    </html>
  );
}
