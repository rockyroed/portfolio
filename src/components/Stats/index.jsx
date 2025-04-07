const Stats = () => {
  return (
    <div className="flex flex-col items-center gap-19 pt-14 pb-28 w-full">
      <h2 className="font-medium text-h2 text-foreground font-jetbrains-mono">
        {"<GithubStats />"}
      </h2>
      <div className="w-full flex gap-6">
        <div className="w-full flex justify-center bg-background rounded-xl">
          <img
            className="w-150"
            src="https://github-readme-stats.vercel.app/api?username=rockyroed&theme=gruvbox&show_icons=true&hide_border=true&count_private=true&rank_icon=github"
            alt="rockyroed's GitHub Stats"
          />
        </div>
        <div className="w-full flex justify-center bg-background rounded-xl">
          <img
            className="w-150"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=rockyroed&theme=gruvbox&show_icons=true&hide_border=true&layout=compact"
            alt="rockyroed's Most Used Languages"
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
