import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/images/chair.png'

const Header = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <div>

                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Your New Smile Starts
                            <br className="hidden md:block" />
                            Here{' '}
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sint voluptatibus velit quas dolores minima saepe asperiores aliquam reprehenderit, mollitia, laboriosam earum eius similique nisi, maiores possimus deserunt sapiente esse?
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:flex-row">
                        <Link
                            to="/"
                            className="text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg px-4 py-1 m-2"
                        >
                            <span className="mr-3">Get Started</span>

                        </Link>
                        <Link
                            to="/"
                            aria-label=""
                            className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Get 15% discount
                        </Link>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={img}
                        alt=""
                    />

                </div>
            </div>
        </div>
    );
};

export default Header;