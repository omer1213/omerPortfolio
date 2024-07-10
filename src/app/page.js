"use client"
import React from 'react'
import NavBar from './components/navBar/navBar'
import HeroMain from './components/heroSection/heroMain'
import AboutSection from './components/about/About'
import Contact from './components/contact/contact'
import { useEffect } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Project from './components/project/project'
import ProjectCard from './components/project/project'
function Page() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])

  const projects = [
    {
      title: "Elite Drains",
      description: "A platform for connecting locals with plumbers",
      tags: ["HTML", "CSS", "JavaScript", "Jquery", "ExpressJs", "SQL"],
      imageUrl: "/plumber.PNG",
    },
    {
      title: "Creative Gig",
      description: "Transforemed a figma designe to NextJs",
      tags: ["NextJs", "Tailwind CSS"],
      imageUrl: "creativeGig.PNG",
    },
    {
      title: "Bella Onajia",
      description: "Transformed a figma design for getting hands on experiece",
      tags: ["NextJs", "Tailwind CSS", "AOS"],
      imageUrl: "bellaOnajia.PNG",
    },
    {
      title: "Nike",
      description: "Transformed a figma design into well structured code",
      tags: ["NextJs", "Tailwind CSS", "AOS"],
      imageUrl: "nike.PNG",
    },
    {
      title: "Stock Management",
      description: "Build a project similar to inventory management system but in a very lower level for getting hands on experience",
      tags: ["NextJs", "MongoDB"],
      imageUrl: "stock.PNG",
    },
    {
      title: "ToDo List",
      description: "Build a ToDo project to get track all my daily routine stuffs with vanila javascrip",
      tags: ["html", "css", "javascript"],
      imageUrl: "todo.PNG",
    },
    {
      title: "Personal Portfolio",
      description: "Build a personal portfolio to showcase myself",
      tags: ["NextJs", "Tailwind CSS", "AOS", "framer motion"],
      imageUrl: "port.PNG",
    },
    // Add more projects as needed
  ];

  return (
    <main className='flex min-h-screen  flex-col bg-[#121212] '>

      <HeroMain />
      <div data-aos="fade-up"
        data-aos-duration="600">

        <AboutSection />
      </div>
      {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div> */}

      <div className="flex flex-col items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            imageUrl={project.imageUrl}
            isEven={index % 2 === 0}
          />
        ))}
      </div>

      <div data-aos="zoom-in">
        <Contact />
      </div>

    </main>
  )
}

export default Page