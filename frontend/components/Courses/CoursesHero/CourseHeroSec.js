import Link from "next/link";
const CourseSection = (props) => {
  return (
    <>
      <section>
        <div>
          <div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>

            <div>
              {/* <Link>Apply Now</Link> */}


              <button>{props.button2}</button>

              <div className="flex flex-col lg:flex-row gap-4 py-4 lg:py-[36px]">
                <Link href="/training" legacyBehavior={true}>
                  <a className="bg-[#FC7C13] w-full lg:w-[196px] h-[55px] p-[10px] flex justify-center items-center text-white font-bold rounded-[10px] hover:bg-[#ED6109] hover:text-[#F7FCFE]">
                    Register for Offline
                  </a>
                </Link>
                <Link href="/training" legacyBehavior={true}>
                  <a className="w-full lg:w-[196px] h-[55px] p-[10px] flex justify-center items-center text-[#C54809] font-bold rounded-[10px] hover:bg-[#FFF8ED] border border-solid border-[#C54809]">
                    Register for online
                  </a>
                </Link>
              </div>
              <p className="text-gray-700">{props.headline}</p>

            </div>
            <p>{props.headline}</p>
          </div>

          <div>{/* <img src={props.img} alt={props.title} /> */}</div>
        </div>
      </section>
    </>
  );
};

export default CourseSection;
