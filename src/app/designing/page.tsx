import Skill from "@/components/skill";
import Project from "@/components/project";
import { Tangerine } from "next/font/google";
import { Parisienne } from "next/font/google";

const tangerine = Tangerine({ weight: ["400"], subsets: ["latin"] });
const parissienne = Parisienne({ weight: ["400"], subsets: ["latin"] });

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-start px-36 py-16 bg-stone-50">
      <h1
        className={`${tangerine.className} text-left text-4xl sm:text-5xl text-slate-600 object-bottom	`}
      >
        {" "}
        <span className="relative">
          <span
            className={`${parissienne.className} text-left text-[25px] sm:text-[38px] text-slate-600`}
          >
            F
          </span>
        </span>
        amiliar with:
      </h1>
      <div className="flex w-full space-x-8 items-center">
        <Skill colour="bg-red-300" text="Adobe Photoshop" />
        <Skill colour="bg-orange-300" text="Adobe Illustrator" />
        <Skill colour="bg-yellow-300" text="Adobe InDesign" />
      </div>{" "}
      <br></br>
      <br></br>
      <h1 className="text-slate-600 text-4xl leading-relaxed mb-4">Projects</h1>
      <div className="w-full grid grid-cols-3 gap-4">
        {/* <Project
          heading="GALLIVANTING AROUND & AROUND EUROPE"
          description="Encapsulating my first trip to Europe."
          footnote="ZINE"
        />
        <Project
          heading="LOT'S WIFE"
          description="Designing Monash University's student magazine."
          footnote="BRANDING, PUBLICATION"
        /> */}
      </div>
    </main>
  );
}
