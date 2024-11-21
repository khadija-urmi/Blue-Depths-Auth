import { useLoaderData } from "react-router-dom";

const AdventureDetail = () => {
    const adventure = useLoaderData();

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

    return (
        <div className="card  flex flex-col items-start p-8 bg-white rounded-lg shadow-lg border border-gray-200 w-full max-w-5xl mx-auto">
            <figure className="w-full">
                <img
                    className="w-full h-[350px] lg:h-[550px] object-cover rounded-md"
                    src={image}
                    alt={adventureTitle}
                />
            </figure>
            <div className="card-body  space-y-2">
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
                <button className="px-6 py-3 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default AdventureDetail;
