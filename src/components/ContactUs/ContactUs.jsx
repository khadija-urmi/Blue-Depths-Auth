
import backgroundImage from "../../assets/umbrella.jpg";

const ContactUs = () => {
    return (
        <section
            className="relative bg-center bg-cover py-16 px-4"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            <div className="relative z-10 container mx-auto text-white flex flex-col lg:flex-row items-center justify-between gap-8">

                <div className=" text-center lg:text-left lg:flex-1">
                    <h3 className="text-4xl text-center font-bold mb-4"> Contact Us</h3>
                    <p className="mb-6 text-lg text-left w-2/5 mx-auto">
                        Let’s create unforgettable ocean memories together! Contact us for personalized experiences,
                        boat rentals, or any inquiries about our services. Your next coastal adventure starts here!
                    </p>
                </div>
                <form className="bg-white p-6 mr-12 rounded-lg shadow-lg max-w-lg w-full lg:flex-2">
                    <div className="grid grid-cols-2 gap-4 mb-4">

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Address</label>
                        <input
                            type="text"
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your address"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                        <textarea
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                            rows="4"
                            placeholder="Write your message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </section>

    );
};

export default ContactUs;
