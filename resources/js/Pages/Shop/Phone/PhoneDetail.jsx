import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import Menu from '@/Pages/Home/Menu/Menu'
import ShopCart from '@/Pages/Home/ShopCart/ShopCart'
import './Phone.css'
import { Link, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2'
import 'animate.css';


function PhoneDetail({ auth, phone, card, total }) {

    const datas = [
        {
            image: `/products/${phone.img1}`,

        },
        {
            image: `/products/${phone.img2}`,

        },
        {
            image: `/products/${phone.img3}`,

        },


    ]

    // console.log(women)

    const { post, data, setData, get, delete: destroy, errors } = useForm({
        color: '',
        taille: '',

    })
    const addPhoneToCart = (e) => {
        e.preventDefault()
        post(route('add.phone.to.cart', phone.id))

    }

    const DeletePhone = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                destroy(route('delete.phone', phone.id))
            }
        })

    }
    // console.log(data.color)
    // console.log(data.taille)
    return (
        <div className="contt pb-5">
            <h1 className='p-2 bounce-in-top '> <img src="/imaggess/logo.jpg" width={69} alt="" /></h1>

            <Menu auth={auth} />
            <ShopCart auth={auth} card={card} total={total} />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-10 animate__animated animate__slideInLeft">
                        <div className='border-2 border border-bottom-0'>
                            <Carousel
                                data={datas}
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

                    <div className='col-lg-7 col-md-12 animate__animated animate__slideInRight'>
                        <h1 className='text-center fs-2 p-lg-5 p-3'>{phone.title}</h1>
                        <p className='mx-5 text-justify p-3 text-center'>{phone.discreption}</p>
                        <div className='text-center '>
                            <span className='text-opacity-25'><del>{phone.oldPrice}</del></span>
                            <br />
                            <span className='fs-4 text-success p-3'> {phone.price}</span>
                        </div>
                        <div className='text-center pt-5'>
                            {
                                auth.user && auth.user.isAdmin ? (
                                    <>
                                        <button className=' button1 p-2 px-5 m-2' onClick={() => { get(route('phone.edit', phone.id)) }}> Update
                                            <i class="fa-solid fa-pen-to-square fa-xl"></i>
                                        </button>
                                        <button className=' button2 p-2 px-5 m-2' onClick={DeletePhone} > delete
                                            <i class="fa-sharp fa-solid fa-trash fa-xl"></i>
                                        </button>

                                    </>
                                ) : (
                                    <>
                                        <form >

                                            <div className="row d-flex justify-content-center mx-5" onSubmit={addPhoneToCart}>
                                                <div className="col-lg-6 my-3">
                                                    <label>
                                                        <input type="radio" className='red' name="color" value="red" onChange={(e) => setData("color", e.target.value)} />
                                                        <span>Red</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" className='Black' name="color" value="black" onChange={(e) => setData("color", e.target.value)} />
                                                        <span>Black</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" className='White' name="color" value="White" onChange={(e) => setData("color", e.target.value)} />
                                                        <span>White</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" className='Yellow' name="color" value="Yellow" onChange={(e) => setData("color", e.target.value)} />
                                                        <span>Yellow</span>
                                                    </label>
                                                    {errors.color &&
                                                        (<h6 className='text-danger'>The color is Required</h6>)}
                                                    <hr />
                                                </div>
                                                <div className="col-lg-6 my-3">
                                                    <label>
                                                        <input type="radio" className='Black' name="taille" value="100GB" onChange={(e) => setData("taille", e.target.value)} />
                                                        <span>100 GB</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" className='Black' name="taille" value="200GB" onChange={(e) => setData("taille", e.target.value)} />
                                                        <span>200 GB</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" className='Black' name="taille" value="300GB" onChange={(e) => setData("taille", e.target.value)} />
                                                        <span>300 GB</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" className='Black' name="taille" value="400GB" onChange={(e) => setData("taille", e.target.value)} />
                                                        <span>400 GB</span>
                                                    </label>
                                                    {errors.taille &&
                                                        (<h6 className='text-danger'>The taille is Required</h6>)}
                                                    <hr />

                                                </div>
                                            </div>
                                            <button className='button2 p-2 m-4 px-5' type='submit' onClick={addPhoneToCart}>Add To Cart Shop
                                                <i className="fa-solid fa-cart-shopping fa-xl" ></i>
                                            </button>
                                        </form>



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

export default PhoneDetail
