import FullstackDetail from "../components/Courses/FullStack/FullstackDetail";
import FullStackHero from "../components/Courses/FullStack/FullstackHero";
import FullstackIconSection from "../components/Courses/FullStack/FullstackIconSection";

const fullstack = () => {
  return (
    <div>
      <FullStackHero />
      <FullstackIconSection/>
      <FullstackDetail/>
    </div>
  );
};

export default fullstack;
