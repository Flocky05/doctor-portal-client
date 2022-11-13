import React from 'react';
import img from '../../../../../../assets/images/people1.png'
import img2 from '../../../../../../assets/images/people2.png'
import img3 from '../../../../../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard/TestimonialCard';

const TestimonialBody = () => {
    const testimonialDb = [
        {
            id: 1,
            name: "Winson Herry",
            address: "California",
            img: img,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            name: "Hena",
            address: "California",
            img: img2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 1,
            name: "Alex Smith",
            address: "California",
            img: img3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]
    return (
        <div className='my-20'>
            <div className='p-4'>
                <h2 className='text-secondary'>Testimonial</h2>
                <h2 className='text-4xl font-semibold'>What Our Patients Says</h2>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-3 p-4'>
                {
                    testimonialDb.map(card => <TestimonialCard
                        key={card.id}
                        card={card}
                    ></TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default TestimonialBody;