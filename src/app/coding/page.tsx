import { CodeBracketSquareIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-start px-36 py-16 bg-stone-50">
      <h1 className="text-slate-600 text-4xl leading-relaxed">Tech stack</h1>
      <div className="flex items-center">
        <CodeBracketSquareIcon className="text-red-600 size-6 mr-1" />
        <p className="text-slate-600 text-lg mr-4">Golang</p>
        <CodeBracketSquareIcon className="text-orange-600 size-6 mr-1" />
        <p className="text-slate-600 text-lg mr-4">React</p>
        <CodeBracketSquareIcon className="text-yellow-500 size-6 mr-1" />
        <p className="text-slate-600 text-lg mr-4">Typescript</p>
      </div>
      <br></br>
      <br></br>

      <h1 className="text-slate-600 text-4xl leading-relaxed">Projects</h1>
    </main>
  );
}
