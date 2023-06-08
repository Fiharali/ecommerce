import React, { useContext } from 'react'
import { Link, useForm } from '@inertiajs/react';
import { DarkMode } from '../Home'
import './Category.css'
import Slider from "react-slick";
function Category() {
    const darkMode = useContext(DarkMode)
    const { get } = useForm({

    })

    const women = (e) => {
        e.preventDefault();
        get(route('women'));
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        initialSlide: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    }

    return (
        <>
            <div className='text-center'> <span className='bigTitle text-center p-2'> --Category--</span></div>
            <div >
                <div className="container mt-5">
                    <div className="row px-xl-5 p-3">


                        <Slider {...settings}>
                            <div className=" px-4  pb-3 " onClick={() => { get(route('women')) }} >
                                <div className={`d-flex align-items-center overflow-hidden    ${darkMode ? 'cate-itemdark' : 'cate-item'}`}>
                                    <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid" src="/imaggess/w13.jpg" alt="ff" />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>Women Clothes</h6>
                                        <small style={{ color: "blue" }}>100 Products</small>
                                    </div>
                                </div>
                            </div>
                            <div className=" px-4   pb-3  " onClick={() => { get(route('man')) }} >
                                <div className={`d-flex align-items-center overflow-hidden    ${darkMode ? 'cate-itemdark' : 'cate-item'}`}>
                                    <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid" src="/images/man.png" alt />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>Man Clothes</h6>
                                        <small style={{ color: "blue" }}>100 Products</small>
                                    </div>
                                </div>
                            </div>
                            <div className=" px-4   pb-3 " onClick={() => { get(route('kid')) }}>
                                <div className={`d-flex align-items-center overflow-hidden    ${darkMode ? 'cate-itemdark' : 'cate-item'}`}>
                                    <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid" src="/imaggess/kid.jpg" alt />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>Kids Clothes</h6>
                                        <small style={{ color: "blue" }}>100 Products</small>
                                    </div>
                                </div>
                            </div>
                            <div className=" px-4   pb-3 " onClick={() => { get(route('phone')) }}>
                                <div className={`d-flex align-items-center overflow-hidden    ${darkMode ? 'cate-itemdark' : 'cate-item'}`}>
                                    <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid" src="/imaggess/phone.jpg" alt />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>Phone </h6>
                                        <small style={{ color: "blue" }}>100 Products</small>
                                    </div>
                                </div>
                            </div>
                            <div className=" px-4   pb-3 " onClick={() => { get(route('pc')) }}>
                                <div className={`d-flex align-items-center overflow-hidden    ${darkMode ? 'cate-itemdark' : 'cate-item'}`}>
                                    <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid" src="/imaggess/pc.jpg" alt />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>Pc </h6>
                                        <small style={{ color: "blue" }}>100 Products</small>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Category
