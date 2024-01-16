import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
export default async function SwiperContainer(){
    const res = await fetch("http://localhost:3000/api/name").then((res) =>
    res.json()
  );
  const members = res.data;
  console.log(members);
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
          {members && members.map((member: any) => {
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
}