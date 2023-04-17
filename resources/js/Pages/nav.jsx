import React from 'react'
import './nav.css'
// import Carousel from 'carousel-react-rcdev'
import Carousel from 'better-react-carousel'

import 'animate.css';

function nav() {
    return (


        <>


            <div className='page1'>
                <h1 className='p-4'> MyLoGO</h1>
                <div>
                    <button className="p-4  position-absolute top-0 end-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                        <i className="fa-solid fa-bars fa-xl" style={{ color: '#151515' }} /></button>
                    <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">this is menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" >
                                <i className="fa-solid fa-xmark fa-xl" style={{ color: '#151515' }} />
                            </button>
                        </div>
                        <div className="offcanvas-body">

                        </div>
                    </div>
                </div>

                <div>
                    <button className="p-4 mt-5  position-absolute top-0 end-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling2" aria-controls="offcanvasScrolling2">
                        <i className="fa-solid fa-cart-shopping fa-xl" style={{ color: '#151515' }} /></button>
                    <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling2" aria-labelledby="offcanvasScrollingLabel2">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasScrollingLabel2">this is shop cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" >
                                <i className="fa-solid fa-xmark fa-xl" style={{ color: '#151515' }} />
                            </button>
                        </div>
                        <div className="offcanvas-body">

                        </div>
                    </div>
                </div>

                <div className="container-fluid   overflow-hidden">
                    <div className="row">
                        <div className="col-md-4 half1 p-6 mt-40 mx-auto">
                            <div className="animate__animated  animate__bounceInLeft ">
                                <h1 className='h1'> store , fashion, .....</h1>
                                <h2 className='h3 text-bg-info px-3'>Here you can find any thing</h2>
                                <br />
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit <br /></p>
                                <br />
                                <button className='buttonn form-control'>get start</button>
                            </div>
                        </div>
                        <div className="col-md-6   p-6 mt-5 offset-md-1 animate__animated  animate__bounceInRight">
                            <div id="carouselExampleControls" className="carousel slide  media1 " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="images/bg1.png" className="d-block w-100" alt="images/bg1.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/bg2.png" className="d-block w-100" alt="images/bg1.png" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/bg3.png" className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='page2'>
                <div className="container mx-auto">
                    <div className="row mx-auto ">
                        <div className="col-lg-3 mx-auto  animate__animated animate__bounceInUp   ">
                            <div className="card p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-sack-dollar fa-2xl" style={{ color: '#151515' }} />
                                    <h5 className="card-title mt-3">money back garantie</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mx-auto    animate__animated animate__bounceInUp  animate__delay-1s">
                            <div className="card p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-truck-fast fa-2xl" style={{ color: '#151515' }}></i>
                                    <h5 className="card-title mt-3">free <br /> delivery</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mx-auto  animate__animated animate__bounceInUp  animate__delay-2s">
                            <div className="card p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-phone-volume fa-2xl" style={{ color: '#151515' }} />
                                    <h5 className="card-title mt-3">always <br /> support</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 mx-auto  animate__animated animate__bounceInUp  animate__delay-3s">
                            <div className="card p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-file-shield fa-2xl" style={{ color: '#151515' }} />
                                    <h5 className="card-title mt-3"> secure <br /> payment</h5>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


        </>


    )
}

export default nav
