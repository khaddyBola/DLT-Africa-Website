const EventHero = () => {
  return (
    <div className="flex justify-center items-center bg-[#F6F7F6] mb-[50px]">
      <div className="container px-4 flex">
        <div className="flex-1 pr-8 pt-[194px] pb-[325px] pl-[50px] items-end content-end gap-[15px] flex-wrap">
          <div className="flex w-[584px] flex-wrap gap-[10px] items-end content-end">
            <h1 className="text-4xl w-[584px] leading text-[#1C1C1C] font-serif  font-[400px] space-[3.36]">
              Our Programmes
            </h1>
            <p className="text-lg w-[529px] h-[48px] font-popins font-[400px] text-[#1C1C1C] opacity-75">
              Learn, build and showcase your skills alongside like-minded peers.
            </p>
          </div>
        </div>
        <div className="flex-1 pt-[96px] pr-[60.47px] pb-[115.3px] w-[472px] h-[516px]">
        <img src="sideimg.png" alt="side" />
        </div>
      </div>
    </div>
  );
};

export default EventHero;