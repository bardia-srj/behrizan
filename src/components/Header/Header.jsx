import { useState, useContext } from "react";
import Styled from "./Header.module.css";
import { FiMenu } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { IP } from "../../App";
import { TabContext } from "../../Context";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoLayers } from "react-icons/io5";
import { IoIosBookmark } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { FiSliders } from "react-icons/fi";
import { IoChevronDown } from "react-icons/io5";
import { CiSquareCheck } from "react-icons/ci";
import { FaRegSquare } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

const Header = (Props) => {
    const { products, UpdateNewProducts, category, UpdateNameTab, handleTabClickWithScrollHeader } = useContext(TabContext);

    const FilterProduct = (id, name) => {
        const Pfilter = products;
        UpdateNewProducts(Pfilter.filter((item) => item.categoryId === id));
        UpdateNameTab(name);
        Props.OpenMenu();
       
    };

    const [productList, setProductList] = useState(false);
    const [filterList, setFilterList] = useState(false);
    const [material, setMaterial] = useState(false);
    const [color, setColor] = useState(false);
    const [model, setModel] = useState(false);
    const [used, setUsed] = useState(false);
    const [size, setSize] = useState(false);

    const OpenProductList = () => {
        setProductList(!productList);
    };

    const OpenFilterList = () => {
        setFilterList(!filterList);
    };

    const SetMaterial = () => {
        setMaterial(!material);
    };

    const SetColor = () => {
        setColor(!color);
    };

    const SetModel = () => {
        setModel(!model);
    };

    const SetUsed = () => {
        setUsed(!used);
    };

    const SetSize = () => {
        setSize(!size);
    };

    return (
        <>
            <div className={Styled.HeaderBox}>
                <div className={Styled.IconBox}>
                    <IoMenu className={`${Props.menu ? Styled.noneIcon : Styled.MenuIcon}`} onClick={Props.OpenMenu} />
                    <IoMdClose className={`${Props.menu ? Styled.MenuIcon : Styled.noneIcon}`} onClick={Props.OpenMenu} />
                </div>
                <div className={Styled.logo}>
                    <Link to="/home">
                        <img src="behrizandesign-logo 1.png" alt="" />
                    </Link>
                </div>
            </div>
            <div className={`${Styled.SideBar} ${Props.menu ? Styled.active : ""}`}>
                <div className={Styled.BoxSildebar}>
                    <div>
                        <div className={Styled.productsBox}>
                            <div>
                                <div className={Styled.productsBoxTitle} onClick={OpenProductList}>
                                    <div>
                                        <IoLayers className={Styled.IoLayers} />
                                        <span>محصولات</span>
                                    </div>
                                    <IoChevronDown />
                                </div>
                            </div>
                            <div className={`${productList ? Styled.ProductItemActive : Styled.ProductItem}`}>
                                <ul>
                                    {category?.map((item) => (
                                        <Link key={item.id} to="/productsitem">
                                            <li onClick={() => FilterProduct(item.id, item.name)}>{item.name}</li>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={Styled.Favorite}>
                            <IoIosBookmark />
                            <span>مورد علاقه</span>
                        </div>
                        <div className={Styled.Products}>
                            <IoGrid />
                            <Link to="/products">
                                <span>همه محصولات</span>
                            </Link>
                        </div>
                        <div className={Styled.Filters} onClick={OpenFilterList}>
                            <div>
                                <FiSliders />
                                <span>فیلتر ها</span>
                            </div>
                            <IoChevronDown />
                        </div>
                        <div className={`${filterList ? Styled.FilterListActive : Styled.FilterList}`}>
                            <div>
                                <span>متریال</span>
                                <CiSquareCheck onClick={SetMaterial} className={`${material ? Styled.imgT : Styled.noneIcon}`} />
                                <FaRegSquare onClick={SetMaterial} className={`${material ? Styled.noneIcon : Styled.imgF}`} />
                            </div>
                            <div>
                                <span>رنگ</span>
                                <CiSquareCheck onClick={SetColor} className={`${color ? Styled.imgT : Styled.noneIcon}`} />
                                <FaRegSquare onClick={SetColor} className={`${color ? Styled.noneIcon : Styled.imgF}`} />
                            </div>
                            <div>
                                <span>مات و براق</span>
                                <CiSquareCheck onClick={SetModel} className={`${model ? Styled.imgT : Styled.noneIcon}`} />
                                <FaRegSquare onClick={SetModel} className={`${model ? Styled.noneIcon : Styled.imgF}`} />
                            </div>
                            <div>
                                <span>کاربری</span>
                                <CiSquareCheck onClick={SetUsed} className={`${used ? Styled.imgT : Styled.noneIcon}`} />
                                <FaRegSquare onClick={SetUsed} className={`${used ? Styled.noneIcon : Styled.imgF}`} />
                            </div>
                            <div>
                                <span>سایز</span>
                                <CiSquareCheck onClick={SetSize} className={`${size ? Styled.imgT : Styled.noneIcon}`} />
                                <FaRegSquare onClick={SetSize} className={`${size ? Styled.noneIcon : Styled.imgF}`} />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={Styled.Guide}>
                            <IoMdHelpCircleOutline />
                            <span>راهنما</span>
                        </div>
                        <div className={Styled.LogOut}>
                            <IoIosLogOut />
                            <span>خروج</span>
                        </div>
                        <div className={Styled.TextBox2}>
                            <span className={Styled.text2}>ariisco</span>
                            <span className={Styled.text1}>powered by </span>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBar menu={Props.menu} />
        </>
    );
};

export default Header;