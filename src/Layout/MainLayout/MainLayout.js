import React from 'react'
import Header from '../../Components/HomeComponents/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/HomeComponents/Footer/footer';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;