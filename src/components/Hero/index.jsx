import { Mouse } from "@/components/Hero/Mouse";

const Hero = () => {
  return (
    <div className="pt-[160px] flex text-center flex-col justify-between items-center gap-y-[160px]">
      <div className="flex flex-col justify-center items-center gap-y-[32px]">
        <h1 className="text-5xl/16 font-bold w-2/3">
          Paving the Web to Create Smooth Digital Journeys
        </h1>
        <p className="w-1/2">
          I develop websites with a focus on functionality, responsiveness, and
          user experience, navigating the challenges of web development to
          create smoother digital experiences.
        </p>
      </div>
      <Mouse />
    </div>
  );
};

export default Hero;
