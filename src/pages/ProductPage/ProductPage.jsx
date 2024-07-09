import ColorItem from "../../components/ColorItem/ColorItem";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Styled from "./ProductPage.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IP } from "../../App";
import { useParams } from "react-router-dom";
import "@google/model-viewer";
import { CiBookmark } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";


const ProductPage = () => {
    function startAR() {
        const modelViewer = document.querySelector('model-viewer');
        modelViewer.activateAR();
    }

    const { id } = useParams();
    const [productData, setProductData] = useState();
    const [menu, setMenu] = useState(false);
    const OpenMenu = () => {
        setMenu(!menu);
    };
    const CloseMenu = () => {
        setMenu(false);
    };
    const Navigate = useNavigate();

    const fetchdata = async () => {
        const result = await fetch(`${IP}/items/products/${id}`);
        if (result.ok) {
            const json = await result.json();
            setProductData(json.data);
         
        }
    };

    useEffect(() => {
        fetchdata();
    }, [id]);

    return (
        <>
            <Header menu={menu} OpenMenu={OpenMenu} />
            <div className={Styled.ProductPage} onClick={CloseMenu}>
                <div className={Styled.PageTitle}>
                    <div>
                        <span>{productData?.name}</span>
                    </div>
                    <div>
                        {/* <img src="" alt="" className={Styled.BackButton} onClick={() => Navigate(-1)} /> */}
                        <IoChevronBack onClick={() => Navigate(-1)} className={Styled.BackButton}/>
                    </div>
                </div>
                <div className={Styled.PageMain}>
                    <div className={Styled.box1}>
                        <model-viewer
                            style={{ width: '100%', height: '100%' }}
                            alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
                            src={`${IP}/assets/${productData?.glbModel}`}
                            poster={`${IP}/assets/${productData?.posterImage}`}
                            shadow-intensity="1"
                            camera-controls
                            touch-action="pan-y"
                            ar
                            ar-modes="scene-viewer webxr quick-look"
                            ar-scale="auto"
                        ></model-viewer>
                    </div>
                    <div className={Styled.box2}>
                        <div className={Styled.SaveLogo}>
                        <CiBookmark />
                        </div>
                        <div className={Styled.Button} onClick={() => startAR()}>
                            <span>مشاهده در محیط </span>
                            <IoChevronBack />
                        </div>
                        <div className={Styled.InfoLogo}>
                        <CiCircleInfo />
                        </div>
                    </div>
                    <div className={Styled.box3}>
                        <ColorItem />
                        <ColorItem />
                        <ColorItem />
                        <ColorItem />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;