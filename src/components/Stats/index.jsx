const Stats = () => {
  return (
    <div className="flex flex-col items-center h-auto gap-y-[40px] my-[80px] w-full">
      <h2 className="font-bold text-3xl">Github Stats</h2>
      <div className="flex w-2/3 gap-x-[40px]">
        <div className="w-full flex justify-end">
          <img
            src="https://github-readme-stats.vercel.app/api?username=rockyroed&theme=gruvbox&show_icons=true&hide_border=true&count_private=true&rank_icon=github"
            alt="rockyroed's GitHub Stats"
          />
        </div>
        <div className="w-full flex justify-start">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rockyroed&theme=gruvbox&show_icons=true&hide_border=true&layout=compact"
            alt="rockyroed's Most Used Languages"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
