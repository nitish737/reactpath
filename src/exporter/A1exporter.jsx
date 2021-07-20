import React, {useState} from 'react' ;
import {Switch, Route} from "react-router-dom" ;
import Home from "../pages/Home";
import Navbar3 from "../components/navbar/Navbar3";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Login from "../pages/Login";
import Products from "../pages/Products";
import PostComment from "../components/PostComment";
import Wishlist from "../pages/wishlist/Wishlist";
import Cart from "../pages/cart/Cart";
import Account from "../pages/account/Account";
import Footer from "../pages/footer/Footer";
import Search from "../components/search/Search";
import Register from "../pages/Register";

const A1exporter = () => {
    const [navActive, setNavActive] = useState(false) ;
    return(
        <React.Fragment>
            <div className="navbar">
                <Navbar3 navActive={navActive} setNavActive={setNavActive}/>
            </div>
            <div className="pages" >
                <Switch>
                    <Route exact path = "/" component={Home}/>
                    <Route exact path = "/contact" component = {Contact}/>
                    <Route exact path = "/about" component = {About}/>
                    <Route exact path = "/login" component={Login}/>
                    <Route exact path = "/register" component = {Register}/>
                    <Route exact path = "/products" component = {Products}/>
                    <Route exact path = "/postcomment" component = {PostComment}/>
                    <Route exact path = "/wishlist" component={Wishlist}/>
                    <Route exact path="/account" component={Account}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path = "/search" component={Search}/>


                </Switch>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </React.Fragment>
    )

}






export default A1exporter ;









