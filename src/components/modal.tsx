import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950 bg-opacity-40 flex items-center justify-center z-50">
      <div className="relative bg-stone-50 rounded-xl shadow-lg px-10 py-10 max-w-xl w-full">
        <button onClick={onClose} className="absolute top-4 right-4">
          <XMarkIcon className="size-4 text-slate-600 hover:text-pink-500 hover:scale-125 transition duration-150" />
        </button>
        {children}
      </div>
    </div>
  );
}
