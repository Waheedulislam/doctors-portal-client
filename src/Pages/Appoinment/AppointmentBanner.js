import React, { useState } from 'react';
import chair from '../../../src/assets/images/chair.png'
import PrimaryBtn from '../../../src/Pages/Shared/PrimaryBtn/PrimaryBtn';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div>
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate} />
                    <h5 className='text-2xl'>You have Selected: {format(date || new Date(), "PP")}</h5>
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;