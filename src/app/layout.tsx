import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ubstack.dev"),
  title: "UB Stack | Full Stack Developer & UI/UX Designer",
  description:
    "Premium full-stack web development and UI/UX design. Building digital experiences that perform — modern UI, scalable architecture, exceptional user experience.",
  keywords: [
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Freelance Developer",
    "Portfolio",
    "UB Stack",
    "Abhijith Krishna G",
  ],
  authors: [{ name: "Abhijith Krishna G", url: "https://ubstack.dev" }],
  creator: "Abhijith Krishna G",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ubstack.dev",
    siteName: "UB Stack",
    title: "UB Stack | Full Stack Developer & UI/UX Designer",
    description:
      "Premium full-stack web development and UI/UX design. Building digital experiences that perform.",
  },
  twitter: {
    card: "summary_large_image",
    title: "UB Stack | Full Stack Developer & UI/UX Designer",
    description:
      "Premium full-stack web development and UI/UX design. Building digital experiences that perform.",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "color-scheme": "dark",
    "theme-color": "#0D0D0D",
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
      className={`dark ${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
      data-color-scheme="dark"
    >
      <body className="font-sans bg-bg-primary text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
