import { useState } from "react";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json"

const HEAD = (
  <div style={{
    width: "50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "50px", right: "-30 px"}}
/>
)

function App() {
  const [wordToGuess, setWordToGuess] = useState( () => {
        return words[Math.floor(Math.random()*words.length)]
  })
    
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  
  return 
    <div 
      style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center"
          }}
      >
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          Lose Win
        </div>
        <HangmanDrawing />
        <HangmanWord />
        <Keyboard />
      </div>
}

export default App