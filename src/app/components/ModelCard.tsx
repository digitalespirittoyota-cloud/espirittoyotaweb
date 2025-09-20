import Image from "next/image";
import { ModelCardProps } from "../utils/type";

export const ModelCard = ({ name, image, link }: ModelCardProps) => (
    <div className="flex flex-col items-center text-center">
        <a title={`${name}`} href={link} className="w-48 h-36 relative">
            <Image
                src={image}
                alt={name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

        </a>
        <p className="text-base font-semibold text-black">{name}</p>
    </div>
);
