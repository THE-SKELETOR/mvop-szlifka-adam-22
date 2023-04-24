import React, { useState } from "react";
import Board from "./board";

export default function Stuff() {
    const [player, setPlayer] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (board) => {
    const winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPositions.length; i++) {
      const [a, b, c] = winPositions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    if (!board.includes(null)) {
      return "tie";
    }

    return null;
  };

  const handleSquareClick = (index) => {
    if (board[index] || gameOver) {
      return;
    }

    let newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);

    const winner = checkWinner(newBoard);
    if (winner) {
      setGameOver(true);
      return;
    }

    setPlayer(player === "X" ? "O" : "X");
  };

  const handleResetClick = () => {
    setPlayer("X");
    setBoard(Array(9).fill(null));
    setGameOver(false);
  };

      return (
        <div className="flex justify-center flex-grow-0 bg-blue-100">
            <Board
                board={board}
                handleSquareClick={handleSquareClick}
                handleResetClick={handleResetClick}
                player={player}
                gameOver={gameOver}
            />
        </div>
      );
}
