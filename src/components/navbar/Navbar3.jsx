import React from 'react' ;
import "./../../styles/a3navbar.scss" ;
import {
    CloseRounded,
    FavoriteRounded,
    MenuRounded, PersonRounded,
    SearchRounded,
    ShoppingBasketRounded
} from "@material-ui/icons";
import navLinks from "./navbardata";
import {NavLink} from "react-router-dom";



const Navbar3 = ({navActive, setNavActive}) => {
    return(
        <React.Fragment>
            <div className="wrapper">
                <div className="navbar836">
                    <nav className={navActive?"nav active":"nav"}>
                        <div className="left">
                            <div className="logo">
                                <NavLink to="/"><img src="https://picsum.photos/1000/200" alt=""/></NavLink>
                            </div>
                        </div>
                        <div className="right">
                            <div className="search">
                                <NavLink to="/search">
                                    <SearchRounded/>
                                </NavLink>
                            </div>

                            <div className="hamburger" onClick={()=>setNavActive(!navActive)}>
                                <div className={navActive?"ham":"ham active"}>
                                    <MenuRounded/>
                                </div>
                                <div className={navActive?"ham active":"ham"}>
                                    <CloseRounded/>
                                </div>
                            </div>
                        </div>
                        <div className="menu">
                            <ul>
                                {navLinks.map((obj, index)=>{
                                    return(
                                        <React.Fragment key={index}>
                                            <li onClick={()=>{setNavActive(false)}}>
                                                <NavLink to={obj.link}>
                                                    {obj.name}
                                                </NavLink>
                                            </li>
                                        </React.Fragment>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="bottom-nav">
                            <div className="user">
                                <NavLink to="/account">
                                    <PersonRounded/>
                                </NavLink>
                            </div>
                            <div className="wishList">
                                <NavLink to="/wishlist">
                                    <FavoriteRounded/>
                                </NavLink>

                            </div>
                            <div className="cart">
                                <NavLink to="/cart">
                                    <ShoppingBasketRounded/><span>33</span>
                                </NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </React.Fragment>
    )
}





export default Navbar3 ;