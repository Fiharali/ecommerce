import React, { useContext } from 'react'
import { DarkMode } from '../Home'
import { Link, useForm } from '@inertiajs/react';
import './ShopCart.css'
function ShopCart({ auth, card, total }) {

    const darkMode = useContext(DarkMode)


    const { delete: destroy } = useForm({

    })



    return (
        <>
            <div>
                <button className="p-4   position-absolute top-0 end-20 bounce-in-top " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling2" aria-controls="offcanvasScrolling2">
                    <i className={` fa-solid fa-cart-shopping fa-xl  ${darkMode ? 'text-light' : 'text-dark'}`} /> <span className="position-absolute top-5 start-95 translate-middle badge rounded-pill bg-danger ">{auth.user ? card.length :null}</span></button>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling2" aria-labelledby="offcanvasScrollingLabel2">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" >
                            <i className="fa-solid fa-xmark fa-xl" style={{ color: '#151515' }} />
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        {auth.user && card.length > 0 ? (
                            <>
                                {
                                    card.map((item) => (
                                        <>
                                            <div className='cart__shop position-relative p-4 m-3 my-4' key={item.id}>
                                                <Link className='position-absolute top-0 end-0 p-2 m-2'><i className={`fa-solid fa-xmark fa-xl `} onClick={(e) => { e.preventDefault(); destroy(route('delete.cart.item', item.id)) }} /></Link>
                                                <div className="row">
                                                    <div className="col-5">
                                                        <img src={`/products/${item.img1}`} alt="" width={89} />
                                                    </div>
                                                    <div className="col-6 text-center fs-4">
                                                        <h1> {item.title}</h1>
                                                        <h3> {item.price}$</h3>
                                                        <h3> {item.color}, {item.taille}</h3>

                                                    </div>
                                                </div>


                                            </div>
                                        </>
                                    ))
                                }
                                <div className='text-center p-5'>
                                    <h1> Total : {total}$</h1>
                                    <br />
                                     <Link className="offcanvas-title text-center"  href="/stripe" id="offcanvasExampleLabel"> <button className='btn bg-primary text-white'>Go to pay</button> </Link>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='text-center'>no items here yet</div>
                            </>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCart
