import React, { useState } from "react";

export default function NumberGame() {

    const options = Array.from(Array(50).keys())
    const [answer, setAnswer] = useState(options[Math.floor(Math.random() * options.length)])
    const [guessHighLow, setGuessHighLow] = useState("You can start guessing")
    const [guessNum, setGuessNum] = useState(0)
    
    function guessing() {
        setGuessNum(guessNum + 1)
    }

    function startGame() {
        setAnswer(options[Math.floor(Math.random() * options.length)])
        setGuessNum(0)
    }

    function playGame(option) {
        if (option == answer) {
            setGuessHighLow("You guessed correctly! It's " + (answer+1) + "! Generating new number");
            startGame()
        }
        else if (option > answer) {setGuessHighLow("Guess again! It's lower"); guessing()}
        else if (option < answer) {setGuessHighLow("Guess again! It's higher"); guessing()}
        console.log(guessNum)
    }
    

    return (
        <div>
            <div className="py-8 text-lg md:text-2xl font-bold border-black flex justify-between">
                {guessHighLow}! Currently {guessNum} guesses!
                <button className="" onClick={() => startGame()}>
                    Generate new number to guess
                </button>
            </div>
            <div className="grid grid-cols-10 pt-20">
                {options.map((option) => (
                    <button
                    key={option}
                    className="m-2 bg-green-300 px-8 py-4 text-xl font-bold border-green-800 border-2"
                    onClick={() => playGame(option)}
                    >
                    {option+1}
                    </button>
                ))}
            </div>
        </div>
    )
}