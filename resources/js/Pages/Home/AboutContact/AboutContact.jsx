import React from 'react'
import './AboutContact.css'

function AboutContact() {
    return (
        <>
            <div className='contactus mt-5 text-center'>
                <div className='container containerr'>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 imgAbout">

                        </div>
                        <div className="col-lg-6 col-md-12  text-light">
                            <h1 className='text-center aboutustitle mt-5 '>About Us</h1>
                            <p className='text-justify mt-5 mx-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim molestias iusto quo ipsa numquam? Odio dolor perferendis beatae nesciunt
                                elit. Enim molestias iusto quo ipsa numquam? Odio dolor perferendis beatae nesciunt molestias saepe quos tempore consequuntur quo. Laboriosam aliquam vel nobis placeat!
                                <button className='border border-1 ms-5 p-2 contactButton' data-bs-toggle="modal" data-bs-target="#modalAbout">Read More ...</button></p>
                            <div className="icons mt-5">
                                <a href="#" className="icon fb p-4 mx-3"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" className="icon snp p-4 mx-3"><i className="fa-brands fa-snapchat"></i></a>
                                <a href="#" className="icon wtsp p-4 mx-3"><i className="fa-brands fa-whatsapp"></i></a>
                                <a href="#" className="icon insta p-4 mx-3"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <button className=' border border-1 rounded-3 m-3 p-3 contactButton' data-bs-toggle="modal" data-bs-target="#contactmodal" >Contact-Us </button>

                        </div>
                    </div>

                </div>
            </div>

            <div className="modal fade text-dark" id="modalAbout" tabIndex={-1} aria-labelledby="modalAboutLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h1 className="modal-title fs-5" id="modalAboutLabel">Modal title</h1> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body text-dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui, reprehenderit magni laudantium quidem deleniti, illo explicabo suscipit voluptates nam, iure ad asperiores cum nisi voluptate fugit officia molestias ab.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui, reprehenderit magni laudantium quidem deleniti, illo explicabo suscipit voluptates nam, iure ad asperiores cum nisi voluptate fugit officia molestias ab.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui, reprehenderit magni laudantium quidem deleniti, illo explicabo suscipit voluptates nam, iure ad asperiores cum nisi voluptate fugit officia molestias ab.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui, reprehenderit magni laudantium quidem deleniti, illo explicabo suscipit voluptates nam, iure ad asperiores cum nisi voluptate fugit officia molestias ab.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui, reprehenderit magni laudantium quidem deleniti, illo explicabo suscipit voluptates nam, iure ad asperiores cum nisi voluptate fugit officia molestias ab.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde qui, reprehenderit magni laudantium quidem deleniti, illo explicabo suscipit voluptates nam, iure ad asperiores cum nisi voluptate fugit officia molestias ab.
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn " data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
            {/* ////////////////////////////////// */}
            <div class="modal fade" id="contactmodal" tabindex="-1" aria-labelledby="contactmodalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="contactmodalLabel"> thank's For Your Contact</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="recipient-name" className="col-form-label">Subjects:</label>
                                    <input type="text" className="form-control" id="recipient-name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message-text" className="col-form-label">Message:</label>
                                    <textarea className="form-control" id="message-text" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn border border-3 border-danger " data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn border border-3 border-success">Send message</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AboutContact
