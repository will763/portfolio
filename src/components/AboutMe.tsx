import { memo, useEffect, useRef} from "react"
import { Developer } from "../icons/Developer"

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import GoToTop from "./GoToTop";
gsap.registerPlugin(ScrollTrigger);


function AboutMe() {

    const aboutMeRef = useRef(null);
    const descriptionRef = useRef(null);
    const developerRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const goToTopRef = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline({scrollTrigger: {trigger: aboutMeRef.current, start: 'top+=20% center'}});

        tl.fromTo(developerRef.current, {opacity: 0, x: -100}, {opacity:1, x:0, duration: 1});
        tl.fromTo(descriptionRef.current, {opacity: 0, x: 100}, {opacity:1, x:0, duration: 1});
        tl.fromTo(titleRef.current, {opacity:0, y:20}, {opacity:1, y:0, duration:.3});
        tl.fromTo(paragraphRef.current, {opacity:0, y:20}, {opacity:1, y:0,});
        
        gsap.fromTo(goToTopRef.current, {display: 'none'}, {display: 'block' ,scrollTrigger: {trigger: aboutMeRef.current, start: 'top top', scrub:1}})
        
        
    }, []);

    return (
        <>
        <section id="aboutMe" className="flex flex-wrap gap-x-[8rem] gap-y-[3.8rem] justify-center px-8 py-[13%] items-center" ref={aboutMeRef}>
            <div className="icon-developer w-[18rem]" ref={developerRef}>
             <Developer />
            </div>
            <div className="bg-[#222233] text-white w-[50%] min-w-[20rem] h-max pb-[5%] rounded-xl font-sans text-center" ref={descriptionRef}>
                <h1 className="font-bold text-xl mt-8" ref={titleRef}>A bit about me</h1>
                <p className="px-[10%] mt-3" ref={paragraphRef}>  
                  I'm William Lisboa, a full stack developer
                  . I'm a professional who always seeks to be in
                  line with the needs of the market, I'm still focused
                  on emerging and trending technologies at the moment. 
                  I love to read, be it book, article, or any content 
                  focused on techlogy. I always prefer to read books because
                  they cover the entire foundation for building advanced
                  technologies.</p>
            </div>
        </section>
        <div className="absolute z-50" ref={goToTopRef}>
           <GoToTop />
        </div>
        </>
    )
}

export default memo(AboutMe);