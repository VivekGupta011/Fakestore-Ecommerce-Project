
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { logout } from './store/ExtraReducer';
import cart from './image/cart.png';
import { useSelector } from 'react-redux';

function NavbarComponent({Count,Total}) {
    const dispatch=useDispatch();
    const {products}=useSelector((state)=>state.cart);
    const {isAuthorized} = useSelector(state=>state.user);

    return (
        <div>
            <Navbar bg="light" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to="/" style={{textDecoration:"none",color:"black"}}><strong>ƑąʂհìօղϚհօք</strong></Link></Navbar.Brand>
                    <Nav style={{marginRight:0}}>
                    <Navbar.Brand href="#home"><Link to="/" style={{textDecoration:"none",color:"black",fontWeight:500}}>Home</Link></Navbar.Brand>
                    {/* <Navbar.Brand href="#home"><Link to="#" style={{textDecoration:"none",color:"black",fontWeight:500}}>About</Link></Navbar.Brand> */}
                    <Navbar.Brand href="#home"><Link to="/cart" style={{textDecoration:"none",color:"black",fontWeight:500}}>Cart</Link></Navbar.Brand>
                    <Navbar.Brand href="#home"><Link to="/cart" style={{textDecoration:"none",color:"black",fontWeight:500}}><button className='btn custom-btn btn-outline-dark '><img src={cart} style={{width:"20px"}}/>({products.length})</button></Link></Navbar.Brand>
                    {!isAuthorized ?
                    <Navbar.Brand href="#home"><Link to="/login" style={{textDecoration:"none",color:"black",fontWeight:500}}><button className='btn custom-btn btn-outline-dark '>Login</button></Link></Navbar.Brand> : <Navbar.Brand href="#home"><Link to="/login" style={{textDecoration:"none",color:"black",fontWeight:500}}><button className='btn custom-btn btn-outline-dark ' onClick={()=>{dispatch(logout())}}>Logout</button></Link></Navbar.Brand>
                    }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;