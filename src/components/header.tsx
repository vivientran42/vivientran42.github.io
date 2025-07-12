import Link from "next/link";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="flex relative justify-between items-center sticky top-0 bg-stone-50 px-10 py-2">
      <div className="shrink-0">
        <Link href={`/`}>
          <StarOutline className="absolute inset-x-10 inset-y-2 size-6 text-slate-600 hover:opacity-0 active:opacity-0" />
          <StarSolid className="absolute inset-x-10 inset-y-2 size-6 text-slate-600 opacity-0 hover:opacity-100 active:opacity-100 transition duration-150" />
        </Link>
      </div>
      <div className="justify-end space-x-10">
        <Link
          href={`/about`}
          className="text-right text-lg text-slate-600 hover:text-pink-500 hover:underline decoration-wavy transition duration-150"
        >
          MORE?
        </Link>
        <Link
          href={`/coding`}
          className="text-right text-lg text-slate-600 hover:text-pink-500 hover:underline decoration-wavy transition duration-150"
        >
          CODE
        </Link>
        <Link
          href={"mailto:vivientran42@gmail.com"}
          className="text-right text-lg text-slate-600 hover:text-pink-500 hover:underline decoration-wavy transition duration-150"
        >
          EMAIL
        </Link>
      </div>
    </header>
  );
}
