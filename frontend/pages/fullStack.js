
import FullstackDetail from "../components/Courses/Fullstack/FullstackDetail";
import FullStackHero from "../components/Courses/FullStack/FullstackHero";
import FullstackIconSection from "../components/Courses/Fullstack/FullstackIconSection";


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