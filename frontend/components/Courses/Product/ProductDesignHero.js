import CourseSection from "../CoursesHero/CourseHeroSec";


const sectionData = [
  {
<<<<<<< HEAD
    id: 3,
=======
    id: 2,
>>>>>>> 7afcb9c32c222a58cc4e11af0f33856e946e8cba
    title: "UI/UX Design and Prototyping(Product Design)",
    text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    headline1: "Graduate in six months, part-time, and start working in the high-demand field of software development.",
    headline2: "Meet regularly with an experienced mentor to ask the questions you care about.",
    headline3: "Build your coding skills and launch your software engineering career",
    button1: "Register for Offline",
    button2: "Register for Online",
    img: "/images/front-end-hero.png", 
  },
];

const ProductDesignHero = () => {
  return (
    <section className="course" id="course">
      <div>
        {sectionData.map(({ id, ...rest }) => (
          <CourseSection key={id} {...rest} showCheckbox={true} />
        ))}
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ProductDesignHero
=======
export default ProductDesignHero;
>>>>>>> 7afcb9c32c222a58cc4e11af0f33856e946e8cba
