import Image from "next/image";
import Link from "next/link";
import ProductUI from "../../public/ProductUI.png";
import Framefrontend from "../../public/Framefrontend.png";
import Fullstackbg from "../../public/Fullstackbg.png";
import Blockchainframe from "../../public/Blockchainframe.png";

const coursesList = [
  {
    id: 1,
    courseName: "UI/UX Design and Prototyping (Product Design)",
    description:
      "User Interface (UI) and User Experience(UX) design are in great demand and are applicable across products and industry domain. With customer experience being the centerfold...  ",
    media: ProductUI,
    url: "/product",
  },
  {
    id: 2,
    courseName: "Frontend Web Development",
    description:
      "Start off your career today as a Front-End Web Developer. Learn to build high quality websites with dynamic applications to create stunning user experiences…",
    media: Framefrontend,
    url: "/frontend",
  },
  {
    id: 3,
    courseName: "Fullstack Web Development",
    description:
      "Acquire the skills and knowledge needed build a complete web development project from scratch to finish. Our Full-Stack Developer&apos;s Program is a 6 months program.",
    media: Fullstackbg,
    url: "/fullstack",
  },
  {
    id: 4,
    courseName: "Blockchain Development (Smart Contract)",
    description:
      "Acquire the skills and knowledge needed to be a Blockchain Developer",
    media: Blockchainframe,
    url: "/blockchain",
  },
];

const page = () => {
  return (
    <div>
      <div className="mt-[127px] ">
        <h1 className="text-[32px] text-[700] text-[#123E31] pl-[50px] mb-[65px] ">
          Our Courses
        </h1>
      </div>

      <div className="flex flex-wrap gap-x-[12px] gap-y-[21px] p-[50px]	items-center justify-center mb-[136px]">
        {coursesList.map(({ id, courseName, description, media, url }) => (
          <Link href={url} key={id}>
            <Image
              src={media}
              alt="courses"
              className="w-[500px] rounded-lg h-[200px] "
            />

            <div className="w-[502px] flex flex-col gap-y-[15px] rounded-b-lg bg-[#186106] p-[15px] h-[200px]">
              <p className="mt-[12px] text-[28px] text-[#fff] ">{courseName}</p>
              <p className="text-[14px] text-[#fff] "> {description} </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
