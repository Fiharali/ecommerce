import React , {useContext} from 'react'
import { DarkMode } from './Home'


function Menu() {
    const darkMode = useContext(DarkMode)
    return (
        <div>
            <button className="p-4  position-absolute top-0 end-0 bounce-in-top " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
                <i className={` fa-solid fa-bars fa-xl ${darkMode ? 'text-light' : 'text-dark'}`}/></button>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">this is menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" >
                        <i className="fa-solid fa-xmark fa-xl" style={{ color: '#151515' }} />
                    </button>
                </div>
                <div className="offcanvas-body">

                </div>
            </div>
        </div>
    )
}

export default Menu
