import { CTAButton } from "../Button";

const About = () => {
  return (
    <div className="flex gap-x-10 h-auto pt-28 pb-14">
      <div className="w-1/3">
        <img
          className="w-full"
          src="/images/about-picture.png"
          alt="About Picture"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex flex-col w-2/3">
        <h2 className="font-medium text-h2 text-foreground font-jetbrains-mono mb-6">
          {"<AboutMe />"}
        </h2>
        <h6 className="text-h6 mb-8">
          I build fast, responsive, and user-focused websites that transform
          complex challenges into seamless, high-performing digital experiences.
          I build fast, responsive, and user-focused websites that transform
          complex challenges into seamless, high-performing digital experiences.
          I build fast, responsive, and user-focused websites that transform
          complex challenges into seamless, high-performing digital experiences.
          I build fast, responsive, and user-focused websites that transform
          complex challenges into seamless, high-performing digital experiences.
        </h6>
        <div className="border-t-1 border-b-1 border-border mb-10 border-grey-100 px-5 py-7 grid grid-cols-1 gap-y-5">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.5453 5.94375C23.7281 5.79844 24 5.93437 24 6.16406V15.75C24 16.9922 22.9922 18 21.75 18H2.25C1.00781 18 0 16.9922 0 15.75V6.16875C0 5.93438 0.267187 5.80312 0.454687 5.94844C1.50469 6.76406 2.89688 7.8 7.67813 11.2734C8.66719 11.9953 10.3359 13.5141 12 13.5047C13.6734 13.5188 15.375 11.9672 16.3266 11.2734C21.1078 7.8 22.4953 6.75938 23.5453 5.94375ZM12 12C13.0875 12.0188 14.6531 10.6313 15.4406 10.0594C21.6609 5.54531 22.1344 5.15156 23.5687 4.02656C23.8406 3.81562 24 3.4875 24 3.14062V2.25C24 1.00781 22.9922 0 21.75 0H2.25C1.00781 0 0 1.00781 0 2.25V3.14062C0 3.4875 0.159375 3.81094 0.43125 4.02656C1.86563 5.14687 2.33906 5.54531 8.55938 10.0594C9.34688 10.6313 10.9125 12.0188 12 12Z"
                fill="white"
              />
            </svg>
            <h6 className="text-h6">christianroedpboyles@protonmail.com</h6>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8152 16.9594L18.5652 14.7094C18.3409 14.6138 18.0916 14.5937 17.8549 14.652C17.6182 14.7103 17.4068 14.844 17.2527 15.0328L14.9277 17.8734C11.2788 16.153 8.34228 13.2165 6.62188 9.56766L9.4625 7.24266C9.65172 7.08876 9.78565 6.8774 9.84401 6.64057C9.90237 6.40375 9.88199 6.15436 9.78594 5.93016L7.53594 0.680158C7.43052 0.438475 7.24408 0.241149 7.00876 0.122205C6.77344 0.00326091 6.50399 -0.0298449 6.24687 0.028596L1.37188 1.1536C1.12399 1.21084 0.902818 1.35041 0.74447 1.54954C0.586121 1.74867 0.499943 1.99559 0.5 2.25C0.5 14.2734 10.2453 24 22.25 24C22.5045 24.0002 22.7515 23.914 22.9507 23.7557C23.15 23.5973 23.2896 23.3761 23.3469 23.1281L24.4719 18.2531C24.5299 17.9948 24.4961 17.7242 24.3763 17.4881C24.2564 17.252 24.058 17.065 23.8152 16.9594Z"
                fill="white"
              />
            </svg>
            <h6 className="text-h6">+63 976 367 7066</h6>
          </div>
          <div className="flex items-center gap-3">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.07506 23.5158C1.26422 13.6421 0 12.6287 0 9C0 4.02942 4.02942 0 9 0C13.9706 0 18 4.02942 18 9C18 12.6287 16.7358 13.6421 9.92494 23.5158C9.47798 24.1614 8.52197 24.1614 8.07506 23.5158ZM9 12.75C11.0711 12.75 12.75 11.0711 12.75 9C12.75 6.92892 11.0711 5.25 9 5.25C6.92892 5.25 5.25 6.92892 5.25 9C5.25 11.0711 6.92892 12.75 9 12.75Z"
                fill="white"
              />
            </svg>
            <h6 className="text-h6">Manila, Philippines</h6>
          </div>
        </div>
        <CTAButton value="Contact Me" />
      </div>
    </div>
  );
};

export default About;
