"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex m-auto">
        <Image src="/images/projects/html.png" alt="HTML" width={96} height={96} />
        <Image src="/images/projects/css.png" alt="CSS" width={96} height={96} />
        <Image src="/images/projects/express.png" alt="React" width={96} height={96} />
        <Image src="/images/projects/node-js.png" alt="node.JS" width={96} height={96} />

      </div>
    ),
  },
];
const MAT_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex m-auto">
        <Image src="/images/projects/next.png" alt="Next.js" width={96} height={96} />
        <Image src="/images/projects/python.png" alt="python" width={72} height={96} />
        <Image src="/images/projects/express.png" alt="Express" width={96} height={96} />
        <Image src="/images/projects/c++.png" alt="c++" width={96} height={96} />
      </div>
    ),
  },
];
const SAT_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex m-auto">
        <Image src="/images/projects/sql.png" alt="sql" width={96} height={96} />
        <Image src="/images/projects/mongodb.png" alt="mongodb" width={42} height={60} />
        <Image src="/images/projects/github.png" alt="github" width={96} height={96} />
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const cardVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    // <section className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image
        src="/images/about-image.jpg"
        alt="About Image"
        width={400}
        height={100}
      />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">About Me</h2>
        <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, React, Redux, Node.js, Express, NextJS,
          HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set.
          I am excited to work with others to create amazing applications.
        </p>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Skills </h2>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {MAT_DATA.find((t) => t.id === tab).content}
          </div>
          <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
            {SAT_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>


    </div>

    // </section>
  );
};

export default AboutSection;
