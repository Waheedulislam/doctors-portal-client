import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phon from '../../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart cardTitle='Opening-hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCart>
            <InfoCart cardTitle='Visit our location' bgClass='bg-accent' img={marker}></InfoCart>
            <InfoCart cardTitle='Contact us now' bgClass='bg-gradient-to-r from-secondary to-primary' img={phon}></InfoCart>
        </div>
    );
};

export default Info;