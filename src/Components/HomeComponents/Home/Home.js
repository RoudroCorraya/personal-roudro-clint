import React from "react";
import "./Home.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeWhatiDo from "../HomeWhatiDo/HomeWhatiDo";
import HomeSkill from "../HomeSkill/HomeSkill";
import EducationDiploma from "../EducationDiploma/EducationDiploma";
import Pricing from "../Pricing/Pricing";
import Portfolio from "../Portfolio/Portfolio";
import HomeContact from "../HomeContact/HomeContact";
import HomePortfolio from "../HomePortfolio/HomePortfolio";
import HomeBlog from "../HomeBlog/HomeBlog";
import FlyingMan from "../FlyingMan/FlyingMan"; // Ensure correct import

const Home = () => {
  return (
    
      <div className="">
        <div>
          <HomeBanner />
          <HomeAbout />
          <HomeWhatiDo />
          <HomeSkill />
          <EducationDiploma />
          <Pricing />
          <HomeBlog />
          <HomeContact />
        </div>
      </div>
   
  );
};

export default Home;
