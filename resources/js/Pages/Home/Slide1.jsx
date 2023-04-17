import React , {useContext} from 'react'
import { DarkMode } from './Home'

function Slide1() {

const darkMode = useContext(DarkMode)

  return (
    <div   className={` container-fluid   overflow-hidden${darkMode ? 'bgdark' : null}`}>
                    <div className="row">
                        <div className="col-md-4 half1 p-6 mt-40 mx-auto">
                            <div className="animate__animated  animate__bounceInLeft ">
                                <h1 className='h1'> store , fashion, .....</h1>
                                <h2 className='h3 text-bg-info px-3'>Here you can find any thing</h2>
                                <br />
                                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit <br /></p>
                                <br />
                                <button className='buttonn form-control'>get start</button>
                            </div>
                        </div>
                        <div className="col-md-6  d-flex justify-content-center p-6 mt-5 offset-md-1 animate__animated  animate__bounceInRight">
                            <div id="carouselExampleControls" className="carousel slide  media1 " data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active  ">
                                        <img src="images/bg1.png" className="d-block  " alt="images/bg1.png" />
                                    </div>

                                    <div className="carousel-item">
                                        <img src="images/ww1.png" className="d-block " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/ww2.png" className="d-block " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/ww3.png" className="d-block " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/ww4.png" className="d-block " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/ww5.png" className="d-block " alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="images/ww6.png" className="d-block " alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Slide1
