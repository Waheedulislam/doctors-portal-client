import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { slots, name } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body ">
                    <h2 className="card-title text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0
                                ? <span>{slots[0]}</span>
                                : <span className='text-red-500'>Try another date.
                                </span>
                        }
                    </p>
                    <p >{slots.length} {slots.length > 1 ? 'SPACES ' : 'SPACE '} AVAILABLE</p>
                    <div className="card-actions justify-center">
                        <label for="booking-modal-6"
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(service)}
                            className="btn btn-secondary text-white uppercase">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;