import React , {useContext} from 'react'
import { DarkMode } from './Home'

function ShopCart() {

    const darkMode = useContext(DarkMode)

    return (
        <>
            <div>
                <button className="p-4   position-absolute top-0 end-20 bounce-in-top " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling2" aria-controls="offcanvasScrolling2">
                    <i className={` fa-solid fa-cart-shopping fa-xl  ${darkMode ? 'text-light' : 'text-dark'}`} /></button>
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling2" aria-labelledby="offcanvasScrollingLabel2">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-dark" id="offcanvasScrollingLabel2">this is shop cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" >
                            <i className="fa-solid fa-xmark fa-xl" style={{ color: '#151515' }} />
                        </button>
                    </div>
                    <div className="offcanvas-body">

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopCart
