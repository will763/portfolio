import { memo, useEffect, useRef } from "react";
import { Email } from "../icons/Email";
import { Github } from "../icons/GitHub";
import { Linkedin } from "../icons/Linkedin";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Contact() {

    const contactRef = useRef(null);
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const subTitleRef = useRef(null);
    const socialRef = useRef(null);
  
    useEffect(()=> {
      const tl = gsap.timeline({scrollTrigger: {trigger: contactRef.current, start:'top center'}});
       
      tl.fromTo(titleRef.current, {opacity:0, y:20}, {opacity:1, y:0});
      tl.fromTo(descriptionRef.current, {opacity:0, y:20}, {opacity:1, y:0});
      tl.fromTo(subTitleRef.current, {opacity:0, y:20}, {opacity:1, y:0})
      tl.fromTo(socialRef.current, {opacity:0, y:20}, {opacity:1, y:0})

    }, [])

    return (
        <footer id="contact" className="text-center text-white bg-[#1F1F1F] py-[5%]" ref={contactRef}>
            <h1 className="font-sans text-[2.3rem] m:text-[1.8rem] font-bold" ref={titleRef} >Contact</h1>
            <section>
                <p className="m-auto w-2/5 font-normal mt-2 mb-8 m:w-3/5 m:text-sm " ref={descriptionRef}>As of now, I'm looking for any new job opportunities, my inbox is always open if you want to communicate with me. Hit me up if you have some question, want a collaboration or just play a game of chess. I'll try to get back to you as soon as I can.</p>
            </section>
            <section>
                <h3 className="text-[1.5rem] m:text-[1.3rem] font-medium my-2" ref={subTitleRef }>Here are my Socials</h3>
                <section ref={socialRef}>
                  <a 
                   href="mailto:williamlisboa8086@gmail.com" 
                   target="_blank"
                   rel="noopener noreferrer" >
                    <Email />
                  </a>
                  <a
                   className="mx-5"
                   href="https://www.linkedin.com/in/william-k-lisboa/"
                   target="_blank"
                   rel="noopener noreferrer">
                     <Linkedin resize={true} />
                  </a>
                  <a
                   href="https://github.com/will763" 
                   target="_blank" 
                   rel="noopener noreferrer">
                    <Github resize={true} />
                  </a>
                </section>
            </section>

        </footer>
    )
}

export default memo(Contact);