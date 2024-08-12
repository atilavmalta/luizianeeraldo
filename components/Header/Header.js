import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (

        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu/>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home">Habibi</Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link href="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/home">Wedding Home 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-2">Wedding Home 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-3">Announcement Home 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-4">Announcement Home 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-5">Muslim Wedding Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-6">Asian Wedding Home</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home-rtl">Muslim Wedding Home(RTL)</Link></li>
                                                <li><Link onClick={ClickHandler} href="/invitation-1">Wedding Invitation 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/invitation-2">Wedding Invitation 2</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Event Planner Homes</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/home-7">Wedding Planner 1</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/home-8">Wedding Planner 2</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/home-9">Wedding Planner 3</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Wedding Shop Homes</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/shop-home">Bridal Shop</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/shop-home-2">Wedding Bouquet Shop</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/shop-home-video-bg">Bouquet Shop Video Bg</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/shop-home-3">Wedding Cake Shop</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/story">Our Story</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/story">Our Story Style 1</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/story-2">Our Story Style 2</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/story-3">Our Story Style 3</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/story-4">Our Story Style 4</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/story-5">Our Story Style 5</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/story-6">Our Story Style 6</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/accomodation">Accomodation</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/rsvp">RSVP</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/rsvp">RSVP Style 1</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/rsvp-2">RSVP Style 2</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/rsvp-3">RSVP Style 3</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/rsvp-4">RSVP Style 4</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/rsvp-5">RSVP Style 5</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/rsvp-6">RSVP Style 6</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/rsvp-7">RSVP Style 7</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/gallery">Gallery</Link></li>
                                                <li><Link onClick={ClickHandler} href="/planner">Planners</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Jenny-Wilson">Planner Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/groom-bride">Brides & Grooms</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/service">Serevice</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/service">Serevice</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-s2">Serevice S2</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-s3">Serevice S3</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/service-single/Wedding-Dress">Serevice Single</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Auth Pages</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/login">Login</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/forgot">Forgot Password</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link onClick={ClickHandler} href="/coming">Coming Soon</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/portfolio-grid">Portfolio</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/portfolio-grid">Portfolio Grid</Link></li>
                                                <li><Link onClick={ClickHandler} href="/portfolio-masonary">Portfolio Masonary</Link></li>
                                                <li><Link onClick={ClickHandler} href="/portfolio-masonary-s2">Portfolio Masonary S2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/portfolio-masonary-s3">Portfolio Masonary S3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-single/James-Amelia">Portfolio Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/shop">Shop</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Earrings">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/wishlist">Wishlist</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/blog">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/Top-10-wedding">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/Top-10-wedding">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/Top-10-wedding">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <Link onClick={ClickHandler} href="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                    <Link onClick={ClickHandler} href="/cart" className="view-cart-btn">View Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header);