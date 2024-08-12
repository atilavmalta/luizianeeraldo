import React from 'react'
import { Slide } from "react-awesome-reveal";
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/event/1.jpg'
import LocationMap from './Modal'
import Image from 'next/image';


const Events = [
    {
        Simg: sImg1,
        title: 'Capela do hotel campestre de Aldeia',
        li1: '20/10/2024, Domingo 22:00',
        li2: 'R. José Severino de Barros, 465, km 13, Aldeia, Camaragibe',
        animation:'1200',
    }
]

const EventSection = (props) => {
    return (
        <section className="wpo-event-section section-padding" id="event">
            <div className="container">
                <SectionTitle subTitle={'Nosso Casamento'} MainTitle={'Quando & Onde'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12"></div>
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <Slide direction="up" duration={event.animation} triggerOnce="true">
                                    <div className="wpo-event-item">
                                        <div className="wpo-event-img">
                                            <div className="wpo-event-img-inner">
                                                <Image src={event.Simg} alt="" />
                                            </div>
                                        </div>
                                        <div className="wpo-event-text">
                                            <div className="title">
                                                <h2>{event.title}</h2>
                                            </div>
                                            <ul>
                                                <li>{event.li1}</li>
                                                <li>{event.li2}</li>
                                                <li>{event.li3}</li>
                                                <li><LocationMap /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSection;