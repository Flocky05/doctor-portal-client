import React from 'react';
import img1 from '../../../../assets/icons/clock.svg';
import img2 from '../../../../assets/icons/marker.svg';
import img3 from '../../../../assets/icons/phone.svg';
import HeaderCard from './HeaderCard/HeaderCard';

const HeaderCards = () => {
    const cardDb = [
        {
            id: 1,
            name: "Opening Hours",
            description: "Lorem Ipsum is simply dummy text of the pri",
            icon: img1,
            bgClass: ' bg-gradient-to-r from-green-400 to-blue-500'
        },
        {
            id: 2,
            name: "Visit our location",
            description: "Lorem Ipsum is simply dummy text of the pri",
            icon: img2,
            bgClass: 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id: 1,
            name: "Contact us now",
            description: "+000 123 456789",
            icon: img3,
            bgClass: 'bg-gradient-to-r from-green-400 to-blue-500'
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4'>
            {
                cardDb.map(card => <HeaderCard
                    key={card.id}
                    card={card}
                ></HeaderCard>)
            }
        </div>
    );
};

export default HeaderCards;