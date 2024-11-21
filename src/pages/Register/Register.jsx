import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Img1 from "../../assets/relogo.png"
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, SignUpWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const email = form.get("email");
        const photo = form.get("photo");
        const password = form.get("password");
        console.log(name, email, password, photo, password);
        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location ? "/profile" : "/");
                console.log(" Sign-In Successful:", user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    const handleSignUpGoogle = () => {
        SignUpWithGoogle()
            .then((user) => {
                setUser(user);
                navigate(location ? "/profile" : "/");
                console.log(" Sign-In Successful:", user);
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
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create a new account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or{" "}
                    <Link
                        to='/login'
                        className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >
                        login to your account
                    </Link>
                </p>
            </div>

            <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit} >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Name
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    type="text"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="email"
                                    name="email"
                                    placeholder="user@example.com"
                                    type="email"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Photo URL
                            </label>
                            <div className="mt-1 relative rounded-md shadow-sm">
                                <input
                                    id="image"
                                    name="photo"
                                    type="text"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium leading-5 text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                                <input
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    required=""
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                >
                                    Create account
                                </button>
                            </span>
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
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;