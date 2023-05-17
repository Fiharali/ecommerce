import React ,{useState} from 'react'
import { Link, useForm, usePage } from '@inertiajs/react';



function AdminMenu() {
    const [open, setOpen] = useState(true)
    return (
        <>
            <div className={` sidebar ${open ? 'open' : null}`}>
                <button className='position-absolute top-0 start-0' onClick={() => setOpen(!open)}>{open ? <i className=" fa-solid fa-xmark fa-lg" style={{ color: '#ffffff' }}></i> : <i className="fa-solid fa-bars fa-lg " style={{ color: '#ffffff' }}></i>}</button>
                <div className='mt-5 pt-5'>
                    <ul>
                        <li>
                            <Link href='/dashboard' className='my-2'> {open ? <span className=''><i className="fa-solid fa-person-dress fa-lg" > </i> Dashboard </span> : <span><i className="fa-solid fa-person-dress fa-lg" > </i>  </span>} </Link>
                        </li>
                        <li>
                            <Link href='/add-women-clothes' className='my-2'> {open ? <span className=''><i className="fa-solid fa-person-dress fa-lg" > </i> Women </span> : <span><i className="fa-solid fa-person-dress fa-lg" > </i>  </span>} </Link>
                        </li>
                        <li>
                            <Link href='/add-man-clothes' className='my-2'> {open ? <span className=''><i className="fa-solid fa-person fa-lg" > </i> Man </span> : <span><i className="fa-solid fa-person-dress fa-lg" > </i>  </span>} </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminMenu
