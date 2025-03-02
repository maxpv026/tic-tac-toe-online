import { CrossIcon } from "./icons/cross";
import { ZeroIcon } from "./icons/zero";
import { TriangleIcon } from "./icons/triangle";
import { SquareIcon } from "./icons/square";
import { GAME_SYMBOLS } from "./constants";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ZERO]: ZeroIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
