import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MakeAppointment from '../OurServices/MakeAppointment';
import OurServices from '../OurServices/OurServices';
import Banner from './Banner/Banner';
import ContactUs from './ContactUs/ContactUs';
import Info from './Info/Info';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;