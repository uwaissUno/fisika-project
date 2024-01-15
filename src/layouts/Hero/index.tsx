import { TypeAnimation } from "react-type-animation";
export default function Hero() {
  return (
    <div className="flex gap-4 w-full h-full">
     <div className="w-full md:w-5/12 bg-white/65 rounded-[48px] h-full flex items-center flex-col justify-center">
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
     </div>
     <div className="w-full md:w-7/12 bg-white/65 rounded-[48px] h-full flex items-center flex-col justify-center">
     
     </div>
    </div>
  );
}
