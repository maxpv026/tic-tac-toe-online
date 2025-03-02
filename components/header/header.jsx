import Image from "next/image";
import LogoSrc from "./logo.svg";
import Profile from "../profile/profile";
import ArrowDownIcon from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export default function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={LogoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w44" variant="primary" size="lg">
        Play
      </UiButton>

      <button className="ml-auto flex items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors">
        <Profile name ="Player123" rating="1230" />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
