import React, { useContext, useRef } from 'react'
import { DarkMode } from './Home'
import { Head, Link, useForm } from '@inertiajs/react';
function Menu() {
    const darkMode = useContext(DarkMode)
    const { get } = useForm({

    });



    const Llogin = (e) => {
        e.preventDefault();
        get(route('login'));
    };

    const Rregistre = (e) => {
        e.preventDefault();
        get(route('register'));
    };

    return (
        <div>
            <button className="p-4  position-absolute top-0 end-0 bounce-in-top " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <i className={` fa-solid fa-bars fa-xl ${darkMode ? 'text-light' : 'text-dark'}`} /></button>
            <div className={` offcanvas offcanvas-start canvassDark ${darkMode ? 'canvassDark' : 'canvass'}`} data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel"><img src="/images/logo.png" width={69} alt="" srcset="" /></h5>
                    <button className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" >
                        <i className="fa-solid fa-xmark fa-xl" style={{ color: '#e5e5e5' }} />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <hr />
                    <div className={` d-block  p-3   my-4 fs-4 rounded-5 fst-italic border-bottom border-primary   ${darkMode ? 'itemmsDark' : 'itemms'}`}  >
                        <i className="fa-sharp fa-solid fa-house fa-xl"> </i>
                        <a href='/#firstpage' className='ps-4 link'>  Home</a>
                    </div>
                    <div className={` d-block  p-3   my-4 fs-4 rounded-5 fst-italic border-bottom border-primary   ${darkMode ? 'itemmsDark' : 'itemms'}`}  >
                        <i class="fa-solid fa-phone fa-xl"></i>
                        <a href='/#contact' className='ps-4 link'>  Contact-us</a>
                    </div>
                    <div className={` d-block  p-3   my-4 fs-4 rounded-5 fst-italic border-bottom border-primary   ${darkMode ? 'itemmsDark' : 'itemms'}`}>
                        <i class="fa-solid fa-address-card fa-xl"></i>
                        <a href='/#about' className='ps-4 link'>  About-us</a>
                    </div>
                    <div className={` d-block  p-3   my-4 fs-4 rounded-5 fst-italic border-bottom border-primary   ${darkMode ? 'itemmsDark' : 'itemms'}`} onClick={Llogin}>
                        <i class="fa-solid fa-user fa-xl"></i>
                        <Link onClick={Llogin} className='ps-4 link'> Login</Link>
                    </div>
                    <div className={` d-block  p-3   my-4 fs-4 rounded-5 fst-italic border-bottom border-primary   ${darkMode ? 'itemmsDark' : 'itemms'}`} onClick={Rregistre}>
                        <i class="fa-solid fa-user fa-xl"></i>
                        <Link onClick={Rregistre} className='ps-4 link'> Rejester</Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu
