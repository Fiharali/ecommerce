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
                        <div className='mt-5 pt-lg-5'>
                            <ul>
                                <li>
                                    <a href='#idd' className=' p-3 mb-2'> <i className="fa-solid fa-person-dress fa-xl p-2" > </i> Dashboard   </a>
                                </li>
                                <li className=' '>
                                    <a href="#contact" className='p-3 mb-2'> <i className="fa-solid fa-phone fa-xl p-2"></i> Contact</a>
                                </li>
                                <li>
                                    <a href="#about" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> About Us</a>
                                </li>
                                <li className='catts'>
                                    <a href="#about" className=' p-3 mb-2 '>  <i className="fa-solid fa-phone fa-xl p-2"></i> Categorys</a>
                                    <div className='categorys_hover p-2'>
                                        <ul>
                                            <li>
                                                <a href="#about" className=' p-3 me-2 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Women</a>
                                            </li>
                                            <li>
                                                <a href="#about" className=' p-3 me-2 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Men</a>
                                            </li>

                                        </ul>
                                    </div>
                                </li>
                                {
                                    auth.user ?
                                        auth.user.isAdmin && (

                                            <>
                                                <li>
                                                    <a href="#footer" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Admin Side</a>
                                                </li>
                                                {/* <li>
                                                    <a href="#footer" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> LogOut</a>
                                                </li> */}
                                            </>
                                        ) : (
                                            <>
                                                <li>
                                                    <a href="#footer" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Login</a>
                                                </li>
                                                <li>
                                                    <a href="#footer" className=' p-3 mb-2'>  <i className="fa-solid fa-phone fa-xl p-2"></i> Rejester</a>
                                                </li>
                                            </>
                                        )

                                }
                            </ul>
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
