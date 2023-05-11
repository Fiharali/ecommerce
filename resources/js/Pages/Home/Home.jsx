import React, { useState, useEffect, createContext } from 'react'
import { Link, useForm } from '@inertiajs/react';
import Menu from './Menu/Menu';
import Slide1 from './Slide/Slide1';
import Spicial from './Spicial/Spicial';
import ShopCart from './ShopCart/ShopCart';
import AboutContact from './AboutContact/AboutContact';
import 'animate.css';
import './Home2.css'
import Category from './Category/Category';
import Flip from 'react-reveal/Flip';
import Brands from './Brands/Brands';



export const DarkMode = createContext()
function Home({ auth, card, total }) {

    const [darkMode, setDarhMode] = useState(false)

    const dark = () => {
        { setDarhMode(!darkMode) }
    }

    useEffect(() => {

    }, [darkMode])





    return (



        <DarkMode.Provider value={darkMode}>
            <div className={` ${darkMode ? 'pageDark' : 'page'}`} id='firstpage'>
                <h1 className='p-2 rounded-circle'> <img src="/imaggess/logo.jpg" width={69} alt="" className='' /></h1>
                <Menu auth={auth} />
                <ShopCart auth={auth} card={card} total={total} />
                {/* swithe  dark*/}
                <div className='px-4  position-absolute top-5 end-40 bounce-in-top ' >
                    <input type="checkbox" id="checkbox" onChange={dark} />
                    <label htmlFor="checkbox" className="switch" >
                        <div className="powersign" ></div>
                    </label>
                </div>
                {/* end swithe */}
                <Slide1 />
                <Spicial />
                <Category />
                <AboutContact />

                <div id='footer' className='text-center mt-5'>
                    <p className='p-3'>fiharali &copy; copyright</p>
                </div>
            </div>
        </DarkMode.Provider>


    )
}

export default Home
