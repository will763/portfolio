import AboutMe from "./AboutMe"
import Contact from "./Contact"
import { Home } from "./Home"
import Projects from "./Projects"
import { Skills } from "./Skills"
import { WhatIDo } from "./WhatIDo"

function Portfolio() {
    return (
        <main>
        <Home />
        <AboutMe />
        <WhatIDo />
        <Skills />
        <Projects />
        <Contact />
        </main>
    )
}

export default Portfolio;