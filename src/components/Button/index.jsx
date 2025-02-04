const Button = ({ value }) => {
  return (
    <button className="cursor-pointer font-normal text-text p-[8px] w-max transform transition-transform duration-200 hover:scale-110 hover:bg-radial hover:from-[#FFFFFF22] hover:to-[#11111b] rounded-full">
      {value}
    </button>
  );
};

export default Button;
