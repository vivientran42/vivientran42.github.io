import { Tangerine } from "next/font/google";
import { Parisienne } from "next/font/google";

const inter = Tangerine({ weight: ["400"], subsets: ["latin"] });
const paris = Parisienne({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col grid grid-cols-12 items-center px-24 py-32 bg-stone-50 bg-gradient-radial">
      <div className="col-start-2	col-span-6	">
        <h1
          className={`${inter.className} text-left text-5xl text-slate-600 object-bottom	`}
        >
          {" "}
          <span className="relative">
            <span
              className={`${paris.className} text-left text-[36px] text-slate-600`}
            >
              E
            </span>
          </span>
          verything you need to know about
        </h1>
        <div className="grid grid-cols-2 gap-x-2 min-w-min border border-slate-600 p-10">
          <h1 className="col-span-2 font-black text-left text-8xl text-slate-600 mb-2 hover:text-yellow-300 transition duration-500">
            Vivien Tran
          </h1>
          <h1 className="col-span-1 font-mono text-left text-md text-slate-600 mb-1">
            {" "}
            Role: Software Engineer
          </h1>
          <h1 className="col-span-1 font-mono text-left text-md text-slate-600 mb-1">
            {" "}
            Home: Melbourne, AUS
          </h1>
          <h1 className="col-span-1 font-mono text-left text-md text-slate-600 mb-1">
            {" "}
            <a
              href="https://www.linkedin.com/in/vivientran42/"
              target="_blank"
              className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
            >
              LinkedIn{" "}
            </a>
            &{" "}
            <a
              href="https://github.com/vivientran42"
              target="_blank"
              className="hover:text-pink-400 hover:underline decoration-wavy transition duration-150"
            >
              GitHub
            </a>
          </h1>
          <h1 className="col-span-1 font-mono text-left text-md text-slate-600 mb-1">
            {" "}
            Star sign: Cancer
          </h1>
        </div>
      </div>
    </main>
  );
}
