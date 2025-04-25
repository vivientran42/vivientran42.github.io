import Skill from "@/components/skill";
import Project from "@/components/project";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-start px-36 py-16 bg-stone-50">
      <h1 className="text-slate-600 text-4xl leading-relaxed">
        Things I'm familiar with:
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
        <Project
          heading="🌍 GALLIVANTING AROUND & AROUND EUROPE"
          description="Sharing my Europe trip."
          tech="ZINE"
        />
        <Project
          heading="📒 LOT'S WIFE"
          description="For Monash University's student magazine."
          tech="BRANDING, PUBLICATION"
        />
        <Project
          heading="🕶️ THE MATRIX"
          description="Honouring one of my favourite movies."
          tech="POSTER"
        />
        <Project
          heading="🔮 SIGNS!"
          description="Graphic for a jumper."
          tech="TYPOGRAPHY"
        />
        <Project
          heading="🔥 CCA"
          description="For one of Monash University's tech student societies."
          tech="PUBLICATION, SOCIAL MEDIA"
        />
        <Project
          heading="🌈 DIVERSIT"
          description="For one of Monash University's tech student societies."
          tech="SOCIAL MEDIA"
        />
      </div>
    </main>
  );
}
