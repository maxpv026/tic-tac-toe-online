import Image from "next/image";
import AvatarSrc from "./avatar.png";
import clsx from "clsx";

export default function Profile({ className, name, rating, avatar = AvatarSrc }) {
  return (
    <div
      className={clsx(
        " flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors",
        className,
      )}
    >
      <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
      <div className="overflow-hidden">
        <div className=" text-lg leading-tight truncate">{name}</div>
        <div className="text-slate-400 text-xs leading-tight">rating:{rating}</div>
      </div>
    </div>
  );
}
