"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

function AboutSection() {
    const containerRef = useRef(null);

    useGSAP(
        () => {
            const split = new SplitText(".about-description", { type: "words,chars" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.from(".about-header", {
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
                .from(
                    split.words,
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.5,
                        stagger: 0.02,
                        ease: "back.out",
                    },
                    "-=0.5"
                )
                .from(
                    ".about-image",
                    {
                        scale: 0.8,
                        opacity: 0,
                        duration: 1,
                        ease: "power3.out",
                    },
                    "-=0.5"
                );
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} id="about" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                    ABOUT ME
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="about-content order-2 lg:order-1">
                    <p className="about-header font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                        Who I am?
                    </p>
                    <p className="about-description text-gray-200 text-sm lg:text-lg">
                        {personalData.description}
                    </p>
                </div>
                <div className="about-image flex justify-center order-1 lg:order-2">
                    <Image
                        src={personalData.profile}
                        width={280}
                        height={280}
                        alt="Aswin Blix"
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
