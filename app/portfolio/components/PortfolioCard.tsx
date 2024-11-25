"use client"
import Image from 'next/image';

// Icons
import { CiLink } from 'react-icons/ci';
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiExpress,
  SiShopify,
} from "react-icons/si";

// import { RiNextjsFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

export default function PortfolioCard({
  name,
  image,
  imageDescription,
  url,
  description,
  color,
  technologies }:
  {
    name: string,
    image: string,
    imageDescription: string,
    url: string,
    description: string,
    color: string,
    technologies: any
  }) {

  const showIcons = (icon: string) => {
    if (icon === "reactjs") {
      return <FaReact className="text-3xl text-[#149ECA]" />
    } else if (icon === "vue.js") {
      return <FaVuejs className="text-3xl text-[#42B883]" />
    } else if (icon === "nodejs") {
      return <FaNodeJs className="text-3xl text-green-700" />
    } else if (icon == "ts") {
      return <SiTypescript className="text-3xl text-[#3178C6]" />
    } else if (icon == "tailwindcss") {
      return <SiTailwindcss className="text-3xl text-[#38BDF8]" />
    } else if (icon == "expressjs") {
      return <SiExpress className="text-3xl text-green-700" />
    } else if (icon == "flutter") {
      return <SiFlutter className="text-3xl text-[#0468D7]" />
    } else if (icon == "dart") {
      return <SiDart className="text-3xl text-[#03589B]" />
    } else if (icon == "firebase") {
      return <SiFirebase className="text-3xl text-[#FFCC32]" />
    } else if (icon == 'shopify') {
      return <SiShopify className="text-3xl text-[#7AB55C]" />
    } else if (icon == 'nextjs') {
      return <TbBrandNextjs className="text-3xl text-[#000000]" />
    }

  }

  return (
    <div
      onClick={() => {
        window.open(url)
      }}
      className="w-full h-[21rem] md:h-[25.5rem] normshad flex flex-col rounded-xl overflow-hidden shadow-md item-transition cursor-pointer bg-white">
      {/* Image */}
      <div className="w-full h-full overflow-hidden">
        <Image
          className="w-full h-full object-cover"
          src={image}
          alt={imageDescription}
          width={500}
          height={500}
        />
      </div>

      {/* Description */}
      <div className="flex flex-col gap-1 md:gap-2 bg-white px-5 py-5 border-t border-gray-200">
        <div className="flex flex-row gap-2 items-center">
          <h1
            style={{
              color: color,
            }}
            className={`text-2xl font-bold`}>{name}</h1>
          <CiLink
            onClick={() => {
              window.open(url)
            }}
            style={{
              color: color,
              WebkitTextStroke: `1px ${color}`,
              WebkitTextFillColor: 'transparent',
            }}
            className={`text-3xl font-bold cursor-pointer`} />
        </div>
        <p className="text-sm text-fontColor">{description}</p>
      </div>

      {/* Technologies Used */}
      <div className='px-5 py-1 md:py-2 flex flex-row gap-3'>
        {
          technologies.map((items: any) => (
            <span
              key={items}
              className="flex flex-row gap-2 items-center justify-start bg-white ">
              {showIcons(items)}
            </span>
          ))
        }
      </div>
    </div>
  )
}
