import React from 'react';
import DisplayReview from '../../Login/DisplayReview/DisplayReview';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Cars from '../Cars/Cars';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Cars></Cars>
            <DisplayReview></DisplayReview>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;