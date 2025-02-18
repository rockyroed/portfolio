import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-[80px] w-full">
      <div className="flex justify-start items-center w-auto gap-2">
        <img
          src="/images/logo-transparent.png"
          alt="logo"
          className="w-[40px]"
          loading="eager"
          decoding="async"
        />
        <p className="font-semibold text-[16px]">rockyroed <span className="font-normal italic text-accent">(work in progress)</span></p>
      </div>
      <div className="flex justify-end items-center gap-2 w-auto">
        <Button value="About" />
        <Button value="Stats" />
        <Button value="Projects" />
        <Button value="Certificates" />
        <Button value="Contact" />
      </div>
    </div>
  );
};

export default NavBar;
