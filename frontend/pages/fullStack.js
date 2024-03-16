import React from "react";
import FullstackIconSection from "../components/Courses/FullStack/FullstackIconSection";
import FullstackDetail from "../components/Courses/FullStack/FullstackDetail";
import FullStackHero from "../components/Courses/FullStack/FullstackHero";

const fullStack = () => {
  return (
    <div>
      <FullStackHero />
      <FullstackIconSection />
      <FullstackDetail />
    </div>
  );
};

export default fullStack;
