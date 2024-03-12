import CoursesOffered from "./CoursesOffered/CoursesOffered";
import CurrentAndUpcoming from "./CurrentAndUpcoming/CurrentAndUpcoming";
import Faq from "./Faq/Faq";
import HeroSection from "./HeroSection/HeroSection";
import JoinHackerHouse from "./JoinHackerHouse/JoinHackerHouse";
import { RegisterOffline, RegisterOnline } from "./Register/Register";
import WhatYou from "./WhatYou/WhatYou";

const IndexHome = () => {
  return (
    <div>
      <HeroSection />
      <WhatYou />
      <RegisterOnline />
      <CoursesOffered />
      <JoinHackerHouse />
      <Faq />
      <CurrentAndUpcoming />
      <RegisterOffline />
    </div>
  );
};

export default IndexHome;
