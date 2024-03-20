const JoinHackerHouse = () => {
  return (
    <>
      <div className=" font-serif w-[1440px] h-[413px] bg-[#f5f3f5] bg-opacity-100 ">
        <div className="mx-[50px] flex flex-row justify-between items-start pt-[101px]xcv">
          <div className="flex flex-col justify-center gap-[48px] w-[570px]  ">
            <div className=" text-[48px] font-[400px] gap-[10px] ">
              <span className="text-[#252A24]"> Join our </span>{" "}
              <span className="text-[#FC7C13]">Hacker House </span>
              <div className="w-[570px] mb-[38px] text-[16px]">
                Register for our Hacker House and stand a chance of wining huge
                prices consectetur adipiscing elit. Nunc vulputate libero et
                velit interdum, ac aliquet odio mattis.
              </div>
            </div>
            <div className="border border-[#C54809] rounded w-[355px] p-[10px] h-[55px] text-center font-poppins font-bold text-[#C54809] hover:bg-[white] cursor-pointer ">
              Read more
            </div>
          </div>

          <div className="">
            <img
              src="hackerhousehero_img/Working 1.png"
              class="absolute top-[46px] left-[794px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinHackerHouse;
