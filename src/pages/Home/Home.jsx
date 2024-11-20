
import { useLoaderData } from 'react-router-dom';
import AllAdventures from '../../components/AllAdventures/AllAdventures';
import Banner from '../../components/Banner/Banner';
import OurServices from '../../components/OurService/OurService';

const Home = () => {
    const adventuresData = useLoaderData() || [];

    return (
        <div>
            <Banner></Banner>
            <section className='w-11/12 mx-auto mt-10'>
                <AllAdventures data={adventuresData}></AllAdventures>
            </section>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;