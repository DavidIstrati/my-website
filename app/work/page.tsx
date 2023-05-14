"use client";

import {
  ParallaxCard,
  ProjectCard,
  Tab,
  Typewriter,
  WorkCard,
} from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Work() {
  const [active, setActive] = useState<"projects" | "work">("projects");
  return (
    <main className="w-full h-full bg-blueprint">
      <div className="p-40 w-full h-full bg-gradient-radial from-zinc-900/70 to-70% to-zinc-900">
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-5xl text-white">
            Building{" "}
            <Typewriter
              strings={[
                "ML Models",
                "Web Applications",
                "Big Data Pipelines",
                "Startups",
              ]}
            />
          </span>
        </motion.div>
        <div className="w-full flex flex-col mt-40">
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            viewport={{ once: true }}
            className="w-full flex flex-row space-x-20 z-20 mb-40 sticky top-10 px-10 py-10 bg-zinc-900/95 backdrop-blur-sm border border-zinc-500"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.5, x: -400 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="w-1/2"
            >
              <Tab
                title={"01 | Projects"}
                active={active == "projects"}
                onClick={() => setActive("projects")}
                className="text-md py-4 cursor-pointer"
                classNameDefault="bg-transparent bg-zinc-800 border-zinc-500 text-zinc-500 shadow-transparent hover:text-zinc-300 hover:border-zinc-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.5, x: 400 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: true }}
              className="w-1/2"
            >
              <Tab
                title={"02 | Work"}
                active={active == "work"}
                onClick={() => setActive("work")}
                className="text-md py-4 cursor-pointer"
                classNameDefault="bg-transparent bg-zinc-800 border-zinc-500 text-zinc-500 shadow-transparent hover:text-zinc-300 hover:border-zinc-300"
              />
            </motion.div>
          </motion.div>
          {active == "projects" ? (
            <>
              <ProjectCard
                orientation="right"
                image={"/Demos/Neurophate01.svg"}
                demo={
                  "https://www.loom.com/share/25223442ee2248639297856dd154cf12"
                }
                title={"Neurophate"}
                text={
                  "Neurophate facilitates swift dashboard creation and code-free collaboration on data, connecting to sources like Stripe and allowing real-time team interaction on charts."
                }
              />

              <ProjectCard
                orientation="left"
                image={"/Demos/colbay.png"}
                demo={
                  "https://www.loom.com/share/9f517a05e8494b0fa066dae5638004bb"
                }
                title={"Colbay"}
                text={
                  "An online marketplace for Colby students. Fostering seamless, sustainable exchanges of unused items while minimizing waste and promoting a circular economy."
                }
              />

              <ProjectCard
                orientation="right"
                image={"/Demos/Startuper.png"}
                title={"Startuper"}
                text={
                  "Creating founder-investor connections with a Tinder-like experience for startups, swiftly matching potential partners and eliminating time-consuming cold outreach and research."
                }
              />

              <ProjectCard
                orientation="left"
                image={"/Demos/DemoColbyCloudServices.png"}
                title={"Colby Cloud Services"}
                text={
                  "Colby students can connect with their google account and start/stop google compute VM instances based on a credit system."
                }
              />

              <ProjectCard
                orientation="right"
                image={"/Demos/Callister.svg"}
                title={"Callister"}
                text={
                  "Transforming financial data analysis with Auto-ML, empowering companies to effortlessly upload data from any source, and instantly generate insightful dashboards for data-driven decisions."
                }
              />

              <ProjectCard
                orientation="left"
                image={"/Demos/Myaid.png"}
                title={"MyAid"}
                text={
                  "I'll write a description for this later, if you see this, ... well ... hi? :) "
                }
              />
            </>
          ) : (
            <>
              <WorkCard
                company="Veridion"
                start={"Oct 2021"}
                end={"Oct 2022"}
                title={"Big Data Engineer"}
                link={"https://veridion.com/"}
                points={[
                  "10th Employee, helped improve the coverage by 1750%, increase the valuation by 1300%",
                  "Created big data pipelines in Spark and Kubernetes, reading data from Cassandra, HDFS or Kafka2.",
                  "Used Scala or Python to design large-scale processing jobs for parsing or extracting infromation from website data.",
                  "The pipeline would read ~ 2 Petabytes of text data and write ~ 100 Gigabytes - data for ~700M companies.",
                  "Technical Skills: Scala, Apache Spark, Cassandra, SQL, Kafka, Ubuntu Linux, Linux tools, Apt, Nohup, Zeppelin Notebooks, Terraform, Cron, Scripting, Git"
                ]}
              />
              <WorkCard
                company="Veridion"
                start={"Jun 2020"}
                end={"Oct 2021"}
                title={"Machie Learning Engineer"}
                link={"https://veridion.com/"}
                points={[
                  "Worked with the biggest open-source multi-lingual NLP models from HuggingFace and LibPostal.",
                  "Classified hundreds of millions ~700M of websites using either classifiers, name-entity recognition, or translations.",
                  "Built ML Pipelines using MLFlow and internal ML Libraries.",
                  "Technical Skills: Python, PyTorch, NumPy, Matplotlib, Pandas, Scikit-learn, HuggingFace, RoBERTa, Google NMT, Linux, Docker, Scripting, Git",
                ]}
              />
              <WorkCard
                company="Neurophate"
                start={"Jun 2019"}
                end={"Oct 2021"}
                title={"Founder, CTO"}
                link={"https://www.loom.com/share/25223442ee2248639297856dd154cf12"}
                points={[
                  "Pitched Sequoia, VillageGlobal, and other investment companies. Joined ODF - OnDeck Founders",
                  "Lead a 3-people team and developed a complex data analytics web application using a micro-service arhitecture.",
                  "Developed an application which used auto-ML to help SaaS companies automatically generate dashboard.",
                  "Technical Skills: Flask, Redis, AWS Lambda, React, SQL, ExpressJS, OAuth, Tensorflow, Scikit Learn.",
                ]}
              />
              <WorkCard
                company="Colby College"
                start={"Oct 2022"}
                end={"present"}
                title={"Research Lead & Cloud Engineer"}
                link={"https://davisinstituteai.colby.edu/"}
                points={[
                  "Research on ML: Computer Vision + NLP. Helping visually impared people see art using ML transformers.",
                  "Models can provide spatial,contextual and metadata about a painting.",
                  "Created a third party web app -> Colby students can connect with their google account and start/stop google compute VM instances based on a credit system.",
                  "Developed: API,UI,docker images and the overall infrastructure.",
                  "Technical Skills: FastAPI, GCP, React, NextJS SQL, Okta, Docker, MLOps.",
                ]}
              />
              <WorkCard
                company="Upgrade Education"
                start={"Jun 2022"}
                end={"Aug 2022"}
                title={"CS Mentor"}
                link={"https://upgrade.education/"}
                points={[
                  "Mentored high-school students as a CS teacher.",
                  "Helped them build different projects & introduced them to the basics of programming.",
                ]}
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
