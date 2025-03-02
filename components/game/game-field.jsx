import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./use-game-state";

export function GameField({ className, cells, currentMove, nextMove, handleCellClick }) {
 
  const actions = (
    <>
      <UiButton className="w32" variant="primary" size="md">
        Draw
      </UiButton>
      <UiButton className="w32" variant="outline" size="md">
        Give Up
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            onClick={() => {
              handleCellClick(index);
            }}
          >
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3">
      <div className="mr-auto">
        <div className="flex gap-1 items-center text-xl leading-tight font-semibold">
          Step: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex position-relative"></div>
        <div className="flex gap-1 items-center text-xs text-slate-400 leading-tight">
          Next: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-5">
      {children}
    </div>
  );
}
