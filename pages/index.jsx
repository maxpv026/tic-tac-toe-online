import { useState } from "react";
import { GameInfo } from "../components/game";
import { GameField } from "../components/game";
import { GameTitle } from "../components/game";
import Header from "../components/header/header";
import { useGameState } from "../components/game/use-game-state";
import { GameSymbol } from "../components/game/game-symbol";
import { UiModal } from "../components/uikit/ui-modal";
import { UiButton } from "../components/uikit/ui-button";

export default function HomePage() {
  const [playersCount] = useState(4);
  const {
    cells,
    currentMove,
    handleCellClick,
    nextMove,
    winnerSequence,
    handlePlayerTimeOver,
    winnerSymbol,
  } = useGameState(playersCount);
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto w-max">
        <GameTitle playersCount={playersCount} />

        <GameInfo
          playersCount={playersCount}
          className="mt-4"
          currentMove={currentMove}
          isWinner={!!winnerSymbol}
          onPlayerTimeOver={handlePlayerTimeOver}
        />
        {winnerSymbol && (
          <div className="my-6">
            <GameSymbol symbol={winnerSymbol} />
          </div>
        )}
        <UiModal width="md" isOpen={winnerSymbol}>
        <UiModal.Header>Game is Over!</UiModal.Header>
        <UiModal.Body>
          <div className="text-sm"> Winner: <span className="text-teal-600">Pidor228</span></div>
            
        </UiModal.Body>
        <UiModal.Footer>
          <UiButton size= "md" variant = "outline">Back</UiButton>
          <UiButton size= "md" variant = "primary">Play Again!</UiButton>
          
        </UiModal.Footer>
        </UiModal>
        <GameField
          className="mt-6"
          cells={cells}
          currentMove={currentMove}
          nextMove={nextMove}
          handleCellClick={handleCellClick}
          winnerSequence={winnerSequence}
          winnerSymbol={winnerSymbol}
        />
      </main>
    </div>
  );
}
