
import { useLoaderData } from 'react-router-dom';
import AllAdventures from '../../components/AllAdventures/AllAdventures';
import Banner from '../../components/Banner/Banner';
import OurServices from '../../components/OurService/OurService';
import ContactUs from '../../components/ContactUs/ContactUs';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Home = () => {
    const adventuresData = useLoaderData() || [];
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
    return (
        <div data-aos="fade-up">
            <Banner></Banner>
            <section className='w-11/12 mx-auto mt-10' data-aos="slide-up">
                <AllAdventures data={adventuresData}></AllAdventures>
            </section>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <OurServices></OurServices>
            </div>
            <div>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;