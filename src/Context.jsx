import React, { createContext, useState, useEffect, useRef } from 'react';
import { IP } from './App';
export const TabContext = createContext();

export const TabProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [category, setCategory] = useState([]);
    const [nameTab, setNameTab] = useState("");
    const tabRefs = useRef([]);
    const tabBorderRef = useRef(null);
    const containerRef = useRef(null);
    let indexName = null;

    const UpdateNewProducts = (data) => {
        setNewProducts(data);
    };

    const fetchProduct = async () => {
        try {
            const result = await fetch(`${IP}/items/products`);
            if (result.ok) {
                const json = await result.json();
                setProducts(json.data);
            } else {
                // Handle error
            }
        } catch (error) {
            // Handle error
        }
    };

    const fetchData = async () => {
        try {
            const result = await fetch(`${IP}/items/categories`);
            if (result.ok) {
                const json = await result.json();
                setCategory(json.data);
            }
        } catch (error) {
            // Handle error
        }
    };

    const UpdateActiveTab = (data) => {
        setActiveTab(data);
    };

    const UpdateNameTab = (name) => {
        setNameTab(name);
    };

    useEffect(() => {
        if (tabRefs.current[activeTab]) {
            tabRefs.current[activeTab].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            setActiveTab(0);
        }
    }, [activeTab]);

    const handleTabClickWithScroll = (index) => {
        if (tabRefs.current[index]) {
            tabRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };
    const handleTabClickWithScrollHeader = (index) => {
        if (tabRefs.current[index]) {
            tabRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    };

    const handleTabId = (indexName) => {
        const selectedTab = tabRefs.current[indexName];
        if (selectedTab && tabBorderRef.current) {
            tabBorderRef.current.style.width = `${selectedTab.offsetWidth}px`;
            tabBorderRef.current.style.left = `${selectedTab.offsetLeft}px`;
        }
    };

    const handleTabClick = (id) => {
        handleTabClickWithScroll(id);
        setActiveTab(id);
        const selectedTab = tabRefs.current[id];
        if (selectedTab && tabBorderRef.current) {
            tabBorderRef.current.style.width = `${selectedTab.offsetWidth}px`;
            tabBorderRef.current.style.left = `${selectedTab.offsetLeft}px`;
        }

    };

    useEffect(() => {
        if (nameTab && category.length > 0) {
            indexName = category.findIndex(cat => nameTab === cat.name);
        }
        handleTabId(indexName);
        handleTabClickWithScrollHeader(indexName)
    }, [nameTab, category]);

    useEffect(() => {
        fetchProduct();
    }, []);

    useEffect(() => {
        if (tabRefs.current[0] && tabBorderRef.current) {
            tabBorderRef.current.style.width = `${tabRefs.current[0].offsetWidth}px`;
            tabBorderRef.current.style.left = `${tabRefs.current[0].offsetLeft}px`;
            setActiveTab(0);
        }
    }, [category]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <TabContext.Provider value={{ activeTab, UpdateActiveTab, products, UpdateNewProducts, newProducts, category, tabBorderRef, containerRef, tabRefs, nameTab, UpdateNameTab, handleTabId, handleTabClick, handleTabClickWithScroll, handleTabClickWithScrollHeader }}>
            {children}
        </TabContext.Provider>
    );
};