import React from 'react';
import Chair from '../../../../assets/images/chair.png'
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn';
const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/images/bg.png')]">
            <div className="hero min-h-screen " >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-11/12 lg:pl-28'>
                        <img src={Chair} className="rounded-lg shadow-2xl" alt='Dentist Chair' />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p className="py-8 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <PrimaryBtn>Get Started</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;