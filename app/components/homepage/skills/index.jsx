"use client";

import { skillsData } from "@/utils/data/skills";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "../../helper/section-heading";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(
                ".skill-pill",
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.45,
                    stagger: 0.04,
                    ease: "power2.out",
                    scrollTrigger: { trigger: containerRef.current, start: "top 82%" },
                }
            );
        },
        { scope: containerRef }
    );

    return (
        <section ref={containerRef} id="skills" className="nm-section">
            <SectionHeading title="Skills" />

            <div className="flex flex-wrap gap-2.5 sm:gap-3.5">
                {skillsData.map((skill) => (
                    <span key={skill} className="skill-pill nm-chip cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default Skills;
