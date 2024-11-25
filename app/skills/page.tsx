import React from "react";
import SkillBox from "./components/SkillBox";

// Images
// Basics
import html_css_js from "../assets/skills/html-css-js.svg";
import ts from "../assets/skills/ts.png";
import js from "../assets/skills/javascript-logo.svg";
import python from "../assets/skills/python.png";
import shopify from "../assets/skills/shopify.png";
// Frameworks
import reactjs from "../assets/skills/reactjs.svg";
import nextjs from "../assets/skills/nextjs.svg";
import vuejs from "../assets/skills/vuejs.png";
import flutterimg from "../assets/skills/flutter.png";
// Backend
import phpimg from "../assets/skills/php.webp";
import nodejs from "../assets/skills/nodejs.png";
import expressjs from "../assets/skills/express.png";
import laravel from "../assets/skills/laravel.png";
// Database
import mysql from "../assets/skills/mysql.svg";
import mongodb from "../assets/skills/mongodb.svg";
import sqlite from "../assets/skills/sqlite.png";

export default function Skills() {
  return (
    <div className="w-full min-h-screen md:px-20">
      <div className="w-full mx-auto flex flex-col gap-5 md:gap-8 p-2 px-5 md:px-0 py-10 container font-ProductSans">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold ">Overview</h1>
        </div>
        <div className="w-full md:w-[80%]">
          <p>
            {` I'm a skilled Frontend Web Developer with experience in JavaScript and expertise in frameworks/library like Next.js, React.js, Tailwind, Bootstap and MUI. I'm a quick learner
            and collaborate closely with clients to create efficientm scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to
            life!`}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-5xl md:text-5xl font-semibold">
              Technical Skills
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-10">
              {/* Basic */}
              <div>
                <h1 className="text-3xl md:text-4xl font-llight">
                  Programming Languages
                </h1>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5">
                  <SkillBox
                    link={"https://www.w3schools.com/html/"}
                    name={"JavaScript"}
                    image={js.src}
                  />
                  <SkillBox
                    link={"https://www.typescriptlang.org/"}
                    name={"TypeScript"}
                    image={ts.src}
                  />
                  <SkillBox
                    link="https://www.python.org/"
                    name={"Python"}
                    image={python.src}
                  />
                  {/* <SkillBox link='https://www.python.org/' name={'Shopify'} image={shopify.src} /> */}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h1 className="text-3xl md:text-4xl font-llight ">
                  Frameworks
                </h1>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5">
                  <SkillBox
                    link="https://react.dev/"
                    name={"React.js"}
                    image={reactjs}
                  />
                  <SkillBox
                    link="https://nextjs.org/"
                    name={"Next.js"}
                    image={nextjs}
                  />
                  {/* <SkillBox
                    link="https://vuejs.org/"
                    name={"Vue.js"}
                    image={vuejs.src}
                  />
                  <SkillBox
                    link="https://flutter.dev/"
                    name={"Flutter"}
                    image={flutterimg.src}
                  /> */}
                </div>
                <div className="h-10"></div>
              </div>

              {/* Backend */}
              <div>
                <h1 className="text-3xl md:text-4xl font-llight ">Backend</h1>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5">
                  {/* <SkillBox
                    link="https://www.php.net/"
                    name={"PHP"}
                    image={phpimg.src}
                  /> */}
                  <SkillBox
                    link="https://nodejs.org/en"
                    name={"Node.js"}
                    image={nodejs.src}
                  />
                  <SkillBox
                    link="https://expressjs.com/"
                    name={"Express.js"}
                    image={expressjs.src}
                  />
                  {/* <SkillBox
                    link="https://laravel.com/"
                    name={"Laravel"}
                    image={laravel.src}
                  /> */}
                </div>
              </div>

              {/* Database */}
              <div>
                <h1 className="text-3xl md:text-4xl font-llight ">Database</h1>
                <div className="flex flex-col md:flex-row md:flex-wrap gap-10 p-2 py-5">
                  <SkillBox
                    link="https://www.mysql.com/"
                    name={"MySQL"}
                    image={mysql}
                  />
                  <SkillBox
                    link="https://www.mongodb.com/"
                    name={"MongoDB"}
                    image={mongodb}
                  />
                  <SkillBox
                    link="https://www.sqlite.org/index.html"
                    name={"SQLite"}
                    image={sqlite.src}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
