import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

interface Props {
    src: string
    alt: string
    title: string
}

export const Technologies = ({src, alt, title}: Props) => {
    const itemsRef = useRef<any>([]);
    itemsRef.current = [];

    useEffect(()=> {
      const tl = gsap.timeline({scrollTrigger: {trigger: itemsRef.current[0], start:'top center'}});
      tl.fromTo(itemsRef.current[0], {opacity:0}, {opacity:1, duration:1, stagger: 0.30});
    }, [])

    function addRefs(el: any) {
        if(el && !itemsRef.current?.includes(el)){
            itemsRef.current?.push(el);
        }
    }

    return (
        <section className="bg-[#2A2929] w-24 py-3 px-6 rounded-md grid place-items-center" ref={addRefs}>
           <figure className="w-10 h-10 bg-white p-1 grid place-items-center">
             <img src={src} loading="lazy" alt={alt} />
           </figure>
           <h5 className="text-white font-serif font-normal mt-2 text-xs tracking-wide">{title}</h5>
        </section>
    )
}