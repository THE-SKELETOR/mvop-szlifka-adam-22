import React from "react";
import Square from "./Square";

export default function Board({ board, handleSquareClick, handleResetClick, player, gameOver }) {
    const renderSquare = (index) => {
        return (
          <Square
            key={index}
            value={board[index]}
            onClick={() => handleSquareClick(index)}
            disabled={board[index] || gameOver}
          />
        );
      };

  return (
    <div className="flex flex-col w-screen h-screen">
      <div className="flex flex-row h-1/4 w-full py-2 md:py-6">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex flex-row h-1/4 w-full py-2 md:py-6">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="flex flex-row h-1/4 w-full py-2 md:py-6">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {gameOver && (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl">Game Over</h2>
          <p>{player === "X" ? "X" : "O"} Wins!</p>
          <button onClick={handleResetClick} className="font-black text-2xl border px-3 border-black">Reset</button>
        </div>
      )}
    </div>
  );
};