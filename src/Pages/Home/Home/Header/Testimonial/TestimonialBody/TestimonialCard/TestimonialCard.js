import React from 'react';

const TestimonialCard = ({ card }) => {
    const { name, img, description, address } = card;
    return (
        <div className='border border-gray-300 rounded-lg p-3 shadow-md'>
            <h2 className='font-medium'>{description}</h2>
            <div className='flex p-2 items-center'>
                <img className='w-10 h-10 border  border-green-300 rounded-full mr-2' src={img} alt="" />
                <div>
                    <h2 className='text-xl font-semibold'>{name}</h2>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;