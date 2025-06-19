export default function Project({
  heading,
  description,
  footnote,
}: {
  heading: string;
  description: string;
  footnote: string;
}) {
  return (
    <div className="w-full h-full col-span-1 border border-slate-600 p-10 items-center hover:bg-white hover:bg-opacity-25 hover:shadow-lg">
      <h1 className="text-slate-600 text-left text-xl leading-relaxed">
        {heading}
      </h1>
      <h1 className="text-slate-600 text-left text-md leading-relaxed mb-4">
        {description}
      </h1>
      <h1 className="text-slate-600 text-left text-xs leading-relaxed">
        {footnote}
      </h1>
    </div>
  );
}
