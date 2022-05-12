import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">

                <div class="modal-box">
                    <label for="booking-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking for: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5'>
                        <input type="text" disabled value={format(date || new Date(), "PP")} class="input w-full max-w-xs" />

                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your name" class="input w-full max-w-xs" />
                        <input type="text" name='email' placeholder="Email Address" class="input w-full max-w-xs" />
                        <input type="text" name='phon' placeholder="Phon Number" class="input w-full max-w-xs" />
                        <input type="submit" value='Submit' placeholder="Type here" class="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>

    );
};

export default BookingModal;