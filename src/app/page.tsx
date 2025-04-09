import { Tangerine } from "next/font/google";
import { Parisienne } from "next/font/google";

const tangerine = Tangerine({ weight: ["400"], subsets: ["latin"] });
const parissienne = Parisienne({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col grid grid-cols-12 items-center px-24 py-32 bg-stone-50 bg-gradient-radial">
      <div className="col-start-1	col-span-12 lg:col-start-2 lg:col-span-6	">
        <h1
          className={`${tangerine.className} text-left text-4xl sm:text-5xl text-slate-600 object-bottom	`}
        >
          {" "}
          <span className="relative">
            <span
              className={`${parissienne.className} text-left text-[30px] sm:text-[36px] text-slate-600`}
            >
              E
            </span>
          </span>
          verything you need to know about
        </h1>
        <div className="grid sm:grid-cols-2 gap-x-2 min-w-min border border-slate-600 p-10">
          <h1 className="sm:col-span-2 font-semibold text-left text-4xl sm:text-6xl md:text-7xl xl:text-8xl text-slate-600 mb-2 hover:text-yellow-300 transition duration-500">
            Vivien Tran
          </h1>
          <h1 className="sm:col-span-1 font-mono text-left text-sm xl:text-base text-slate-600 mb-1">
            Role: Software Engineer
          </h1>
          <h1 className="sm:col-span-1 font-mono text-left text-sm xl:text-base text-slate-600 mb-1">
            Home: London, UK
          </h1>
          <h1 className="sm:col-span-1 font-mono text-left text-sm xl:text-base text-slate-600 mb-1">
            LinkedIn: {" "}
            <a
              href="https://www.linkedin.com/in/vivientran42/"
              target="_blank"
              className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
            >
              vivientran42
            </a>
          </h1>
          <h1 className="col-span-1 font-mono text-left text-sm xl:text-base text-slate-600 mb-1">
            GitHub: {" "}
            <a
              href="https://github.com/vivientran42"
              target="_blank"
              className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
            >
              vivientran42
            </a>
          </h1>
        </div>
      </div>
    </main>
  );
}
