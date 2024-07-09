import Styled from "./Producs.module.css"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"
import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import { useState, useEffect, useContext } from "react"
import { IP } from "../../App"
import { TabContext } from "../../Context"
const Products = () => {

    const { products  } = useContext(TabContext);
    


    const [menu, setMenu] = useState(false)

    const OpenMenu = () => {
        setMenu(!menu)
    }
    const CloseMenu = () => {
        setMenu(false)
    }

    return (
        <div className={Styled.ProductsPage}>

            <Header menu={menu} OpenMenu={OpenMenu} />
            <div className={`${menu ? Styled.ProductsBoxBlurr : Styled.ProducsBox}`} onClick={CloseMenu}>
                <div className={Styled.pageTitle}>
                    <span>محصولات</span>
                    <Link to="/home">
                        <img src="arrow-left.svg" alt="" />
                    </Link>
                </div>
                <div className={Styled.Cards}>
                    {/* <Card />

                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card /> */}
                    {products?.map((item) => (
                        // <li key={item.id}>{item.name}</li>
                        // <Link key={item.id} to="/producPage"><li onClick={UpdateActiveTab(item.id)} >{item.name}</li></Link>
                        <Card key={item.id} name={item.name} imageUrl={item.posterImage} id={item.id} />
                    ))}

                </div>
                <Footer />
            </div>
        </div>

    )
}
export default Products