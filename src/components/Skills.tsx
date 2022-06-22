import React, { useEffect, useRef } from "react"
import { data } from "../utils/technologiesData"
import { Technologies } from "./Technologies"

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Skills = () => {
    const skillsRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(()=> {
      gsap.fromTo(titleRef.current, {opacity:0, y:20}, {opacity:1, y:0, duration:1, scrollTrigger:{trigger: skillsRef.current, start:'top center'}});
    }, []);

    return (
        <section id="skills" className="bg-[#1F1F1F] text-center py-[5%]" ref={skillsRef}>
            <h1 className="font-sans text-[2.3rem] font-bold text-white" ref={titleRef}>SKILLS</h1>
            <section className="my-16 flex flex-wrap justify-center gap-8 px-8">
                { React.Children.toArray(
                    data.map(({src, alt, title}) => {
                        return <Technologies src={src} alt={alt} title={title}/>
                    })
                )}
            </section>
        </section>
    )
}