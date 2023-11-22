"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import portfolio from '../public/portfolio.png'
import hotel from  "../public/hotel.png"
import cart from  "../public/cart.png"
import movie from  "../public/movie.png"
import phone from  "../public/phone.png"
import nft from  "../public/nft.png"
import glassmorphism from "../public/glass.png"


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: portfolio,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taiwooye/Portfolio-website",
    previewUrl: 'https://portfolio-website-cyan-rho.vercel.app',
  },
  {
    id: 2,
    title: "Hotel",
    description: "Project 2 description",
    image:hotel,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taiwooye/Book-Resort",
    previewUrl: "https://book-resort.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image:cart,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taiwooye/Online-Cart",
    previewUrl: "https://online-shopping-cart-sepia.vercel.app",
  },
  {
    id: 4,
    title: "Movie",
    description: "Project 4 description",
    image: movie,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taiwooye/show-movies-with-Netflix",
    previewUrl: "https://show-movies-with-netflix.vercel.app",
  },
  {
    id: 5,
    title: "Background interface",
    description: "Project 4 description",
    image: phone,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taiwooye/desktop-font",
    previewUrl: "https://desktop-font.vercel.app",
  },
  {
    id: 6,
    title: "NFT website",
    description: "Project 5 description",
    image: nft,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taiwooye/NFT",
    previewUrl: "https://nft-dusky-xi.vercel.app",
  },
  {
    id: 6,
    title: "glassmorphism",
    description: "Project 6 description",
    image: glassmorphism,
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Taiwooye/Glassmorphism-work",
    previewUrl: "https://glassmorphism-work.vercel.app/",
  },
];

const ProjectSection = () => {

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
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
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

export default ProjectSection;
