import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Props {
    src: string
    alt: string
    title: string
    description: string
    host: string
    github: string
}

function Items({
    src,
    alt,
    title,
    description,
    host,
    github,
}: Props) {
 
   const itemRef = useRef(null);

   useEffect(()=>{
     gsap.fromTo(itemRef.current, {scale:0}, {scale:1, ease: 'Circ.easeOut', scrollTrigger:{trigger: itemRef.current}})
   }, [])

   return (
     <section className="h-[26rem] w-[30%] min-w-[18rem] bg-[#000000] rounded-lg text-white" ref={itemRef}>
        <figure>
            <img className="rounded-t-lg border-[2px] border-black/40" src={src} alt={alt} />
        </figure>
        <h1 className="font-bold text-xl mt-3">{title}</h1>
        <p className="px-[5%] text-sm mt-2 h-20">{description}</p>
        <section className="flex justify-center font-sans text-black font-bold gap-6">
            <a className="bg-white w-24 py-1 rounded-2xl hover:bg-gray-800 hover:text-white/90 transition-colors" href={github} target="_blank" rel="noopener noreferrer">
              <button>Code</button>
            </a>
            <a className="bg-white w-24 py-1 rounded-2xl hover:bg-gray-800 hover:text-white/90 transition-colors" href={host} target="_blank" rel="noopener noreferrer">
              <button>Demo</button>
            </a>
        </section>
     </section>
   )
}

export default memo(Items)