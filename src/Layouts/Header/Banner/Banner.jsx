import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useAuth from "../../../Hooks/Auth/useAuth";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const { theme } = useAuth();

  useEffect(() => {
    fetch("/banner.json")
      .then((res) => res.json())
      .then((data) => {
        setBanners(data);
      });
  }, []);

  if (!banners) {
    return (
      <div className="w-full flex items-center justify-center bg-[#1b2227] min-h-screen">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className={`w-full ${theme === 'light'? 'bg-[#F5BABB]': ''}`}>
      <div className="w-full md:w-11/12 root-font  mx-auto py-4">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: false }}
          modules={[Autoplay, Pagination]}
          className="mySwiper rounded-2xl  shadow-lg"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-[200px] md:h-[300px] lg:h-[500px]">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover rounded-2xl z-0"
                />
                <div className="absolute inset-0 bg-black opacity-60 rounded-2xl z-10"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 rounded-2xl z-20">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-white text-sm md:text-lg mb-4 max-w-xl">
                    {banner.description}
                  </p>
                  <a
                    href="/"
                    className=" py-2 btn btn-soft btn-info btn-sm md:btn-md"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
