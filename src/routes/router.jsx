import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [{
            path: "/",
            element: <Home></Home>,
            loader: async () => await fetch('/adventure.json')
        },
        {
            path: "adventures",
            element: <h2>This adventures</h2>
        },
        {
            path: "profile",
            element: <h2>This profile</h2>
        }
            ,
        {
            path: "/login",
            element: <LogIn></LogIn>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        }],
    }
]);


export default router;