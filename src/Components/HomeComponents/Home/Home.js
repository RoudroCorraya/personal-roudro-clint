import React from 'react';
import './Home.css';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeWhatiDo from '../HomeWhatiDo/HomeWhatiDo';
import HomeSkill from '../HomeSkill/HomeSkill';
import EducationDiploma from '../EducationDiploma/EducationDiploma';
import Pricing from '../Pricing/Pricing';

const Home = () => {
    return (
        <div className=''>
            <HomeBanner></HomeBanner>
            <HomeAbout></HomeAbout>
            <HomeWhatiDo></HomeWhatiDo>
            <HomeSkill></HomeSkill>
            <EducationDiploma></EducationDiploma>
            <Pricing></Pricing>
        </div>
    );
};

export default Home;