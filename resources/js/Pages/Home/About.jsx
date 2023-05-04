import React, { useContext } from 'react'
import { DarkMode } from './Home'
import Bounce from 'react-reveal/Bounce';
function About() {

    const darkMode = useContext(DarkMode)

    return (
        <>
            <div className={` mt-2  ${darkMode ? 'page2dark' : 'page2'}`}>
                <div id='about' className={` row mx-1 d-flex justify-content-center  align-items-center  ${darkMode ? 'bgcaDark' : 'bgca'}`}>
                    <Bounce right cascade>
                        <div className="col-lg-5 col-md-12 mx-4">
                            <h1 className='p-lg-5 mb-lg-5 text-center p-2'> About-us</h1>

                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempora, repudiandae, necessitatibus repellat cum recusandae nesciunt sequi sit fuga nemo, ipsum exercitationem voluptates quis! Blanditiis asperiores eligendi excepturi dolore repellendus.</p>
                            <div>
                                {/* Button trigger modal */}
                                <button type="button" class="btn btn-primary p-3 px-5 mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    read more ...
                                </button>
                                {/* Modal */}

                            </div>

                        </div>
                        <div className="col-lg-5 col-md-12">
                            <img src="images/pk1.png" alt="img" />
                        </div>
                    </Bounce>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className={`modal-content  ${darkMode ? 'bg-dark' : null}`}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">About-us</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" > <i className="fa-solid fa-xmark fa-xl" /></button>
                        </div>
                        <div className={`modal-body  ${darkMode ? 'text-white' : 'text-dark '}`}>
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
                            <button type="button" className={`btn btn-secondary   ${darkMode ? null : 'text-dark '}`} data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
