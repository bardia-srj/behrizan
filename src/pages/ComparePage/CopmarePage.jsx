import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Styled from "./ComparePage.module.css"
import { useNavigate } from "react-router-dom"
const ComparePage = () => {
    const Navigate = useNavigate()
    return (
        <>
            <Header />
            <div className={Styled.ComparePage}>
                <div className={Styled.ComarePageTitle}>
                    <div>
                        <span>مقایسه محصولات</span>
                    </div>
                    <div>
                        <img src="arrow-left.svg" alt="" className={Styled.BackButton} onClick={() => Navigate(-1)} />
                    </div>
                </div>
                <div className={Styled.PageMain}>
                    <div className={Styled.images}>
                        <div className={Styled.img1}>
                            <img src="frame 444.png" alt="" />
                            <img src="frame 444.png" alt="" />
                        </div>
                        <div className={Styled.titles}>
                            <div className={Styled.title}>
                                <span>E1700AR دستگیره آلومینیومی</span>
                            </div>
                            <div className={Styled.title}>
                                <span>E1700AR دستگیره آلومینیومی</span>
                            </div>
                        </div>
                        <div className={Styled.main}>
                            <div className={Styled.box1}>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>جنس:</span>
                                    <span>الومینیوم</span>
                                </div>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>رنگ :</span>
                                    <span>طلایی مات</span>
                                </div>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>سایز :</span>
                                </div>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>کاربری :</span>
                                </div>
                            </div>
                            <div className={Styled.box1}>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>جنس:</span>
                                    <span>الومینیوم</span>
                                </div>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>رنگ :</span>
                                    <span>طلایی مات</span>
                                </div>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>سایز :</span>
                                </div>
                                <div className={Styled.line}>
                                    <span className={Styled.titleName}>کاربری :</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ComparePage