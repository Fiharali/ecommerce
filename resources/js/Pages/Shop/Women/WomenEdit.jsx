import React from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';
import Menu from '@/Pages/Home/Menu/Menu';
import Swal from 'sweetalert2'
import Slide from 'react-reveal/Slide';
import './../AddAll/AddAll.css'
function WomenEdit({ auth, women }) {
    // console.log(women)

    const { get, data, setData, post, errors, progress } = useForm({

        title: women.title,
        discreption: women.discreption,
        oldPrice: women.oldPrice,
        price: women.price,
        img1: '',
        img2: '',
        img3: '',




    });

    const EditWomen = (e) => {
        e.preventDefault();


        // Swal.fire(
        //     'Good job!',
        //     'Its Have Been Update With Success',
        //     'success'
        //   )

        post(route('women.update', women.id))
    }
    return (
        <div className='contt'>
            <h1 className='p-2 bounce-in-top '> <img src="/imaggess/logo.jpg" width={69} alt="" srcset="" /></h1>
            <Menu auth={auth} />

            <div className=' col-7 mx-auto d-flex justify-content-evenly  '>
                <img src={`/products/${women.img1}`} alt="" width={100} />
                <img src={`/products/${women.img2}`} alt="" width={100} />
                <img src={`/products/${women.img3}`} alt="" width={100} />
            </div>
            <div className="col-lg-4 col-md-8 col-ms-4  mx-auto my-5">
                <form enctype="multipart/form-data" onSubmit={EditWomen} className='py-5  subscribe animate__animated animate__zoomIn text ' >
                    <p className='m-2'>form Edit Women Clothes</p>
                    <div className="mb-1 mt-5">
                        <input type="text" name='title' placeholder={errors.title ? 'This Input Is For "Title" Required ' : "title"} className={`subscribe-input   ${errors.title && 'red'}`}
                            value={data.title} onChange={(e) => setData("title", e.target.value)} />
                    </div>
                    <div className="mb-3 mt-3">
                        <input type="text" name='discreption' placeholder={errors.discreption ? 'This Input Is For "Discreption" Required ' : "discreption"} className={`subscribe-input   ${errors.discreption && 'red'}`}
                            value={data.discreption} onChange={(e) => setData("discreption", e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="number" name='oldPrice' placeholder={errors.oldPrice ? 'This Input Is For "oldPrice" Required  ' : "oldPrice"} className={`subscribe-input   ${errors.oldPrice && 'red'}`}
                            value={data.oldPrice} onChange={(e) => setData("oldPrice", e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="number" name='price' placeholder={errors.price ? 'This Input Is For "Price" Required  ' : "price"} className={`subscribe-input   ${errors.price && 'red'}`}
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
                        <input type="file" name="img3" className="form-control f " id="img3" placeholder=' hhhh'
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
    )
}

export default WomenEdit
