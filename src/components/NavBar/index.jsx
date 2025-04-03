import { NavBarButton } from "@/components/Button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between h-20 w-full py-5">
      <div className="flex justify-start items-center w-auto h-max gap-x-1">
        <img
          src="/images/logo-transparent.png"
          alt="logo"
          className="w-12"
          loading="eager"
          decoding="async"
        />
        <h4 className="font-semibold font-jetbrains-mono text-h4 font-md">
          rockyroed
        </h4>
      </div>
      <div className="flex justify-end items-center gap-x-4 w-auto">
        <NavBarButton value="About" />
        <NavBarButton value="Stats" />
        <NavBarButton value="Services" />
        <NavBarButton value="Projects" />
        <NavBarButton value="Certificates" />
        <NavBarButton value="Contact" />
      </div>
    </div>
  );
};

export default NavBar;
