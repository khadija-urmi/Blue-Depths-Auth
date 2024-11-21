import { useContext, useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const [name, setName] = useState(user.name);
    const [photo, setPhoto] = useState(user.photo);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const auth = getAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!auth.currentUser) {
            setError("No authenticated user.");
            return;
        }
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setUser({
                    ...auth.currentUser,
                    displayName: name,
                    photoURL: photo,
                })
                console.log(user);
                setSuccess("Profile updated successfully!");
                setError("");
            })
            .catch((err) => {
                console.error("Error updating profile:", err.message);
                setError(err.message);
                setSuccess("");
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Update Profile</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                {error && <p className="text-red-600 mb-4">{error}</p>}
                {success && <p className="text-green-600 mb-4">{success}</p>}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Photo URL</label>
                    <input
                        type="text"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    <Link to="/profile">  Save Changes</Link>
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
