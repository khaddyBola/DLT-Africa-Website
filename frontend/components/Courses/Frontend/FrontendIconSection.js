

import IconSection from "../IconSection/IconSection";
 import { ImHourGlass } from "react-icons/im";
 import { IoIosApps } from "react-icons/io";
 import { BsListUl, BsCalendar4Event } from "react-icons/bs";
 import { CgBrowser } from "react-icons/cg";
//  import { SlCalender } from "react-icons/sl";;

 import { BsLayoutWtf } from "react-icons/bs"; // Assuming this is a typo and should be imported as well

const secData = [
  {
    id: 1,
    title: "Duration",
    text: "4 months Changed from text to match the data Changed from text to  the data",
    //text2: "(3 times a week)", // Changed from text to text2 to match the data
     icon: <ImHourGlass />,
    courseConClass: "py-2 px-30 flex flex-row items-center justify-center gap-[30px] ",
    iconBodyClass: " p-6 w-[229px] h-[241px] border-2 border-[#fc7c1366] shadow-md rounded-[10px] flex sm:w-[180px] h-[200px] p-2",
    iconsClass: "text-[65px] text-[#C54809] mb-[30px] sm:text-[25px] md: text-[35px]", // Example class for icon size
    titleClass: "text-[22px] font-normal text-[#1C1C1C]", // Example class for title
    textClass: "text-md w-[100%] text-[#1C1C1C] mt-[10px]", // Example class for text
    
  },
  {
    id: 2,
    title: "Date",
    text: "Inview",
     icon: <BsCalendar4Event/>,
    courseConClass:" py-2 px-30 flex flex-row items-center justify-center", // Different class for the second item
    iconBodyClass: " p-6 w-[229px] h-[241px] border-2 border-[#fc7c1366] shadow-md rounded-[10px] flex sm:w-[180px] h-[200px] p-1",
    iconsClass: "text-[65px] text-[#C54809] mb-[30px] sm:text-[25px] md: text-[35px]", // Example class for icon size
    titleClass: "text-[22px] font-normal text-[#1C1C1C]", // Example class for title
    textClass: "text-md w-[100%] text-[#1C1C1C] mt-[10px]", // Example class for text
  },
  {
    id: 3,
    title: "Level",
    text: "Our program doesn't require you to have any knowledge",
    icon: <IoIosApps/>, 
    courseConClass: "py-2 px-30 flex flex-row items-center justify-center", // Different class for the second item
    iconBodyClass: " p-6 w-[229px] h-[241px] border-2 border-[#fc7c1366] shadow-md rounded-[10px] flex sm:w-[180px] h-[200px] p-1",
    iconsClass: "text-[65px] text-[#C54809] mb-[30px] sm:text-[25px] md: text-[35px]", // Example class for icon size
    titleClass: "text-[22px] font-normal text-[#1C1C1C]", // Example class for title
    textClass: "text-md w-[100%] text-[#1C1C1C] mt-[10px]", // Example class for text
  },
  {
    id: 4,
    title: "Cost",
    text: "Our frontend course cost sum of Three hundred and Seventy thousand naira only.(#370,000)",
    icon: <CgBrowser />, // Corrected to SlCalendar
    courseConClass: "py-2 px-30 flex flex-row items-center justify-center", // Different class for the second item
    iconBodyClass: " p-6 w-[229px] h-[241px] border-2 border-[#fc7c1366] shadow-md rounded-[10px] flex sm:w-[180px] h-[200px] p-1",
    iconsClass: "text-[65px] text-[#C54809] mb-[30px] sm:text-[25px] md: text-[35px]", // Example class for icon size
    titleClass: "text-[22px] font-normal text-[#1C1C1C]", // Example class for title
    textClass: "text-md w-[100%] text-[#1C1C1C] mt-[10px]", // Example class for text
    
  },
  {
    id: 5,
    title: "Prerequisites",
    text: "All you'll needing for our program is a laptop and an open mind",
    icon: <BsListUl />, 
    courseConClass: "py-2 px-30 flex flex-row items-center justify-center", // Different class for the second item
    iconBodyClass: " p-6 w-[229px] h-[241px] border-2 border-[#fc7c1366] shadow-md rounded-[10px] flex sm:w-[180px] h-[200px] p-1",
    iconsClass: "text-[65px] text-[#C54809] mb-[30px] sm:text-[25px] md: text-[35px]", // Example class for icon size
    titleClass: "text-[22px] font-normal text-[#1C1C1C]", // Example class for title
    textClass: "text-md w-[100%] text-[#1C1C1C] mt-[10px]", // Example class for text
  },
  {
    id: 6,
    title: "Projects",
    text: "Our cohorts will be given 3 project to test their knowledge",
    icon: <BsLayoutWtf/>, 
    courseConClass: "py-2 px-30 flex flex-row items-center justify-center ", // Different class for the second item
    iconBodyClass: " p-6 w-[229px] h-[241px] border-2 border-[#fc7c1366] shadow-md rounded-[10px] flex sm:w-auto h-[200px] p-1",
    iconsClass: "text-[65px] text-[#C54809] mb-[30px] sm:text-[25px] md: text-[35px]", // Example class for icon size
    titleClass: "text-[22px] font-normal text-[#1C1C1C]", // Example class for title
    textClass: "text-md w-[100%] text-[#1C1C1C] mt-[10px]", // Example class for text
  },
  // Add more data objects as needed
];
const FrontendIconSection = () => {
    return ( 
      
    <section className="mainCon flex justify-center pt-[84px] pb-[71px] text-center px-[210px] bg-[#F6F6F6]">
    <div className="iconsCon grid grid-cols-3 gap-30px sm:grid-cols-1 gap-2 md:grid-cols-2 gap-4 items-center justify-center">
      {secData.map(({ id, title, text, text2, icon, courseConClass, iconBodyClass, iconsClass, titleClass, textClass }) => (
        <IconSection
          key={id}
          title={title}
          text={text}
          text1={text2} // Passing text2 as text1 to IconSection
          icon={icon} // Pass the icon component directly
          courseConClass={courseConClass} // Pass Tailwind classes as props
          iconBodyClass={iconBodyClass}
          iconsClass={iconsClass}
          titleClass={titleClass}
          textClass={textClass}
        />
      ))}
    </div>
  </section>
   );
}
 
export default FrontendIconSection;
