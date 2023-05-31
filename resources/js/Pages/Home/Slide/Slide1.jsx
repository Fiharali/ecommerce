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
       
    };



    const darkMode = useContext(DarkMode)

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12 d-flex justify-center ">
                        <span className='p-5 m-5 '>
                            <h1 className='minititle'>
                                AliFiharStore
                            </h1>

                            <p className='minipara'>
                                here you can fing any thing's
                            </p>
                            <p className='minipara'>
                                here you can fing any thing's
                            </p>
                        </span>
                    </div>
                    <div className="col-lg-7 col-md-12">
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
                    </div>
                </div>
            </div>
            <hr />



        </>


    )
}

export default Slide1
