import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import skillsData from "@/Data/Skills.json";

const SkillCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-30 h-30 cursor-pointer overflow-hidden p-2 flex flex-col items-center justify-center"
      )}
    >
      <img className="w-16 h-16" src={src} alt={name} />
      <figcaption className="mt-2 text-xs text-center text-textPrimary">
        {name}
      </figcaption>
    </figure>
  );
};

const Skills = () => {
  const firstRow = skillsData.skills.slice(0, skillsData.skills.length / 2);
  const secondRow = skillsData.skills.slice(skillsData.skills.length / 2);

  return (
    <>
      <div id="skills"
        className="flex items-center px-4 sm:px-8 md:px-16 lg:px-24 pb-4 pt-10"
        data-aos="fade-right" data-aos-duration="600"
      >
        <h1 className="text-textSecondary text-lg sm:text-xl md:text-2xl whitespace-nowrap">
          Tools I’ve Been Using Recently
        </h1>
        <div className="h-[1px] bg-[#243554] ml-4 w-1/4 sm:w-1/3"></div>
      </div>

      <div
        className="flex flex-wrap items-center justify-center relative px-20 py-6"
        data-aos="fade-up"
      >
        <Marquee pauseOnHover className="[--duration:15s]">
          {firstRow.map((skill) => (
            <SkillCard key={skill.name} src={skill.src} name={skill.name} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:15s]">
          {secondRow.map((skill) => (
            <SkillCard key={skill.name} src={skill.src} name={skill.name} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-bgColor dark:from-cardColor"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-bgColor dark:from-cardColor"></div>
      </div>
    </>
  );
};

export default Skills;
