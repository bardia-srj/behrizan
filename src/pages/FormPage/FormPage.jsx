import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Styled from "./FormPage.module.css"
import { FaRegUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { CiMap } from "react-icons/ci";
import { useState } from "react";
import { LuPhone } from "react-icons/lu";
const FormPage = () => {

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        phonenumber: "",
        address: ""
    });


    const phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    const emailPattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

    const handleChange = (e) => {
        const { name, value } = e.target;


        setFormData({
            ...formData,
            [name]: value
        })
        // Perform validation based on input name

    }


    const handleSubmit = (e) => {
        e.preventDefault()


        if (formData.name.trim() !== '' && formData.lastname.trim() !== '' && formData.email.trim() !== '' && formData.phonenumber.trim() !== '' && formData.address.trim() !== '') {

        }
        else {

        }
        if (!phonePattern.test(formData.phonenumber)) {
            alert("phone number is not valid")
            return false
        }
        if (!emailPattern.test(formData.email)) {
            alert("email is not valid")
            return false
        }


    }



    return (

        <>
            <div className={Styled.FromPage}>
                <div className={Styled.FormTitle}>
                    <div className={Styled.box1}>
                        <FaRegUserCircle />
                        <span>اطلاعات کاربری</span>
                    </div>
                    <div className={Styled.box2}>
                        <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
                    </div>
                </div>
                <div className={Styled.inputbox}>
                    <form onSubmit={handleSubmit}>
                        <div className={Styled.inputline1}>
                            <div className={Styled.inputitem1}>
                                <input name="name" type="text" placeholder="نام" value={formData.name}
                                    onChange={handleChange} />
                                <CiUser className={Styled.icon} />
                            </div>
                            <div className={Styled.inputitem1}>
                                <input name="lastname" type="text" placeholder="نام خانوادگی" value={formData.lastname}
                                    onChange={handleChange} />
                                <CiUser className={Styled.icon} />
                            </div>
                        </div>
                        <div className={Styled.inputline2}>
                            <div className={Styled.inputitem2}>
                                <input name="email" type="text" placeholder="ایمیل" value={formData.email}
                                    onChange={handleChange} />
                                <HiOutlineMail />
                            </div>
                        </div>
                        <div className={Styled.inputline2}>
                            <div className={Styled.inputitem2}>
                                <input name="phonenumber" type="number" placeholder="شماره تماس" value={formData.phonenumber}
                                    onChange={handleChange} />
                                <LuPhone />
                            </div>
                        </div>
                        <div className={Styled.inputline2}>
                            <div className={Styled.inputitem2}>
                                <textarea name="address" id="" cols="30" rows="10" placeholder="ادرس" value={formData.address}
                                    onChange={handleChange}></textarea>
                                <CiMap />
                            </div>
                        </div>

                        {/* <span>ورود </span>
                        <img src="chevron-left (1).svg" alt="" /> */}
                        <button className={Styled.Button} type="submit">
                            <span>ورود </span>
                            <img src="chevron-left (1).svg" alt="" />
                        </button>

                    </form>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default FormPage