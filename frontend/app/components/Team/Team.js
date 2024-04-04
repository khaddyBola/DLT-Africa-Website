import React from "react";
import Linkedin from "../../../public/images/linkedin.svg";
import Twitter from "../../../public/images/twitter.svg";
import Image from "next/image";

const teamMember = [
  {
    id: 1,
    img: require("../../../public/images/img.png"),
    name: "Soliu Ahmad",
    role: "Software Developer",
    description:
      "Soliu is a software developer, he is a very good team worker. He is always ready to face any challenging projects.",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
  {
    id: 2,
    img: require("../../../public/images/img.png"),
    name: "Naheem Oloyede",
    role: "Software Developer & Team Lead",
    description:
      "Naheem is a witty and result oriented full stack developer. Naheem is astuteness and zeal for getting excellent results coupled with his exceptional leadership, and HR skills earned him job at DLT Africa..",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
  {
    id: 3,
    img: require("../../../public/images/img.png"),
    name: "Jordan Muthemba",
    role: "Blockchain Developer",
    description:
      "Jordan is driven by his passion for software development and his desire to use technology to make a positive impact on communities. He is committed to sharing his knowledge with others and is always eager to talk about his journey in Blockchain technology.",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
  {
    id: 4,
    img: require("../../../public/images/img.png"),
    name: "Abdullah Raji",
    role: "Software Developer",
    description:
      "With a passion for coding, I have dedicated expertise to shaping innovative solutions in the realm of technology.",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
  {
    id: 5,
    img: require("../../../public/images/img.png"),
    name: "Aliyu Anate",
    role: "Software Developer",
    description:
      "Creative software engineer blending innovation with hard work and humor for impactful solutions",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
  {
    id: 6,
    img: require("../../../public/images/img.png"),
    name: "Fawaz Dada",
    role: "Graphic Designer",
    description:
      "A highly creative, fast-working, and adaptable graphic designer who can quickly grasp the concept of the brief he has been given. He has a strong understanding of the principles of design and he is able to apply them to create visually appealing and effective designs..",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
  {
    id: 7,
    img: require("../../../public/images/img.png"),
    name: "Oluwaseyi Abolaji",
    role: "Product Designer & Manager",
    description:
      "Oluwaseyi is a Product designer with a background in Computer Science. Keeping the users needs and expectations in mind while not losing sight of the business goals, enables him to make sound design decisions that benefit the user and the business.",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
  {
    id: 8,
    img: require("../../../public/images/img.png"),
    name: "Aliu Musa",
    role: "Blockchain Engineer",
    description:
      "Aliu Musa has wealth of experience in Software Engineering and Business Operations, having worked with top web3 companies across the world including OKX, Real Items and with his current position as the Africa Ecosystem Lead at Celo Foundation.",
    linkedinLink: "https://www.linkedin.com",
    twitterLink: "https://twitter.com",
  },
];

const backgoundImage =
  "https://s3-alpha-sig.figma.com/img/30e7/ba92/c51479ec9db1e5601ae0aae5613f39bc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UO3zPE9bTChfdGKwlcUwVL33ZpwtdldQBQxILTnFZEemkufw55Ze6QiKilY2r35Akpd~2K61p3yPojAM423UK5yIg9W8ZDu1A9Zfku1WzjKp84~96Uxhwdfx5cqvIRSqn4J52VSVv03QUTiQtXYkmtO5ZHfBzj45tBFAOBTgyXqgz8igSRKfdWymye1~QBstRYcnDPsMZDKs~ty-AwnAiGdc4nlJr2vTURScGQ5n8uXRu2-G7GJtoELWPlBDNwCb2LEMKgBNMfRvP4k21HrITmPVUs8WyngXIRvIZQGzJyBtPh6pMasg81aLYl6KuXaH3wDZajLLNcPXL3qEvW4kmA__";

const team = () => {
  return (
    <div className="h-[2135px]">
      <div
        className="mt-[185px] 
                text-center 
                mb-[111px] 
                text-[#441606] 
                text-[36px] 
                font-[normal] 
                leading-[120%] 
                tracking-[2.52px]"
      >
        {" "}
        Meet the Team
      </div>

      <div
        className="grid 
                gap-[68px 73px] 
                w-full 
                px-10 
                pt-10 
                md:grid-cols-2 
                lg:grid-cols-3"
      >
        {teamMember.map((member) => (
          <div
            className="flex 
                        flex-col 
                        w-[387px] 
                        h-[521px] 
                        gap-[35px] 
                        items-center 
                        flex-shrink-0 
                        p-[-60px] 
                        border-2 border-orange-100 
                        rounded-[10px] 
                        mb-[73px]"
            key={member.id}
          >
            <div>
              <Image
                className="w-[180px] 
                                h-[180px] 
                                flex 
                                justify-center 
                                items-center
                                mt-5"
                src={member.img}
                alt="team image"
              />
            </div>

            <div className="p-[20px]">
              <h2
                className="
                                text-[22px]
                                text-[#1C1C1C] 
                                text-center 
                                mb-[15px] 
                                font-Poppins 
                                leading-[120%] 
                                font-semibold 
                                opacity-[0.75]"
              >
                {member.name}
              </h2>

              <h3
                className="text-center 
                                text-[#1C1C1C] 
                                text-[16px] 
                                font-light 
                                font-[normal] 
                                leading-[120%] 
                                opacity-[0.65]
                                mb-[7px]"
              >
                {member.role}
              </h3>

              <p
                className="
                                text-[14px] 
                                text-center 
                                text-[#1C1C1C] 
                                font-light 
                                font-[normal] 
                                leading-[120%] 
                                opacity-[0.65] "
              >
                "{member.description}"
              </p>
            </div>

            <div className="flex mb-[16px] w-[40px] h-[40px] gap-[10px]">
              <a href={member.linkedinLink}>
                <Image className="text-[#0A66C2]" src={Linkedin} alt="" />
              </a>

              <a href={member.twitterLink}>
                <Image className="text-[#000000]" src={Twitter} alt="twitter" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default team;
