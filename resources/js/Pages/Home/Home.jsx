import React, { useState, useEffect, createContext } from 'react'
import './Home.css'
import Menu from './Menu';
import Slide1 from './Slide1';
import Spicial from './Spicial';
import ShopCart from './ShopCart';
import Wehave from './Wehave';
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

            <div className={` ${darkMode ? 'page1dark' : 'page1'}`}>


                <h1 className='p-4 bounce-in-top '> MyLoGO</h1>
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
            <div className={` ${darkMode ? 'page2dark' : 'page2'}`}>
                <Spicial />
            </div>
            <h2 className={` text-center p-4  h2  tracking-in-expand   ${darkMode ? 'bgdark' : 'bgbg'}`}> whate we have ? </h2>
            <Wehave/>
            <h2 className={` text-center p-4 mt-5 mt-5  h2  tracking-in-expand  text-break  ${darkMode ? 'bgdark' : 'bgbg'}`}> categories </h2>


        </DarkMode.Provider>


    )
}

export default Home
