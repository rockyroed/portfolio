import { useEffect, useState } from "react";

export const Mouse = () => {
  const [position, setPosition] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => !prev);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[calc(100vh - 160px)] w-[24px] h-[40px] border-2 rounded-full flex justify-center items-start relative overflow-hidden">
      <div
        className={`w-[6px] h-[6px] bg-text rounded-full absolute top-2 transition-transform duration-[1200ms] ease-in-out ${position ? 'translate-y-[10px]' : 'translate-y-0'}`}
      />
    </div>
  );
};
