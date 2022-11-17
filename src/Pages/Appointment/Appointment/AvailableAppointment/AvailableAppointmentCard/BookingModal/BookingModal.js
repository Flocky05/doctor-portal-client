
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContex } from '../../../../../../Contexts/AuthProvider';


const BookingModal = ({ treatment, setTreatment, selectedDate, Option, displayName }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContex)

    const handleBookingModal = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(date, slot, name, email, phone);


        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
        }
        console.log(booking);
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirms')
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> {treatmentName}</h3>
                    <form onSubmit={handleBookingModal} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full" />
                        <select className='select select-bordered w-full'>
                            {
                                slots.map((slot, i) => <option value={slot} key={i} >{slot}</option>)
                            }

                        </select>
                        <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} disabled required className="input w-full" />
                        <input type="email" placeholder="Email" defaultValue={user?.email} disabled name="email" required className="input w-full" />
                        <input type="text" placeholder="Phone" name="phone" required className="input w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;