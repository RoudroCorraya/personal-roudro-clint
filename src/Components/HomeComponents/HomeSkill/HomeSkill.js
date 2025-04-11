import React, { useEffect, useState, useRef } from "react";
import "./HomeSkill.css";
import FadeInOnScroll from "../../../ScrollEffects/FadeInOnScroll";

const skills = [
  { name: "Html", value: 87 },
  { name: "Css", value: 85 },
  { name: "Javascript", value: 65 },
  { name: "React", value: 76 },
  { name: "Php", value: 60 },
];

const professionalSkills = [
  { name: "Communication", value: 80 },
  { name: "Team Work", value: 76 },
  { name: "Project Management", value: 85 },
  { name: "Creativity", value: 70 },
];

const HomeSkill = () => {
  const [animatedProgress, setAnimatedProgress] = useState(
    skills.map(() => 0)
  );
  const [animatedRadial, setAnimatedRadial] = useState(
    professionalSkills.map(() => 0)
  );
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  // Observer to detect when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate progress bars when section becomes visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setAnimatedProgress((prev) =>
        prev.map((val, i) => (val < skills[i].value ? val + 1 : val))
      );
      setAnimatedRadial((prev) =>
        prev.map((val, i) =>
          val < professionalSkills[i].value ? val + 1 : val
        )
      );
    }, 20); // Adjust speed

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 my-24">
      <FadeInOnScroll direction="left">
        {/* Technical Skills */}
      <div>
        <h3 className="text-center text-white text-3xl font-semibold mb-14">
          Technical Skill
        </h3>
        {skills.map((skill, index) => (
          <div key={skill.name} className="my-9">
            <p className="text-start mt-2 font-bold text-white">{skill.name}</p>
            <progress
              className="progress progress-accent w-full"
              value={animatedProgress[index]}
              max="100"
            ></progress>
          </div>
        ))}
      </div>
      </FadeInOnScroll>
      
 <FadeInOnScroll direction="right" delay={0.2}>
   {/* Professional Skills */}
   <div>
        <h3 className="text-center text-white text-3xl font-semibold">
          Professional Skill
        </h3>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mt-14">
          {professionalSkills.map((skill, index) => (
            <div key={skill.name} className="text-center mt-5">
              <div
                className="radial-progress text-accent"
                style={{
                  "--value": animatedRadial[index],
                  "--size": "8rem",
                  "--thickness": "10px",
                }}
                role="progressbar"
              >
                <span className="text-white">{animatedRadial[index]}%</span>
              </div>
              <p className="text-center text-white font-semibold mt-5">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
 </FadeInOnScroll>
     
    </div>
  );
};

export default HomeSkill;
