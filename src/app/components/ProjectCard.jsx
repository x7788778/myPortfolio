// ProjectCard.jsx
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies }) => {
  return (
    <div className="flex flex-col h-full">
      {/* 图片和链接部分保持不变 */}
      <div
        className="h-52 md:h-72 rounded-t-xl relative group border-2 border-gray-500 "
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            rel="noopener"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl && previewUrl !== "/" && (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
              rel="noopener"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      
      {/* 内容和技术标签部分 */}
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4 flex-grow flex flex-col">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] mb-4">{description}</p>
        
        {/* 技术标签区域 */}
        {technologies && (
          <div className="mt-auto flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="text-xs bg-[#2D2D2D] text-[#ADB7BE] px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;