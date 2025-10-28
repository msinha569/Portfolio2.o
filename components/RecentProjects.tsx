"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item, index) => {
          const isRecent = index === 0; // treat the first project as the "recent" one
          return (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[30rem] w-[80vw]"
              key={item.id}
            >
              <a target="_blank" href={item?.link}>
                <PinContainer title={item?.link} href={item?.link}>
                  {isRecent ? (
                    <div className="group relative flex items-center justify-center sm:w-[30rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <div
                        className="relative w-full h-full overflow-hidden rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        {/* subtle background image */}
                        <img
                          src="/bg.png"
                          alt="bgimg"
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* project cover: slightly blurred and scaled by default for a soft, glossy look; clears on hover */}
                        <img
                          src={item.img}
                          alt="cover"
                          className="absolute inset-0 w-full h-full object-cover transform scale-105  transition-all duration-500 group-hover:scale-100 group-hover:blur-0 z-10"
                        />

                        {/* dark gradient to add depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-overlay z-20 pointer-events-none" />

                        {/* glossy sweep — a skewed translucent white div that transitions across on hover */}
                        <div className="absolute -left-[60%] top-0 w-1/3 h-full bg-white/15 transform -skew-x-12 opacity-0 transition-all duration-700 group-hover:opacity-70 group-hover:left-[120%] z-30 pointer-events-none" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex items-center justify-center sm:w-[30rem] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <div
                        className="relative w-full h-full overflow-hidden rounded-3xl"
                        style={{ backgroundColor: "#13162D" }}
                      >
                        <img
                          src="/bg.png"
                          alt="bgimg"
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        <img
                          src={item.img}
                          alt="cover"
                          className="absolute inset-0 w-full h-full object-cover z-10"
                        />
                      </div>
                    </div>
                  )}

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, idx) => (
                        <div
                          key={idx}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * idx + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </PinContainer>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
