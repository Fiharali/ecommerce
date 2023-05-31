import { Link, useForm, usePage } from '@inertiajs/react';
import './Promotion.css'
import React, { useContext } from 'react'
import { DarkMode } from '../Home'

function Promotion() {
    const darkMode = useContext(DarkMode)
    return (
        <>
            <div className='container-fluid'>
                <div className='row mx-5 d-flex '>
                    <div className="col-lg-6 col-md-12 CollectionCard my-3 ">
                        <div className="row">
                            <div className="col-4 d-flex justify-content-between">
                                <img src="/imaggess/manCollection.png" alt="manCollection" className=' ' />
                            </div>
                            <div className="col-8 mt-8">
                                <h1 className='h2'>Promotion Man Products</h1>
                                <h4 className='h4 mt-4 text-danger'> 20% Of All Man Products</h4>
                                <Link className='btn btn_promotion ' href='/man-clothes'><span className={`p-3  ${darkMode ? 'text-white' : 'text-dark'}`}>Shop Now</span> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 CollectionCard my-3">
                        <div className="row">
                            <div className="col-4 d-flex justify-content-between">
                                <img src="/imaggess/womenColle.png" alt="manCollection" className=' ' />
                            </div>
                            <div className="col-8 mt-8">
                                <h1 className='h2'>Promotion Kids Products</h1>
                                <h4 className='h4 mt-4 text-danger'> 50% Of All Kids Products</h4>
                                <Link className='btn btn_promotion ' href='/women-clothes'><span className={`p-3  ${darkMode ? 'text-white' : 'text-dark'}`}>Shop Now</span> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 CollectionCard my-3">
                        <div className="row">
                            <div className="col-4 d-flex justify-content-between">
                                <img src="/imaggess/KidColl.png" alt="manCollection" className=' ' />
                            </div>
                            <div className="col-8 mt-8">
                                <h1 className='h2'>Promotion Women Products</h1>
                                <h4 className='h4 mt-4 text-danger'> 33% Of All Women Products</h4>
                                <Link className='btn btn_promotion ' href='/kid-clothes'><span className={`p-3  ${darkMode ? 'text-white' : 'text-dark'}`}>Shop Now</span> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Promotion
