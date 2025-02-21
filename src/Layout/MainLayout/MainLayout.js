import React, { useEffect, useState } from 'react'
import Header from '../../Components/HomeComponents/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../Components/HomeComponents/Footer/footer';

const MainLayout = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (navigation.state === "loading") {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 3000); // Simulate loading for 3 seconds
        }
    }, [navigation.state]);
    return (
        <div>
            <Header></Header>
            {
                isLoading  ? <h2 className='text-3xl text-accent'>Loading...<span className="loading loading-bars loading-lg text-accent"></span></h2>: <Outlet></Outlet>
            }
            
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;