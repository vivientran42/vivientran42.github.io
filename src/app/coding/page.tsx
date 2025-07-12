"use client";

import Skill from "@/components/skill";
import Project from "@/components/project";
import { Tangerine } from "next/font/google";
import { Parisienne } from "next/font/google";

const tangerine = Tangerine({ weight: ["400"], subsets: ["latin"] });
const parissienne = Parisienne({ weight: ["400"], subsets: ["latin"] });

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-start px-20 md:px-36 py-16 bg-stone-50">
      <h1
        className={`${tangerine.className} text-left text-4xl sm:text-5xl text-slate-600 object-bottom	`}
      >
        {" "}
        <span className="relative">
          <span
            className={`${parissienne.className} text-left text-[25px] sm:text-[35px] text-slate-600`}
          >
            F
          </span>
        </span>
        amiliar with:
      </h1>
      <div className="lg:flex grid grid-cols-2 w-full justify-between items-center">
        <Skill colour="bg-red-300" text="Golang" />
        <Skill colour="bg-orange-300" text="gRPC" />
        <Skill colour="bg-yellow-300" text="React" />
        <Skill colour="bg-green-300" text="Next.js" />
        <Skill colour="bg-blue-300" text="TypeScript" />
        <Skill colour="bg-purple-300" text="Tailwind CSS" />
        <Skill colour="bg-fuchsia-300" text="Docker" />
      </div>
      <br></br>
      <br></br>
      <h1 className="text-slate-600 text-2xl sm:text-4xl leading-relaxed mb-4">
        Projects
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Project
          heading="YOU ARE RICH"
          description="A digital journalling Chrome extension."
          footnote="VITE, INDEXEDB"
          onClick={() =>
            window.open(
              "https://github.com/vivientran42/you-are-rich",
              "_blank",
            )
          }
        />
      </div>
    </main>
  );
}
