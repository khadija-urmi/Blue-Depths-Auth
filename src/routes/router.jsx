import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LogIn from '../pages/LogIn/LogIn';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import AllAdventures from '../pages/AllAdventures/AllAdventures';
import AdventureDetail from '../pages/AdventureDetail/AdventureDetail';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile/Profile';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';

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
            path: "/login",
            element: <LogIn></LogIn>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
        {
            path: "/adventures",
            element: <AllAdventures></AllAdventures>,
            loader: async () => await fetch('/adventure.json')
        }
            ,
        {
            path: "/adventures/:id",
            element: <PrivateRoute>
                <AdventureDetail></AdventureDetail>
            </PrivateRoute>,
            loader: async ({ params }) => {
                const res = await fetch("/adventure.json")
                const allData = await res.json()
                const singleData = allData.find(data => data.id == params.id)
                return singleData;
            }
        },
        {
            path: "profile",
            element: <PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>
        },
        {
            path: "/update-profile",
            element: <PrivateRoute>
                <UpdateProfile></UpdateProfile>
            </PrivateRoute>
        }],
    }
]);


export default router;