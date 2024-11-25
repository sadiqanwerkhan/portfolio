import React from "react";
import PortfolioCard from "./components/PortfolioCard";
import {
  mobileAppsProjects,
  personalProjects,
  shopifyStores,
  websitesProjects,
} from "../data/portfolio";

export default function Portfolio() {
  return (
    <div className="w-full mx-auto container h-auto px-5 md:px-10 flex flex-col gap-5 font-ProductSans py-12 md:py-1">
      <div className="w-full py-2 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-fontColor">
          Portfolio
        </h1>
      </div>
      {/* Websites */}
      <div>
        <div className="w-full py-2 flex items-center justify-start">
          <h1 className="text-4xl md:text-3xl xl:text-4xl font-bold text-fontColor link-underline link-active">
            Websites
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-5 md:py-12 ">
          {websitesProjects.map((item: any, index: number) => (
            <PortfolioCard
              key={index}
              name={item.name}
              color={item.color}
              image={item.image.src}
              imageDescription={item.imageDescription}
              url={item.url}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div>

      {/* Mobile Applications */}
      {/* <div className="">
        <div className="w-full py-2 flex items-center justify-start">
          <h1 className="text-4xl md:text-3xl xl:text-4xl font-bold text-fontColor link-underline link-active">
            Mobile Applications
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-5 md:py-12 ">
          {mobileAppsProjects.map((item: any, index: number) => (
            <PortfolioCard
              key={index}
              name={item.name}
              color={item.color}
              image={item.image.src}
              imageDescription={item.imageDescription}
              url={item.url}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div> */}

      {/* Shopify Store */}
      {/* <div className=''>
        <div className="w-full py-2 flex items-center justify-start">
          <h1 className="text-4xl md:text-3xl xl:text-4xl font-bold text-fontColor link-underline link-active">Shopify Stores</h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-5 md:py-12 ">
          {
            shopifyStores.map((item: any, index: number) => (
              <PortfolioCard
                key={index}
                name={item.name}
                color={item.color}
                image={item.image.src}
                imageDescription={item.imageDescription}
                url={item.url}
                description={item.description}
                technologies={item.technologies} />
            ))
          }
        </div>
      </div> */}

      {/* Personal Projects */}
      {/* <div className="">
        <div className="w-full py-2 flex items-center justify-start">
          <h1 className="text-4xl md:text-3xl xl:text-4xl font-bold text-fontColor link-underline link-active">
            Personal Projects
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-5 md:py-12 ">
          {personalProjects.map((item: any, index: number) => (
            <PortfolioCard
              key={index}
              name={item.name}
              color={item.color}
              image={item.image.src}
              imageDescription={item.imageDescription}
              url={item.url}
              description={item.description}
              technologies={item.technologies}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}
