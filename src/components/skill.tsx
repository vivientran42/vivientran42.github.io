export default function Skill({
  colour,
  text,
}: {
  colour: string;
  text: string;
}) {
  return (
    <div className="flex items-center">
      <div className={`w-4 h-4 mr-3 rounded-full ${colour}`}></div>
      <p className="text-slate-600 text-lg mr-4">{`${text}`}</p>
    </div>
  );
}
