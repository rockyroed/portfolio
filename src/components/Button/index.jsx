const Button = ({ value }) => {
  return (
    <button className="cursor-pointer font-normal text-text p-[8px] w-max rounded-xl">
      {value}
    </button>
  );
};

export default Button;
