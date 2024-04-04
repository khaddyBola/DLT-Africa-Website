import Image from "next/image";
import Hero from "../../../../public/hero-section.png";
import Link from "next/link";
import Vector162 from "../../../../public/Vector162.png";
import Grouping162 from "../../../../public/Grouping162.png";
import Group164 from "../../../../public/Group164.png";

const RegisterOnline = () => {
  return (
    <div className="bg-gray-100  flex justify-center items-center">
      <div className="max-w-screen-xl p-8 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20">
          <Image
            className="w-full lg:w-auto lg:max-w-[527px] h-[344px] flex-shrink-0 rounded-[20px] "
            src={Hero}
          />

          <div className="inline-flex flex-col justify-left gap-[18px] text-center w-full lg:w-auto lg:text-left  ">
            <div className="text-[45px] lg:text-left xl:text-left lg:text-[45px] ">
              <span className="text-[#252A24]">Ready To Change</span>{" "}
              <span className="text-[#FC7C13]">Your Life?</span>
            </div>
            <div className="w-full lg:w-[450px] xl:w-[540px] text-[16px] lg:text-left xl:text-left">
              Register for our online classes, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </div>

            <Link href="/application">
              <div className="w-full lg:w-[353px] flex items-center justify-center h-[55px] p-[10px] rounded-lg border-solid border-2 border-orange-500 text-orange-500 hover:bg-orange-100">
                Register
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOnline;

const RegisterOffline = () => {
  return (
    <div className="w-auto h-auto bg-[#186106] items-center flex justify-center overflow-hidden">
      <div className="flex justify-center items-center text-center relative">
        <div className="absolute xl:left-[-400px] lg:left-[-300px] md:left-[-200px] sm:left-[-100px] left-0 top-0">
          <Image
            src={Grouping162}
            className="w-[390px] h-[400px] ml-[-100px] "
          />
        </div>
        <div className="flex items-center flex-col gap-20">
          <h1 className="text-[#F7FCFE] font-serif text-[36px] font-bold-[400px] font-normal leading-9 tracking-[2.52px]  mt-[100px] w-[300px] xl:w-[600px] lg:w-[300px] ">
            <span>Register for our </span>
            <span className="text-orange-500 font-serif font-normal leading-[60px] tracking-[2.52px]">
              Physical Class
            </span>
          </h1>

          <div className="w-full xl:w-[600px] lg:w-[500px] md:w-[450px] sm:w-[400px]">
            <p className="text-[#F7FCFE] font-poppins text-[20px] opacity-75 mt-[-40px] p-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>

          <Link href="/application">
            <div className="w-[200px] mt-[-15px] z-10 xl:w-[350px] lg:w-[320px] md:w-[300px]  h-[55px] p-[10px] text-[16px] flex justify-center items-center gap-[10px] rounded-lg bg-orange-500 text-[#F7FCFE]  mb-14">
              Register
            </div>
          </Link>
        </div>
        <div className="absolute xl:right-[-380px] lg:right-[-290px] md:right-[-200px] sm:right-[-200px] bottom-0 right-[-100px]">
          <Image src={Group164} alt="image" className="h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export { RegisterOnline, RegisterOffline };
