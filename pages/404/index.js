import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Error from '../../components/404/404';



const ErrorPage =() => {
    return(
        <Fragment>
            <Error/>
        </Fragment>
    )
};

export default ErrorPage;
