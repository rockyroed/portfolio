const About = () => {
  return (
    <div className="flex flex-col items-center h-auto gap-y-[40px] my-[80px] w-full">
      <h2 className="font-bold text-3xl">About</h2>
      <div className="flex w-2/3 gap-x-[40px]">
        <div className="w-full flex justify-end">
          <img
            src="/portfolio/images/formal-picture.png"
            alt="formal picture"
            className="h-[320px] rounded-lg"
          />
        </div>
        <div className="w-full flex justify-start">
          <p>
            I am Christian Roed Boyles, a skilled Frontend Developer, Web
            Developer, and Programmer with expertise in HTML, CSS, JavaScript,
            and modern frameworks like React, Next.js, and Vue.js. I am also
            proficient in tools such as Git, GitHub, GitLab, Python, PHP,
            Selenium, Bitbucket, Atlassian, Jira, Azure, and AWS, I specialize
            in responsive web design and cross-browser compatibility. I excel
            in API integration, CI/CD, and web application security while
            focusing on scalable solutions and server-side rendering for
            improved SEO. With a proactive, self-motivated work ethic, I
            consistently update my skills to deliver cutting-edge digital
            solutions that align with business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
