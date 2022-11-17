import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointmentCard from './AvailableAppointmentCard/AvailableAppointmentCard';
import BookingModal from './AvailableAppointmentCard/BookingModal/BookingModal';

const AvailableAppointment = ({ selectedDate }) => {
    // const [appointmentOption, setAppointmentOption] = useState([]);
    const [treatment, setTreatment] = useState(null);


    const { data: appointmentOption = [] } = useQuery({
        queryKey: ['appointmentsOption'],
        queryFn: () => fetch('http://localhost:5000/appointmentOption')
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOption')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOption(data))
    // }, [])
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
                        setTreatment={setTreatment}
                    ></AvailableAppointmentCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    Option={Option}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;