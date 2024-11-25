import semahImage from "../assets/portolio/semah-image.png";
import fistumImage from "../assets/portolio/fitsum-image.jpg";
import tomocaImage from "../assets/portolio/tomoca-image.png";
import angelImage from "../assets/portolio/angel-skin.png";
import lliImage from "../assets/portolio/lli-image.jpg";
import strablImage from "../assets/portolio/strabl.png";
import kyvioImage from "../assets/portolio/kyvio.png";
import acrossImage from "../assets/portolio/Accross.png";
import coffeeTerminalImage from "../assets/portolio/coffee-terminal-image.jpg";
import bermelFestImage from "@/app/assets/portolio/bermel-fest-image.jpg";
import ethioSalacyCalculatorImage from "@/app/assets/portolio/ethio-salary-calculator.jpg";

export const websitesProjects = [
  {
    id: 1,
    name: "Strabl",
    color: "#1B1107",
    image: strablImage,
    imageDescription: "Strabl Image",
    url: "https://strabl.io/",
    description: "Strabl - The ecommerce store",
    technologies: ["reactjs", "nodejs", "expressjs", "tailwindcss", "mysql"],
  },
  {
    id: 2,
    name: "Kyvio",
    color: "#EA2829",
    image: kyvioImage,
    imageDescription: "Kyvio Image",
    url: "https://kyvio.com/",
    description: "Kyvio - Do it yourself platform",
    technologies: [
      "nextjs",
      "ts",
      "nodejs",
      "expressjs",
      "tailwindcss",
      "mysql",
    ],
  },
  {
    id: 3,
    name: "Across",
    color: "#1f65b1",
    image: acrossImage,
    imageDescription: "Across Image",
    url: "https://across-h2020.eu/",
    description:
      "EU-funded initiative aimed at developing interoperable, user-centric, and regulation-compliant cross-border digital public services, ensuring data sovereignty for citizens.",
    technologies: [
      "reactjs",
      "ts",
      "nodejs",
      "expressjs",
      "tailwindcss",
      "mysql",
    ],
  },
  //   {
  //     id: 4,
  //     name: "Angel SKin",
  //     color: "#d5ac89",
  //     image: angelImage,
  //     imageDescription: "Angel Skin Image",
  //     url: "https://angelskin.vercel.app/",
  //     description:
  //       "Angel Skin is U.S. Based Website for Online Appointment for Skin Care and Waxing Solutions...",
  //     technologies: ["vue.js", "tailwindcss"],
  //   },
  //   {
  //     id: 5,
  //     name: "Fitsum Printing and Advert",
  //     color: "#8bc43b",
  //     image: fistumImage,
  //     imageDescription: "Firstum Printing and Advert Image",
  //     url: "https://fitsumpptest.vercel.app/",
  //     description:
  //       "Fitsum Printing and Advert website for Advertising Products and Ordering Online...",
  //     technologies: ["reactjs", "nodejs", "expressjs", "tailwindcss", "mysql"],
  //   },
];

export const mobileAppsProjects = [
  {
    id: 1,
    name: "Tomoca App",
    color: "#FA8D18",
    image: tomocaImage,
    imageDescription: "Tomoca App Image",
    url: "https://play.google.com/store/apps/details?id=com.tomoca.app&hl=en&gl=US",
    description:
      "Tomoca App is an app that allows you to order coffee from the nearest Tomoca Coffee Shop.",
    technologies: [
      "flutter",
      "dart",
      "firebase",
      "nodejs",
      "expressjs",
      "mysql",
    ],
  },
];

export const shopifyStores = [
  {
    id: 1,
    name: "Little Luxury Items",
    color: "#615B56",
    image: lliImage,
    imageDescription: "Little Luxury Items Images",
    url: "https://littleluxuryitems.co/",
    description:
      "Little Luxury Items, your destination for unique and innovative products. As an e-commerce store...",
    technologies: ["shopify"],
  },
];

export const personalProjects = [
  {
    id: 1,
    name: "Ethiopia Salary Calculator",
    color: "#074539",
    image: ethioSalacyCalculatorImage,
    imageDescription: "Ethiopia Salary Calculator Image",
    url: "https://ethiopia-salary-calculator.alamondai.com/",
    description: "An App to Calculate Salary Based on Ethiopian Tax Law...",
    technologies: ["reactjs", "tailwindcss", "firebase"],
  },
];
