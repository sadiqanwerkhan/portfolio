import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Sadiq Anwer Khan - Projects",
  description: "Muhammad Sadiq Anwer Khan - Portfolio | Projects",
  keywords: [
    "Fitsum Advert and Print",
    "Semah MCH ",
    "Angel Skin",
    "Tomoca App",
    "Website Portfolios",
    "Mobile App Portfolios",
    "Website Projects",
    "Mobile App Projects",
  ],
  openGraph: {
    title: "Muhammad Sadiq Anwer Khan - Projects",
    description: "Muhammad Sadiq Anwer Khan - Portfolio | Projects",
    url: "https://www.sadiqanwerkhan.com/portfolio",
    siteName: "Muhammad Sadiq Anwer Khan - Portfolio",
    images: [
      {
        url: "/portfolio-seo-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Sadiq Anwer Khan - Portfolio",
    description:
      "Muhammad Sadiq Anwer Khan - Software Developer | Fullstack Developer | Reactjs | Nodejs",
    site: "MuhammadSadiqAnwerKhan",
    images: ["/portfolio-seo-image.jpg"],
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
