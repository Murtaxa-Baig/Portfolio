import FramerWrapper from "@/components/FramerWrapper";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Briefcase className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2015 - 2017
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Matric, <br /> Government Crescent Model School Faisalabad.
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            I completed my Matric in Computer Science, which provided me with a strong foundation in 
            computing principles and technologies. This program offered a balanced education, combining
            both theoretical knowledge and practical skills in computer science.
            </p>
          </FramerWrapper>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2017 - 2019
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
              Intermidiate, <br /> Government Islamia College Faisalabad.
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            I have completed my Intermediate in Computer Science (ICS) from Government Islamia College Faisalabad.
            This program has equipped me with a solid foundation in computer science, covering essential 
            theoretical concepts and practical skills.
            </p>
          </FramerWrapper>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <FramerWrapper y={0} x={-100} delay={0.35} className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            2019 - 2023
          </FramerWrapper>
          <FramerWrapper y={0} x={100} delay={0.35} className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
            Bachelor of Science in Computer Science (BSCS), <br /> GC University Faisalabad.
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
            I have completed my Bachelor of Science in Computer Science (BSCS) in 2023. This program has provided me with a comprehensive education,
            covering both theoretical foundations and practical applications of computer science.
            </p>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
