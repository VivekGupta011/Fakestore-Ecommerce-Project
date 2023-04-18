import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../LoginRegister/Login.css";
import Register from "./Regitster";
import { setAuthentication } from './../../store/ExtraReducer';
import { useDispatch } from 'react-redux';
// import Loader from './../Loader/Loader';
import axios from 'axios';

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
        loginUser();
    };
    const loginUser = () => {
        // setLoading(true);
        axios.post(`/api/login`, {
            email, pwd: password
        }).
            then(res => {
                if (res.status === 200) {
                    alert("Logged In!");
                    dispatch(setAuthentication({ payload: true }));
                    setPassword("");
                    setEmail("");
                    //     setLoading(false);
                    navigate('/', { replace: true });
                }
            }).
            catch(err => {
                //   setLoading(false);
                alert(err.response.data.errMsg);
            });
    }
    const gotoSignUpPage = () => navigate("/SignupPage");

    return (
        <div>
            <Link to="/">
                <div className="back">
                    <span style={{ padding: "2px 10px 0px" }}><i class="fas fa-long-arrow-left"></i></span>
                    <h3>Back to Shopping</h3>
                </div>
            </Link>
            <div className='login__container'>
                <h2>Login </h2>
                {/* {!loading ? ( */}
                <form className='login__form' onSubmit={handleSubmit}>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        minLength={8}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='loginBtn'>SIGN IN</button>
                    <p>
                        Don't have an account?{" "}
                        <span className='link'>
                            <Link to='/Register'> Sign Up</Link>
                        </span>
                    </p>
                </form>
                {/* // ) :(
                //   <Loader />
                // ) */}
                {/* } */}
            </div>
        </div>
    );
};
export default Login;