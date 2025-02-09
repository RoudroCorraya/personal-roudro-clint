import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Components/HomeComponents/Home/Home";
import Services from "../../Components/Services/Services";
import Aboutme from "../../Components/Aboutme/Aboutme";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";

import DashbordLayout from "../../Layout/DashboardLayout/DashbordLayout";
import DashBoardCart from "../../Components/SiteAuthority/DashboardCart/DashBoardCart";
import Users from "../../Components/SiteAuthority/Users/Users";
import CallInfo from "../../Components/SiteAuthority/Callinfo/CallInfo";
import LetsTalk from "../../Components/LetsTalk/LetsTalk";
import AddService from "../../Components/SiteAuthority/AddService/AddService";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=>fetch('http://localhost:5000/services')
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/aboutme',
                element: <Aboutme></Aboutme>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/letstalk',
                element: <LetsTalk></LetsTalk>
            }
        ]
        
    },
    {
        path: '/dashboard',
        element: <DashbordLayout></DashbordLayout>,
        children:[
            {
                path:'/dashboard/card',
                element: <DashBoardCart></DashBoardCart>
            },
            {
                path: '/dashboard/users',
                element: <Users></Users>,
                loader: ()=> fetch('http://localhost:5000/dashboard/users')
            },
            {
                path: '/dashboard/Call',
                element: <CallInfo></CallInfo>,
                loader: ()=> fetch('http://localhost:5000/dashboard/letstalk')
            },
            {
                path: '/dashboard/addservice',
                element:<AddService></AddService>
            }
        ]
    }

]);
export default router;