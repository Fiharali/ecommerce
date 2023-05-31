import './Brands.css'
import React, { useContext } from 'react'
import { DarkMode } from '../Home'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

function SampleNextArrow(props) {
    const darkMode = useContext(DarkMode)
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            {!darkMode && (<BsFillArrowRightCircleFill style={{ ...style, color: "#af9e79", fontSize: "20px" }} />)}
        </div>
    );
}

function SamplePrevArrow(props) {
    const darkMode = useContext(DarkMode)
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
            {!darkMode && (<BsFillArrowLeftCircleFill style={{ ...style, color: "#af9e79", fontSize: "20px" }} />)}

        </div>
    );
}
function Brands() {

    const darkMode = useContext(DarkMode)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        initialSlide: 1,
        className: "center",
        centerMode: true,
        rows: 2,
        slidesPerRow: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    rows: 2,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    rows: 1,
                    slidesPerRow: 1,
                    className: "center",
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                    rows: 1,
                    slidesPerRow: 1,
                    className: "center",
                    centerMode: true,

                }
            }
        ]
    }
    return (
        <div className='mt-5   container'>
            <div className="row mx-5">
                <Slider {...settings}>
                    <div className='brands'>
                        <img src="/imaggess/nike.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/samsung.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/acer.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/addidas.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/apple.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/gucci.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/hm.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/huawei.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/lenovo.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/lg.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/mi.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/puma.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/nike.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/sony.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/versache.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/zara.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/nike.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/nokia.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/one.png" alt="" srcset="" />
                    </div>
                    <div className='brands'>
                        <img src="/imaggess/micro.png" alt="" srcset="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Brands
