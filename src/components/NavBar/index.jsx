import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-20 w-full">
      <div className="flex justify-start items-center w-auto gap-x-1">
        <img
          src="/images/logo-transparent.png"
          alt="logo"
          className="w-12"
          loading="eager"
          decoding="async"
        />
        <h4 className="font-semibold font-jetbrains-mono text-h4 font-md">rockyroed</h4>
      </div>
      <div className="flex justify-end items-center gap-x-4 w-auto">
        <Button value="About" />
        <Button value="Stats" />
        <Button value="Services" />
        <Button value="Projects" />
        <Button value="Certificates" />
        <Button value="Contact" />
      </div>
    </div>
  );
};

export default NavBar;
