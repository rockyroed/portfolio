const Button = ({ value }) => {
  return (
    <button className="cursor-pointer font-normal text-foreground text-[16px] p-[8px] w-max transform transition-transform duration-200 hover:scale-110 hover:bg-background rounded-full">
      {value}
    </button>
  );
};

export default Button;
