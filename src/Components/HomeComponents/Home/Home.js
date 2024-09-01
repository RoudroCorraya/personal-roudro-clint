import React from 'react';
import './Home.css';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeWhatiDo from '../HomeWhatiDo/HomeWhatiDo';
import HomeSkill from '../HomeSkill/HomeSkill';

const Home = () => {
    return (
        <div className='banner'>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeWhatiDo></HomeWhatiDo>
            <HomeSkill></HomeSkill>
        </div>
    );
};

export default Home;