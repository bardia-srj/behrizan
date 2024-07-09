import { Link } from "react-router-dom"
import Styled from "./Item.module.css"
import { IP } from "../../App";
const Item = (Props) => {

    return (
        <div className={Styled.Card}>
            <div className={Styled.Box1}>
                <img src={`${IP}/assets/${Props.imageUrl}`} alt="" />
            </div>
            <div className={Styled.Box2}>
                <div className={Styled.TitleBox}>
                    <span>{Props.name}</span>
                </div>
                <div className={Styled.ButtonBox}>
                <Link to={`/product/${Props.id}`}>

                    <div className={Styled.Button} >
                        <span>مشاهده </span>
                        <img src="chevron-left (1).svg" alt="" />
                    </div>
                </Link>
                    
                    <div className={Styled.imgBox}>
                        <img src="frame 40.png" alt="" />
                        <img src="frame 39.png" alt="" />
                        <img src="frame 38.png" alt="" />
                        <img src="frame 37.png" alt="" />
                        <img src="frame 36.png" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item