import Styled from "./Login.module.css"
import { Link } from "react-router-dom"
const LoginPage = () => {
    return (
        <div className={Styled.LoginPage}>
            <div className={Styled.box1}>
                <img src="frame 31.png" alt="" />
            </div>
            <div className={Styled.box2}>
                <div className={Styled.LogoBox}>
                    <img src="behrizandesign-logo 1.png" alt="" />
                </div>
                <div className={Styled.TextBox}>
                    <h1>
                        Enjoy the real
                    </h1>
                    <h1>
                        experience in your
                    </h1>
                    <h1>
                        home
                    </h1>
                </div>
                <div className={Styled.ButtonBox}>
                    <Link to="/home">
                    <div className={Styled.Button}>
                        <span>ورود </span>
                        <img src="chevron-left (1).svg" alt="" />
                    </div>
                    </Link>
                </div>
                <div className={Styled.TextBox2}>
                  
                    <span className={Styled.text2}> ariisco</span>
                    <span className={Styled.text1}>powered by  </span>
                </div>
            </div>
        </div>
    )
}

export default LoginPage