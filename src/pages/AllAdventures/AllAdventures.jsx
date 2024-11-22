
import { Link, useLoaderData } from 'react-router-dom';
const AllAdventures = () => {
    const adventuresData = useLoaderData() || [];

    return (
        <div className="w-11/12 mx-auto mt-10 text-center">
            <h2 className="text-4xl font-bold mb-4">Explore Endless Possibilities</h2>
            <p className="text-xl mb-6 text-center text-gray-500">
                Start your adventure story with experiences crafted for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {adventuresData.map((adventure) => (
                    <div key={adventure.id} className="card bg-white shadow-lg p-4 rounded-lg">
                        <img
                            src={adventure.image}
                            alt={adventure.adventureTitle}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-bold mt-4 text-left">{adventure.adventureTitle}</h2>
                        <ul className="mt-2 text-sm text-gray-600">
                            {adventure.ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index} className='list-disc text-left ml-5'> {feature}</li>
                            ))}
                        </ul>
                        <Link to={`/adventures/${adventure.id}`} className="btn mt-4 px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-600">
                            Explore Now
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllAdventures;