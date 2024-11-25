"use client";

import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import NavLinks from "./components/NavLinks";
import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";

export default function Header() {
  return (
    <header className="z-40 w-full h-20 md:h-24 flex flex-row gap-20 items-center justify-center fixed md:px-20 glassy-header">
      <div className="container flex flex-row gap-20 items-center justify-between px-5 md:px-0 ">
        <div className="transition duration-300  md:px-5 md:py-1  flex flex-row gap-2 items-center justify-center">
          <div className="w-full">
            <Image
              priority={false}
              className="w-12 md:w-12 h-auto"
              src="/assets/images/square-s.svg"
              width={500}
              height={500}
              alt="Logo"
            />
          </div>
          <h1 className="hidden md:block link-underline text-3xl font-bold font-VT323 text-black"></h1>
        </div>

        <div className="hidden lg:block px-10 py-3 ">
          <ul className="flex flex-row items-center gap-10 font-semibold">
            <NavLinks
              href="/"
              exact
              className="normal-header link-underline hover:line-height-normal"
            >
              Home
            </NavLinks>
            <NavLinks
              href="/skills"
              exact
              className="normal-header link-underline hover:line-height-normal"
            >
              Skills
            </NavLinks>
            <NavLinks
              href="/portfolio"
              exact
              className="normal-header link-underline hover:line-height-normal"
            >
              Portfolio
            </NavLinks>
            {/* <NavLinks
              href="/contact"
              exact
              className="normal-header link-underline hover:line-height-normal"
            >
              Contact
            </NavLinks> */}
            <NavLinks
              href="/resume"
              exact
              className="transition px-5 py-4 bg-[#017f6c] rounded-lg text-white hover:bg-transparent border hover:border-[#017f6c] hover:text-[#017f6c] outline-none"
            >
              Resume
            </NavLinks>
          </ul>
        </div>

        <div className="lg:hidden block">
          <Dropdown>
            <DropdownTrigger>
              <div className="w-12 h-12 glassy-header rounded-full flex items-center justify-center">
                <IconMenu2 size={25} />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
              <DropdownItem key="home" href="/">
                Home
              </DropdownItem>
              <DropdownItem key="skills" href="/skills">
                Skills
              </DropdownItem>
              <DropdownItem key="portfolio" href="/portfolio">
                Portfolio
              </DropdownItem>
              <DropdownItem key="contact" href="/contact">
                {" "}
                Contact
              </DropdownItem>
              <DropdownSection>
                <DropdownItem key="resume" href="/resume">
                  <div className="w-full flex flex-row items-center justify-center bg-[#017f6c]  py-3 rounded-lg">
                    <p className="text-white">Resume</p>
                  </div>
                </DropdownItem>
              </DropdownSection>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
