import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { slots, name, price } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center my-10">
                    <h2 className="text-xl font-bold text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try another date.
                                </span>
                        }
                    </p>
                    <p >{slots.length} {slots.length > 1 ? 'SPACES ' : 'SPACE '} AVAILABLE</p>
                    <p><small>Price: ${price}</small></p>
                    <div className="card-actions justify-center">
                        <label htmlFor="booking-modal-6"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-sm bg-gradient-to-r from-secondary to-primary btn-secondary text-white uppercase">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;