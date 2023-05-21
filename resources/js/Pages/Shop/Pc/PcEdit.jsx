import React from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';
import Menu from '@/Pages/Home/Menu/Menu';
import Swal from 'sweetalert2'
import Slide from 'react-reveal/Slide';
import './../AddAll/AddAll.css'
function PcEdit({ auth, pc }) {

    const { get, data, setData, post, errors, progress } = useForm({

        title: pc.title,
        discreption: pc.discreption,
        oldPrice: pc.oldPrice,
        price: pc.price,
        img1: '',
        img2: '',
        img3: '',
    });

    const EditPc = (e) => {
        e.preventDefault();
        post(route('pc.update', pc.id))
    }
    return (
        <>
            <div className='contt'>
                <h1 className='p-2 bounce-in-top '> <img src="/imaggess/logo.jpg" width={69} alt="" srcset="" /></h1>
                <Menu auth={auth} />

                <div className=' col-7 mx-auto d-flex justify-content-evenly  '>
                    <img src={`/products/${pc.img1}`} alt="" width={100} />
                    <img src={`/products/${pc.img2}`} alt="" width={100} />
                    <img src={`/products/${pc.img3}`} alt="" width={100} />
                </div>
                <div className="col-lg-4 col-md-8 col-ms-4  mx-auto my-5">
                    <form enctype="multipart/form-data" onSubmit={EditPc} className='py-5  subscribe animate__animated animate__zoomIn text ' >
                        <p className='m-2'>form Edit Women Clothes</p>
                        <div className="mb-1 mt-5">
                            <input type="text" name='title' placeholder={errors.title ? 'This Input Is For "title Pc" Required ' : "title Pc"} className={`subscribe-input   ${errors.title && 'red'}`}
                                value={data.title} onChange={(e) => setData("title", e.target.value)} />
                        </div>
                        <div className="mb-3 mt-3">
                            <input type="text" name='discreption' placeholder={errors.discreption ? 'This Input Is For "discreption" Required ' : "discreption"} className={`subscribe-input   ${errors.discreption && 'red'}`}
                                value={data.discreption} onChange={(e) => setData("discreption", e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="number" name='oldPrice' placeholder={errors.oldPrice ? 'This Input Is For "oldPrice Pc" Required  ' : "oldPrice Pc"} className={`subscribe-input   ${errors.oldPrice && 'red'}`}
                                value={data.oldPrice} onChange={(e) => setData("oldPrice", e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="number" name='price' placeholder={errors.price ? 'This Input Is For "price Pc" Required  ' : "price Pc"} className={`subscribe-input   ${errors.price && 'red'}`}
                                value={data.price} onChange={(e) => setData("price", e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <input type="file" name="img1" className="form-control  f" id="img1"
                                onChange={(e) => setData("img1", e.target.files[0])} />
                        </div>
                        <div className="mb-3">
                            <input type="file" name="img2" className="form-control  f" id="img2"
                                onChange={(e) => setData("img2", e.target.files[0])} />
                        </div>
                        <div className="mb-3">
                            <input type="file" name="img3" className="form-control f " id="img3"
                                onChange={(e) => setData("img3", e.target.files[0])} />
                            {errors.img2 || errors.img1 || errors.img3 ?
                                (<h6 className='text-danger'>The 3 Images is Required</h6>) : null}
                        </div>
                        {progress && (
                            <div className=' text-center'>
                                <span className='loader text-center'>Loading</span>
                            </div>
                        )}
                        <input type="submit" className='submit-btn' />
                    </form>
                </div>

            </div>
        </>
    )
}

export default PcEdit
