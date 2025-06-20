import Image from "next/image";
import { ReactNode } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Inline({
  text,
  bullet,
  bulletSize,
  imageSrc,
  imageAlt,
}: {
  text: ReactNode;
  bullet: boolean;
  bulletSize?: "small";
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (bullet && imageSrc && imageAlt) {
    return (
      <div className="flex items-center space-x-4">
        <StarIcon className="shrink-0 text-slate-600 size-3 md:size-4 ml-6 mb-2 md:mb-4" />
        {text}
        <Image
          src={imageSrc}
          width={50}
          height={50}
          alt={imageAlt}
          className="hover:scale-550 hidden md:block"
          priority={true}
          placeholder="empty"
        />
      </div>
    );
  } else if (!bullet && imageSrc && imageAlt) {
    return (
      <div className="flex items-center space-x-4">
        {text}
        <Image
          src={imageSrc}
          width={50}
          height={50}
          alt={imageAlt}
          className="hover:scale-550 hidden md:block"
          priority={true}
          placeholder="empty"
        />
      </div>
    );
  } else if (bullet && !bulletSize && !imageSrc && !imageAlt) {
    return (
      <div className="flex items-center space-x-4">
        <StarIcon className="shrink-0 indent-2 text-slate-600 size-3 md:size-4 ml-6 mb-2 md:mb-4" />
        {text}
      </div>
    );
  } else if (bullet && bulletSize == "small" && !imageSrc && !imageAlt) {
    return (
      <div className="flex items-center space-x-4">
        <StarIcon className="shrink-0 indent-2 text-slate-600 size-2 md:size-3 ml-4 mb-1 mt-1" />
        {text}
      </div>
    );
  } else {
    return <div className="flex items-center space-x-4">\ {text}</div>;
  }
}
