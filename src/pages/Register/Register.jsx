import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Img1 from "../../assets/relogo.png";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, SignUpWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [error, setError] = useState("");

    const validatePassword = (password) => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUppercase) {
            return "Password must include at least one uppercase letter.";
        }
        if (!hasLowercase) {
            return "Password must include at least one lowercase letter.";
        }
        if (!isValidLength) {
            return "Password must be at least 6 characters long.";
        }

        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);

        const email = form.get("email");
        const password = form.get("password");


        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError);
            return;
        }

        setError("");

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location.state?.from?.pathname || "/");
                console.log("Sign-Up Successful:", user);
            })
            .catch((error) => {
                console.error("Sign-Up Error:", error.message);
                setError(error.message);
            });
    };

    const handleSignUpGoogle = () => {
        SignUpWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate("/");
                console.log("Google Sign-In Successful:", user);
            })
            .catch((error) => {
                console.error("Google Sign-In Error:", error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src={Img1}
                    alt="Workflow"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create a new account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-500">
                    Or{" "}
                    <Link
                        to="/login"
                        className="font-medium text-blue-600 hover:text-blue-500"
                    >
                        login to your account
                    </Link>
                </p>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="user@example.com"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                                Photo URL
                            </label>
                            <input
                                id="photo"
                                name="photo"
                                type="text"
                                placeholder="Photo URL"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mt-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        {error && (
                            <div className="mt-4 text-sm text-red-600">{error}</div>
                        )}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500"
                            >
                                Create account
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center my-6">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-4 text-gray-500 text-sm">OR</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>
                    <button
                        onClick={handleSignUpGoogle}
                        type="button"
                        className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-100"
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            alt="Google Logo"
                            className="w-5 h-5 mr-2"
                        />
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
