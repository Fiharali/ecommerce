import React from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';
import Menu from '@/Pages/Home/Menu';
import Swal from 'sweetalert2'

function WomenEdit({ women }) {
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


        Swal.fire(
            'Good job!',
            'Its Have Been Update With Success',
            'success'
          )

        post(route('women.update', women.id))
    }
    return (
        <>
            <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" srcset="" /></h1>
            <Menu />

            <div className=' col-7 mx-auto d-flex justify-content-evenly  '>
                <img src={`/products/${women.img1}`} alt="" srcset="" width={100} />
                <img src={`/products/${women.img2}`} alt="" srcset="" width={100} />
                <img src={`/products/${women.img3}`} alt="" srcset="" width={100} />
            </div>
            <div className="col-8 mx-auto mt-5">

                <form enctype="multipart/form-data" onSubmit={EditWomen} >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name='title' className="form-control " id="title" aria-describedby="emailHelp"
                            value={data.title} onChange={(e) => setData("title", e.target.value)} />
                        {errors.title &&
                            <p className='text-danger'>{errors.title}</p>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="discreption" className="form-label">Discreption</label>
                        <input type="text" name='discreption' className="form-control " id="discreption" aria-describedby="emailHelp"
                            value={data.discreption} onChange={(e) => setData("discreption", e.target.value)} />
                        {errors.discreption &&
                            <p className='text-danger'>{errors.discreption}</p>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="oldPrice" className="form-label">Old Price</label>
                        <input type="text" name='oldPrice' className="form-control " id="oldPrice" aria-describedby="emailHelp"
                            value={data.oldPrice} onChange={(e) => setData("oldPrice", e.target.value)} />
                        {errors.oldPrice &&
                            <p className='text-danger'>{errors.oldPrice}</p>
                        }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input type="text" name='price' className="form-control " id="price" aria-describedby="emailHelp"
                            value={data.price} onChange={(e) => setData("price", e.target.value)} />
                        {errors.price &&
                            <p className='text-danger'>{errors.price}</p>
                        }
                    </div>
                    <div className="mb-3">
                        <input type="file" name="img1" className="form-control " id="img1"
                            onChange={(e) => setData("img1", e.target.files[0])} />
                        {errors.img1 &&
                            <Shake> <p className='text-danger'>{errors.img1}</p></Shake>
                        }
                    </div>
                    <div className="mb-3">
                        <input type="file" name="img2" className="form-control " id="img2"
                            onChange={(e) => setData("img2", e.target.files[0])} />
                        {errors.img2 &&
                            <Shake> <p className='text-danger'>{errors.img2}</p></Shake>
                        }
                    </div>
                    <div className="mb-3">
                        <input type="file" name="img3" className="form-control " id="img3"
                            onChange={(e) => setData("img3", e.target.files[0])} />
                        {errors.img3 &&
                            <Shake> <p className='text-danger'>{errors.img3}</p></Shake>
                        }
                    </div>
                    {progress && (
                        <div className=' text-center'>
                            <span className='loader text-center'>Loading</span>
                        </div>
                    )}
                    <input type="submit" className='btn-primary form-control' />
                </form>
            </div>
        </>
    )
}

export default WomenEdit
