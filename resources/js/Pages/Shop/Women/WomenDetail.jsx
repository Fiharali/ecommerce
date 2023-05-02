import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import Menu from '@/Pages/Home/Menu'
import ShopCart from '@/Pages/Home/ShopCart'
import './Women.css'
import { Link, useForm } from '@inertiajs/react';

function WomenDetail({ auth, women }) {

    const data = [
        {
            image: `/products/${women.img1}`,

        },
        {
            image: `/products/${women.img2}`,

        },
        {
            image: `/products/${women.img3}`,

        },


    ]

    // console.log(women)

    const { get, delete:destroy } = useForm({

    })
    return (
        <div className="contt pb-5">
            <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" srcset="" /></h1>

            <Menu />
            <ShopCart />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-10">
                        <div className='border-2 border border-bottom-0'>
                            <Carousel
                                data={data}
                                time={2000}
                                width="450px"
                                height="450px"
                                radius="10px"
                                slideNumber={true}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="transparent"
                                slideImageFit="contain"
                                thumbnails={true}
                                thumbnailWidth="90px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "850px",
                                    maxHeight: "500px",
                                }}
                            />
                        </div>

                    </div>

                    <div className='col-lg-7 col-md-12 '>
                        <h1 className='text-center fs-2 p-lg-5 p-3'>{women.title}</h1>
                        <p className='mx-5 text-justify p-3 text-center'>{women.discreption}</p>
                        <div className='text-center '> <span className='fs-4 text-success p-3'> {women.price}</span> <span className='text-opacity-25'><del>{women.oldPrice}</del></span> </div>
                        <div className='text-center pt-5'>
                            {
                                auth.user && auth.user.isAdmin ? (
                                    <>
                                        <button className=' button1 p-2 px-5 m-2' onClick={()=>{get(route('women.edit',women.id))}}> Update
                                            <i class="fa-solid fa-pen-to-square fa-xl"></i>
                                        </button>
                                        <button className=' button2 p-2 px-5 m-2' onClick={()=>{destroy(route('delete.women',women.id))}} > delete
                                            <i class="fa-sharp fa-solid fa-trash fa-xl"></i>
                                        </button>

                                    </>
                                ) : (
                                    <>
                                        <button className=' button1 p-2 m-2'> Paiement When Recieving
                                            <i className="fa-solid fa-dollar-sign fa-xl" ></i>
                                        </button>
                                        <button className='button2 p-2 m-2'>Add To Cart Shop
                                            <i className="fa-solid fa-cart-shopping fa-xl" ></i>
                                        </button>
                                    </>
                                )
                            }

                        </div>
                    </div>


                </div>
            </div>




        </div>
    )
}

export default WomenDetail
