import { useEffect } from "react";
import { useLocation, matchRoutes } from "react-router-dom";
import router from "../../routes/router";

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const routes = matchRoutes(router.routes, location.pathname);
        const currentRoute = routes?.[0]?.route;
        console.log(currentRoute);
        if (currentRoute?.meta?.title) {
            document.title = currentRoute.meta.title;
        } else {
            console.warn("No matched route for:", location.pathname);
            document.title = "Adventure Hub";
        }
    }, [location]);

    return null;
};

export default DynamicTitle;
