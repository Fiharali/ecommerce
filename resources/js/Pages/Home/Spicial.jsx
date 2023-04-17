import React , {useContext} from 'react'
import { DarkMode } from './Home'

function Spicial() {

const darkMode = useContext(DarkMode)

    return (
        <div className="container mx-auto spicial p-6 ">
            <div className="row mx-auto  pb-5">
                <div className="col-lg-3 col-md-6 col-mx-12  mx-auto  animate__animated animate__bounceInUp   ">
                    <div className="card cardd p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                        <div className="card-body text-center">
                            <i  className={` fa-solid fa-sack-dollar fa-2xl ${darkMode ? 'text-light' : 'text-dark'}`} />
                            <h5 className="card-title mt-3">money back garantie</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3  col-md-6 col-mx-12  mx-auto    animate__animated animate__bounceInUp  animate__delay-1s">
                    <div className="card  cardd p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                        <div className="card-body text-center">
                            <i   className={` fa-solid fa-truck-fast fa-2xl ${darkMode ? 'text-light' : 'text-dark'}`}></i>
                            <h5 className="card-title mt-3">free <br /> delivery</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6  col-mx-12 mx-auto  animate__animated animate__bounceInUp  animate__delay-2s">
                    <div className="card cardd p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                        <div className="card-body text-center">
                            <i  className={` fa-solid fa-phone-volume fa-2xl ${darkMode ? 'text-light' : 'text-dark'}`}/>
                            <h5 className="card-title mt-3">always <br /> support</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-mx-12 mx-auto  animate__animated animate__bounceInUp  animate__delay-3s">
                    <div className="card cardd p-4 mt-4 mx-auto" style={{ width: '12rem', height: '10.5rem' }}>
                        <div className="card-body text-center">
                            <i  className={` fa-solid fa-file-shield fa-2xl ${darkMode ? 'text-light' : 'text-dark'}`} />
                            <h5 className="card-title mt-3"> secure <br /> payment</h5>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Spicial
