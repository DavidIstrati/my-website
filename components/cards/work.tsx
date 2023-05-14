import ParallaxCard from "./parallaxCard";

const WorkCard = ({
  company,
  title,
  start,
  end,
  points,
  link = "#",
}: {
  company: string;
  title: string;
  start: string;
  end: string;
  points: string[];
  link?: string;
}) => {
  return (
    <ParallaxCard className="w-full border border-zinc-500 transform transition-transform duration-300 ease-out my-10">
      <div className="w-full p-10 bg-zinc-800/20 flex flex-row">
        <div className="w-40 flex flex-col justify-start items-start">
          <a className={` ${link && "cursor-pointer underline "} text-lg text-white font-bold`} href={link}>
            {company}
          </a>
          <span className="text-xs text-zinc-500">{start}</span>
          <span className="text-xs text-zinc-500">{end}</span>
        </div>
        <div className="w-full flex flex-col justify-center items-start ml-10">
          <h3 className="text-lg text-white">{title}</h3>
          {points.map((point, index) => (
            <span className="text-xs text-zinc-400" key={index}>
              {point}
            </span>
          ))}
        </div>
      </div>
    </ParallaxCard>
  );
};

export default WorkCard;
