import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import userImg from "../../assets/user.png";


const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate();
    const handleUpdateProfile = () => {
        navigate("/update-profile");
    };
    if (!user) {
        return <div><Loading></Loading></div>;
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Welcome, {user.displayName}!
            </h1>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <div className="flex flex-col items-center">
                    <img
                        src={user.photoURL || userImg}
                        alt="User Avatar"
                        className="w-32 h-32 rounded-md mb-4"
                    /> <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.
                        displayName}</h2>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <button
                    onClick={handleUpdateProfile}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
};

export default Profile;