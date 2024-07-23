import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "../css/shared.css";
import { ChevronRight, ArrowUpRight } from "lucide-react";

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
      "Collaborate cross-functionally with other developers, project managers, and customer services to develop and sustain valuable features for the company's internal dashboard website.",
      // "Strategically contribute to shaping business and user flows from the ground up for the company's system, resulting in streamlined processes, enhanced user experiences, and improved system efficiency.",
      "Contributed to designing business and user flows for the company system, streamlining processes, enhancing user experiences, and improving efficiency.",
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

const TabsExperiences: React.FC<{}> = () => {
  return (
    <Tabs defaultValue={dataWorkExperiences?.[0]?.title} className="w-full">
      <TabsList>
        {dataWorkExperiences?.map((experience) => (
          <TabsTrigger
            key={experience?.title}
            value={experience?.title}
            className="link-underline"
          >
            {experience?.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {dataWorkExperiences?.map((experience) => (
        <TabsContent key={experience?.period} value={experience?.title}>
          <div className="mt-4 flex flex-col gap-4">
            <div className="flex justify-between gap-2">
              <a href={experience?.link} target="_blank">
                <div className="flex gap-1 items-center link-underline">
                  <p className="">{experience?.institution}</p>
                  <ArrowUpRight size={20} color="white" />
                </div>
              </a>
              <p className="font-medium text-gray-400">{experience?.period}</p>
            </div>
            <div className="flex flex-col gap-4">
              {experience?.responsibilites?.map((responsibility) => (
                <div key={responsibility} className="flex gap-2">
                  <div className="mt-0.5">
                    <ChevronRight color="hsl(var(--primary))" size={18} />
                  </div>
                  <p className="flex-grow font-light text-gray-300">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
      {/* <TabsContent value="password">Change your password here.</TabsContent> */}
    </Tabs>
  );
};

export default TabsExperiences;
