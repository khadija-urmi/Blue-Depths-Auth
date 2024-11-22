import { useLoaderData } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import img1 from "../../assets/check.png";

const AdventureDetail = () => {
    const adventure = useLoaderData();
    const [showBookModal, setShowBookModal] = useState(false);
    const [showExpertModal, setShowExpertModal] = useState(false);

    const {
        adventureTitle,
        image,
        categoryName,
        shortDescription,
        adventureCost,
        bookingAvailability,
        location,
        duration,
        adventureLevel,
        includedItems,
        ecoFriendlyFeatures,
        maxGroupSize,
        specialInstructions,
    } = adventure;

    const handleTalkWithExpert = () => {
        const currentTime = moment();
        const startTime = moment("10:00 AM", "hh:mm A");
        const endTime = moment("8:00 PM", "hh:mm A");
        if (currentTime.isBetween(startTime, endTime)) {
            window.open("https://meet.google.com/", "_blank");
        } else {
            setShowExpertModal(true);
        }
    };

    const handleBooked = () => {
        setShowBookModal(true);
    };

    const closeBookModal = () => {
        setShowBookModal(false);
    };

    const closeExpertModal = () => {
        setShowExpertModal(false);
    };

    return (
        <div className="card flex flex-col items-start p-8 bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-5xl mx-auto">
            <figure className="w-full">
                <img
                    className="w-full h-[350px] lg:h-[550px] object-cover rounded-md"
                    src={image}
                    alt={adventureTitle}
                />
            </figure>
            <div className="card-body space-y-2">
                <h2 className="text-3xl font-semibold text-blue-600">{adventureTitle}</h2>
                <div className="flex justify-evenly">
                    <p className="text-lg font-medium text-gray-700">Category: {categoryName}</p>
                    <p className="text-lg">
                        <span
                            className={`px-3 py-1 rounded-full text-base font-medium ${bookingAvailability
                                ? "bg-green-100 text-green-700 border border-green-400"
                                : "bg-red-100 text-red-700 border border-red-400"
                                }`}
                        >
                            {bookingAvailability ? "Available" : "Fully Booked"}
                        </span>
                    </p>
                </div>
                <p className="text-lg text-gray-600">{shortDescription}</p>
                <p className="text-lg font-semibold text-gray-700">Cost: ${adventureCost}</p>
                <div className="flex justify-around ">
                    <p className="text-base text-gray-700">Location: {location}</p>
                    <p className="text-base text-gray-700">Duration: {duration}</p>
                </div>
                <p className="text-base text-gray-700">Adventure Level: {adventureLevel}</p>
                <p className="text-base text-gray-700">Max Group Size: {maxGroupSize}</p>
                <div>
                    <h3 className="text-lg font-bold mb-2">Included Items:</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {includedItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Eco-Friendly Features:</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {ecoFriendlyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Special Instructions:</h3>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {specialInstructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                </div>
                <button
                    onClick={handleBooked}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600"
                >
                    Book Now
                </button>
                {showBookModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                            <img className="w-20 h-20 max-w-2xl mx-auto rounded-full mb-4" src={img1} alt="Check" />
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Congratulations
                            </h3>
                            <p className="text-gray-600">
                                You have booked your dream drive in the blue ocean.
                            </p>
                            <div className="mt-4 text-right">
                                <button
                                    onClick={closeBookModal}
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    onClick={handleTalkWithExpert}
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                    Talk with Expert
                </button>
            </div>
            {showExpertModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Consultation Time</h3>
                        <p className="text-gray-600">
                            Our experts are available between 10:00 AM and 8:00 PM. Please try
                            again during this time.
                        </p>
                        <div className="mt-4 text-right">
                            <button
                                onClick={closeExpertModal}
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdventureDetail;
