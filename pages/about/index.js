import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import About from '../../components/about/about';
import ServiceSectionS2 from '../../components/ServiceSection2/ServiceSection2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import FunFact from '../../components/FunFact/FunFact';
import PortfolioSectionS3 from '../../components/PortfolioSectionS3/PortfolioSectionS3';
import TeamSection from '../../components/TeamSection/TeamSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import PartnerSection from '../../components/PartnerSection';

const AboutPage = () => {
    return (
        <Fragment>
            <About />
            <ServiceSectionS2 />
            <PricingSection pClass={'pt-0'}/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutPage;
