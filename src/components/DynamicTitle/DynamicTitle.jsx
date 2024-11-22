import { useEffect } from "react";
import { useLocation, } from "react-router-dom";


const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const routeTitles = {
            '/': 'Blue Depths',
            '/login': 'Log In-Blue Depths',
            '/register': 'Register-Blue Depths',
            '/adventures': 'Adventures-Blue Depths',
            '/profile': 'Profile-Blue Depths',
            '/update-profile': 'Update Profile-Blue Depths',
        };

        const getTitle = (pathname) => {

            if (pathname.startsWith('/adventures/')) {
                return 'Adventure Details';
            }
            return routeTitles[pathname] || 'Blue Depths';
        };

        const title = getTitle(location.pathname);
        document.title = title;
    }, [location]);

    return null;
};

export default DynamicTitle;
