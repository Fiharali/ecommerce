import Menu from '@/Pages/Home/Menu'
import ShopCart from '@/Pages/Home/ShopCart'
import { Link, useForm } from '@inertiajs/react';
import './Women.css'
import React, { useContext } from 'react'
import { DarkMode } from '@/Pages/Home/Home'

function Women({auth}) {
    const darkMode = useContext(DarkMode)
    const { get } = useForm({

    })
    // console.log(auth.user.name)
    return (
        <>
            <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" srcset="" /></h1>
            <Menu />
            <ShopCart />

            <div className={` container p-4 ${darkMode ? 'page2dark' : 'page2'}`}>
                <div className="row">
                    <div className="col-lg-2 col-md-12">
                        <h2 className='h2'>Category</h2>
                        ffhjhhhh <br />
                            hhggbr <br />

                    </div>
                    <div className="col-lg-1 col-md-12">

                        <div>

                            <div className="vl"></div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1  pt-4" onClick={()=>{get(route('women.details',1))}} >
                        <div className="product-item bg-light mb-4" >
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="images/women.png" alt="hg"  />
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1 pt-4"  onClick={()=>{get(route('women.details',2))}}>
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100 " src="images/bg3.png" alt="hg"   />
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1 pt-4">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="images/man.png" alt="hg"   />
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1 pt-4">
                        <div className="product-item bg-light mb-4">
                            <div className="product-img position-relative overflow-hidden">
                                <img className="img-fluid w-100" src="images/m2.png" alt="hg"  />
                            </div>
                            <div className="text-center py-4">
                                <a className="h6 text-decoration-none text-truncate" href>Product Name Goes Here</a>
                                <div className="d-flex align-items-center justify-content-center mt-2">
                                    <h5>$123.00</h5><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>



            </div>






        </>
    )
}

export default Women
