import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    const error = useRouteError();
    return (
        <div>

            <div id="error-page" className="flex items-center justify-center min-h-screen bg-gray-200">
                <div className="bg-white shadow-lg rounded-lg p-10 max-w-md text-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
                    <p className="text-lg text-gray-700 mb-6">Sorry, an unexpected error has occurred.</p>
                    <p className="text-gray-500 italic">
                        <i>{error.statusText || error.message}</i>
                    </p>
                    <button onClick={() => navigate("/")} className="mt-6 px-6 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md">Go Back Home</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;