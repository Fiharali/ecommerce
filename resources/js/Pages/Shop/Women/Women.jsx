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
        <div className='containerr'>

            <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" /></h1>
            {
                auth.user && auth.user.isAdmin ? (
                    <div className='text-center p-3 '><button className=' text-center buttone animate__animated  animate__rubberBand animate__delay-1s' onClick={() => { get(route('add.all')) }} ><span>Add Women Clothes</span></button></div>
                ) : (
                    <div className='text-center p-3  h1'><span> Women Clothes</span></div>

                )
            }
            <Menu auth={auth} />
            <ShopCart auth={auth} card={card} total={total} />

            <div className={` container p-4 `}>
                <div className="row">
                    {/* <div className="col-lg-2 col-md-12">
                        <h2 className='h2'>Category</h2>
                        women <br />
                        man <br />
                        .... <br />

                    </div>
                    <div className="col-lg-1 col-md-12">

                        <div>

                            <div className="vl"></div>
                        </div>
                    </div> */}
                    {
                        women.data.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="  d-flex justify-content-center col-xl-3 col-lg-4 col-md-6 col-sm-1 pb-1  pt-4" onClick={() => { get(route('women.details', item.id)) }} >
                                        <div className="figure m-3" onClick={() => { get(route('women.details', item.id)) }} >
                                            <img className="img" src={`products/${item.img1}`} alt="hg" />
                                            <div className="figcaption">
                                                <a className="title" href="#">{item.title}</a>
                                                <h5 className='p'>{item.price}$</h5><h6 className="p"><del>{item.oldPrice}$</del></h6>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )
                    }



                    <Pagination class="mt-6" links={women.links} />





                </div>



            </div>






        </div>
    )
}

export default Women
