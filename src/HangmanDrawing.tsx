
const head = (
  <div style={{
    width: "50px", 
    height: "50px", 
    borderRadius: "100%", 
    border: "10px solid black", 
    position: "absolute", 
    top: "50px", right: "-30 px"}}
/>
)

const body = (
  <div style={{
    width: "10px", 
    height: "100px", 
    background: "black",
    position: "absolute", 
    top: "120px"}}
/>
)

const rightArm = (
  <div style={{
    width: "100px", 
    height: "10px", 
    background: "black", 
    position: "absolute", 
    top: "150px", right: "-100 px",
    rotate: "30deg",
    }} 
    />
)

const leftArm = (
  <div style={{
    width: "100px", 
    height: "10px", 
    background: "black", 
    position: "absolute", 
    top: "150px", right: "100 px",
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
    top: "210px", right: "-90 px",
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
    top: "210px", right: "-90 px",
    rotate: "-30deg",
    }}
/>
)

export function HangmanDrawing() {
    return  <div style={{position: "relative"}}>
        {head}
        {body}
        {leftArm}
        {rightArm}
        {leftLeg}
        {rightLeg}
    

        <div style={{ position: "relative"}}>
            <div style={{height:"50px", width: "10px", background: "black", position: "absolute", top:0, right:0}} />
            <div style={{height:"10px", width:"200px", background:"black", marginLeft:"120px"}} />
            <div style={{height:"400px", width: "10px", background:"black", marginLeft:"120px"}} />
            <div style={{height:"10px", width:"250px", background: "black"}} />
        </div>
    </div> 
}  

export default HangmanDrawing