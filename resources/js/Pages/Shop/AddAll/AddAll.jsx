
import { Link, useForm, usePage } from '@inertiajs/react';
import './AddAll.css'
import { useEffect, useState, useRef } from 'react';
import 'animate.css';
import './AddAll.css'
import $ from 'jquery';
import DataTable from 'datatables.net-dt'
function AddAll({ auth, women, man }) {


    // const { flash } = usePage().props

    const { get, data, setData, post, errors, progress, } = useForm({

        title: '',
        discreption: '',
        oldPrice: '',
        price: '',
        img1: '',
        img2: '',
        img3: '',
    })

    const [open, setOpen] = useState(false)
    const tableRef = useRef(null);
    useEffect(() => {
        if (!$.fn.DataTable.isDataTable(tableRef.current)) {
            $(tableRef.current).DataTable({
                lengthChange: false,
                pageLength: 6,
                searching: false
            });

        }
    }, [tableRef]);


    const AddWomenClothes = (e) => {
        e.preventDefault()
        post(route('add.man.clothes'))
        data.title = ""
        data.discreption = ""
        data.oldPrice = ""
        data.price = ""
    }

    return (
        <>
            <div className="container-fluid ">
                <div className={` sidebar ${open ? 'open' : null}`}>
                    <button className='position-absolute top-0 start-0' onClick={() => setOpen(!open)}>{open ? <i className=" fa-solid fa-xmark fa-lg" style={{ color: '#ffffff' }}></i> : <i className="fa-solid fa-bars fa-lg " style={{ color: '#ffffff' }}></i>}</button>
                    <div className='mt-5 pt-lg-5'>
                        <ul>
                            <li>
                                <a href='#idd' className=''> {open ? <span className=''><i className="fa-solid fa-person-dress fa-lg" > </i> Dashboard </span> : <span><i className="fa-solid fa-person-dress fa-lg" > </i>  </span>} </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" row mx-auto ">
                    <div>
                        <section className="home-section my-2" id='idd'>
                            <div className='col-lg-12  col-md-12 pb-5 '>
                                <div className="row my-5 subscribe py-2 " id='women'>
                                    <h1 className='h1 text-center  pt-3'> Women Clothes</h1>
                                    <div className="col-lg-5 col-md-12  ">
                                        <form enctype="multipart/form-data" onSubmit={AddWomenClothes} className='py-5  subscribe animate__animated animate__zoomIn text ' >
                                            <p className='m-2'>form for Women Clothes</p>
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
                                    <div className="col-lg-7 col-md-12 mt-lg-0 mt-5 ">
                                        <table className="table table-bordered table-hover p-3  animate__animated animate__zoomIn box_shadow " id='myTable' ref={tableRef}>
                                            <thead>
                                                <tr className='text-center'>
                                                    <th scope="col">Id</th>
                                                    <th scope="col">Titlle</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">image</th>
                                                    <th scope="col">action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    women.map((item) => {
                                                        return (
                                                            <tr key={item.id} className='text-center'>
                                                                <th >{item.id}</th>
                                                                <td>{item.title}</td>
                                                                <td>{item.price}</td>
                                                                <td ><img src={`/products/${item.img1}`} alt=" " width={65} /></td>
                                                                <td onClick={() => { get(route('women.details', item.id)) }} className=' align-items-center'><i className="fa-solid fa-circle-info fa-2xl" style={{ color: '#151515' }} />
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAll


