import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import PrimaryBtn from '../../Shared/PrimaryBtn/PrimaryBtn';
import appointment from '../../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div >
            <div className='flex-1 py-3 px-3'>
                <h3 className='text-xl text-primary font-bold py-3'>Appointment</h3>
                <h2 className='text-3xl text-white py-3'>Make an Appointment Today</h2>
                <p className='text-white py-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;