import { useState } from 'react';

export default function Game() {
    const [winLoss, setWinLoss] = useState("can press any button to play!");

        function playRPSGame(input) {
            const pcChoices = ["rock", "paper", "scissors"];
            const pcInput = pcChoices[Math.floor(Math.random() * pcChoices.length)];
            console.log(pcInput)
    
            if (input == pcInput) setWinLoss ("tie")
            else {
                if (input == "rock") {
                    if (pcInput == "paper") setWinLoss("lost")
                    else setWinLoss("win")
                }
                else if (input == "paper") {
                    if (pcInput == "rock") setWinLoss("win")
                    else setWinLoss("lost")
                }
                else if (input == "scissors") {
                    if (pcInput == "paper") setWinLoss("win")
                    else setWinLoss("lost")
                }
            }
        }
    

    return (
        <div className="pt-32">
            <div className="flex justify-around px-52">
                <button className="py-26 px-3 border-4 text-4xl font-bold border-red-800 bg-red-300" onClick={() => playRPSGame("rock")}>
                    Rock
                </button>
                <button className="py-6 px-3 border-4 text-4xl font-bold border-red-800 bg-red-300" onClick={() => playRPSGame("paper")}>
                    Paper
                </button>
                <button className="py-6 px-3 border-4 text-4xl font-bold border-red-800 bg-red-300" onClick={() => playRPSGame("scissors")}>
                    Scissors
                </button>
            </div>
            <div className="flex justify-center pt-32 text-6xl font-bold italic">
                You {winLoss}!
            </div>
        </div>
    )
}