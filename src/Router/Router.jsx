import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../Components/About/About";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Services from "../Components/Services/Services";
import CheckOut from "../pages/CheckOut/CheckOut";
import BookingList from "../pages/BookingList/BookingList";



const router = createBrowserRouter([
      {
            path: "/",
            element: <Root />,
            children: [
                  {
                        path: '/',
                        element: <Home />,
                  },
                  {
                        path: '/about',
                        element: <About />
                  },
                  {
                        path: '/services',
                        element: <Services />
                  },
                  {
                        path: '/blog',
                        element: <Blog />
                  },
                  {
                        path: '/contact',
                        element: <Contact />
                  },
                  {
                        path: '/login',
                        element: <Login />
                  },
                  {
                        path: '/register',
                        element: <Register />
                  },
                  {
                        path: '/checkout/:id',
                        element: <CheckOut />,
                        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
                  },
                  {
                        path: '/bookings',
                        element: <BookingList/>
                  }
                  
            
            ]
    
      },
]);


export default router;