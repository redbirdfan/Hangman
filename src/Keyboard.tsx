import styles from "./keyboard.module.css"

type keyboardProps = {
    activeLetters: string[], 
    inactiveLetters: string[], 
    addGuessedLetter: (letter:string) => void
}
const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]
export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter} : keyboardProps) {
    return (
        <div style={{display:"grid", 
                    gridTemplateColumns:"repeat(auto-fit, minmax(75px, 1fr))", 
                    gap:".5rem"
                }}            
        >
            {letters.map(key=> {
                const isActive = activeLetters.includes(key);
                const isInActive = inactiveLetters.includes(key)

                return (
                    <button onClick ={()=> addGuessedLetter(key)} 
                            className={`${styles.btn} ${isActive ? styles.active : ""} ${isInActive ? styles.inactive : ""}
                            `} 
                            key={key}>{key}</button>
                )
            })}
        </div>
    )
}