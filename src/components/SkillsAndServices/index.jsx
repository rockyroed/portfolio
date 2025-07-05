import { skillsList } from "@/components/SkillsAndServices/skillsList";

const SkillsAndServices = () => {
  return (
    <div className="w-screen px-24 py-20 grid grid-cols-3 gap-x-6 gap-y-12 bg-background">
      <h2 className="flex flex-col justify-center font-medium text-center text-h2 text-foreground font-jetbrains-mono">
        {"<Skills and Services />"}
      </h2>
      {skillsList.map((skill, index) => (
        <div key={index} className="bg-background-dim px-6 rounded-xl py-9">
          <h5 className="text-h5 text-primary mb-4">{skill.title}</h5>
          <p className="text-base text-text mb-2">{skill.description}</p>
          <p className="text-base text-grey">{skill.technologies}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsAndServices;
