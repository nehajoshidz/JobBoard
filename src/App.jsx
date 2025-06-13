import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import {HomeLayout, DashboardLayout, Error, Landing} from './Pages';
import {Login, Register} from './components';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement: <Error/>
  },
  //   Children: [
  //     { index: true,
  //       element: <Landing/>
  //     },
  //     {
  //   path:'/login',
  //   element:<Login/>
  // },
  // {
  //   path:'/register',
  //   element:<Register/>
  // },
  // {
  //   path:'/dashboard',
  //   element:<DashboardLayout/>
  // }
  // ]
  
  {
    path:'/about',
    element:(<div> 
      <h1>This is About page open now</h1>
      <h1>What are you thinking today</h1>
    </div>)

  },
  {
    path:'/landing',
    element:<Landing/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/dashboard',
    element:<DashboardLayout/>
  }
])


function App() {
  return <RouterProvider router={router} />;
};

export default App;
