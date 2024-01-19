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
import res from "@/db/members.json";
import { useEffect, useState } from "react";
// import SwiperContainer from "@/components/Swiper";

export default function Home() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function getData() {
      const res: any = await fetch("/api/name")
        .then((res) => res.json())
        .then((res) => setMembers(res.data));
    }
    getData();
  }, []);
  return (
    <>
      <Navbar />;
      <div className="w-full h-screen  bg-gradient-to-r from-fuchsia-600 to-purple-600 mx-auto flex items-center -mt-6 pt-16 p-2 flex-col">
        <Hero />
          
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
          {members &&
            members.map((member: any) => {
              return (
                <SwiperSlide key={member.id}>
                  <div className="w-64 h-80 mx-auto bg-white/30 backdrop-blur-md rounded-md p-4 flex  flex-col items-center">
                    <div className="w-36 h-36 rounded-full overflow-hidden mt-2 object-center object-cover">
                      <img
                        src={
                          member.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3n6OUTASI71uCdxQOel9o3-Rsh2D9zof2A&usqp=CAU"
                        }
                        alt=""
                      className="w-full h-full object-cover"/>
                    </div>
                    <h1 className="text-2xl font-montserrat font-semibold mt-3 text-center">
                      {member.name}
                    </h1>
                    <p className="w-full text-center ">
                      Absen : {member.absen}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <img src="/public/image/tutul.jpg" alt="" />
    </>
  );
}
