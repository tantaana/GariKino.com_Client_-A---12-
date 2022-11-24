import React from 'react';

const HomeHero = () => {
    return (
        <div>
            <div className="hero h-[300px] md:h-[400px] lg:h-[600px]" style={{ backgroundImage: `url("https://hips.hearstapps.com/hmg-prod/images/buying-new-vers-used-1627408695.jpg?crop=0.668xw:1.00xh;0.185xw,0&resize=640:*")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-white">Grab <span className='text-yellow-500'>offer</span> every month !</h1>
                        <p className="mb-5 text-md md:text-xl text-white">Every month, we run a campaign for arranging an offer. In this offer, we provide thousands of popular offer. If you want offer related news, please subscribe to our newsletter.</p>
                        <button className="btn btn-primary">Subscribe to newsletter</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHero;