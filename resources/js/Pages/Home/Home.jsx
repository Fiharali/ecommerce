import React, { useState, useEffect, createContext } from 'react'
import { Link, useForm } from '@inertiajs/react';
import Menu from './Menu';
import Slide1 from './Slide1';
import Spicial from './Spicial';
import ShopCart from './ShopCart';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';
import 'animate.css';
import './Home.css'
import Category from './Category';
import Flip from 'react-reveal/Flip';



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
            <div className={` ${darkMode ? 'page1dark' : 'page1'}`} id='firstpage'>
                <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" /></h1>
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
            </div>
            <div className={`mb-2 ${darkMode ? 'page2dark' : 'page2'}`}>
                <Spicial />
            </div>
            <Flip left cascade>

                <h2 className={` text-center p-4   rounded-3 h2 text-break letrespace  ${darkMode ? 'bgdark' : 'bgbg mx-5'}`} id='catt'> Categories </h2>
            </Flip >
            <Category />
            <Flip left cascade>
                <h2 className={` text-center p-4   rounded-3 h2 text-break letrespace  ${darkMode ? 'bgdark' : 'bgbg mx-5'}`} id='contact'> Contact-Us </h2>
            </Flip >
            <Contact />
            <Flip left cascade>
                <h2 className={` text-center p-4   rounded-3 h2 text-break letrespace  ${darkMode ? 'bgdark' : 'bgbg mx-5'}`} id='contact'> About-Us </h2>
            </Flip >
            <About />
            <Footer />
        </DarkMode.Provider>


    )
}

export default Home
