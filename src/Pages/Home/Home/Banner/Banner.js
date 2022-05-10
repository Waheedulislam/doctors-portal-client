import React from 'react';
import Chair from '../../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen  px-18 py-0 bg-[url('/src/assets/images/bg.png')]" >
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={Chair} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-8 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button class="btn btn-primary uppercase text-white text-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;