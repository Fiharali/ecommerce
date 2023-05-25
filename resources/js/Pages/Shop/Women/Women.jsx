import Menu from '@/Pages/Home/Menu/Menu'
import ShopCart from '@/Pages/Home/ShopCart/ShopCart'
import { Link, useForm, usePage } from '@inertiajs/react';
import './Womenn.css'
import React, { useEffect, useState } from 'react'
import Pagination from '@/Components/Pagination';
import Swal from 'sweetalert2'
import 'animate.css';

function Women({ auth, women, card, total }) {

    const { get, } = useForm({

    })
    // console.log(card)



    const { flash } = usePage().props





    return (
        <div className='containerrr'>

            <h1 className='p-2 bounce-in-top '> <img src="/imaggess/logo.jpg" width={69} alt="" /></h1>
            {
                auth.user && auth.user.isAdmin ? (
                    <div className='text-center p-3 '><button className=' text-center buttone animate__animated  animate__rubberBand animate__delay-1s' onClick={() => { get(route('add.women.clothes')) }} ><span>Add Women Clothes</span></button></div>
                ) : (
                    <div className='text-center p-3  womenClothes'><span> Women Clothes</span></div>

                )
            }
            <Menu auth={auth} />
            <ShopCart auth={auth} card={card} total={total} />

            <div className={` container p-4 mt-5 `}>
                <div className="row">

                    {
                        women.data.map((item) => {
                            return (
                                <>
                                    <div key={item.id} className="  d-flex justify-content-center col-xl-3 col-lg-4 col-md-6 col-sm-1 pb-1  pt-4" onClick={() => { get(route('women.details', item.id)) }} >
                                        <div className="figure m-3" onClick={() => { get(route('women.details', item.id)) }} >
                                            <img className="img" src={`products/${item.img1}`} alt="hg" />
                                            <div className="figcaption">
                                                <a className="title" href="#">{item.title}</a>
                                                <h5 className='p mt-3'>{item.price}$</h5>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        )
                    }
                    {/* <Pagination class="mt-6" links={women.links} /> */}
                </div>



            </div>






        </div>
    )
}

export default Women
