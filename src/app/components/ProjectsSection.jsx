"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "个人作品集页面",
    description: "使用Next.js 13+和Tailwind CSS构建的响应式个人展示网站，实现了动态项目筛选、滚动动画和响应式布局。采用App Router架构，优化了页面加载性能和SEO表现。",
    image: "/images/projects/me.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/x7788778/myPortfolio",
    previewUrl: "/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React"]
  },
  {
    id: 2,
    title: "nestjs电商后端demo",
    description: "实现用户认证、商品管理、订单处理等核心模块。技术上采用轻量的 sqlite3 数据库，通过 Redis 缓存商品库存查询与信息展示以减少数据库压力；借助 RabbitMQ 异步处理库存扣减等关键操作，避免阻塞主流程；服务支持 Docker 容器化部署，便于环境管理与快速扩展。",
    image: "/images/projects/nest.png",
    tag: ["All", "Other"],
    gitUrl: "https://github.com/x7788778/backend-encomerce-npm",
    previewUrl: "/",
    technologies:['Nest.js','Docker','Redis','RabbitMQ','Sqlite3/TypeORM']
  },
  {
    id: 3,
    title: "模拟聊天软件",
    description: "基于websoket协议，express搭建的实时聊天软件，有基础的注册登录用户间通信功能，前端使用的老版本react",
    image: "/images/projects/chatapp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "",
    technologies:['react16','websoket','express']
  },
  {
    id: 4,
    title: "小商品宣传集市",
    description: "一个基于所属单位自研在线web平台搭建的纯前端商品展示站点",
    image: "/images/projects/mama.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://huodong.taobao.com/wow/service-market/act/hepai?wh_biz=tm",
    technologies:['js/html/css']
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        作品集
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Other"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
