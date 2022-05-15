import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        // const bookings = {
        //     name: event.target.name.value,
        //     email: event.target.email.value,
        //     phon: event.target.phon.value
        // }
        // const url = `http://localhost:5000/bookings`
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(bookings)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         alert('Successful Item added')
        //         event.target.reset();
        //     })

        // to close the modal
        setTreatment(null)

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for: {name}</h3>

                    <form onClick={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date || new Date(), "PP")} className="input w-full max-w-xs" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input w-full max-w-xs" required />
                        <input type="text" name='email' value={user?.email || ''} disabled className="input w-full max-w-xs" required />
                        <input type="text" name='phon' placeholder="Phon Number" className="input w-full max-w-xs" required />
                        <input type="submit" value='Submit' placeholder="Type here" className="btn btn-secondary w-full max-w-xs" required />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookingModal;