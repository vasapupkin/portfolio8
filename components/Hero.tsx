import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypewriterEffectSmooth } from "./ui/Typewriter-effect";
//pt-36    className: "text-white-500 dark:text-white-500 text-center text-[40px] md:text-5xl lg:text-6xl"
const Hero = () => {

   const words = [
    {
      text: "Build",
   
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
        {
      text: "Build",
   
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },


  ];
  return (
    <div className="pb-20 "> 
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
    


      <div className="flex justify-center relative     z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center">
          {/* <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p> */}

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Liebe Besucher dieser Webseite, ich heiße Gelo und bin euer persönlicher 3D-Assistent. D.h. Sie können mich vergrössern oder auch in unterschiedliche Richtungen drehen. Auf dieser Seite können Sie die Information über Oleg sehen. Seinen Bildungsweg, seine Projekte, seine Referenzen und auch die Schwerpunkte seiner Tätigkeit. Am Ende können Sie mich fragen, ob Oleg für Ihren Job genau der richtige ist. Wollen Sie mich bzw. die komplette Webseite in andere Sprache haben, kein Problem, sagen Sie mir welche."
            className="text-justify text-[15px] md:text-xl lg:text-2xl"
          />
     {/* <TypewriterEffectSmooth
           words={words}
          /> */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
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
  );
};

export default Hero;
