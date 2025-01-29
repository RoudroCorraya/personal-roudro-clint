import React from 'react';

import './Home.css';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeWhatiDo from '../HomeWhatiDo/HomeWhatiDo';
import HomeSkill from '../HomeSkill/HomeSkill';
import EducationDiploma from '../EducationDiploma/EducationDiploma';
import Pricing from '../Pricing/Pricing';
import Portfolio from '../Portfolio/Portfolio';
import HomeContact from '../HomeContact/HomeContact';
import HomePortfolio from '../HomePortfolio/HomePortfolio';
import HomeBlog from '../HomeBlog/HomeBlog';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
    return (
        <div className=''>
          
                <HomeBanner></HomeBanner>
         
           
            <HomeAbout></HomeAbout>
          


            
            <HomeWhatiDo></HomeWhatiDo>
            <HomeSkill></HomeSkill>
            <EducationDiploma></EducationDiploma>
            <Pricing></Pricing>
            <HomeBlog></HomeBlog>
            <HomeContact></HomeContact>
           





            {/* <Portfolio></Portfolio> */}


            {/* <HomePortfolio></HomePortfolio> */}


        </div>
    );
};

export default Home;