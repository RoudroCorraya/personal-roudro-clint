import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Components/HomeComponents/Home/Home";
import Services from "../../Components/Services/Services";
import Aboutme from "../../Components/Aboutme/Aboutme";
import Contact from "../../Components/Contact/Contact";
import Projects from "../../Components/Projects/Projects";
import LogIn from "../../Components/LogIn/LogIn";
import SignUp from "../../Components/SignUp/SignUp";


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
                element: <Services></Services>
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
            }
        ]
        
    }

]);
export default router;