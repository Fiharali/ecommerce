import React, { useContext } from 'react'
import { Link, useForm } from '@inertiajs/react';
import { DarkMode } from './Home'
function Category() {
    const darkMode = useContext(DarkMode)
    const { get } = useForm({

    })

    const women = (e) => {
        e.preventDefault();
        get(route('women'));
    }
    return (
        <>
            <div className={`mb-2 ${darkMode ? 'page2dark' : 'page2'}`}>
                <div className="container ">
                    <div className="row px-xl-5 p-3">
                        <div className="col-lg-3 col-md-4 col-sm-6   pb-3 " onClick={()=>{get(route('women'))}} >
                            <div  className={`d-flex align-items-center overflow-hidden    ${darkMode ? 'cate-itemdark' : 'cate-item'}`}>
                                <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid" src="/images/women.png" alt="ff" />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Women Clothes</h6>
                                    <small style={{ color:"blue" }}>100 Products</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6   pb-3 ">
                            <div  className={`d-flex align-items-center overflow-hidden    ${darkMode ? 'cate-itemdark' : 'cate-item'}`}>
                                <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid" src="/images/man.png" alt />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Women Clothes</h6>
                                    <small style={{ color:"blue" }}>100 Products</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Category
