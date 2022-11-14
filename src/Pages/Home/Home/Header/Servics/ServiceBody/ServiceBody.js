import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import img1 from '../../../../../../assets/images/fluoride.png'
import img2 from '../../../../../../assets/images/cavity.png'
import img3 from '../../../../../../assets/images/whitening.png'
import img4 from '../../../../../../assets/images/treatment.png'

const ServiceBody = () => {
    const serviceDb = [
        {
            id: 1,
            name: "Fluoride Treatment",
            img: img1,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            name: "Cavity Filling",
            img: img2,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            name: "Teeth Whitening",
            img: img3,
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='my-20'>
            <div className='text-center p-14'>
                <h2 className='text-secondary text-xl'>OUR SERVICES</h2>
                <h2 className='text-2xl font-semibold'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
                {
                    serviceDb.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className="card lg:card-side bg-base-100  mx-auto m-20 ">
                <figure><img className='w-1/2' src={img4} alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-3xl font-semibold">Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-xl '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="">
                        <button className="btn bg-gradient-to-r from-green-300 to-green-500 text-white">GET STARTED WITH US</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBody;