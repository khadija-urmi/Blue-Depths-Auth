import PropTypes from 'prop-types';
import imag1 from "../../assets/oceans-boat.jpg";


const AllAdventures = ({ data }) => {

    return (
        <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Explore Endless Possibilities</h2>
            <p className="text-xl mb-6 text-center text-gray-500">
                Start your adventure story with experiences crafted for you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.map((adventure) => (
                    <div key={adventure.id} className="card bg-white shadow-lg p-4 rounded-lg">
                        <img
                            src={imag1}
                            alt={adventure.adventureTitle}
                            className="w-full h-48 object-cover rounded-md"
                        />
                        <h2 className="text-xl font-bold mt-4 text-left">{adventure.adventureTitle}</h2>
                        <ul className="mt-2 text-sm text-gray-600">
                            {adventure.ecoFriendlyFeatures.map((feature, index) => (
                                <li key={index} className='list-disc text-left ml-5'> {feature}</li>
                            ))}
                        </ul>
                        <button className="mt-4 px-4 py-2 bg-sky-400 text-white rounded hover:bg-sky-600">
                            Explore Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
AllAdventures.propTypes = {
    data: PropTypes.object
}
export default AllAdventures;