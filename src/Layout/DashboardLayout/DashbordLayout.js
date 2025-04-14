import { Link, Outlet, useNavigation } from "react-router-dom";
import Header from "../../Components/HomeComponents/Header/Header";
import Footer from '../../Components/HomeComponents/Footer/footer';
import { useEffect, useState } from "react";
import './DashboardLayout.css';


const DashbordLayout = () => {
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
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <div className="w-64 bg-accent text-white h-screen overflow-auto scrollbar-thin scrollbar-thumb-gray-400 p-4">
                    <ul>
                        <li className="my-3"><Link to='/dashboard/card'>My DashboardCart</Link></li>
                        <li className="my-3"><Link to='/dashboard/users'>My users</Link></li>
                        <li className="my-3"><Link to='/dashboard/Call'>Call Info</Link></li>
                        <li className="my-3"><Link to='/dashboard/addservice'>Add service</Link></li>
                        <li className="my-3"><Link to='/dashboard/addproject'>Add project</Link></li>
                        <li className="my-3"><Link to='/dashboard/addblog'>Add Blog</Link></li>
                        <li className="my-3"><Link to='/dashboard/contact'>Contact Info</Link></li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto scrollbar-thin scrollbar-thumb-gray-400 p-4">
                    {
                        isLoading
                            ? <h2 className='text-3xl text-accent'>
                                Loading... <span className="loading loading-bars loading-lg text-accent"></span>
                            </h2>
                            : <Outlet />
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default DashbordLayout;