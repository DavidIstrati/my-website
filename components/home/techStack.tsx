"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BaseCard, ParallaxCard, Tab } from "../cards";
import { BracketText } from "../primitives";

const TECH_STACK = [
  { title: "python", category: ["language", "api", "ml & big data"] },
  { title: "tensorflow", category: ["ml & big data"] },
  { title: "pytorch", category: ["ml & big data"] },
  { title: "scala", category: ["ml & big data", "language"] },
  { title: "redis", category: ["web", "ml & big data", "devops", "database"] },
  { title: "Rabbitmq", category: ["devops", "ml & big data"] },
  { title: "RSMQ", category: ["devops", "ml & big data"] },
  { title: "Kafka", category: ["devops", "ml & big data"] },
  { title: "Docker", category: ["devops", "ml & big data"] },
  { title: "Kubernetes", category: ["devops", "ml & big data"] },
  { title: "Mesos", category: ["devops", "ml & big data"] },
  { title: "TypeScript", category: ["language", "web"] },
  { title: "JavaScript", category: ["language", "web"] },
  { title: "reactjs", category: ["web"] },
  { title: "nextjs", category: ["web"] },
  { title: "Redux", category: ["web"] },
  { title: "Angular", category: ["web"] },
  { title: "nodejs", category: ["web", "api"] },
  { title: "Axios", category: ["web", "api"] },
  { title: "css", category: ["web", "design"] },
  { title: "html5", category: ["language", "web"] },
  { title: "firebase", category: ["devops", "web"] },
  { title: "auth0", category: ["web"] },
  { title: "Lodash", category: ["web"] },
  { title: "nginx", category: ["web"] },
  { title: "PostCSS", category: ["design", "web"] },
  { title: "RQuery", category: ["web"] },
  { title: "RSpring", category: ["web"] },
  { title: "Storybook", category: ["web"] },
  { title: "sveltejs", category: ["web"] },
  { title: "Terraform", category: ["devops", "web"] },
  { title: "Threejs", category: ["web"] },
  { title: "Vercel", category: ["devops", "web"] },
  { title: "Curl", category: ["tools", "api"] },
  { title: "flask", category: ["api", "web"] },
  { title: "GraphQL", category: ["api", "web"] },
  { title: "insomnia", category: ["api", "tools"] },
  { title: "rails", category: ["api"] },
  { title: "Autoprefixer", category: ["design"] },
  { title: "aws", category: ["devops"] },
  { title: "Azure", category: ["devops"] },
  { title: "C++", category: ["language"] },
  { title: "Debian", category: ["os"] },
  { title: "DO", category: ["devops"] },
  { title: "Fedora", category: ["os"] },
  { title: "Figma", category: ["design"] },
  { title: "Heroku", category: ["devops"] },
  { title: "Illustrator", category: ["design"] },
  { title: "java", category: ["language"] },
  { title: "Linux", category: ["os"] },
  { title: "Markdown", category: ["language"] },
  { title: "MongoDB", category: ["databases"] },
  { title: "MySQL", category: ["databases"] },
  { title: "Photoshop", category: ["design"] },
  { title: "PHP", category: ["language"] },
  { title: "PostgreSQL", category: ["databases"] },
  { title: "ruby", category: ["language"] },
  { title: "Rust", category: ["language"] },
  { title: "Sass", category: ["design"] },
  { title: "Sketch", category: ["design"] },
  { title: "tailwind", category: ["web", "design"] },
  { title: "Ubuntu", category: ["os"] },
  { title: "YAML", category: ["language"] },
];

const TABS = [
  "* All",
  "Web",
  "ML & Big Data",
  "Databases",
  "DevOps",
  "Design",
  "API",
];

const TechStack = ({}) => {
  type TechStackType = { title: string; category: string[] }[];

  const [active, setActive] = useState<string>("* All");

  const [activeStack, setActiveStack] = useState<TechStackType>([]);

  useEffect(() => {
    active == "* All"
      ? setActiveStack(TECH_STACK)
      : setActiveStack(
          TECH_STACK.filter((tech) =>
            tech.category.includes(active.toLocaleLowerCase())
          )
        );
  }, [active]);

  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const xAxisRotation = (e.clientY - rect.top - halfHeight) / halfHeight;
    const yAxisRotation = (e.clientX - rect.left - halfWidth) / halfWidth;

    if(cardRef.current) cardRef.current.style.transform = `perspective(1000px) rotateX(${-xAxisRotation}deg) rotateY(${yAxisRotation}deg)`;
  };

  const onMouseLeave = () => {
    if(cardRef.current) cardRef.current.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div className="w-full flex flex-col justify-center items-center hidden xl:flex">
      <h2 className="text-3xl text-white">Tech Stack</h2>
      <div className="flex flex-row items-center justify-center mt-10">
        <BracketText
          text={"q"}
          type={"open"}
          className={"text-zinc-500 text-xs xl:text-sm"}
        />
        <div className="text-emerald-500 text-xs xl:text-xl mx-5 flex flex-row">
          <FaQuoteLeft className="text-md xl:text-xl" />
          <span className="mx-2">{"Acta, non verba"}</span>
          <FaQuoteRight className="text-md xl:text-xl" />
        </div>
        <BracketText
          text={"q"}
          type={"closed"}
          className={"text-zinc-500 text-xs xl:text-sm"}
        />
      </div>
      <ParallaxCard className="transform transition-transform duration-300 ease-out mt-20 w-full min-h-screen  border border-zinc-500 bg-zinc-900 px-10 py-2 flex flex-col justify-start items-start">
        <div className="w-full h-20 flex flex-row justify-start items-center bg-transparent space-x-6">
          <div className="w-4 h-4 rounded-full bg-zinc-600/50 border border-zinc-600"></div>
          <div className="w-4 h-4 rounded-full bg-zinc-600/50 border border-zinc-600"></div>
          <div className="w-4 h-4 rounded-full bg-zinc-600/50 border border-zinc-600"></div>
        </div>
        <div className="w-full min-h-screen rounded-b-lg flex flex-col justify-start items-start">
          <div className="w-full flex flex-row items-center justify-start space-x-6">
            <span className="text-pink-500 opacity-50 text-xs">
              {" "}
              from <span className="text-green-500">
                .techStack
              </span> import{" "}
            </span>
            {TABS.map((title) => (
              <div key={title}>
                <Tab
                  title={title}
                  active={title == active}
                  onClick={() => setActive(title)}
                />
              </div>
            ))}
          </div>
          <div className="w-full flex flex-row flex-wrap justify-center items-center mt-5">
            {activeStack.map(({ title, category }, index) => (
              <div className="w-1/8" key={title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.03 * index, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full p-2 text-white"
                >
                  <BaseCard>
                    <div className="w-full flex flex-col justify-center items-center">
                      <div className="w-full p-2">
                        <img
                          src={`logos/${title}.svg`}
                          className="max-w-full w-full fill-white text-white stroke-white"
                        />
                      </div>
                      <span className="text-xs text-zinc-500">{title}</span>
                    </div>
                  </BaseCard>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxCard>
    </div>
  );
};

export default TechStack;
