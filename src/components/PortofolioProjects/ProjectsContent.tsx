import { Fragment, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Image } from "astro:assets";

const projects = [
  {
    title: "Sing with Piano Collections",
    imgSrc: "/src/images/swpc.webp",
    year: "2022",
  },
  {
    title: "Wedding Invitation",
    imgSrc: "/src/images/wedding-invitation.webp",
    year: "2023",
  },
  // {
  //   title: "Taruna Bangsa",
  //   imgSrc: "/src/images/swpc.webp",
  //   year: "2022",
  // },
  {
    title: "Comic Wiki",
    imgSrc: "/src/images/comic-wiki.webp",
    year: "2021",
  },
];

interface ProjectsContentProps {}

const ProjectsContent: React.FC<ProjectsContentProps> = () => {
  const [activeProject, setActiveProject] = useState<{
    title: string;
    imgSrc: string;
  }>({
    title: "",
    imgSrc: "",
  });

  return (
    <div className="grid grid-cols-12 space-x-8">
      <div className="grid col-span-4 col-start-1 h-full">
        <div className="flex flex-col">
          <hr className="" />
          {projects?.map((project) => (
            <div
              className="flex flex-col"
              key={project?.title}
              onMouseEnter={() => {
                setActiveProject({
                  title: project?.title,
                  imgSrc: project?.imgSrc,
                });
              }}
              onMouseLeave={() => {
                setActiveProject({
                  title: "",
                  imgSrc: "",
                });
              }}
            >
              <button className="flex gap-6 py-6">
                <div className="grow flex gap-2 items-center">
                  {activeProject?.title === project?.title ? (
                    <ArrowRight size={18} color="white" />
                  ) : null}
                  <p>{project.title}</p>
                </div>
                <p className="text-gray-400">{project?.year}</p>
              </button>
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="grid col-span-7">
        <div className="right-0 bottom-0 h-3/4 w-1/2 absolute">
          {/* <img
              src="/src/images/swpc.png"
              alt="SWPC Banner"
              className="rounded-tl-2xl rounded-br-2xl h-full w-full object-cover border-gray-button border-t border-l"
            />  */}
          {activeProject?.imgSrc ? (
            <img
              src={activeProject?.imgSrc}
              alt={`${activeProject?.imgSrc} Thumbnail`}
              className="rounded-tl-2xl rounded-br-2xl h-full w-full object-cover border-gray-button border-t border-l"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;
