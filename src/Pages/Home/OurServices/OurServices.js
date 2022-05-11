import React from 'react';
import OurService from './OurService';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import ServiceDental from './ServiceDental';

const OurServices = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: '',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            description: '',
            img: whitening
        },
    ]
    return (
        <div className='my-28 '>
            <div className='text-center text-xl font-bold uppercase'>
                <h5 className='text-primary '>Our Services</h5>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <OurService
                        service={service}
                        key={service._id}
                    ></OurService>)
                }
            </div>
            <ServiceDental></ServiceDental>
        </div>
    );
};

export default OurServices;