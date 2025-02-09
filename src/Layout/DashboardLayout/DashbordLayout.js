import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/HomeComponents/Header/Header";
import Footer from '../../Components/HomeComponents/Footer/footer';


const DashbordLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex">
            <div className="bg-accent">

               <div className="w-64   p-4">
               <ul>
                    <li className="my-3"><Link className="text-white" to='/dashboard/card'>My DashboardCart</Link></li>
                    <li className="my-3"><Link className="text-white" to='/dashboard/users'>My users</Link></li>
                    <li className="my-3"><Link className="text-white" to='/dashboard/Call'>Call Info</Link></li>
                    <li className="my-3"><Link className="text-white" to='/dashboard/addservice'>Add service</Link></li>
                </ul>
               </div>
            </div>
            <div className="flex-1">
                
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
        </div>
        
    );
};

export default DashbordLayout;