import React, { useEffect, useRef } from "react";
import { memo, useMemo } from "react"
import { data } from "../utils/ProjectsData";
import ProjectsItems from "./ProjectsItems";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects(){
    const projectsRef = useRef(null);
    const titleRef = useRef(null);

    const projects = useMemo(() => data, []);

    useEffect(()=> {
      const tl = gsap.timeline({scrollTrigger: {trigger: projectsRef.current, start:'top+=5% center'}});
      tl.fromTo(titleRef.current, {opacity:0, y:20}, {opacity:1, y:0});
    }, []);

    return (
        <section id="projects" className="text-center py-[5%]" ref={projectsRef}>
            <h1 className="font-sans text-[2.3rem] font-bold text-[#32325D]" ref={titleRef}>Projects</h1>
            <section className="flex justify-evenly my-16 flex-wrap gap-y-8 gap-x-6 px-8">
               { React.Children.toArray(
                  projects.map(({src, alt, description, title, host, github}) => {
                    return <ProjectsItems 
                             src={src}
                             alt={alt}
                             description={description}
                             title={title}
                             host={host}
                             github={github}
                            />
                  })
                 )
               }
            </section>
        </section>
    )
}

export default memo(Projects);