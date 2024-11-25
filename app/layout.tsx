import type { Metadata } from "next";
import "./globals.css";
import "./styles/loading-style.css";
import "./styles/underline-style.css";
import Header from "./layouts/Header";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  icons: {
    icon: "/square-s-16x16.png",
  },
  title: "Muhammad Sadiq Anwer Khan",
  category: "Technology",
  description:
    "Muhammad Sadiq Anwer Khan - Software Developer | Fullstack Developer | Reactjs | Nodejs | Flutter",
  applicationName: "Next.js",
  metadataBase: new URL("https://www.sadiqanwerkhan.com/"),
  keywords: [
    "Software Development",
    "Fullstack Development",
    "Reactjs",
    "Nodejs",
    "Frontend Developer",
    "Flutter Developer",
    "Software Developer in Ethiopia",
    "Reactjs Developer in Ethiopia",
    "Muhammad Sadiq Anwer Khan",
  ],
  creator: "Muhammad Sadiq Anwer Khan",
  authors: [
    {
      name: "Muhammad Sadiq Anwer Khan",
      url: "https://www.sadiqanwerkhan.com/",
    },
  ],
  publisher: "Muhammad Sadiq Anwer Khan",
  openGraph: {
    title: "Muhammad Sadiq Anwer Khan",
    description:
      "Muhammad Sadiq Anwer Khan - Software Developer | Fullstack Developer | Reactjs | Nodejs",
    url: "https://www.sadiqanwerkhan.com/",
    siteName: "Muhammad Sadiq Anwer Khan - Portfolio",
    images: [
      {
        url: "/seo-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sadiq Anwer Khan",
    description:
      "Muhammad Sadiq Anwer Khan - Software Developer | Fullstack Developer | Reactjs | Nodejs",
    site: "@MuhammadSadiqAnwerKhan",
    images: ["/seo-image.jpg"],
    creator: "@MuhammadSadiqAnwerKhan",
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    other: {
      me: ["sadiqanwerkhan@gmail.com", "https://www.sadiqanwerkhan.com/"],
    },
  },
  appleWebApp: {
    title: "Muhammad Sadiq Anwer Khan",
    statusBarStyle: "black-translucent",
    startupImage: ["/square-s.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <NextUIProvider> */}
        <Header />
        <main className="w-full min-h-screen gradient_background pt-10 md:pt-28">
          {children}
          <SpeedInsights />
        </main>
        {/* </NextUIProvider> */}
      </body>
    </html>
  );
}
