import Item from "../Item/Item";
import Styled from "./ItemList.module.css";
import { useState, useEffect, useContext } from "react";
import { IP } from "../../App";
import { TabContext } from "../../Context";
import { Link } from "react-router-dom";

const ItemList = () => {
    const { newProducts, category, handleTabClick, tabBorderRef, tabRefs, containerRef, activeTab, nameTab, products, UpdateNewProducts } = useContext(TabContext);
    const [items, setItems] = useState([]);

    const fetchData = async () => {
        try {
            const result = await fetch(`${IP}/items/products`);
            if (result.ok) {
                const json = await result.json();
                setItems(json.data);
            } else {
                // Handle error
            }
        } catch (error) {
            // Handle error
        }
    };

    const a = (index, id) => {
        const Pfilter = products;
        UpdateNewProducts(Pfilter.filter((item) => item.categoryId === index));
        handleTabClick(id);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // افزودن این useEffect برای فراخوانی تابع a هنگام بارگذاری اولیه صفحه
    useEffect(() => {
        if (category.length > 0 && products.length > 0) {
            a(category[0].id, 0); // فرض کنید id دسته‌بندی اول 0 است، اگر نیاز بود تغییر دهید
        }
    }, [category, products]);

    return (
        <div className={Styled.ItemListBox}>
            <div className={Styled.tabs} ref={containerRef}>
                {category?.map((item, index) => (
                    <Link key={item.id} to="/productsitem">
                        <span
                            ref={(el) => (tabRefs.current[index] = el)}
                            className={`${Styled.Tab} ${activeTab === index ? Styled.ActiveTab : ""}`}
                            onClick={() => a(item.id, index)}
                        >
                            {item.name}
                        </span>
                    </Link>
                ))}
                <div className={Styled.TabBorder} ref={tabBorderRef}></div>
            </div>

            <div className={Styled.content}>
                {newProducts?.map((item) => (
                    <Item key={item.id} name={item.name} imageUrl={item.posterImage} id={item.id} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;