import { memo, useEffect, useRef, useState } from "react";
import { Logo } from "../icons/Logo";
import { Menu } from "../icons/Menu";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Header() {
    const [isActive, setIsActive] = useState(false);

    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const logoRef = useRef(null);

    const styledOpen = 'opacity-100 sm:w-max sm:pt-0 sm:mt-8 sm:flex-row sm:h-max lg:pr-20 md:pr-12 sm:gap-4 md:gap-8 flex w-screen h-screen flex-col items-end z-40 bg-black/80 sm:bg-transparent pr-4 pt-[4.5rem] gap-2 rounded-bl-full sm:rounded-none transition-all duration-300 ';
    const styledClose = 'opacity-0 sm:opacity-100 sm:w-max sm:pt-0 sm:mt-8 sm:flex-row sm:h-max lg:pr-20 md:pr-12 sm:gap-4 md:gap-8 flex w-[0] h-[0] flex-col items-end z-40 bg-black/80 sm:bg-transparent pr-4 pt-[4.5rem] gap-2 rounded-bl-full sm:rounded-none transition-all duration-300';

    function handleClick() {
        setIsActive(false);
    }

    useEffect(()=> {
      gsap.fromTo(logoRef.current, {opacity:0, y:10}, {opacity:1, y:0, delay: 1, duration:.8 , scrollTrigger: {trigger: headerRef.current}});
      gsap.fromTo(menuRef.current, {opacity:0, y:10}, {opacity:1, y:0, delay: 1, duration:.8 , scrollTrigger: {trigger: headerRef.current}});
    }, [])

    return <header className="absolute top-0 left-0 z-10 w-full h-full items-start flex justify-between" ref={headerRef}>
        <section className="font-bold z-10 ml-3 sm:ml-6 sm:mt-6 mt-4 sm:text-base w-max font-roboto text-white flex items-center gap-x-2 cursor-pointer" ref={logoRef}>
            <Logo />
            <p>Portfolio</p>
        </section>
        <section className=" absolute text-white w-full h-screen font-medium text-sm text-right flex flex-col items-end cursor-default" ref={menuRef}>
            <div className=" sm:hidden absolute top-7 right-4 z-50" onClick={() => setIsActive(!isActive)}>
                <Menu isActive={isActive} />
            </div>
            <div className={isActive ? styledOpen: styledClose}>
                <a href="#aboutMe" className="underline-link" onClick={handleClick}>About Me</a>
                <a href="#whatIDo" className="underline-link" onClick={handleClick}>What I Do</a>
                <a href="#skills" className="underline-link" onClick={handleClick}>Skills</a>
                <a href="#projects" className="underline-link" onClick={handleClick}>Projects</a>
                <a href="#contact" className="underline-link" onClick={handleClick}>Contact</a>
            </div>
        </section>
    </header>
}

export default memo(Header);