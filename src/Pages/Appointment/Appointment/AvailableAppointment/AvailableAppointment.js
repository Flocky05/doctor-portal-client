import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointmentCard from './AvailableAppointmentCard/AvailableAppointmentCard';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOption, setAppointmentOption] = useState([]);

    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])
    return (
        <div className='my-20'>
            <div>
                <h2 className='text-secondary text-center'>Available Appointments on {format(selectedDate, 'PP')}</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    appointmentOption.map(Option => <AvailableAppointmentCard
                        key={Option._id}
                        Option={Option}
                    ></AvailableAppointmentCard>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;