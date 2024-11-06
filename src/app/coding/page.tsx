import Skill from "@/components/skill";
import Project from "@/components/project";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-start px-36 py-16 bg-stone-50">
      <h1 className="text-slate-600 text-4xl leading-relaxed">
        Things I'm familiar with:
      </h1>
      <div className="flex w-full justify-between items-center">
        <Skill colour="bg-red-300" text="Golang"/>
        <Skill colour="bg-orange-300" text="gRPC"/>
        <Skill colour="bg-yellow-300" text="React"/>
        <Skill colour="bg-green-300" text="Next.js"/>
        <Skill colour="bg-blue-300" text="TypeScript"/>
        <Skill colour="bg-purple-300" text="Tailwind CSS"/>
        <Skill colour="bg-fuchsia-300" text="Docker"/>
      </div>
      <br></br>
      <br></br>
      <h1 className="text-slate-600 text-4xl leading-relaxed mb-4">Projects</h1>
      <div className="w-full grid grid-cols-3 gap-4">

      <Project heading="💻 PERSONAL WEBSITE" description="To share more about myself and showcase work." tech="NEXT.JS, TAILWIND CSS"/>
      <Project heading="👀 IN THE WORKS..." description="" tech=""/>
      </div>
    </main>
  );
}
