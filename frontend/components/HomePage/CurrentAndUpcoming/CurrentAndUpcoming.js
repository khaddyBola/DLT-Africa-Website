import React from "react";

const CurrentAndUpcoming = () => {
  return (
    <div className="container mx-auto w-full max-w-[1440px] h-[745px] px-4">
      <h1 className="text-center text-6xl tracking-wide mb-12">
        Current and Upcoming Programmes
      </h1>

      <div className="flex justify-center gap-[40px]">
        <div className="max-w-xs shadow-lg flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 h-[405px]">
          <img
            className="h-[150px] w-[150px] mb-[2rem] rounded-full "
            src="https://tinyurl.com/ytcbk3ej"
            alt=""
          />
          <div className="px-6 py-4">
            <div className="w-[266px] h-[94px] flex flex-col justify-center items-center gap-15">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Rorem Ipsum dolor
              </h3>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-[110px]">
                Web3 | Online
              </p>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-130">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex items-center text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed ml-[6rem]">
              View more
            </button>
          </div>
        </div>
        <div className="max-w-xs shadow-lg flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 h-[405px]">
          <img
            className="h-[150px] w-[150px] mb-[2rem] rounded-full "
            src="https://tinyurl.com/yc5mmukd"
            alt=""
          />
          <div className="px-6 py-4">
            <div className="w-[266px] h-[94px] flex flex-col justify-center items-center gap-15">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Korem ipsum dolor{" "}
              </h3>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-[110px]">
                Web3 | Online
              </p>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-130">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex items-center text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed ml-[6rem]">
              View more
            </button>
          </div>
        </div>
        <div className="max-w-xs shadow-lg flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 h-[405px]">
          <img
            className="h-[150px] w-[150px] mb-[2rem] rounded-full "
            src="https://tinyurl.com/yeykuw2x"
            alt=""
          />
          <div className="px-6 py-4">
            <div className="w-[266px] h-[94px] flex flex-col justify-center items-center gap-15">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Yorem ipsum dolor{" "}
              </h3>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-[110px]">
                Web3 | Online
              </p>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-130">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex items-center text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed ml-[6rem]">
              View more
            </button>
          </div>
        </div>
        <div className="max-w-xs shadow-lg flex flex-col items-center gap-4 p-5 rounded-lg border border-orange-300 h-[405px]">
          <img
            className="h-[150px] w-[150px] mb-[2rem] rounded-full "
            src="https://tinyurl.com/3wsufe7n"
            alt=""
          />
          <div className="px-6 py-4">
            <div className="w-[266px] h-[94px] flex flex-col justify-center items-center gap-15">
              <h3 className="text-center font-poppins text-xl font-semibold text-neutral-black opacity-75 w-266 w-[233px] h-[26px]">
                Horem ipsum dolor{" "}
              </h3>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-[110px]">
                Web3 | Online
              </p>
              <p className="font-poppins text-neutral-black text-sm font-light opacity-65 leading-relaxed w-130">
                9/1/24 | 4 weeks
              </p>
            </div>

            <button className="flex items-center text-orange-500  px-4 py-2 rounded-lg hover:bg-orange-100 focus:outline-none border border-orange-500 font-poppins text-base font-medium leading-relaxed ml-[6rem]">
              View more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentAndUpcoming;
