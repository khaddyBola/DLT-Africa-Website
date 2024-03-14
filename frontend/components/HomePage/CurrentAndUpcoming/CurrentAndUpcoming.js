import React from "react";

const CurrentAndUpcoming = () => {
  return (
    <div className="inline-flex flex-col items-center gap-90 px-168 py-57 border-b-0.5 border-black-30 ml-8 w-[1440px] h-[745px]">
      <h1 className="text-center text-6xl tracking-wide mb-9">
        Current and Upcoming Programmes
      </h1>

     <div className="flex items-start content-start gap-14 flex-wrap">

     <div className="ml-8 max-w-xs shadow-lg flex flex-col items-center gap-35 p-5 rounded-lg border border-orange-300">
        <img
          className="h-40 mx-auto rounded-full w-40"
          src="https://tinyurl.com/ytcbk3ej"
          alt=""
          // style={{ borderRadius: '100%' }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Rorem Ipsum dolor</div>
          <p className="text-sm text-gray-600 mb-2">Web3 | Online</p>
          <p className="text-sm text-gray-600 mb-2">9/1/24 | 4 weeks</p>

          <button className="text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-800 focus:outline-none focus:bg-secondary-800 border border-orange-500 font-poppins text-base font-medium leading-relaxed">
            View more
          </button>
        </div>
      </div>
      <div className="max-w-xs shadow-lg flex flex-col items-center gap-35 p-5 rounded-lg border border-orange-300">
        <img
          className="h-40 mx-auto rounded-full w-40"
          src="https://tinyurl.com/yc5mmukd"
          alt=""
          // style={{ borderRadius: '100%' }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Rorem Ipsum dolor</div>
          <p className="text-sm text-gray-600 mb-2">Web3 | Online</p>
          <p className="text-sm text-gray-600 mb-2">9/1/24 | 4 weeks</p>

          <button className="text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-800 focus:outline-none focus:bg-secondary-800 border border-orange-500 font-poppins text-base font-medium leading-relaxed">
            View more
          </button>
        </div>
      </div>
      <div className="max-w-xs shadow-lg flex flex-col items-center gap-35 p-5 rounded-lg border border-orange-300">
        <img
          className="h-40 mx-auto rounded-full w-40"
          src="https://tinyurl.com/yeykuw2x"
          alt=""
          // style={{ borderRadius: '100%' }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Rorem Ipsum dolor</div>
          <p className="text-sm text-gray-600 mb-2">Web3 | Online</p>
          <p className="text-sm text-gray-600 mb-2">9/1/24 | 4 weeks</p>

          <button className="text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-800 focus:outline-none focus:bg-secondary-800 border border-orange-500 font-poppins text-base font-medium leading-relaxed">
            View more
          </button>
        </div>
      </div>
      <div className="max-w-xs shadow-lg flex flex-col items-center gap-35 p-5 rounded-lg border border-orange-300">
        <img
          className="h-40 mx-auto rounded-full w-40"
          src="https://tinyurl.com/3wsufe7n"
          alt=""
          // style={{ borderRadius: '100%' }}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Rorem Ipsum dolor</div>
          <p className="text-sm text-gray-600 mb-2">Web3 | Online</p>
          <p className="text-sm text-gray-600 mb-2">9/1/24 | 4 weeks</p>

          <button className="text-orange-500 bg-secondary-700 px-4 py-2 rounded-lg hover:bg-secondary-800 focus:outline-none focus:bg-secondary-800 border border-orange-500 font-poppins text-base font-medium leading-relaxed">
            View more
          </button>
        </div>
      </div>

     </div>
    </div>
  );
};

export default CurrentAndUpcoming;
