import React from 'react';
import AppointmentCard from './Header/AppointmentCard/AppointmentCard';
import Header from './Header/Header';
import ServiceBody from './Header/Servics/ServiceBody/ServiceBody';
import TestimonialBody from './Header/Testimonial/TestimonialBody/TestimonialBody';
import HeaderCards from './HeaderCard/HeaderCards';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <HeaderCards></HeaderCards>
            <ServiceBody></ServiceBody>
            <AppointmentCard></AppointmentCard>
            <TestimonialBody></TestimonialBody>

        </div>
    );
};

export default Home;

// <Link to='/'><button className='btn-ghost  px-3 py-1 rounded-lg m-2'>Home</button></Link>