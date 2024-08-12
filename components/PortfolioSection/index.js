import React from 'react'
import pImg1 from '/public/images/portfolio/1.jpg'
import pImg2 from '/public/images/portfolio/2.jpg'
import pImg3 from '/public/images/portfolio/3.jpg'
import pImg4 from '/public/images/portfolio/4.jpg'
import pImg5 from '/public/images/portfolio/5.jpg'
import pImg6 from '/public/images/portfolio/6.jpg'
import pImg7 from '/public/images/portfolio/7.jpg'
import pImg8 from '/public/images/portfolio/8.jpg'
import pImg9 from '/public/images/portfolio/9.jpg'
import pImg10 from '/public/images/portfolio/10.jpg'
import pImg11 from '/public/images/portfolio/11.jpg'
import pImg12 from '/public/images/portfolio/12.jpg'
import pImg13 from '/public/images/portfolio/13.jpg'
import pImg14 from '/public/images/portfolio/14.jpg'
import pImg15 from '/public/images/portfolio/15.jpg'
import pImg16 from '/public/images/portfolio/16.jpg'
import pImg17 from '/public/images/portfolio/17.jpg'
import pImg18 from '/public/images/portfolio/18.jpg'
import pImg19 from '/public/images/portfolio/19.jpg'
import pImg20 from '/public/images/portfolio/20.jpg'
import pImg21 from '/public/images/portfolio/21.jpg'
import pImg22 from '/public/images/portfolio/22.jpg'
import pImg23 from '/public/images/portfolio/23.jpg'
import pImg24 from '/public/images/portfolio/24.jpg'
import pImg25 from '/public/images/portfolio/25.jpg'
import pImg26 from '/public/images/portfolio/26.jpg'
import pImg27 from '/public/images/portfolio/27.jpg'
import pImg28 from '/public/images/portfolio/28.jpg'
import pImg29 from '/public/images/portfolio/29.jpg'
import pImg30 from '/public/images/portfolio/30.jpg'
import pImg31 from '/public/images/portfolio/31.jpg'
import pImg32 from '/public/images/portfolio/32.jpg'
import pImg33 from '/public/images/portfolio/33.jpg'
import pImg34 from '/public/images/portfolio/34.jpg'
import pImg35 from '/public/images/portfolio/35.jpg'
import pImg36 from '/public/images/portfolio/36.jpg'
import pImg37 from '/public/images/portfolio/37.jpg'
import pImg38 from '/public/images/portfolio/38.jpg'
import pImg39 from '/public/images/portfolio/39.jpg'
import pImg40 from '/public/images/portfolio/40.jpg'
import pImg41 from '/public/images/portfolio/41.jpg'
import pImg42 from '/public/images/portfolio/42.jpg'
import pImg43 from '/public/images/portfolio/43.jpg'
import pImg44 from '/public/images/portfolio/44.jpg'
import pImg45 from '/public/images/portfolio/45.jpg'
import pImg46 from '/public/images/portfolio/46.jpg'
import pImg47 from '/public/images/portfolio/47.jpg'
import pImg48 from '/public/images/portfolio/48.jpg'
import pImg49 from '/public/images/portfolio/49.jpg'
import pImg50 from '/public/images/portfolio/50.jpg'
import pImg51 from '/public/images/portfolio/51.jpg'
import pImg52 from '/public/images/portfolio/52.jpg'
import pImg53 from '/public/images/portfolio/53.jpg'
import pImg54 from '/public/images/portfolio/54.jpg'
import pImg55 from '/public/images/portfolio/55.jpg'
import pImg56 from '/public/images/portfolio/56.jpg'
import pImg57 from '/public/images/portfolio/57.jpg'
import pImg58 from '/public/images/portfolio/58.jpg'
import pImg59 from '/public/images/portfolio/59.jpg'
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const images = [
    pImg1,
    pImg2,
    pImg3,
    pImg4,
    pImg5,
    pImg6,
    pImg7,
    pImg8,
    pImg9,
    pImg10,
    pImg11,
    pImg12,
    pImg13,
    pImg14,
    pImg15,
    pImg16,
    pImg17,
    pImg18,
    pImg19,
    pImg21,
    pImg22,
    pImg23,
    pImg24,
    pImg25,
    pImg26,
    pImg27,
    pImg28,
    pImg29,
    pImg31,
    pImg32,
    pImg33,
    pImg34,
    pImg35,
    pImg36,
    pImg37,
    pImg38,
    pImg39,
    pImg41,
    pImg42,
    pImg43,
    pImg44,
    pImg45,
    pImg46,
    pImg47,
    pImg48,
    pImg49,
    pImg51,
    pImg52,
    pImg53,
    pImg54,
    pImg55,
    pImg56,
    pImg57,
    pImg58,
    pImg59,
]

const PortfolioSection = (props) => {

    const imageSizes = [16, 32, 48, 64, 96, 128, 256, 384];
    const deviceSizes = [640, 750, 828, 1080, 1200, 1920, 2048, 3840];

    function nextImageUrl(src, size) {
        return `/_next/image?url=${encodeURIComponent(src)}&w=${size}&q=75`;
    }

    const slides = images.map(({ src, width, height }) => ({
        width,
        height,
        src: nextImageUrl(src, width),
        srcSet: imageSizes
            .concat(...deviceSizes)
            .filter((size) => size <= width)
            .map((size) => ({
                src: nextImageUrl(src, size),
                width: size,
                height: Math.round((height / width) * size),
            })),
    }));

    const [open, setOpen] = React.useState(false);

    return (

        <section className={`wpo-portfolio-section section-padding ${props.ptClass}`} id="gallery">
            <h2 className="hidden">some</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="portfolio-grids gallery-container clearfix portfolio-slide">
                            <Slider {...settings}>
                                {images.map((item, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder" key={item} onClick={() => setOpen(true)}>
                                            <Image src={item} alt="" />
                                            <div className="hover-content">
                                                <i className="ti-plus"></i>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                plugins={[Zoom]}
            />
        </section>
    )
}

export default PortfolioSection;