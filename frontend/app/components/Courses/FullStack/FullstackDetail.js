"use client";

import React from "react";
import CourseDetail from "../CourseDetails/CourseDetail";
import Button from "../Button/Button";

const courses = [
  {
    id: 1,
    question: "About this Course",
    answer:
      "Anyone with a burning passion to build solutions that solve real-world use cases is eligible to join. We appreciate people who already have an idea of what they are looking to build, but we encourage everyone to apply.",
  },
  {
    id: 2,
    question: "What you will Learn",
    answer: [
      <>
        <p>
          Our full stack software development course follows a step-by-step
          approach to helping you learn irrespective of your prior knowledge of
          tech, until you can build your own web applications from scratch.
        </p>
        <p>
          Students will learn through an instructor-led training program while
          working on assignments and class projects for the first 3 months. The
          last 3 months will be for learning and working on real-life projects
          with mentors four days a week.
        </p>
        <h6>THE PROGRAM IS DESIGNED IN 2-PARTS</h6>
        <ol>
          <li>Frontend Web Development</li>
          <li>Backend Web Development</li>
        </ol>
      </>,
    ],
  },
  {
    id: 3,
    question: "Prerequisites",
    answer: [
      <ul className="list-disc">
        <li>
          A computer on which you can install software (Windows, MacOS, or
          Linux)
        </li>
        <li>4 Months to learn and work hard to build a career in tech.</li>
        <li>
          No prior programming experience is required. We will start from the
          very basics
        </li>
      </ul>,
    ],
  },
  {
    id: 4,
    question: "Course Outline",
    answer: [
      <ul className="list-disc">
        <li>HTML Basics</li>
        <li>CSS Styling.</li>
        <li>Tailwind CSS</li>
        <li>JavaScript Fundamentals</li>
        <li>ReactJs library</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB & Mongoose</li>
        <li>
          Students will build different projects and create a portfolio that
          will be use to get their first gig.
        </li>
      </ul>,
    ],
  },
  {
    id: 5,
    question: "Class Schedule",
    answer: "Days of Class: Mondays, Tuesdays, Wednesdays and Thursdays.",
  },
];

const FullstackDetail = () => {
  return (
    <div className="py-[95.5px] bg-[#F6F6F6] px-[286px] ">
      <div>
        {courses.map(({ id, question, answer }) => (
          <CourseDetail key={id} question={question} answer={answer} />
        ))}
      </div>
      <div className="flex justify-center ">
        <Button to="/application">Apply Now</Button>
      </div>
    </div>
  );
};

export default FullstackDetail;
