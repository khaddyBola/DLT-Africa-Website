
const Confirmation = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-[#FFEFD4] h-[579px] w-[1013px] rounded-[20px] flex justify-center items-center relative">
        <div className="flex flex-col text-center">
          <div>
            <p className="w-[649px] flex-shrink-0 text-[#9c3910] font-serif text-[35px] font-normal leading-10 tracking-2">
            Are you sure you want to apply for this course at the specified fee of  #570,000
            </p>
          </div>
          <div className="absolute left-[88px] top-[444px]">
            <img
              className="h-[67px] w-[41px]"
              src="https://tinyurl.com/mv3r67ha"
              alt="" />
          </div>
        </div>

        <div className="w-[724.48px] h-[666.52px] top-[2px] left-[2px] Border-[2px] Rotation-[56.1°] absolute">
            <img src="Vector 1.png" alt="Example" />
        </div>

        <div className="w-[724.48px] h-[666.52px] top-[355.17px] left-[333.69px] Border-[2px] Rotation-[-7.47°] absolute">
            <img src="Vector 2.png" alt="Example" />
        </div>

      </div>
    </div>
  );
}

export default Confirmation