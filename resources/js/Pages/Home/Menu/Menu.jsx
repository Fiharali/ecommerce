import React, { useContext, useRef, useState } from 'react'
import { DarkMode } from '../Home'
import { Head, Link, useForm } from '@inertiajs/react';
import './Menu.css'
import 'animate.css';
function Menu({ auth }) {
    const darkMode = useContext(DarkMode)
    const { get, post } = useForm({

    });


    const [menu, setMenu] = useState(false)

    const Llogin = (e) => {
        e.preventDefault();
        get(route('login'));
    };

    const Rregistre = (e) => {
        e.preventDefault();
        get(route('register'));
    };
    const Profile = (e) => {
        e.preventDefault();
        get(route('profile.edit'));
    };
    const logOut = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <div>
            <button onClick={() => setMenu(!menu)} className="p-4  position-absolute top-0 end-0  " >
                <i className={` fa-solid fa-bars fa-xl ${darkMode ? 'text-light' : 'text-dark'}`} /></button>

            {menu ? (
                <>
                    <div className='menuside animate__animated animate__slideInLeft  '>
                        <button onClick={() => setMenu(!menu)} className="p-4  position-absolute top-0 end-0  " >
                            <i class="fa-solid fa-regular fa-xmark fa-xl" ></i></button>
                        <div className='mt-5 pt-5'>
                            <ul>
                                <li>
                                    <a href='/#idd' className=' p-3  mt-3 mb-3'> <i className="fa-solid fa-house fa-xl p-2" > </i> Home   </a>
                                </li>
                                <li className=' '>
                                    <a href="/#aboutConatact" className='p-3 mb-3'> <i className="fa-solid fa-phone fa-xl p-2"></i> Contact</a>
                                </li>
                                <li>
                                    <a href="/#aboutConatact" className=' p-3 mb-3'>  <i className="fa-solid fa-address-card fa-xl p-2"></i> About Us</a>
                                </li>
                                <li className='catts'>
                                    <a href="#about" className=' p-3 mb-3 '>  <i className="fa-solid fa-angles-right fa-xl p-2"></i> Categories</a>
                                    <div className='categorys_hover p-2'>
                                        <ul>
                                            <li>
                                                <Link href="/women-clothes" className=' p-3 me-2 mb-2'>  <i className="fa-solid fa-person-dress fa-xl p-2"></i> Women</Link>
                                            </li>
                                            <li>
                                                <Link href="/man-clothes" className=' p-3 me-2 mb-2'>  <i className="fa-solid fa-person fa-xl p-2"></i> Men</Link>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                {
                                    auth.user ?
                                        auth.user.isAdmin ? (

                                            <>
                                                <li>
                                                    <Link href="/add-all" className=' p-3 mb-2'>  <i className="fa-solid fa-folder fa-xl p-2"></i> Admin Side</Link>
                                                </li>
                                                {/* <li>
                                                    <a href="#footer" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> LogOut</a>
                                                </li> */}
                                            </>
                                        ) : (
                                            null
                                            // <>
                                            //     <li>
                                            //         <a href="#footer" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Admin Side</a>
                                            //     </li>
                                            //     <li>
                                            //         <a href="#footer" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Admin Side</a>
                                            //     </li>
                                            // </>
                                        ) : (
                                            <>
                                                <li onClick={Llogin}>
                                                    <Link href="/login" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Login</Link>
                                                </li>
                                                <li onClick={Rregistre}>
                                                    <Link href="/register" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Regester</Link>
                                                </li>
                                            </>
                                        )

                                }
                            </ul>

                            {auth.user && (
                                <>
                                    <div className="logoutdiv  d-flex justify-between border border-top-2 border-end-0 p-3  border-start-0  border-bottom-0">
                                        <span className='avattar rounded-5 bg-light text-dark py-3 px-4 ' onClick={Profile}> {auth.user.name[0]} </span>
                                        <span className=' p-3 px-4 ' onClick={logOut}> <i class="fa-solid fa-right-from-bracket fa-xl"></i></span>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>
                </>
            ) : (
                null
            )

            }
        </div >
    )
}

export default Menu
