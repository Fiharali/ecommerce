import React , {useContext} from 'react'
import { DarkMode } from './Home'

import Fade from 'react-reveal/Fade'

function Wehave() {


const darkMode = useContext(DarkMode)

    return (
        <div className={`container   ${darkMode ? 'bg-dark' : 'bg-white'}`}>
            <Fade bottom cascade>
                <div className="row py-4 ">
                    <div className={` col-lg-4 col-md-6 col-mx-12 d-flex justify-content-center  ${darkMode ? 'itemdark' : 'item'}`}>
                        <img src="/images/ww1.png" alt=""  />
                    </div>
                    <div className={` col-lg-4 col-md-6 col-mx-12 d-flex justify-content-center   ${darkMode ? 'itemdark' : 'item'}`}>
                        <img src="/images/ww2.png" alt="" />
                    </div>
                    <div className={` col-lg-4 col-md-6 col-mx-12 d-flex justify-content-center   ${darkMode ? 'itemdark' : 'item'}`}>
                        <img src="/images/ww3.png" alt="" />
                    </div>
                </div>
                <div className="row py-4">
                    <div className={` col-lg-4 col-md-6 col-mx-12  d-flex justify-content-center  ${darkMode ? 'itemdark' : 'item'}`}>
                        <img src="/images/ww4.png" alt="" />
                    </div>
                    <div className={` col-lg-4 col-md-6 col-mx-12  d-flex justify-content-center  ${darkMode ? 'itemdark' : 'item'}`}>
                        <img src="/images/ww5.png" alt="" />
                    </div>
                    <div className={` col-lg-4 col-md-6 col-mx-12  d-flex justify-content-center  ${darkMode ? 'itemdark' : 'item'}`}>
                        <img src="/images/ww6.png" alt="" />
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Wehave
