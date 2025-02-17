import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-[32px] h-[80px] w-full fixed top-0 bg-background">
      <div className="flex justify-start items-center w-full gap-2">
        <img
          src="/images/logo-transparent.png"
          alt="logo"
          className="w-[40px] h-[40px] rounded-full"
          loading="eager"
          decoding="async"
        />
        <p className="font-semibold text-[20px]">rockyroed <span className="font-normal italic text-accent">(work in progress)</span></p>
      </div>
      <div className="flex justify-end items-center gap-2">
        <Button value="About" />
        <Button value="Projects" />
        <Button value="Certificates" />
        <Button value="Contact" />
      </div>
    </div>
  );
};

export default NavBar;
