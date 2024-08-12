import React from "react";
import SectionTitle from "../SectionTitle";
import s1 from '/public/images/service/img-1.jpg';
import s2 from '/public/images/service/img-2.jpg';
import s3 from '/public/images/service/img-3.jpg';
import s4 from '/public/images/service/img-4.jpg';
import s5 from '/public/images/service/img-5.jpg';
import s6 from '/public/images/service/img-6.jpg';
import s7 from '/public/images/service/img-7.jpg';
import s8 from '/public/images/service/img-8.jpg';
import s9 from '/public/images/service/img-9.jpg';
import s10 from '/public/images/service/img-10.jpg';
import qr1 from '/public/images/service/qr1.png';
import qr2 from '/public/images/service/qr2.png';
import qr3 from '/public/images/service/qr3.png';
import qr4 from '/public/images/service/qr4.png';
import qr5 from '/public/images/service/qr5.png';
import qr6 from '/public/images/service/qr6.png';
import qr7 from '/public/images/service/qr7.png';
import qr8 from '/public/images/service/qr8.png';
import qr9 from '/public/images/service/qr9.png';
import qr10 from '/public/images/service/qr10.png';
import GiftModal from './Modal'
import Image from "next/image";


const ServiceSectionS2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    let lista = [
        {
            img: s3,
            title: 'Lanches românticos',
            value: 'R$ 100,00',
            code: 'INVALIDO',
            qrcode: qr1
        },
        {
            img: s2,
            title: 'Voucher gasolina',
            value: 'R$ 200,00',
            code: 'INVALIDO',
            qrcode: qr2
        },
        {
            img: s1,
            title: 'Almoço dos noivos',
            value: 'R$ 250,00',
            code: 'INVALIDO',
            qrcode: qr3
        },
        {
            img: s4,
            title: 'Jantar para os noivos famintos',
            value: 'R$ 300,00',
            code: 'INVALIDO',
            qrcode: qr4
        },
        {
            img: s5,
            title: 'Passeio de quadriciclo pelo litoral',
            value: 'R$ 350,00',
            code: 'INVALIDO',
            qrcode: qr5
        },
        {
            img: s6,
            title: 'Passeio de bugg pelo litoral',
            value: 'R$ 400,00',
            code: 'INVALIDO',
            qrcode: qr6
        },
        {
            img: s7,
            title: 'Passeio de barco pelo Rio Sao Francisco (casal)',
            value: 'R$ 450,00',
            code: 'INVALIDO',
            qrcode: qr7
        },
        {
            img: s8,
            title: 'Diaria em pousada',
            value: 'R$ 500,00',
            code: 'INVALIDO',
            qrcode: qr8
        },
        {
            img: s9,
            title: 'Diária hotel',
            value: 'R$ 600,00',
            code: 'INVALIDO',
            qrcode: qr9
        }
    ];

    return (

        <section className="wpo-service-section-s2 section-padding p-120" id="Service">
            <div className="container-fluid">
                <SectionTitle subTitle={'Lista de presentes'} MainTitle={'Sintam-se à vontade quanto a isso'} s2Class={'wpo-section-title-s2'}/>
                <div className="wpo-service-wrap">
                    <div className="row">
                        {lista.map((item) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="wpo-service-item">
                                    <div className="wpo-service-img">
                                        <Image src={item.img} alt="" />
                                    </div>
                                    <div className="wpo-service-text">
                                        {item.title}
                                        <h2>{item.value}</h2>
                                        <GiftModal item={item}/>
                                    </div>
                                </div>
                                <br/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS2;