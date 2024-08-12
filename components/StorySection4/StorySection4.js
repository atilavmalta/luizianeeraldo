import React from 'react'
import sImg1 from '/public/images/story/10.jpg'
import sImg2 from '/public/images/story/11.jpg'
import sImg3 from '/public/images/story/12.jpg'
import sImg4 from '/public/images/story/16.jpg'
import sImg5 from '/public/images/story/17.jpg'
import sImg6 from '/public/images/story/18.jpg'

import shape1 from '/public/images/story/s-shape1.png'
import shape2 from '/public/images/story/s-shape2.png'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'


const StorySection4 = (props) => {
    return (

        <section className="wpo-story-section-s4 section-padding" id="story">
            <div className="container">
                <SectionTitle subTitle={'Nossa história'} MainTitle={'Como tudo aconteceu'} />
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="round-shape"></div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text left-site">
                                        <Image src={sImg1} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <Image src={shape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <span className="date">13 de janeiro de 2021</span>
                                        <h3>Onde se encontraram</h3>
                                        <p>Ela queria ouvir Queen, ele a convidou para ir a um bar de rock, tocou de tudo, menos Queen.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text right-align-text">
                                        <h3>Muitas viagens depois</h3>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                    <div className="img-holder right-align-img">
                                        <Image src={sImg2} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <Image src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text left-site">
                                        <Image src={sImg4} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <Image src={shape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <h3>2021</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text right-align-text">
                                        <h3>2022</h3>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                    <div className="img-holder right-align-img">
                                        <Image src={sImg5} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <Image src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text left-site">
                                        <Image src={sImg6} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <Image src={shape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <h3>2023</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <span className="date"> 1 de outubro de 2023</span>
                                        <h3>Noivado à francesa.</h3>
                                        <p>Finalmente, em Paris, na SacreCour, suado e esbaforido, depois de subir 400 degraus de escada, ele se ajoelhou e fez o pedido... e ela surtou, mas disse sim.</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                    <div className="img-holder right-align-img">
                                        <Image src={sImg3} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <Image src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <div className="round-shape-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection4;