import React from 'react';
import page404 from '../../../src/assets/image/page404/404ops.png';
import StaggeredFadeIn from '../../../src/ScrollEffects/FadeInOnScroll';

const Page404 = () => {
    return (
        <StaggeredFadeIn className='bg-white rounded-2xl'>
            <img className=' mx-auto'  src={page404} alt=''></img>
        </StaggeredFadeIn>
    );
};

export default Page404;