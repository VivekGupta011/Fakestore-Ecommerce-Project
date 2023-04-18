import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { Footer } from "./Footer";
import { remove } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import emptyCartImg from '../image/emptyCart.png';
export function Cart({ Count, Total, setCount, setTotal }) {
    const dispatch = useDispatch();
    const { getCount, getTotal, products } = useSelector((state) => state.cart);
    console.log("total:" + getTotal)
    console.log("thsi is data");
    console.log(products);

    const navigate=useNavigate();

    const { isAuthorized } = useSelector(state => state.user);
    const goToCheckout = () => navigate('/checkout');
    const gotoLoginPage = () => navigate("/Login");

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }
    return (

        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-xs-12 py-4 px-3 cart-css">
                        {products !== undefined && products.map((item) => (
                            <div className="card mb-3 card-5" style={{ maxWidth: 540 }} key={item.id}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title.substring(0, 30)}...</h5>
                                            <p className="card-text"><b>{item.category}</b></p>
                                            <p className="card-text"><b>${item.price}</b></p>
                                            <button className="btn btn-danger" onClick={() => handleRemove(item)}>Remove to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {products.length > 0 ?

                        <div className="col-md-4 col-xs-12 d-flex align-items-center">
                            <div className="container">
                                <div class="row custom-div">
                                    <div class="col"><strong>Total Items</strong></div>
                                    <div class="col"><strong>{Math.round(products.length)}</strong></div>
                                    <div class="w-100"></div>
                                    <div class="col"><strong>Total Amount</strong></div>
                                    <div class="col"><strong>${Math.round(getTotal)}</strong></div>
                                    <div class="w-100"></div>
                                    <div class="col"><strong>Delivery Charges</strong></div>
                                    <div class="col"><strong>$5</strong></div>
                                    <div class="w-100"></div>
                                    <hr></hr>
                                    <div class="w-100"></div>
                                    <div class="col"><strong>Grand Total</strong></div>
                                    <div class="col"><strong>${Math.round(getTotal) + 5}</strong></div>
                                    <hr></hr>
                                </div>
                                {isAuthorized ? (
                                    <button style={{ width: "100%" }} className="btn btn-primary"
                                        onClick={() => goToCheckout()}>Proceed to Checkout</button>
                                ) : (
                                    <button style={{ width: "100%" }} className="btn btn-danger" onClick={() => gotoLoginPage()}>Login to Checkout</button>
                                )}
                            </div>
                        </div>

                        : (
                            <>
                                <h4><i>Your Cart is Empty!</i></h4>
                                <img src={emptyCartImg} className="img-fluid rounded mx-auto" style={{ display: "block", marginLeft: "auto", marginRight: "auto", width: "35%" }} />
                            </>
                        )

                    }
                </div>


            </div>
            <Footer />
        </>

    )
}
