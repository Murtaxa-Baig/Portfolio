import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    {
      title: "Koach Assist",
      description:
        "Koach Assist was founded to streamline logistics and operations in high school athletics. We serve coaches and administrators, helping them find their next job.",
      tags: ["Nextjs", "Tailwind", "Typescript", "Strapi"],
      link: "https://www.koachassist.com",
    },
    {
      title: "Torque Web App",
      description:
        "The Torque Training App is a fitness application designed to provide personalized workout plans and track user progress, enhancing their training experience.",
      tags: ["Nextjs", "JavaScript", "Tailwind", "Strapi"],
      link: "https://start.torquetrainingapp.com",
    },
    {
      title: "Profile Hub",
      description:
        "Profile Hub is an intuitive web app for creating and sharing personalized profile links, making it easy to manage and showcase your online presence.",
      tags: ["Nextjs", "Typescript", "Tailwind", "FireBase"],
      link: "https://profile-hub-silk.vercel.app/",
    },
    {
      title: "NFT Marketplace Design",
      description:
        "NFT is a dynamic web application designed to streamline task management and assignment submissions, providing an efficient platform for students and educators.",
      tags: ["Nextjs", "Tailwind",],
      link: "https://assignment-9-psi.vercel.app/",
    },
    {
      title: "Task Tracker Pro",
      description:
        "It is a web application focused on simplifying project tracking and task assignments, enhancing productivity for teams and individuals.",
      tags: ["Nextjs", "Tailwind", "Contentfull CMS"],
      link: "https://assignment-11-sepia.vercel.app",
    },

    {
      title: "Github User Detail",
      description:
        "In this project, the user provides a GitHub username, and the application will fetch and display that user's details.",
      tags: ["Nextjs", "Tailwind", "Axios"],
      link: "https://assignment-12-seven.vercel.app",
    },
    {
      title: "Car Rental Web Application",
      description: "This project is a responsive car rental web application that allows users to browse and book vehicles. The application features a clean and intuitive interface with sections for selecting pickup locations, dates, and vehicle types. It also includes a toggle bar for switching between different views and responsive layouts for various screen sizes.",
      tags: ["Next.js", "Tailwind CSS", "React"],
      link: "https://rental-web-murtaxa.vercel.app"
    }

  ];

  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            I love to Build Cool Projects. Here, you&#x27;ll find a curated
            collection of my creative endeavors and technical projects. Each
            piece represents a journey of innovation, problem-solving, and
            continuous learning. Feel free to explore this showcase of my
            passion and expertise in action.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
