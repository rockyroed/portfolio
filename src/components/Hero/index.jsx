import { CTAButton } from "@/components/Button";
import { FloatingHeading } from "@/components/Hero/Float";

const Hero = () => {
  return (
    <div className="py-16 flex justify-between items-center">
      <div className="flex flex-col gap-11 w-1/2 pr-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-h1 font-semibold text-text">
            Building{" "}
            <span className="text-foreground">High-Performance Websites</span>{" "}
            for Seamless Digital Experiences
          </h1>
          <h6 className="text-text text-h6">
            I build fast, responsive, and user-focused websites that transform
            complex challenges into seamless, high-performing digital
            experiences.
          </h6>
        </div>
        <CTAButton value="Contact Me" />
      </div>
      <div className="w-1/2 flex justify-center">
        <FloatingHeading
          value="Device Responsiveness"
          className="top-40 -left-40"
        />
        <FloatingHeading value="Web Development" className="top-15 -left-20" />
        <div className="pt-16 w-[38rem] h-[38rem]">
          <img
            className="w-full"
            src="/images/hero.png"
            alt="Hero Image"
            loading="eager"
            decoding="async"
          />
        </div>
        <FloatingHeading
          value="Frontend Development"
          className="top-15 -left-40"
        />
        <FloatingHeading value="API Integration" className="top-40 -left-20" />
      </div>
    </div>
  );
};

export default Hero;
