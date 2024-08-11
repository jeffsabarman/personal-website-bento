import { Fragment, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Image } from "astro:assets";
import ImageProject from "./ImageProject";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

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

const dialogStyle: CSSProperties = {
  minWidth: "80%",
  minHeight: "80%",
};

interface ProjectsContentProps {}

const ProjectsContent: React.FC<ProjectsContentProps> = () => {
  const [activeProject, setActiveProject] = useState<{
    title: string;
    imgSrc: string;
  }>({
    title: "",
    imgSrc: "",
  });
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-16">
      <div className="grid col-span-6">
        <ImageProject {...{ activeProject }} />
      </div>
      <div className="grid col-span-6 col-start-1 row-start-1 h-full">
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
              <button
                className="flex gap-6 py-6"
                onClick={() => {
                  setIsOpenDialog(true);
                }}
              >
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
      <Dialog
        open={isOpenDialog}
        onOpenChange={(open) => {
          setIsOpenDialog(open);
        }}
      >
        <DialogContent style={dialogStyle}>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsContent;
