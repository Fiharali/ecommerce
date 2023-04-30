import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import Menu from '@/Pages/Home/Menu'
import ShopCart from '@/Pages/Home/ShopCart'
import './Women.css'
function WomenDetail(props) {

    const data = [
        {
            image: `/images/${props.img1}`,

        },
        {
            image: `/images/${props.img2}`,

        },
        {
            image: `/images/${props.img3}`,

        },


    ]


    return (
        <div className="contt pb-5">
            <h1 className='p-2 bounce-in-top '> <img src="/images/logo.png" width={69} alt="" srcset="" /></h1>
            <Menu />
            <ShopCart />
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 mb-10">
                        <div className='border-2 border border-bottom-0'>
                            <Carousel
                                data={data}
                                time={2000}
                                width="450px"
                                height="450px"
                                radius="10px"
                                slideNumber={true}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="transparent"
                                slideImageFit="contain"
                                thumbnails={true}
                                thumbnailWidth="90px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "850px",
                                    maxHeight: "500px",
                                }}
                            />
                        </div>

                    </div>
                    <div className='col-lg-7 col-md-12 '>
                        <h1 className='text-center fs-2 p-lg-5 p-3'>title</h1>
                        <p className='mx-5 text-justify p-3'>description L laudantium, modi rerum molestiae temporibus iusto aperiam accusamus explicabo repudiandae, quae illo aut similique. Officiis ducimus modi ratione nostrum. Placeat quia cupiditate reprehenderit voluptatibus cum expedita.</p>
                        <div className='text-center '> <span className='fs-4 text-success p-3'> 220$</span> <span className='text-opacity-25'><del>222$</del></span> </div>
                        <div className='text-center pt-5'>
                            <button className=' button1 p-2 m-2'> Paiement When Recieving
                                <i className="fa-solid fa-dollar-sign fa-xl" ></i>
                            </button>
                            <button className='button2 p-2 m-2'>Add To Cart Shop
                                <i className="fa-solid fa-cart-shopping fa-xl" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    )
}

export default WomenDetail
