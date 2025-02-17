import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center px-[32px] h-[80px]">
      <div className="flex justify-left items-center w-full gap-2">
        <img src="/logo-transparent.png" alt="profile" className="w-[40px] h-[40px] rounded-full" />
        <p className="font-semibold text-[20px]">rockyroed</p>
      </div>
      <div className="flex justify-right items-center gap-2">
        <Button value="About"/>
        <Button value="Projects"/>
        <Button value="Certificates"/>
        <Button value="Contact"/>
      </div>
    </div>
  );
};

export default NavBar;
