"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AI Mock App",
    description: "Developed a comprehensive and user-friendly AI-driven mock interview application designed to enhance interview preparation. The app features realistic interview simulations, personalized feedback, and advanced analytics to track performance.",
    image: "/images/projects/0.png",
    tag: ["All"],
    gitUrl: "https://github.com/omasati1709/ai_mock",
    previewUrl: "https://ai-mock-omega.vercel.app/",
  },
  {
    id: 2,
    title: "Onishop (Ecommerce)",
    description: "Developed an efficient and secure e-commerce admin panel with streamlined product and inventory management, order processing, user-friendly interface, and advanced filtering options for an enhanced online shopping experience, implementing robust OAuth security measures.",
    image: "/images/projects/1.png",
    tag: ["All"],
    gitUrl: "https://github.com/omasati1709/OniShop",
    previewUrl: "https://onishop-main.onrender.com/",
  },
  {
    id: 3,
    title: "ChatApp",
    description: "Designed and implemented a feature-rich chat application with a user-friendly interface, real-time messaging, and enhanced user experience, incorporating robust security measures to ensure the confidentiality and integrity of user communications.",
    image: "/images/projects/2.png",
    tag: ["All"],
    gitUrl: "https://github.com/omasati1709/chat_app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "A2ZGPT",
    description: "Develop A2ZGPT, a versatile platform integrating AI-driven text conversion, image processing, video manipulation, music generation, and code development. Empowered users with seamless and comprehensive tools for AI-powered content transformation across multiple domains, enhancing creativity and productivity.",
    image: "/images/projects/3.png",
    tag: ["All"],
    gitUrl: "https://github.com/omasati1709/A2ZGPT",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Expense management system",
    description: "Design a user-friendly Expense Management platform with comprehensive features for efficient expense tracking, submission, reimbursement processing, and dynamic Expense Graphs, enhancing User Experience (UX). Implemented robust OAuth authentication for heightened platform security, ensuring the safety and confidentiality of user data.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "https://github.com/omasati1709/Expense_management_system_repo",
    previewUrl: "https://uptight-ruby-buffalo.cyclic.app/",
  },
  {
    id: 6,
    title: "Todo List APP",
    description:
      "Crafted a productive and user-friendly To-Do List application that simplifies task management. Empowered users to efficiently create, organize, and complete tasks, with intuitive features for task creation, tracking, completion, and deletion, ultimately streamlining the overall user experience.",
    image: "/images/projects/5.png",
    tag: ["All"],
    gitUrl: "https://github.com/omasati1709/Todo_list",
    previewUrl: "https://todo-list-seven-psi-12.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
