import { useEffect, useState } from "react";

const OurServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <section className="py-12 bg-teal-100 mt-12">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-2">Our Services</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Explore the services we offer to make your experiences memorable.
                </p>
                <div className="w-11/12 mx-auto grid grid-cols-1  lg:grid-cols-3 gap-6">
                    {services.length > 0 ? (
                        services.map((service) => (
                            <div
                                key={service.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden"
                            >
                                <div className="text-4xl p-4">{service.icon}</div>
                                <div className="p-3">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-base">{service.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading services...</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
