export function HangmanWord() {
    const word = "test"
    const guessedLetters = ["t"]
    return (
    <div style={{
        display:"flex",
        gap: ".25em",
        fontSize:"6rem",
        textTransform:"uppercase",
        }}
    >    
        {word.split("").map((letter, index) => (
            <span 
                style={{borderBottom: "4px solid black"}} key={index}>
            <span style={{visibility: guessedLetters.includes(letter) ? "visible" : "hidden", }}>{letter}</span>
        </span>
    ))}

    </div>
    )
}