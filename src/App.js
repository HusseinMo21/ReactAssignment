import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portoflio from './Components/Portoflio/Portoflio';
import Contact from './Components/Contact/Contact';

export default function App() {

  let routers=createBrowserRouter([
    {path:"",element:<LayOut/>,children:[
      {index:true,element:<Home/>},
      {path:"about",element:<About/>},
      {path:"portoflio",element:<Portoflio/>},
      {path:"contact",element:<Contact/>}
    ]}
  ])
  
return <RouterProvider router={routers}></RouterProvider>

}

