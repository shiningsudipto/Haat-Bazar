
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import img1 from '../../assets/slider/cowBanner.jpg'
import img2 from '../../assets/slider/goatBanner.jpg'
import img3 from '../../assets/slider/sheepBanner.webp'

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide className="">
                    <div className="position-relative ">
                        <img src={img1} alt="" className="sliderImg " />
                        <div className="position-absolute top-0 sliderText ">
                            <h2 className='display-4 fw-bold'>Welcome To Haat Bazar</h2>
                            <p className="w-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aut harum rerum eos iste, exercitationem laboriosam eligendi voluptate minus excepturi quibusdam natus, quo omnis! Incidunt.</p>
                            <button className='bg-white p-2 border-0 rounded-3 fs-6 fw-medium text-uppercase'>discover now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" className="sliderImg" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" className="sliderImg" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;