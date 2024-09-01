// import logo from '../src/che';

import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/homePageRoutes/homePageRoutes';


function App() {
  return (
   <div className='banner'>
     <div className="max-w-[1140px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
   </div>
  );
}

export default App;
