"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

// Firebase
import { initializeAnalytics } from "./lib/firebase";

export default function Home() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <div className="w-full  relative flex flex-col">
      <div className="w-full mx-auto container grid grid-cols-1 md:grid-cols-2 md:px-10 xl:px-20 py-10 md:gap-32">
        {/* First Grid */}
        <div className="flex flex-col gap-10 items-start justify-start  p-5 font-ProductSans text-fontColor">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold font-ProductSans ">
              Muhammad Sadiq Anwer Khan
            </h1>
            <p className="text-xl md:text-xl lg:text-3xl font-semibold">
              Software Engineer
            </p>
            <div>
              <p className="text-lg  lg:text-3xl text-[#6B7385]">
                A passionate individual who always thrives to work on end to end
                products which develop sustainable and highly scalable social
                and technical systems to create impact.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-2xl text-fontColor2">Contact Me: </p>
              </div>
              <div className="flex flex-row px-2 gap-5">
                {/* Gmail Icon */}
                <div
                  onClick={() => window.open("mailto:sadiqanwerkhan@gmail.com")}
                  className="rounded-full bg-fontColor w-auto p-2 cursor-pointer"
                >
                  <Image
                    className="w-6 h-6"
                    src="/assets/images/icons/gmail.png"
                    width={500}
                    height={500}
                    alt="Gmail Icon"
                  />
                </div>

                {/* LinkedIn Icon */}
                <div
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/sadiqanwerkhan/")
                  }
                  className="rounded-full bg-white w-auto p-1 cursor-pointer"
                >
                  <Image
                    className="w-8 h-8"
                    src="/assets/images/icons/linkedin.png"
                    width={500}
                    height={500}
                    alt="LinkedIn Icon"
                  />
                </div>

                {/* Github Icon */}
                <div
                  onClick={() =>
                    window.open("https://www.github.com/sadiqanwerkhan")
                  }
                  className="rounded-full bg-white w-auto p- cursor-pointer"
                >
                  <Image
                    className="w-10 h-10"
                    src="/assets/images/icons/github.png"
                    width={500}
                    height={500}
                    alt="Github Icon"
                  />
                </div>

                {/* Instagram Icon */}
                {/* <div
                  onClick={() =>
                    window.open("https://www.instagram.com/natnaelengeda")
                  }
                  className="rounded-full bg-white w-auto p-1 cursor-pointer"
                >
                  <Image
                    className="w-8 h-8"
                    src="/assets/images/icons/instagram.png"
                    width={500}
                    height={500}
                    alt="Instagram Icon"
                  />
                </div> */}
              </div>

              {/* Projects */}
              <div className="px-2 py-5">
                <Link
                  href="/portfolio"
                  className="px-10 py-3 rounded-xl border-4 border-fontColor2 hover:text-white text-ProductSans hover:bg-[#14213D] hover:border-[#14213D]"
                >
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Grid */}
        <div className=" flex items-start justify-center py-10">
          <Image
            className="w-[80%] md:w-full"
            src="/assets/images/cool_pic.svg"
            width={500}
            height={500}
            alt="Programmer Image"
          />
        </div>
      </div>
      <div className="flex items-center justify-center font-ProductSans py-2">
        <p>
          <span className="text-fontColor2">Made by </span>&#128512;{" "}
          <span className="font-bold">Muhammad Sadiq Anwer Khan</span>
        </p>
      </div>
    </div>
  );
}
