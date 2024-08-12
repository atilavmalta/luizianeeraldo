import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/error-404.svg'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Página não encontrada!</h3>
                                <p>Tente abrir o link enviado no convite.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;