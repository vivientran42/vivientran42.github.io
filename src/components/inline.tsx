import Image from "next/image";
import { ReactNode } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Inline({
  text,
  bullet,
  imageSrc,
  imageAlt,
}: {
  text: ReactNode;
  bullet: boolean;
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (bullet && imageSrc && imageAlt) {
    return (
      <div className="flex items-center space-x-4">
        <StarIcon className="text-slate-600 size-4 ml-6" />
        {text}
        <Image
          src={imageSrc}
          width={50}
          height={50}
          alt={imageAlt}
          className="hover:scale-500"
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
          className="hover:scale-500"
          priority={true}
          placeholder="empty"
        />
      </div>
    );
  } else if (bullet && !imageSrc && !imageAlt) {
    return (
      <div className="flex items-center space-x-4">
        <StarIcon className="indent-2	text-slate-600 size-4 ml-6" />
        {text}
      </div>
    );
  } else {
    return <div className="flex items-center space-x-4">\ {text}</div>;
  }
}
