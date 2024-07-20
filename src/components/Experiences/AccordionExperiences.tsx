import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronRight } from "lucide-react";

const dataWorkExperiences: {
  title: string;
  institution: string;
  link: string;
  period: string;
  responsibilites: string[];
}[] = [
  {
    title: "Front End Engineer",
    institution: "Lovecare",
    link: "https://lovecare.id/",
    period: "Aug 2021 - Aug 2024",
    responsibilites: [
      "Planned, designed, and built user interface systems for the company profile website using Next.js, ensuring seamless and user-friendly digital interaction.",
      "Collaborate cross-functionally with other developers, project managers, and customer services to develop and sustain valuable features for the company's internal dashboard website",
      "Strategically contribute to shaping business and user flows from the ground up for the company's system, resulting in streamlined processes, enhanced user experiences, and improved system efficiency.",
    ],
  },
  {
    title: "Laboratory Assistant",
    institution: "Parahyangan Catholic University",
    link: "https://ti.unpar.ac.id/",
    period: "Aug 2019 - Jan 2021",
    responsibilites: [
      "Took on the role of vice coordinator assistant, contributing to team coordination and course structure.",
      "Delivered comprehensive lessons in data visualisation and data processing using R language.",
      "Provided guidance and supervision for a cohort of 18 students.",
    ],
  },
  {
    title: "Teaching Assistant",
    institution: "Parahyangan Catholic University",
    link: "https://ti.unpar.ac.id/",
    period: "Jan 2020 - Jun 2020",
    responsibilites: [
      "Conducted instructive sessions for two classes, each with an active participation of 30 students.",
      "Developed interactive and insightful descriptive statistics exercises for participants.",
    ],
  },
];

const AccordionExperiences: React.FC<{}> = () => {
  return (
    <Accordion type="single" collapsible>
      {dataWorkExperiences?.map((workExperience, idx) => (
        <AccordionItem key={workExperience?.period} value={`item-${idx + 1}`}>
          <AccordionTrigger>
            <div className="flex space-x-4 items-center justify-between w-full pr-10">
              <p className="text-md">{workExperience?.title}</p>
              <a
                href={workExperience?.link}
                target="_blank"
                className="text-base text-secondary hover:underline font-light"
              >{`@ ${workExperience?.institution}`}</a>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-12 mb-8">
              <p className="text-gray-text text-base">
                {workExperience?.period}
              </p>
              {workExperience?.responsibilites?.map((responsibility) => (
                <div
                  key={responsibility}
                  className="flex space-x-4 items-center"
                >
                  <div>
                    <ChevronRight className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <p className="text-white text-base font-light">
                      {responsibility}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionExperiences;
