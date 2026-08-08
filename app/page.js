import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        dateCreated: "2021-01-01T00:00:00Z",
        dateModified: new Date().toISOString(),
        mainEntity: {
            "@type": "Person",
            "@id": "https://aswin-blix.github.io/#person",
            name: "Aswin Blix T.C",
            alternateName: ["Aswin Blix", "Aswin Blix TC", "Aswin"],
            givenName: "Aswin",
            additionalName: "Blix",
            familyName: "T.C",
            url: "https://aswin-blix.github.io",
            mainEntityOfPage: "https://aswin-blix.github.io",
            image: "https://aswin-blix.github.io/image/my-profile.jpg",
            jobTitle: "AI-Native Full Stack Engineer",
            nationality: { "@type": "Country", name: "India" },
            telephone: "+91-9488-131-904",
            description:
                "Passionate programmer dedicated to building clean, modern web experiences. AI-Assisted Developer proficient in JavaScript, React, Next.js, Laravel, Vue.js, Python, Shopify, Odoo, and AWS.",
            email: "aswinasvin13@gmail.com",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Kanniyakumari",
                addressRegion: "Tamil Nadu",
                postalCode: "629168",
                addressCountry: "IN",
            },
            sameAs: [
                "https://github.com/aswin-blix",
                "https://www.linkedin.com/in/aswin-blix/",
                "https://twitter.com/aswinblix",
                "https://www.facebook.com/aswinblix/",
                "https://stackoverflow.com/users/16927414/aswin-blix",
            ],
            knowsAbout: [
                "JavaScript",
                "React",
                "Next.js",
                "Laravel",
                "Vue.js",
                "Python",
                "PHP",
                "AWS",
                "Shopify",
                "Odoo",
                "MySQL",
                "Tailwind CSS",
                "GSAP",
            ],
            worksFor: {
                "@type": "Organization",
                name: "BitsNPixs Technologies",
            },
            hasOccupation: {
                "@type": "Occupation",
                name: "AI-Native Full Stack Engineer",
                skills: "React, Next.js, Vue.js, Laravel, PHP, Python, C#/.NET, Shopify, Odoo, AWS, MySQL, Tailwind CSS, GSAP",
            },
            alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Sathyabama University, Chennai",
            },
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://aswin-blix.github.io/#website",
        url: "https://aswin-blix.github.io",
        name: "Aswin Blix Portfolio",
        alternateName: ["Aswin Blix", "Aswin Blix T.C"],
        inLanguage: "en",
        description: "Portfolio of Aswin Blix T.C — AI-Native Full Stack Engineer",
        author: {
            "@id": "https://aswin-blix.github.io/#person",
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://aswin-blix.github.io/#faq",
        mainEntity: [
            {
                "@type": "Question",
                name: "Who is Aswin Blix T.C?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aswin Blix T.C is an AI-Native Full Stack Engineer based in Kanniyakumari, Tamil Nadu, India, with 4+ years of experience building clean, modern web applications using React, Next.js, Laravel, Vue.js, Python, Shopify, Odoo, and AWS.",
                },
            },
            {
                "@type": "Question",
                name: "What technologies does Aswin Blix specialize in?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "He works across the full stack with React, Next.js, Vue.js, Laravel, PHP, Python, C#/.NET, Shopify, Odoo, AWS, MySQL, Tailwind CSS, and GSAP.",
                },
            },
            {
                "@type": "Question",
                name: "How many years of experience does Aswin Blix have?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Over 4 years. He has worked as a full-stack developer since 2021 and is currently at BitsNPixs Technologies.",
                },
            },
            {
                "@type": "Question",
                name: "Where is Aswin Blix located?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Kanniyakumari, Tamil Nadu, India.",
                },
            },
            {
                "@type": "Question",
                name: "How can I contact or hire Aswin Blix?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "By email at aswinasvin13@gmail.com or via LinkedIn at https://www.linkedin.com/in/aswin-blix/. He is available for full-stack and AI-assisted development work.",
                },
            },
        ],
    },
];

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <HeroSection />
            <AboutSection />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <ContactSection />
        </>
    );
}
