import { Link } from "react-router-dom"
import Styled from "./Card.module.css"
import { IP } from "../../App";

const Card = (Props) =>{
  
    return(
        <>
        <Link to={`/product/${Props.id}`}>
        <div className={Styled.Card}>
            <img src={`${IP}/assets/${Props.imageUrl}`} alt="" />
            <span>{Props.name}</span>
            
        </div>
        </Link>
        </>
    )
}

export default Card