import { useEffect, useState } from "react"
// import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./Footer";
import { add } from "../store/cartSlice";
function ProductsItem({ Count, Total, setCount, setTotal }) {
    const dispatch = useDispatch();
    // data:products basically we changing the name of object data to products using Javscript
    // const {data:products,status}=useSelector((state)=>state.product);
    const { data, status } = useSelector((state) => state.product);


    // for filtering
    const [Clone, SetClone] = useState([]);

    


    useEffect(() => {
        dispatch(fetchProducts());
        console.log("This is data api:")
        console.log(data);
        // fetch('https://fakestoreapi.com/products')
        //     .then(response => response.json())
        //     .then(products => {
        //         setData(products);
        //         console.log(data);
        //     })
    }, []
    )

    useEffect(() => {
        handleAllFilter(data);
        console.log("clone:")
        console.log(Clone);
    }, [data])


    const temp = 0;
    const handleAdd = (product) => {
        dispatch(add(product));

    };

    // handle setFilter
    const handleFilter = (category, data) => {
        SetClone(data.filter((item) => item.category == category));

    }

    // handle All set Filter
    function handleAllFilter(data) {
        SetClone(data);
        // console.log("data");
        // console.log(Clone);
    }

    if (status === STATUSES.LOADING) {
        return <h2>loading....</h2>
    }
    if (status === STATUSES.ERROR) {
        return <h2>Something went Wrong!</h2>
    }
    return (
        <div>

            {/* <h1 className="py-2 px-3">Welcome to the Redux Toolkit store..</h1> */}

            <strong><h2 className="text-center py-3">Most Trending Product!</h2></strong>
            <hr></hr>
            <div className="container" style={{ justifyContent: "space-evenly" }}>
               <div className="custom-button">
               <div> <button className="btn btn-secondary btn-sm px-5 py-1" type="button" style={{ fontWeight: "500" }} onClick={() => { handleAllFilter(data) }}>All</button></div>
                <div><button className="btn btn-secondary btn-sm px-3 py-1" type="button" style={{ fontWeight: "500" }} onClick={() => { handleFilter("men's clothing", data) }}>Men's Clothing</button></div>
                <div> <button className="btn btn-secondary btn-sm px-3 py-1" type="button" style={{  fontWeight: "500" }} onClick={() => { handleFilter("women's clothing", data) }}>Women Clothing</button></div>
                <div> <button className="btn btn-secondary btn-sm px-3 py-1" type="button" style={{  fontWeight: "500" }} onClick={() => { handleFilter("jewelery", data) }}>Jewelery</button></div>
                <div><button className="btn btn-secondary btn-sm px-3 py-1" type="button" style={{ fontWeight: "500" }} onClick={() => { handleFilter("electronics", data) }}>Electronic</button></div>
               </div>
            </div>
            <hr></hr>
            <div className="Custom-responsive container">
                {
                    Clone.map((item) => (
                        <div className="card mb-3 card-5" key={item.id} style={{ maxWidth: 540 }}>
                            <div className="row g-0">
                                <div className="col-md-4 p-3">
                                    <Link to={`/products/${item.id}`}>
                                        <img src={item.image} className="img-fluid rounded-start" alt="..." />
                                    </Link>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        {/* <p className="card-text">{item.description}</p> */}
                                        <Link to={`/products/${item.id}`} style={{ textDecoration: 'none' }}>
                                            <h5 className="card-title" style={{color:"black"}}>{item.title}</h5>
                                            <p className="card-text" style={{color:"black"}}><b>${Math.round(item.price)}</b> </p>
                                            <p className="card-text" style={{color:"black"}}>rate:<b>{item.rating.rate}</b> & count:<b>{item.rating.count}</b></p>
                                            <p className="card-text" style={{color:"black"}}><small className="text-muted">Category:<b><i>{item.category}</i></b></small></p>
                                        </Link>
                                        <button className="btn btn-primary mt-3" disabled={false} onClick={() => handleAdd(item)}>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer/>
        </div >
    )

}
export default ProductsItem;
