import React, { useContext } from 'react'
import { DarkMode } from '../Home'
import './Slide.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Slide1() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    ////////////////////////////////
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }
    // ////////////////////////////////////////////

    const darkMode = useContext(DarkMode)

    return (
        <>
            <div className={`  px-5 mb-lg-5  ${darkMode ? 'slideDark' : ' slide'}`}>
                <Slider {...settings}>
                    <div>
                        <img src="/images/bg5.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/images/bg5.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/images/bg7.jpg" alt="" srcset="" />
                    </div>
                    <div>
                        <img src="/images/bg5.jpg" alt="" srcset="" />
                    </div>


                </Slider>

            </div>
            <hr />



        </>


    )
}

export default Slide1
