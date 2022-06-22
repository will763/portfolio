import React, { useEffect, useMemo, useRef } from "react"
import { data } from "../utils/whatIDoData"
import { Works } from "./Works";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const WhatIDo : React.FC = () => {
    
    const informations = useMemo(() => data, []);

    const whatIDoRef = useRef(null);
    const titleRef = useRef(null);

    useEffect(()=>{
      gsap.fromTo(titleRef.current, {opacity:0, y:20}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: whatIDoRef.current, start:'top center'}});
    }, [])

    return (
        <section id="whatIDo" className="text-center bg-[#F3F4F6] py-[5%]" ref={whatIDoRef}>
            <h1 className="font-sans text-[2.3rem] font-bold text-[#32325D]" ref={titleRef}>What I Do</h1>
            <section className="flex flex-wrap justify-evenly my-16 gap-x-4 gap-y-6">
             { React.Children.toArray(
                informations.map(({src, alt, title, description}) => {
                    return <Works 
                             src={src}
                             alt={alt}
                             title={title}
                             description={description}
                            />
                })
             )}
            </section>
        </section>
    )
}