import React from 'react';
import Categories from '../Categories/Categories';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import HomeHero from '../HomeHero/HomeHero';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <Categories></Categories>
            <HomeHero></HomeHero>
        </div>
    );
};

export default Home;