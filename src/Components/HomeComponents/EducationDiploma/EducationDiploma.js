import React from 'react';
import { IoPinOutline } from 'react-icons/io5';
import './EducationDiploma.css';
import ndub from '../../../assets/image/educationImage/Notre-Dame-University-Bangladesh-Logo-Transparent.webp';
import ndc from '../../../assets/image/educationImage/notre-dame-college-dhaka-logo-BE24BF8A6F-seeklogo.com.png';
import stJoseps from '../../../assets/image/educationImage/St.Josephs-School-College-Bo-2.webp';
import cit from '../../../assets/image/educationImage/CITRoundLogo.png';
import pro from '../../../assets/image/educationImage/company_favicon.png';
import radiance from '../../../assets/image/educationImage/radiance_roundLogo.png';
import education from '../../../assets/image/educationImage/edufinal1-removebg-preview.png';

const EducationDiploma = () => {
    return (
        <div className='my-14'>
            <div><h3 className='text-3xl font-semibold text-white text-center my-20'>Eduaction and Diplomas</h3></div>
            <div className=' grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 '>
            <div className=' shadow-black shadow-xl drop-shadow-2xl rounded-2xl'>
                
               
                    <img className=' w-full h-full' src={education} alt='eduaction.png'/>
                
            </div>
            <div className="carousel carousel-vertical rounded-box h-96 mx-4">
                <div className="carousel-item lg:h-52 md:h-52 sm:h-52 education">
                <div className='text-white'>
                        <h3 className='text-xl font-semibold text-white imagecontrol'>Notre Dame University Bangladesh</h3>
                        <IoPinOutline className='text-4xl text-white education'/>
                        <p> Bachelor of Business Administration</p>

                        <p>Mejor : Finance</p>
                        <p>Minor : HRM</p>
                        <p>Year : 2019 - 2023</p>
                    </div>
                    
                    <div className='w-40 h-40 mx-4  my-4 setimage'>
                    <img className='education w-full h-40 ' src={ndub} alt='ndub.jpg'/>
                    </div>
                    
                    
                </div>
                <div className="carousel-item lg:h-52 md:h-52 sm:h-52 education">
                    <div className='w-40 h-40 mx-4 my-4 setimage'>
                    <img className='education w-full h-40 ' src={ndc} alt='ndc.jpg'/>
                    </div>
                
                    <div className='text-white'>
                        <h3 className='text-xl font-semibold text-white imagecontrol'>Notre Dame College</h3>
                        <IoPinOutline className='text-4xl text-white education'/>
                        <p> Bussines Studies</p>

                        <p>4th subject : Economics</p>
            
                        <p>Year : 2017 - 2018</p>
                    </div>
                    
                    
                </div>
                <div className="carousel-item lg:h-52 md:h-52 sm:h-52 education">
                <div className='text-white'>
                        <h3 className='text-xl font-semibold text-white imagecontrol'>St. Joseph's High School</h3>
                        <IoPinOutline className='text-4xl text-white education'/>
                        <p>Bussines Studies</p>

                        <p>4th subject : Computer</p>
                      
                        <p>Year : 2011 - 2016</p>
                    </div>
                    <div className='w-40 h-40 mx-4 my-4 setimage'>
                    <img className='education w-full h-40 ' src={stJoseps} alt='stjosep.jpg'/>
                    </div>
                    
                    
                </div>
                <div className="carousel-item lg:h-52 md:h-52 sm:h-52 education">
                <div className='w-40 h-40 mx-4 my-4 setimage'>
                <img className='education w-full h-40 ' src={cit} alt='cit.jpg'/>
                </div>
                <div className='text-white'>
                        <h3 className='text-xl font-semibold text-white imagecontrol'>Creative IT</h3>
                        <IoPinOutline className='text-4xl text-white education'/>
                        <p> Web Design</p>

                        
                        <p>Programming Language : Html & Css</p>
                        <p>Year : jun 2022 - Dec 2022</p>
                    </div>
                   
                    
                </div>
                <div className="carousel-item lg:h-52 md:h-52 sm:h-52 education">
                
                <div className='text-white'>
                        <h3 className='text-xl font-semibold text-white imagecontrol'>Creative IT</h3>
                        <IoPinOutline className='text-4xl text-white education'/>
                        <p> Web Development</p>

                        
                        <p>Programming Language : Php</p>
                        <p>Year : jan 2023 - jun 2023</p>
                    </div>
                    <div className='w-40 h-40 mx-4 my-4 setimage'>
                <img className='education w-full h-40 ' src={cit} alt='cit.jpg'/>
                </div>
                    
                </div>
                <div className="carousel-item lg:h-52 md:h-52 sm:h-52 education">
                <div className='w-40 h-40 mx-4 my-4 setimage'>
                <img className='education w-full h-40 ' src={pro} alt='pro.jpg'/>
                </div>
                <div className='text-white'>
                        <h3 className='text-xl font-semibold text-white imagecontrol'>Programming Hero</h3>
                        <IoPinOutline className='text-4xl text-white education'/>
                        <p> Interactive Web Development</p>

                        
                        <p>Programming Language : React & Javascript</p>
                        <p>Year : jul 2023 - Dec 2023</p>
                    </div>
                    
                    
                </div>
                <div className="carousel-item lg:h-52 md:h-52 sm:h-52 education">
                
                <div className='text-white'>
                        <h3 className='text-xl font-semibold text-white imagecontrol'>Radiance Bangladesh</h3>
                        <IoPinOutline className='text-4xl text-white education'/>
                        <p> English Proficiency</p>

                        
                        <p>IELTS Overall Band : 6</p>
                        <p>Year : jan 2024 - jun 2024</p>
                    </div>
                    <div className='w-40 h-40 mx-4 my-4 setimage'>
                <img className='education w-full h-40 ' src={radiance} alt='radiance.jpg'/>
                </div>
                    
                </div>
                
            </div>
        </div>
        </div>
    );
};

export default EducationDiploma;