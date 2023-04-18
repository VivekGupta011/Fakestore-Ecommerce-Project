import img from '../image/storeimg.png';
export default function Slider() {
    return (
        <div>
            {/* <div className='row py-3'>
                <div className='col'> */}
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={img} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://img.freepik.com/free-vector/summer-sale-blue-white-background-professional-banner-multipurpose-design-free-vector_1340-20113.jpg?w=1060&t=st=1679381865~exp=1679382465~hmac=574b1a74905fbec987bbd2e5873f55c089983aa585efb9e8ee9a5b28fe10f716" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.avb9nDfw3kq7NOoP0grM4wHaEK?w=331&h=186&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="Third slide" />
                            </div>
                        </div>
                        {/* <NavLink className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </NavLink>
                        <NavLink className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </NavLink> */}
                    </div>
                {/* </div>
            </div> */}

        </div>
    )
}