import React from 'react'
import Zoom from 'react-reveal/Zoom';
function Footer() {
    return (
        <>
        <Zoom left cascade>
        <div id="footer" className='m-1'>
            <div className=" d-flex justify-content-center ">
                <span className=' col-7 text-center mt-5 '>
                    <h1 className='h1 m-5'>FOOTER FOOTER</h1>
                    <p className='text-break'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa amet natus magnam sapiente laboriosam ut totam, quae necessitatibus! Magni ducimus quisquam consectetur ut non laboriosam maxime vel minima sunt similique.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa amet natus magnam sapiente laboriosam ut totam, quae necessitatibus! Magni ducimus quisquam consectetur ut non laboriosam maxime vel minima sunt similique.
                    </p>
                    <div className='mt-5 p-5 pb-0 mb-3'>
                        <button className=' border border-white  m-2'><i className="fa-brands fa-facebook-f  fa-2xl p-4" style={{ color: '#005eff' }} /></button>
                        <button className=' border border-white   m-2'><i className="fa-brands fa-instagram fa-2xl" style={{ color: '#005eff' }} /></button>
                        <button className=' border border-white  m-2'><i className="fa-brands fa-twitter fa-2xl" style={{ color: '#005eff' }} /> </button>
                    </div>
                    &copy;  copyright :byAliFihar <br /> 2023
                </span>
            </div>
        </div>
        </Zoom>
        </>
    )
}

export default Footer
