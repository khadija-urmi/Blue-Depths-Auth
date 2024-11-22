import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const UpdateProfile = () => {
    const { setUser, updateUserProfile } = useContext(AuthContext);

    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !photo) {
            setError("Name and Photo URL cannot be empty.");
            return;
        }

        updateUserProfile({ displayName: name, photoURL: photo })
            .then(() => {
                setUser((prevUser) => ({
                    ...prevUser,
                    displayName: name,
                    photoURL: photo,
                }));
                setSuccess("Profile updated successfully!");
                setError("");
            })
            .catch((error) => {
                setError(error.message);
                setSuccess("");
            })
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
                        className="w-full px-4 py-2 border rounded-lg"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Photo URL</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </form>

        </div>
    );
};

export default UpdateProfile;
