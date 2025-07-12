export default function Skill({
  colour,
  text,
}: {
  colour: string;
  text: string;
}) {
  return (
    <div className="flex items-center mb-1 col-span-1">
      <div
        className={`w-2 sm:w-4 h-2 sm:h-4 mr-3 rounded-full ${colour}`}
      ></div>
      <p className="text-slate-600 text-base sm:text-lg mr-4">{`${text}`}</p>
    </div>
  );
}
