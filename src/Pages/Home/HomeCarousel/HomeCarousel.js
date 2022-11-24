import React from 'react';
import car1 from '../../../assets/car1.png'
import car2 from '../../../assets/car2.png'
import car3 from '../../../assets/car3.png'
import car4 from '../../../assets/car4.png'

const HomeCarousel = () => {
    return (
        <div className='mb-10'>
            <div className="carousel w-full h-80 md:h-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={car1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6'>Get the <span className='text-green-500'>best</span> deal <span className='text-red-500'>!</span></h2>
                            <p className='text-white text-sm sm:text-xl md:text-2xl text-center'>Here you can get the best used cars of<br /> the entire country !</p>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={car2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6'><span className='text-yellow-500'>Offer</span> is limited this month !</h2>
                            <p className='text-white text-sm sm:text-xl md:text-2xl text-center'>Grab your favourite car from our list !</p>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={car3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6'>Search, Pay <span className='text-red-500'>and</span> Get !</h2>
                            <p className='text-white text-sm sm:text-xl md:text-2xl text-center'>Easiest payment system, say bye bye to hassle !</p>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={car4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div>
                            <h2 className='text-white text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-6'><span className='text-blue-400'>Warranty</span> is knocking your door !</h2>
                            <p className='text-white text-sm sm:text-xl md:text-2xl text-center'>For the first time, we are offering warranty for used cars !</p>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCarousel;