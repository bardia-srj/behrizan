import Styled from "./SearchBar.module.css"
import { CiSearch } from "react-icons/ci";

const SearchBar = (Props) =>{
  
    return(
        <div className={`${Props.menu ? Styled.SearchBarBoxBlurred : Styled.SearchBarBox}`}>
<div className={Styled.inputBox}>
<input type="text" placeholder="جستجو"/>
<CiSearch />
</div>
        </div>
    )
}

export default SearchBar