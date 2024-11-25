"use client"

import React from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';

import html_css_js from '/assets/images/skills/html-css-js.svg';


export default function SkillBox({ name, image, link }: { name: string, image: string, link: string }) {
  return (
    <Tilt>
      <div
        className="flex justify-center items-center sm:w-[260px] w-full sm:h-[300px] h-[250px] rounded-xl backdrop-blur-sm bg-[#ffffff0a] shadow-[0_8px_30px_rgb(0,0,0,0.12)] scale-up">
        <Image
          className="w-[200px] h-fit"
          src={image}
          draggable="false"
          alt=""
          loading="lazy"
          width="888"
          height="442"
          decoding="async"
          data-nimg="1"
        />
        <div
          className="absolute bottom-5">{name}
        </div>
      </div>
    </Tilt>
  )
}
