"use client";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import Hero from "@/layouts/Hero";
import Navbar from "@/components/Navbar";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/name").then((res) =>
    res.json()
  );
  const members = res.data;
  console.log();
  return (
    <>
      <Navbar />;
      <div className="w-full h-screen bg-gradient-to-r from-fuchsia-600 to-purple-600 mx-auto flex items-center -mt-6 pt-16 p-2">
        <Hero />
        {/* <div className="w-full md:w-5/12 bg-white/65 rounded-[48px] h-full flex items-center flex-col justify-center">
          <h1 className="text-3xl md:text-[36px] lg:text-5xl text-center text-white font-bold">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Welcome To Our Project ",
                1000,
              ]}
              speed={50}
              style={{}}
              repeat={Infinity}
            />
          </h1>
          <p className="text-center text-white mt-4 text-2xl">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Project Fisika Kelompok 3 Sains 1",
                1000,
              ]}
              speed={50}
              style={{}}
              repeat={Infinity}
            />
          </p>
        </div> */}
        
      </div>
      <div className="w-full h-screen bg-purple-600 border-slate-300 border-t-2 flex flex-col items-center">
        <h1 className="my-4 text-3xl font-montserrat font-semibold text-center text-white">
          Anggota Kelompok
        </h1>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full"
        >
          {" "}
          {members.map((member: any) => {
            return (
              <SwiperSlide>
                <div className="w-64 mx-auto bg-white/30 backdrop-blur-md rounded-md p-4 flex  flex-col items-center">
                  <div className="w-36 h-36 rounded-full overflow-hidden mt-4 object-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3n6OUTASI71uCdxQOel9o3-Rsh2D9zof2A&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <h1 className="text-2xl font-montserrat font-semibold mt-3 text-center">
                  {member.name.charAt(0).toUpperCase() + member.name.slice(1).toLowerCase()}
                  </h1>
                  <p className="w-full text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis sapiente expedita Lorem, ipsum dolor sit amet
                    consectetur adipisicing elit. Consequuntur, a.
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
