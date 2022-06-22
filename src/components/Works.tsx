import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface Props {
    src: string
    alt: string
    title: string
    description: string
}

export const Works = ({src, alt, title, description}: Props ) => {

    const workRef = useRef(null);

    useEffect(()=>{
      gsap.fromTo(workRef.current, {scale:0, opacity:0}, {scale:1, opacity:1, ease:'Bounce.easeOut', duration:1, scrollTrigger:{trigger:workRef.current, start:'top bottom-=20%'}});
    }, [])

    return (
        <section className="bg-white h-[26rem] w-[30%] min-w-[16rem] rounded-lg flex flex-col items-center shadow-md hover:shadow-xl transition-shadow cursor-pointer " ref={workRef}>
            <figure className="w-24 mt-8">
              <img src={src} loading="lazy" alt={alt} />
            </figure>
            <div className="text-center mb-16 px-[5%]">
              <h2 className="font-semibold text-[1.3rem] mt-4 text-[#32325D] ">{title}</h2>
              <p className="text-[#343434] l:text-sm">{description}</p>
            </div>
        </section>
    )
}