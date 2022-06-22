import { useEffect, useRef } from "react";
import { Github } from "../icons/GitHub"
import { Linkedin } from "../icons/Linkedin"
import Header from "./Header"

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Home: React.FC = () => {

  const homeRef = useRef(null);
  const linksRef = useRef(null);
  const nameJobRef = useRef(null);

  useEffect(()=> {
      gsap.fromTo(linksRef.current, {opacity:0, y:10}, {opacity:1, y:0, delay: 1.4, duration:.8 , scrollTrigger: {trigger: homeRef.current}});
      gsap.fromTo(nameJobRef.current, {opacity:0, y:10}, {opacity:1, y:0, delay: 1.2, duration:.8 , scrollTrigger: {trigger: homeRef.current}});
    }, [])

    return (
        <main
         className="h-screen bg-wallpaper bg-no-repeat bg-cover bg-center"
         ref={homeRef}>
            <Header />
            <section className="relative w-full h-screen bg-black/80 flex flex-col items-center justify-center">
              <div className="text-white text-center font-roboto uppercase" ref={nameJobRef}>
                <h1 className="font-bold text-[3rem] m:text-[2rem] tracking-widest">William Lisboa</h1>
                <h4 className=" m:text-sm">Full Stack Developer</h4>
              </div>
              <div className="flex justify-between w-24 mt-12 m:mt-8" ref={linksRef}>
                <a
                 href="https://www.linkedin.com/in/william-k-lisboa/"
                 target="_blank"
                 rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a
                 href="https://github.com/will763" 
                 target="_blank" 
                 rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </section>
        </main>
    )
}