import React from 'react';
import welcome from '../../../assets/image/page404/welcome.jpg';
import StaggeredFadeIn from '../../../ScrollEffects/StaggeredFadeIn';

const DashBoardCart = () => {
    return (
        <StaggeredFadeIn>
            <img className='mx-auto rounded-xl' src={welcome} alt=''></img>
        </StaggeredFadeIn>
    );
};

export default DashBoardCart;