import Image from "next/image";
import EarthImage from "@/assets/images/EarthHero.png";

export const Hero = () => {
  return (
    <div className="absolute w-full h-full inset-0 z-10 flex items-center justify-center">
      <Image
        src={EarthImage}
        alt="Image of Green Earth"
        layout="fill"
        objectFit="contain"
        className="opacity-100"
      />
      <h1 className="text-black text-xl md:text-[60px] bg-white shadow-md rounded-xl p-1 font-bold absolute bg-clip-text text-transparent bg-gradient-to-r from-green-groween to-blue-groween">
        Grow your own planet with us
      </h1>
    </div>
  );
};
