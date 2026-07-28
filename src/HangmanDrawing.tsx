

const head = (
  <div style={{
    width: "50px", 
    height: "50px", 
    borderRadius: "100%", 
    border: "10px solid black", 
    position: "absolute", 
    top: "50px", 
    right: "-30px"}}
/>
)

const body = (
  <div style={{
    width: "10px", 
    height: "100px", 
    background: "black",
    position: "absolute", 
    top: "120px",
    right: "0px"}}
/>
)

const rightArm = (
  <div style={{
    width: "100px", 
    height: "10px", 
    background: "black", 
    position: "absolute", 
    top: "150px", 
    right: "-90px",
    rotate: "-30deg",
    }} 
    />
)

const leftArm = (
  <div style={{
    width: "100px", 
    height: "10px", 
    background: "black", 
    position: "absolute", 
    top: "150px", 
    right: "0px",
    rotate: "30deg",
    }} 
    />
)

const rightLeg = (
  <div style={{
    width: "100px", 
    height: "10px",  
    background: "black", 
    position: "absolute", 
    top: "235px", 
    right: "-90px",
    rotate: "30deg",
    }}
/>
)

const leftLeg = (
  <div style={{
    width: "100px", 
    height: "10px",  
    background: "black", 
    position: "absolute", 
    top: "235px",
    right: "0px", 
    rotate: "-30deg",
    }}
/>
)

const bodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
  numberOfGuesses: number
}
export function HangmanDrawing( {numberOfGuesses} : HangmanDrawingProps) {
    return  (
        
    <div style={{position: "relative"}}>  
        {bodyParts.slice(0, numberOfGuesses)}
      
            <div style={{height:"50px", width: "10px", background: "black", position: "absolute", top:0, right:0}} />
            <div style={{height:"10px", width:"200px", background:"black", marginLeft:"120px"}} />
            <div style={{height:"400px", width: "10px", background:"black", marginLeft:"120px"}} />
            <div style={{height:"10px", width:"250px", background: "black"}} />
        </div> 
    )
}  

export default HangmanDrawing