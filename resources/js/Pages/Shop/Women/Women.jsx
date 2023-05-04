import Menu from '@/Pages/Home/Menu'
import ShopCart from '@/Pages/Home/ShopCart'
import { Link, useForm, usePage } from '@inertiajs/react';
import './Women.css'
import React, { useEffect, useState } from 'react'
import Pagination from '@/Components/Pagination';
import Swal from 'sweetalert2'
import 'animate.css';

function Women({ auth, women, card, total }) {

    const { get, } = useForm({

    })
    console.log(card)



    const { flash } = usePage().props





    return (
        <>

            <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" /></h1>
            {
                auth.user && auth.user.isAdmin ? (
                    <div className='text-center p-3 '><button className='btn btn-primary text-center px-6' onClick={() => { get(route('add.all')) }} >add women clothes</button></div>
                ) : (
                    null
                )
            }
            <Menu auth={auth} />
            <ShopCart auth={auth} card={card} total={total} />

            <div className={` container p-4 `}>
                <div className="row">
                    <div className="col-lg-2 col-md-12">
                        <h2 className='h2'>Category</h2>
                        women <br />
                        man <br />
                        .... <br />

                    </div>
                    <div className="col-lg-1 col-md-12">

                        <div>

                            <div className="vl"></div>
                        </div>
                    </div>
                    {
                        women.data.map((item) => {
                            return (
                                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 pb-1  pt-4" onClick={() => { get(route('women.details', item.id)) }} >

                                    <div className="product-item bg-light mb-4 animate__animated animate__zoomIn" >
                                        <div className="product-img position-relative overflow-hidden">
                                            <img className="img-fluid w-100 " src={`products/${item.img1}`} alt="hg" />
                                        </div>
                                        <div className="text-center py-4">
                                            <a className="h6 text-decoration-none text-truncate" href="#">{item.title}</a>
                                            <div className="d-flex align-items-center justify-content-center mt-2">
                                                <h5>{item.price}$</h5><h6 className="text-muted ml-2"><del>{item.oldPrice}$</del></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }


                    <Pagination class="mt-6" links={women.links} />





                </div>



            </div>






        </>
    )
}

export default Women
