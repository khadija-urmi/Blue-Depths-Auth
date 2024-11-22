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
            meta: { title: "Home " },
            loader: async () => await fetch('/adventure.json')
        },
        {
            path: "/login",
            element: <LogIn></LogIn>,
            meta: { title: "Log In - Adventure Hub" },
        },
        {
            path: "/register",
            element: <Register></Register>,
            meta: { title: "Register" },
        },
        {
            path: "/adventures",
            element: <AllAdventures></AllAdventures>,
            meta: { title: "All Adventures " },
            loader: async () => await fetch('/adventure.json')
        }
            ,
        {
            path: "/adventures/:id",
            element: <PrivateRoute>
                <AdventureDetail></AdventureDetail>
            </PrivateRoute>,
            meta: { title: "Adventure Detail" },
            loader: async ({ params }) => {
                const res = await fetch("/adventure.json")
                const allData = await res.json()
                const singleData = allData.find(data => data.id == params.id)
                if (singleData) {
                    document.title = `Adventure: ${singleData.name || 'Details'}`; // Assume the data object has a "name" field
                } else {
                    document.title = "Adventure Not Found";
                }

                return singleData;
            }
        },
        {
            path: "profile",
            element: <PrivateRoute>
                <Profile></Profile>
            </PrivateRoute>,
            meta: { title: "My Profile" },
        },
        {
            path: "/update-profile",
            element: <PrivateRoute>
                <UpdateProfile></UpdateProfile>
            </PrivateRoute>,
            meta: { title: "Update Profile" },
        }],
    }
]);


export default router;