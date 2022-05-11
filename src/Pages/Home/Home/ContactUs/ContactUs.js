import React from 'react';
import contactUs from '../../../../assets/images/appointment.png'
import PrimaryBtn from '../../../Shared/PrimaryBtn/PrimaryBtn';

const ContactUs = () => {
    return (
        <section style={{
            background: `url(${contactUs})`
        }} className='py-16'>
            <div >
                <h4 className='text-center text-2xl text-secondary text-bold'>Contact Us</h4>
                <h1 className='text-5xl text-center text-bold text-white'>Stay connected with us</h1>

                <div className='text-center py-14  px-10'>
                    <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full max-w-md my-2" />
                    <br />

                    <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-md my-2" />
                    <br />

                    <textarea type="text" placeholder="Your message" className="input input-bordered input-lg w-full max-w-md my-2" />
                    <br />
                    <PrimaryBtn >Submit</PrimaryBtn>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;