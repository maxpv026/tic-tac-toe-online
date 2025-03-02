import { ArrowLeftIcon } from "./icons/arrow-leftlicon";
import { HistoryIcon } from "./icons/history-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";

import Link from "next/link";

export function GameTitle({playersCount}) {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-xs -mb-0.5 text-teal-600 hover:text-teal-500 transition-colors"
      >
        <ArrowLeftIcon />
        Back
      </Link>
      <h1 className="text-4xl leading-tight ">Tic-Tac-Toe</h1>
      <div className="flex items-center gap-3 text-slate-400 text-xs leading-tight">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />{playersCount}
        </div>
        <div className="flex items-center gap-1">
          <HistoryIcon />1
        </div>
      </div>
    </div>
  );
}
