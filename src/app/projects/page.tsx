"use client";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Project = () => {
  const projectsList = [
    {
      name: "Nodejs whisper",
      description:
        "NodeJS Bindings for Whisper - the CPU version of OpenAI's Whisper, as initially crafted in C++ by ggerganov.",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "",
        },
      ],
      FullDescriptionHTML: `NodeJS Bindings for Whisper - the CPU version of OpenAI's Whisper, as initially crafted in C++ by ggerganov.`,
    },
    {
      name: "Short video automation",
      description:
        "A short content automation bot, which can generate short videos for youtube and instagram",
      githubLink: "",
      buttons: [
        {
          name: "Github Link",
          link: "",
        },
      ],
      FullDescriptionHTML: `A tool to automate the process of creating short videos for social media platforms like Instagram, Facebook, and Twitter.`,
    },
  ];

  const [selectedProject, setSelectedProject] = React.useState(projectsList[0]);
  return (
    <div className=" bg-black w-full h-screen text-white  flex-col flex items-center   ">
      <div className=" w-full  h-[10%]  flex items-center justify-center ">
        <h1 className="text-2xl ">Projects</h1>
      </div>
      <div className="flex items-center  flex-1    justify-between w-full">
        <div className="  h-full  w-full md:w-[60%] flex flex-1 items-center  flex-col ">
          <div className=" flex-1 text-white w-full flex flex-col gap-2 p-3 ">
            {projectsList.map((project) => {
              return (
                <ProjectCard
                  onClick={() => {
                    console.log("clicked");
                    console.log(project);

                    setSelectedProject(project);
                  }}
                  project={project}
                />
              );
            })}
          </div>
        </div>
        <div className="flex-1 border px-4  items-center   h-full  hidden md:flex md:flex-col py-7">
          <h1 className="text-xl">Project Details</h1>
          <div className="flex flex-col gap-3 py-4">
            <h1 className="text-lg">{selectedProject?.name}</h1>
            <div>
              <p className="text-sm">{selectedProject?.FullDescriptionHTML}</p>
            </div>
            <div>
              {selectedProject?.buttons.map((button) => {
                return (
                  <Button>
                    <Link href={button.link}>{button.name}</Link>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;