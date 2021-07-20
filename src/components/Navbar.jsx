import React from 'react' ;
import "./../styles/a1navbar.scss" ;
import logo from "./../img/a1logo.jpg" ;
import {MenuRounded, CloseRounded} from "@material-ui/icons";
import {NavLink} from "react-router-dom";

const Navbar = ({navActive, setNavActive}) => {
    const navLinks = [
        {
            key : 1 ,
            name : "Home" ,
            link : "/"
        },
        {
            key : 2 ,
            name : "Contact" ,
            link : "/contact"
        },
        {
            key : 3,
            name : "About" ,
            link : "/about"
        },
        {
            key : 4 ,
            name : "Login" ,
            link : "/login"
        },
        {
            key : 5 ,
            name : "Register" ,
            link : "/register"
        },
        {
            key : 6 ,
            name : "Products" ,
            link : "/products"
        },
        {
            key : 7 ,
            name : "Post Comment",
            link : "/postcomment"
        }

    ]
    return(
        <React.Fragment>
            <div className="wrapper">
                <div className={navActive? "navbar5598 active" : "navbar5598"}>
                    <div className="left">
                        <div className="logo">
                            <img src={logo} alt="logo"/>
                        </div>
                    </div>
                    <div className="right">
                        <div className="search">a</div>
                        <div className="cart">b</div>
                        <div className="hamburger" onClick={()=>setNavActive(!navActive)}>
                            <div className={navActive?"ham inactive" : "ham active"}>
                                <MenuRounded/>
                            </div>
                            <div className={navActive?"ham active": "ham inactive"}>
                                <CloseRounded/>
                            </div>
                        </div>
                        <div className="menubar">
                            <ul>
                                {navLinks.map((obj, index, key)=>{
                                    return(
                                        <React.Fragment key={index}>
                                            <li><NavLink to={obj.link} onClick={()=>setNavActive(false)}>{obj.name}</NavLink></li>

                                        </React.Fragment>
                                    )
                                })}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}





export default Navbar ;







