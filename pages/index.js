import React, { Fragment } from 'react';
import Navbar3 from '../components/Navbar3/Navbar3'
import Hero2 from '../components/hero2/hero2';
import CoupleSection2 from '../components/CoupleSection2/CoupleSection2';
import StorySection4 from '../components/StorySection4/StorySection4';
import PortfolioSection from '../components/PortfolioSection';
import EventSection from '../components/EventSection/EventSection';
import Footer from '../components/footer/Footer';
import ServiceSectionS2 from '../components/ServiceSection2/ServiceSection2';
import Scrollbar from '../components/scrollbar/scrollbar'
import ErrorPage from './404';
import { clarity } from 'react-microsoft-clarity';


const HomePage = () => {

    const searchParams = new URLSearchParams(document.location.search);

    clarity.init('mznpbaq0hl');
    clarity.identify('USER_ID', { userProperty: searchParams.get('invite') });

    const invList = 
    {
        mainha: {name: 'Joseane'},
        filho: {name: 'Filho Amado Rafael'},
        wellington: {name: 'Wellington e Gláucia'},
        leyla: {name: 'Leyla, Edson e Luiza'},
        leylanne: {name: 'Leylanne, Fernando Filho e Fernando Neto'},
        franciana: {name: 'Franciana, Wilson e Pietro'},
        carlos: {name: 'Carlos Wilson, Maria Eduarda e Luiz Carlos'},
        willana: {name: 'Wíllana'},
        wilton: {name: 'Wilton, Talyta e Arthur'},
        dielson: {name: 'Dielson Jr. e Mayla'},
        fabiana: {name: 'Fabiana'},
        robson: {name: 'Robson e Rosângela'},
        ivana: {name: 'Ivana, Ravi e Liz'},
        fernanda: {name: 'Fernanda'},
        marianna: {name: 'Marianna'},
        carol: {name: 'Carol'},
        marcia: {name: 'Márcia'},
        andrea: {name: 'Andréa'},
        alice: {name: 'Alice'},
        marineide: {name: 'Tia Marineide e Tio Claudino'},
        alcidete: {name: 'Tia Alcidete'},
        marilene: {name: 'Tia Marilene'},
        fie: {name: 'Tio Fie'},
        janete: {name: 'Tia Janete'},
        mae: {name: 'Maria Anunciada'},
        andreza: {name: 'Andreza'},
        aldiceia: {name: 'Aldiceia'},
        aline: {name: 'Aline e Cleiton'},
        helder: {name: 'Helder Moura, Katherine, Heloíse'},
        heldinho: {name: 'Heldinho e Lais'},
        henrique: {name: 'Henrique'},
        madrinha: {name: 'Madrinha Maria, Padrinho José Manoel e 1 acompanhante'},
        gracilene: {name: 'Tia Gracilene e Tio Divalcilo'},
        renato: {name: 'Renato e Julia'},
        gustavo: {name: 'Gustavo Prazinho e Nathalia'},
        rosa: {name: 'Rosa e Simone'},
        mike: {name: 'Mike Fryer e Samyla'},
        valeria: {name: 'Valéria'},
        Edvania: {name: 'Edvania'},
        toinho: {name: 'Toinho e Lurdinha'},
        natalia: {name: 'Natália'},
        rosasimone: {name: 'Rosa e Simone'},
        alessandra: {name: 'Alessandra e Tomás'}
    }

    if(searchParams.get('invite') in invList)
        return (
            <Fragment>
                <Navbar3 />
                <Hero2 invited={invList[searchParams.get('invite')]}/>
                <EventSection/>
                <ServiceSectionS2 />
                <Footer /> 
                <Scrollbar />
            </Fragment>
        );
    else
        return <ErrorPage></ErrorPage>

};

export default HomePage;