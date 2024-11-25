import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Sadiq Anwer Khan - Skills",
  description:
    "Muhammad Sadiq Anwer Khan - Software Developer | Fullstack Developer | Reactjs | Nodejs",
  keywords: [
    "Skills",
    "Website Skills",
    "Reactjs Skills",
    "Nodejs Skills",
    "Vue.js Skills",
  ],
  openGraph: {
    title: "Muhammad Sadiq Anwer Khan - Skills",
    description: "Muhammad Sadiq Anwer Khan - Skills ",
    url: "https://www.sadiqanwerkhan.com/skills",
    siteName: "Muhammad Sadiq Anwer Khan - Portfolio",
    images: [
      {
        url: "/skills-seo-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sadiq Anwer Khan - Skills",
    description:
      "Muhammad Sadiq Anwer Khan - Software Developer | Fullstack Developer | Reactjs | Nodejs",
    site: "MuhammadSadiqAnwerKhan",
    images: ["/skills-seo-image.jpg"],
    creator: "MuhammadSadiqAnwerKhan",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
