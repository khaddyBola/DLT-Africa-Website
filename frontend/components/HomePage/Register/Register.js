
const RegisterOnline = () => {
  return (
    <div className=" h-[452px] bg-gray-100">
      <div className="flex  justify-center space-x-20 ">
        <img
          src="https://shorturl.at/osDNW"
          alt="cohort"
          className=" h-[344px] w-[527px] flex-shrink-0 rounded-[20px] mt-[54px] mb-[54px] ml-[50px]"
        />

        <div className="inline-flex flex-col justify-center items-start gap-[12px]">
          <div className="w-[545px] ">
            <h1 className="text-neutral-dark font-serif text-[48px] font-bold-[400px]   font-normal leading-9 tracking-wider">
              Ready To Change{" "}
              <span className="text-orange-500 font-serif font-normal leading-[60px] tracking-[3.36px]">
                Your <br />
                Life?
              </span>
            </h1>
          </div>

          <p className="text-neutral-dark font-poppins text-[16px] mr-[50px] opacity-75">
            Register for our online classes, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>

          <button className="flex w-[353px] h-[55px] p-[10px] justify-center items-center gap-10px rounded-lg border-solid border-2 border-orange-500  text-orange-500 mt-[48px] hover:bg-orange-100" >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const RegisterOffline = () => {
  return (
    <div>Register for our physical class</div>
  );
};

export { RegisterOnline, RegisterOffline };
