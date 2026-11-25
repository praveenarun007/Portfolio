import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praveen A — Software Engineering, AI/ML & Cloud Portfolio",
  description:
    "Portfolio of Praveen A, B.E. Artificial Intelligence and Data Science student at Bannari Amman Institute of Technology. Focused on Software Engineering, Full-Stack Development, AI/ML, Data Engineering, and AWS Cloud.",
  keywords: [
    "Praveen A",
    "Software Engineer",
    "Full-Stack Developer",
    "Artificial Intelligence",
    "Data Science",
    "Bannari Amman Institute of Technology",
    "React",
    "Node.js",
    "Python",
    "AWS",
  ],
  authors: [{ name: "Praveen A" }],
  openGraph: {
    title: "Praveen A — Software Engineering, AI/ML & Cloud Portfolio",
    description:
      "B.E. Artificial Intelligence and Data Science student building scalable full-stack web systems, serverless ETL pipelines, and applied machine learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans swiss-grid-canvas min-h-screen antialiased selection:bg-klein selection:text-white">
        {children}
      </body>
    </html>
  );
}
