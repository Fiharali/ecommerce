
import { Link, useForm, usePage } from '@inertiajs/react';

import './AddAll.css'


import Menu from '@/Pages/Home/Menu';


function AddAll({ women }) {

    const { flash } = usePage().props


    const { get, data, setData, post, errors, progress } = useForm({

        title: '',
        discreption: '',
        oldPrice: '',
        price: '',
        img1: '',
        img2: '',
        img3: '',




    });

    console.log(women)

    return (
        <>
            {flash.message && (
                <div className="col-4 position-absolute top-50 start-50 translate-middle ">
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{flash.message}</strong>
                        <button type="button" class="btn-close text-dark bg-dark" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
            )}

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-lg-2 col-md-12 sidebar ">
                        <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" srcset="" /></h1>
                    </div>

                    <div className='col-lg-10  col-md-12'>
                        <div className="row">
                            <Menu />
                            <h1 className='h1 text-center mt-3 pt-3'> Women Clothes</h1>
                            <div className="col-lg-6 col-md-12">

                                <form enctype="multipart/form-data" onSubmit={(e) => { e.preventDefault(); post(route('add.women.clothes')) }} >
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
                            <div className="col-lg-6 col-md-12">
                                <table className="table table-bordered table-hover p-3 mt-4">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Titlle</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            women.map((item) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <th >{item.id}</th>
                                                        <td>{item.title}</td>
                                                        <td>{item.price}</td>
                                                        <td ><img src={`/products/${item.img1}`} alt=" " srcset="" width={68} /></td>
                                                        <td onClick={() => { get(route('women.details', item.id)) }}>Show More</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}

export default AddAll


{/* <div className="mb-3">
                                <input type="file" name="image" className="form-control flip-horizontal-bottom" id="exampleInputPassword1"
                                    onChange={(e) => setData("image", e.target.files[0])} />
                                {errors.image &&
                                    <Shake> <p className='text-danger'>{errors.image}</p></Shake>
                                }
                            </div>
                            {progress && (
                                <div className=' text-center'>
                                    <span className='loader text-center'>Loading</span>
                                </div>
                            )} */}


{/* <div className=" mt-5 bg-danger" style={{ height: "1000px" }} >
    <div className="row justify-content-center">
        <div className="col-md-8">
            <form onSubmit={submitCours} enctype="multipart/form-data" >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="text" name='title' className="form-control  flip-horizontal-bottom" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={data.title} onChange={(e) => setData("title", e.target.value)} />
                    {errors.title &&
                        <p className='text-danger'>{errors.title}</p>
                    }
                </div>
                <button type="submit" className="button form-control flicker-2  ">Submit</button>
            </form>

        </div>
    </div>
</div> */}
