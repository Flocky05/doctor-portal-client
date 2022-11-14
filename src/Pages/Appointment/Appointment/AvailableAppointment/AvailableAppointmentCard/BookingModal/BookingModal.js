
import { format } from 'date-fns';
import React from 'react';


const BookingModal = ({ treatment, selectedDate, Option }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

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
            treatment: name,
            patient: name,
            slot,
            email,
            phone,
        }
        console.log(booking);

    }
    return (
        <>
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> {name}</h3>
                    <form onSubmit={handleBookingModal} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full" />
                        <select className='select select-bordered w-full'>
                            {
                                slots.map((slot, i) => <option value={slot} key={i} >{slot}</option>)
                            }

                        </select>
                        <input type="text" placeholder="Name" name="name" required className="input w-full" />
                        <input type="email" placeholder="Email" name="email" required className="input w-full" />
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