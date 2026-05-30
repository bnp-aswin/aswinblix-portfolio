"use client";

import { useEffect, useRef } from "react";

// Thin neumorphic scroll-progress rail pinned to the top of the viewport.
// Uses scaleX on a single element (GPU-friendly) updated via rAF.
export default function ScrollProgress() {
    const fillRef = useRef(null);

    useEffect(() => {
        let raf = 0;
        const update = () => {
            const el = document.documentElement;
            const max = el.scrollHeight - el.clientHeight;
            const progress = max > 0 ? el.scrollTop / max : 0;
            if (fillRef.current) fillRef.current.style.transform = `scaleX(${progress})`;
            raf = 0;
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        update();
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="fixed inset-x-0 top-0 z-[60] h-[3px] shadow-nm-inset-sm" aria-hidden="true">
            <div
                ref={fillRef}
                className="h-full w-full origin-left bg-nm-text"
                style={{ transform: "scaleX(0)" }}
            />
        </div>
    );
}
