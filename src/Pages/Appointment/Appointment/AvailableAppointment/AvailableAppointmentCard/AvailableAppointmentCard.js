import React from 'react';

const AvailableAppointmentCard = ({ Option, setTreatment }) => {
    const { name, slots } = Option;
    return (
        <div className="card shadow-lg border border-gray-300">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400 text-2xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
                <p>{slots.length}{slots.length > 1 ? 'spaces' : 'space'}</p>
                <div className="card-actions justify-end">
                    <label htmlFor="BookingModal"
                        className="btn h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-1 rounded-lg text-white"
                        onClick={() => setTreatment(Option)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentCard;