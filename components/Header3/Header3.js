import React, { useState } from 'react'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { Link } from 'react-scroll'
import NavLink from 'next/link'


const Header3 = (props) => {
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
                                    <MobileMenu2 />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <NavLink onClick={ClickHandler} className="navbar-brand" href="/home">L&E</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <NavLink href="/">Inicio</NavLink>
                                        </li>
                                        <li><Link activeClass="active" to="event" spy={true} smooth={true} offset={-80} duration={500} >Evento</Link></li>
                                        <li><Link activeClass="active" to="Service" spy={true} smooth={true} offset={-80} duration={500} >Presentear</Link></li>
                                    </ul>
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
export default connect(mapStateToProps, { removeFromCart })(Header3);