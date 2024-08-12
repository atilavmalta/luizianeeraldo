import React from 'react'
import { Slide } from "react-awesome-reveal";
import Link from 'next/link'
import shape1 from '/public/images/footer-shape-1.svg'
import shape2 from '/public/images/footer-shape-2.svg'
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = (props) => {
    return (
        <footer className={`wpo-site-footer ${props.footerClass}`}>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12"></div>
                        <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Link className='logo' onClick={ClickHandler} href="/">L&E</Link>
                                </div>
                                <p>Venha testemunhar e comemorar conosco.</p>
                            </div>
                        </div>

                        <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12"></div>
                    </div>
                </div>
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> &copy; Copyright 2024 | <Link onClick={ClickHandler} href="/">L&E</Link> | All right
                                reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-shape-1">
                <Slide direction="left" duration="1000" triggerOnce="true">
                    <Image src={shape1} alt="" />
                </Slide>
            </div>
            <div className="ft-shape-2">
            <Slide direction="right" duration="1200" triggerOnce="true">
                    <Image src={shape2} alt="" />
                </Slide>
            </div>
        </footer>
    )
}

export default Footer;