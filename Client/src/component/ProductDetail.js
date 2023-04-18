import axios from "axios";
import { useEffect, useState } from "react"
import '../App.css'
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "./Footer";
import { add } from "../store/cartSlice";
import { useSelector,useDispatch } from "react-redux";

function ProductDetail() {

    const [productData, setProductData] = useState({});
    const navigate = useNavigate();
    const dispatch=useDispatch();

    const handleAdd = (product) => {
        dispatch(add(product));

    };
    

    // problem at time of nested destructuring
    // const { category, description, image, price, rating:{count,rate}, title } = productData;
    const item = productData;
    const { id } = useParams();

    // side effect
    useEffect(() => {
        // both work vey well
        // fetch(`https://fakestoreapi.com/products/${id}`)
        // .then(res=>res.json())
        // .then(data=>{
        //     setProductData(data);
        //     console.log("Product data:")
        //     console.log(productData);
        // })
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            console.log(response.data);
            setProductData(response.data);
        })

    }, []);
    console.log("pr:")
    console.log(productData);
    console.log("pr:")
    return (
        <>
            <div className="container">
                {/* <button classNameName="btn btn-primary" onClick={()=>{navigate("/")}}>Back</button>
            <div className="card text-center" style={{ width:"18rem" }}>
               <div>
               <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" class="img-fluid" alt="..." />
               </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div> */}
                <div className="row custom-grid p-5">
                    <div className="col-6 custom-col" style={{ display: "flex", justifyContent: "center" }}>
                        <img src={item.image} style={{ width: "45%" }} alt="..." />
                    </div>
                    <div className="col-6 custom-col">
                        <div className="card" style={{ border: "none" }}>
                            <div className="card-body">
                                <h6 className="card-title" style={{ color: "darkgray" }}><i>Category:<strong>{item.category}</strong></i></h6>
                                <h2 className="card-title">{item.title}</h2>
                                {/* <p className="card-text"><i><b>rating:{item.rating}★</b></i></p> */}
                                <h1><b>${item.price}</b></h1>
                                <p>{item.description}</p>
                                <div style={{ display: "flex", justifyContent: "start", gap: "3rem" }}>
                                    <div>
                                        <button className="btn btn-outline-dark" onClick={() => handleAdd(item)}>Add to Cart</button  >
                                    </div>
                                    <div>
                                        <NavLink to="/cart" className="btn btn-primary">Go to Cart</NavLink  >
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ProductDetail;