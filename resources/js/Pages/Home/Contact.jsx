import React, { useContext } from 'react'
import { DarkMode } from './Home'
import Slide from 'react-reveal/Slide';

function Contact() {

    const darkMode = useContext(DarkMode)

    return (
        <>
            <div className={`   ${darkMode ? 'page2dark' : 'page2'}`}>
                <div className={` row mx-1 d-flex justify-content-center bgc align-items-center  ${darkMode ? 'bgcdark' : 'bgc'}`}>
                    <div className={` col-lg-4 col-md-12 my-2 h1 mt-5  text-center text-lowercase ${darkMode ? null : 'text-white'}`}>
                        <Slide left >

                            our info :
                            <br />
                            <br />
                            0612796274 <br /><br />
                            fiharali0@gmail.com
                        </Slide>

                    </div>
                    <div className="col-lg-7 col-md-12  my-2 mx-5">
                        <form className=' mx-5'>
                            <Slide right >

                                <div className="mb-3 mx-5">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-white ">Full Name</label>
                                    <input type="email" className={` form-control input  ${darkMode ? 'bg-dark text white' : 'page2'}`} id="exampleInputEmail1" placeholder='your name' />
                                </div>
                                <div className="mb-3 mx-5">
                                    <label htmlFor="exampleInputEmail2" className="form-label  text-white">Email address</label>
                                    <input type="email" className={` form-control input  ${darkMode ? 'bg-dark text white' : 'page2'}`} id="exampleInputEmail2" placeholder='your email' />
                                </div>
                                <div className="mb-3 mx-5">
                                    <label htmlFor="exampleInputEmail3" className="form-label text-white">Qustion or Problem</label>
                                    <textarea type="email" className={` form-control input  ${darkMode ? 'bg-dark text white' : 'page2'}`} id="exampleInputEmail3" placeholder='what do you want ?' />
                                </div>
                                <button type="submit" className=" buttonnn mx-5 "><span>
                                    Send
                                </span></button>
                            </Slide  >
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
