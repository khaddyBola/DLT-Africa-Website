import Faq from "../../HomePage/Faq/Faq";

const Faqs = () => {
  const faqOne = [
    {
      id: 1,
      question:
        "What are the requirements to join the software development training ?",
      answer:
        "Anyone with burnig passion to build solution that solve real world use cases are eligible to join. We appreciate people who already have idea of what they are looking to build but we encourage everyone to apply.",
    },
  ];

  const faqTwo = [
    {
      id: 1,
      question:
        "What kind of company can participate in the incubation program ?",
      answer:
        "There are no restrictions on companies that can participate. Existing projects and new builders who wish to develop an inpact-driven projects using Web3 can apply.",
    },
  ];

  const faqThree = [
    {
      id: 1,
      question: "What is the overview of the training ?",
      answer:
        "The training is to take an absolute beginners from ground zero to a smart contract developer with the curriculum including HTML, CSS, UI/UX, Javascript, NodeJs, ReactJS and smart contract development with Solidity.",
    },
  ];

  const faqFour = [
    {
      id: 1,
      question: "What is the overview of the incubation program ?",
      answer:
        "The program is 3 months online program that include mentorship, management skills training, regular web3 session and networking events to help put the business in the right position. A demo day will be held during the final week, where there will be opportunity to pitch to global leaders and VC within Web3 space.",
    },
  ];

  const faqFive = [
    {
      id: 1,
      question: "What are the key dates and how to apply for the training ?",
      answer:
        "The training durations depend on the chosen course. Navigate to the courses page for more information..",
    },
  ];

  const faqSix = [
    {
      id: 1,
      question: "How to apply for the incubation program and key dates ?",
      answer:
        "After submitting the application on our website, we will sent an email to confirm the application has been recieved. We will also follow up to schedule a time for screening and interview for successfull application. Only the one who are successful after the interview will be selected to participate in the incubation program. The timeline from application to when successful application will be announced is eight weeks.",
    },
  ];

  const backgoundImage =
    "https://s3-alpha-sig.figma.com/img/e12b/f3f6/017ed28b632ffaaa6539c2f2c1ec403d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g4x3ZXmd843CbxEOUZjirzw9xVUYUunoiDqF~BdhyMSCkoheJkxrpa5MdULTTZcKn5RBUdjE0-iur7jjhxo8o6G4L7Y0OzLryowO69jTDFFHHE18UU-X4q3bO~FTch2IBIXPZR3IqKMNkLok1sFy3LLxYlxbcr-l552VJ8e0xRBNyaqEY4ebKq67Tp-FSiQfGYl6~Bp1UHLaezPxtaebXrOZgJnq6fGW6JfWq8G4dYKrVoSTvDgvoXjWbHI235gLSdMN4Sq6FdGk8vrHGNoYTrHY6FNj0ZCsE5du2u~W0DrcMBd1SFuJzFxPty0Y7pq~NoCinLQk4dsB~JS84GTZcg__";

  return (
    <section
      style={{
        backgroundImage: `url(${backgoundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="p-40 "
    >
      <div className="text-center mb-10 -m-20">
        <h1 className="text-4xl mb-5">Frequently asked questions</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasell{" "}
          <br />
          lorem. Nam vehicula commodo malesuada. Cras tempus metus id lorem
          <br />
          vulputate pellentesque eros et, elementum magna. Aenean convallis
          lobortis ipsum, non me lorem.
        </p>
      </div>

      <div className="bg-orange-300 p-5 mb-5 rounded-[10px]">
        {faqOne.map(({ question, answer, id }) => (
          <Faq key={id} question={question} answer={answer} />
        ))}
      </div>

      <div className="bg-orange-300 p-5 mb-5 rounded-[10px]">
        {faqTwo.map(({ question, answer, id }) => (
          <Faq key={id} question={question} answer={answer} />
        ))}
      </div>

      <div className="bg-orange-300 p-5 mb-5 rounded-[10px]">
        {faqThree.map(({ question, answer, id }) => (
          <Faq key={id} question={question} answer={answer} />
        ))}
      </div>

      <div className="bg-orange-300 p-5 mb-5 rounded-[10px]">
        {faqFour.map(({ question, answer, id }) => (
          <Faq key={id} question={question} answer={answer} />
        ))}
      </div>

      <div className="bg-orange-300 p-5 mb-5 rounded-[10px]">
        {faqFive.map(({ question, answer, id }) => (
          <Faq key={id} question={question} answer={answer} />
        ))}
      </div>

      <div className="bg-orange-300 p-5 mb-5 rounded-[10px]">
        {faqSix.map(({ question, answer, id }) => (
          <Faq key={id} question={question} answer={answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
