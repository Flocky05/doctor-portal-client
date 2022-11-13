import React from 'react';

const AvailableAppointmentCard = ({ Option }) => {
    const { name, slots } = Option;
    return (
        <div className="card shadow-lg border border-gray-300">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-green-400 text-2xl">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : "try another day"}</p>
                <div className="card-actions justify-end">
                    <button className="bg-gradient-to-r from-green-300 to-green-600 px-2 py-1 rounded-lg text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointmentCard;