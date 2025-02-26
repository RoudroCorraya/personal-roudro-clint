import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Components/HomeComponents/Home/Home";
import Services from "../../Components/Services/Services";
import Aboutme from "../../Components/Aboutme/Aboutme";

import Projects from "../../Components/Projects/Projects";
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";

import DashbordLayout from "../../Layout/DashboardLayout/DashbordLayout";
import DashBoardCart from "../../Components/SiteAuthority/DashboardCart/DashBoardCart";
import Users from "../../Components/SiteAuthority/Users/Users";
import CallInfo from "../../Components/SiteAuthority/Callinfo/CallInfo";
import LetsTalk from "../../Components/LetsTalk/LetsTalk";
import AddService from "../../Components/SiteAuthority/AddService/AddService";
import ServiceDetails from "../../Components/Services/ServiceDetails";
import AddProject from "../../Components/SiteAuthority/AddProject/AddProject";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddBlog from "../../Components/SiteAuthority/AddBlog/AddBlog";
import HomeBlogDetails from "../../Components/HomeComponents/HomeBlog/HomeBlogDetails";
import Contact from "../../Components/SiteAuthority/Contact/Contact";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();


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
                path: '/servicedetails/:_id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/servicedetails/${params?._id}`)

            },
            {
                path: '/projects',
                element: <Projects></Projects>,
                loader: ()=>fetch('http://localhost:5000/allprojects')
            },
            {
                path: '/aboutme',
                element: <Aboutme></Aboutme>
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
                element: <PrivateRoute><LetsTalk></LetsTalk></PrivateRoute>
            },
            {
                path: '/blogs/:_id',
                element: <HomeBlogDetails></HomeBlogDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/blogs/${params?._id}`)

            }
        ]
        
    },
    {
        path: '/dashboard',
        element: <DashbordLayout></DashbordLayout>,
        children:[
            {
                path:'/dashboard/card',
                element: <PrivateRoute><DashBoardCart></DashBoardCart></PrivateRoute>
            },
            {
                path: '/dashboard/users',
                element: <QueryClientProvider client={queryClient}><Users></Users></QueryClientProvider>,
                loader: ()=> fetch('http://localhost:5000/dashboard/users')
            },
            {
                path: '/dashboard/Call',
                element: <QueryClientProvider client={queryClient}><CallInfo></CallInfo></QueryClientProvider>,
                loader: ()=> fetch('http://localhost:5000/dashboard/letstalk')
            },
            {
                path: '/dashboard/addservice',
                element:<AddService></AddService>
            },
            {
                path: '/dashboard/addproject',
                element: <AddProject></AddProject>
            },
            {
                path: '/dashboard/addblog',
                element: <AddBlog></AddBlog>
            },
           {
            path: '/dashboard/contact',
            element: <Contact></Contact>,
            loader: ()=> fetch('http://localhost:5000/homecontact')
           }
        ]
    }

]);
export default router;