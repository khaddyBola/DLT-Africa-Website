
const RegisterOnline = () => {
  return (
    <div className="bg-gray-100 min-h-screen  flex justify-center items-center">
      <div className="max-w-screen-xl p-8 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-20">
          <img
            src="https://shorturl.at/osDNW"
            alt="cohort"
            className="w-full lg:w-auto lg:max-w-[527px] h-[344px] flex-shrink-0 rounded-[20px] mb-[54px]"
          />

          <div className="inline-flex flex-col justify-left gap-8 text-center w-full lg:w-auto lg:text-left 2sm:justify-center 2sm:text-center"> 
            <div className="w-full lg:w-[545px]">
              <h1 className="text-neutral-dark font-serif text-4xl lg:text-[40px] font-bold leading-9 tracking-wider 2sm:text-[30px] ">
                Ready To Change{" "}
                <span className="text-orange-500 font-serif font-normal leading-60px lg:leading-[72px] tracking-[3.36px] lg:text-5xl">
                  Your 
                  Life?
                </span>
              </h1>
            </div>

            <p className="text-neutral-dark font-poppins text-base lg:text-lg opacity-75">
              Register for our online classes, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>

            <button className="w-full lg:w-[353px]  h-[55px] p-[10px] justify-center items-center gap-2 rounded-lg border-solid border-2 border-orange-500 text-orange-500 hover:bg-orange-100">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterOnline;


const RegisterOffline = () => {
  return (
    <div className='w-auto bg-[#186106] items-center flex justify-center md:h-[311px] xl:h-[522px] overflow-hidden 2sm:h-[375px]'>
      <div className='flex justify-center items-center text-center relative'>
        <div className='absolute lg:top-[-150px] lg:left-[-300px] lg:bottom-[0] md:left-[-190px] md:bottom-0 2sm:left-[-30px] 2sm:bottom-0 2sm:top-[-60px] '>
          <img src='Group 162.png' className='md:h-[300px] xl:h-[500px] 2sm:h-[250px]' />
        </div>
        <div className='flex items-center flex-col xl:gap-16 xl:w-full '>
          <div>
            <h1 className='text-[#F7FCFE] font-serif text-[36px] font-bold-[400px] font-normal leading-9 tracking-[2.52px] sm:text-[25px] lg:text-[36px] xl:text-[48px]  '>
              <span>Register for our </span>
              <span className='text-orange-500 font-serif font-normal leading-[60px] tracking-[2.52px]'>Physical Class</span>
            </h1>
          </div>
          <div className='text-center sm:text-center sm:px-20'>
            <p className='text-[#F7FCFE] font-poppins text-[14px] opacity-75 xl:w-[803px] md:w-[589px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
          </div>

          <div className='flex justify-center mt-10 sm:mt-5'>
            <button className="w-[353px] h-[55px] p-[10px] flex justify-center items-center gap-[10px] rounded-lg bg-orange-500 text-[#F7FCFE] 2sm:w-[250px] 2sm:h-[45px] 2sm:text-sm md:w-[300px] md:h-[50px] md:text-base lg:w-[400px] lg:h-[60px] lg:text-lg">
              Register
            </button>
          </div>

        </div>
        <div className='absolute bottom-0 right-0 xl:h-auto xl:top-[120px] md:right-[-100px]  md:top-[50px]   2sm:right-[-100px] 2sm:top-[80px] ' >
        
          <img src='Group 164.png' alt='image' className="md:h-[200px] xl:h-[300px] 2sm:h-[250px] " />
        </div>
      </div>
    </div>
  );
};

export { RegisterOnline, RegisterOffline };
