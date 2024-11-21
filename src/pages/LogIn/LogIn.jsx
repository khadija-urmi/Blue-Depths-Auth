import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const LogIn = () => {
    const { setUser, SignInUser } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const email = form.get("email");
        const password = form.get("password");
        SignInUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : "/");
            })
            .catch((er) => {
                setError({ ...error, login: er.code });
            });
    }
    const handleSignUpGoogle = () => {

    }
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-600 font-medium mb-2">
                            Password
                        </label>
                        <input name="password"
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                    {error.login && (
                        <label className="label text-sm text-red-600">
                            {error.login}
                        </label>
                    )}

                    <div className="text-center mt-4 text-gray-600">
                        <a href="#forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
                        <span className="mx-2">|</span>
                        <Link to="/register" className="text-blue-500 hover:underline">Sign Up</Link>
                    </div>
                </form>

                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                <button onClick={handleSignUpGoogle}
                    type="button"
                    className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300"
                >
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google Logo"
                        className="w-5 h-5 mr-2"
                    />
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default LogIn;