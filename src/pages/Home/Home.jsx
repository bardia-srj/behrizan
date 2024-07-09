import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ItemList from "../../components/ItemList/ItemList"
import SearchBar from "../../components/SearchBar/SearchBar"
import { useState } from "react"
const Home = () => {
    const [menu, setMenu] = useState(false)
    const OpenMenu = () => {
        setMenu(!menu)
    }
    
   
    return (
<>
<Header menu={menu} OpenMenu={OpenMenu}/>
        <div>

            <ItemList />

        </div>
        <Footer />
</>
    )
}

export default Home