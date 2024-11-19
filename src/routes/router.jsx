import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [{
            path: "/",
            element: <Home></Home>
        },
        {
            path: "adventures",
            element: <h2>This adventures</h2>
        },
        {
            path: "profile",
            element: <h2>This profile</h2>
        }],
    },
    {
        path: "/login",
        element: <LogIn></LogIn>,
    }, {
        path: "/register",
        element: <Register></Register>,
    }
]);


export default router;