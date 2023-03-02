import CardBack from "./cardback";
import CardFront from "./cardfront";

export default function Card({sideCard}) {

    return <div style={{textAlign:"center",color:"red",border:"solid",borderColor:"purple",borderWidth:"5px",width:"18rem"}}>
    {sideCard}
       </div>
}