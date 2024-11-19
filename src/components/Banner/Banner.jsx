import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import './Banner.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Img1 from "../../assets/banner-1.jpg";
import Img2 from "../../assets/banner-2.jpg";
import Img3 from "../../assets/banner-3.png";


const Banner = () => {
    return (
        <Swiper className="swiper-container"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
        >
            <SwiperSlide className="swiper-slide">
                <div className="relative">
                    <img src={Img1} className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
                        <h2 className="text-5xl font-bold mb-4">Welcome to Oceans Drive</h2>
                        <p className="text-xl mb-6 text-center text-base-100">
                            Explore the beauty of underwater adventures and pristine beaches.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                            Learn More
                        </button>
                    </div>
                </div></SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div><img src={Img2} className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
                        <h2 className="text-5xl font-bold mb-4">Uncover Hidden Wonders</h2>
                        <p className="text-xl mb-6 text-base-100 text-center">
                            Discover vibrant marine life and untouched coral reefs.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                            Get Started
                        </button>
                    </div>
                </div></SwiperSlide>
            <SwiperSlide className="swiper-slide">
                <div><img src={Img3} className="w-full h-auto" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white">
                        <h2 className="text-5xl font-bold mb-4">Dive Into the Blue</h2>
                        <p className="text-xl mb-6 text-center text-base-100">
                            Experience the thrill of oceanic drives and underwater serenity.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
                            Explore Now
                        </button>
                    </div>
                </div></SwiperSlide>
        </Swiper>
    );
};
export default Banner;