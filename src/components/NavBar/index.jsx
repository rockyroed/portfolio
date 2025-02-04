import Button from "@/components/Button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center px-[32px] h-[80px] text-text">
      <div className="flex justify-left items-center w-full gap-[8px]">
        <img src="/src/assets/formal-picture.png" alt="profile" className="w-[40px] h-[40px] rounded-full" />
        <p className="font-semibold">CHRISTIAN ROED BOYLES</p>
      </div>
      <div className="flex justify-right items-center gap-[8px]">
        <Button value="About"/>
        <Button value="Projects"/>
        <Button value="Contact"/>
      </div>
    </div>
  );
};

export default NavBar;
