import React, { useState, useEffect, createContext } from 'react'
import './Home.css'
import Menu from './Menu';
import Slide1 from './Slide1';
import Spicial from './Spicial';
import ShopCart from './ShopCart';
import Contact from './Contact';
import About from './About';
import 'animate.css';



export const DarkMode = createContext()
function Home() {

    const [darkMode, setDarhMode] = useState(false)

    const dark = () => {
        { setDarhMode(!darkMode) }
    }

    useEffect(() => {

    }, [darkMode])
    return (



        <DarkMode.Provider value={darkMode}>

            <div className={` ${darkMode ? 'page1dark' : 'page1'}`} id='firstpage'>


                <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" srcset="" /></h1>
                <Menu />
                <ShopCart />
                {/* swithe */}
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
            <div>
                <h2 className={` text-center p-4   rounded-3 h2 text-break tracking-in-expand   ${darkMode ? 'bgdark' : 'bgbg mx-5'}`}> Categories </h2>
            </div>
            <h2 className={` text-center p-4   rounded-3 h2 text-break tracking-in-expand   ${darkMode ? 'bgdark' : 'bgbg mx-5'}`} id='contact'> Contact-Us </h2>
            <Contact />

            <h2 className={` text-center p-4   rounded-3 h2 text-break tracking-in-expand   ${darkMode ? 'bgdark' : 'bgbg mx-5'}`} id='contact'> About-Us </h2>
            <About/>
        </DarkMode.Provider>


    )
}

export default Home
