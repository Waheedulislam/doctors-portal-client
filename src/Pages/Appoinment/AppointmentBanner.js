import chair from '../../../src/assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appointment from '../../../src/assets/images/bg.png'


const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} class="hero min-h-screen  ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-6/12 lg:pl-28'>
                    <img src={chair} className="rounded-lg shadow-2xl" alt='Dentist Chair' />
                </div>
                <div >
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate} />
                    {/* <h6 className='text-1xl pl-6'>You have Selected: {format(date || new Date(), "PP")}</h6> */}
                </div>
            </div>

        </div>
    );
};

export default AppointmentBanner;