import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ItemList from "../../components/ItemList/ItemList"
import Styled from "./ProductsItem.module.css"
import { useState } from "react"
const ProductsItem = () =>{
    const [menu, setMenu] = useState(false)
    const OpenMenu = () => {
        setMenu(!menu)
    }
    const CloseMenu = () =>{
        setMenu(false)
    }
    return(
        <>
        <Header  menu={menu} OpenMenu={OpenMenu}/>
        <div className={`${menu ? Styled.ProductsBoxBlurr : Styled.ProducsBox}`} onClick={CloseMenu}>
<ItemList />
        </div>
        <Footer />
        </>
    )
}

export default ProductsItem