import React, { useContext } from 'react'
import { DarkMode } from './Home'

function About() {

    const darkMode = useContext(DarkMode)

    return (
        <div className={` my-2  ${darkMode ? 'page2dark' : 'page2'}`}>
            <div id='about' className={` row mx-1 d-flex justify-content-center  align-items-center  ${darkMode ? 'bgcaDark' : 'bgca'}`}>
                <div className="col-lg-5 col-md-12 mx-4">
                    <h1 className='p-lg-5 mb-lg-5 text-center p-2'> About-us</h1>

                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora, repudiandae, necessitatibus repellat cum recusandae nesciunt sequi sit fuga nemo, ipsum exercitationem voluptates quis! Blanditiis asperiores eligendi excepturi dolore repellendus.</p>
                    <div>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary p-3 pe-5 mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            read more ...
                        </button>
                        {/* Modal */}
                        <div className="modal fade " id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div   className={`modal-content  ${darkMode ? 'bg-dark' : null}`}>
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">About-us</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" > <i className="fa-solid fa-xmark fa-xl" /></button>
                                    </div>
                                    <div  className={`modal-body  ${darkMode ? null : 'text-dark '}`}>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur libero commodi ad veritatis mollitia autem iste ipsa corporis minima id. Officia labore molestias aspernatur! Praesentium debitis sunt laborum asperiores deleniti.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button"  className={`btn btn-secondary   ${darkMode ? null : 'text-dark '}`} data-bs-dismiss="modal">Close</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-lg-5 col-md-12">
                    <img src="images/pk1.png" alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default About
