import React from "react";
import { Link } from "react-router-dom";
import git from '../image/githublogo.png';
import "../App.css";
// import {Achor} from 'antd';
export function Footer(){
    return(
        <>
        <div className="Custom-Footer custom-bottom">
            <p className="custom-paragraph">Developed by <a style={{textDecoration:"none"}} href="https://github.com/vivekgupta011" target="_blank"> <strong style={{fontWeight:500,textDecoration:"none"}}>Vivek Gupta</strong> <img src={git} style={{width:30,paddingLeft:3}}/></a></p>

        </div>
        </>
    );
}