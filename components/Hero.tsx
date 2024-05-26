import Spotlight from "./ui/Spotlight";
import TextGenerateEffect from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#a825ff"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest max-md:text-[10px] text-xs text-center text-blue-100 max-w-80">
              Crafting Interactive Wonders with ReactJs & NextJs
            </h2>
            <TextGenerateEffect
              className="text-center text-[30px] md:text-5xl lg:text-6xl"
              words="Creating Seamless and Captivating Digital Experiences"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              I&apos;m Mounssif, a{" "}
              <span className="text-blue-500 font-bold">
                Frontend R&D Engineer
              </span>{" "}
              based in Morocco
            </p>
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
