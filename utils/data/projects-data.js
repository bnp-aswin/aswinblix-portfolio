// import ayla from '/public/image/ayla.jpg';
// import crefin from '/public/image/crefin.jpg';
// import realEstate from '/public/image/real-estate.jpg';
// import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: "Yoode - Custom Merchandise",
        description:
            "I architected and launched the e-commerce platform for Yoode.com, a leading custom apparel brand. I developed custom UI sections by writing specialized Liquid code to extend the theme's functionality beyond its native capabilities. I handled the complete setup, including product catalog management and seamless integrations for Razorpay and WhatsApp. Additionally, I engineered the network layer by managing the domain via AWS Route 53 and provisioning SSL certificates using AWS Certificate Manager (ACM) for secure, high-availability access.",
        tools: [
            "Shopify",
            "Liquid (Shopify)",
            "AWS Route 53",
            "AWS Certificate Manager",
            "Razorpay",
            "WhatsApp API",
            "HTML5",
            "CSS3"
        ],
        role: "Shopify Developer & Cloud Admin",
        code: "",
        demo: "https://www.yoode.com/",
        // image: yoode_preview,
    },
    {
        id: 2,
        name: "NSRL Garments Manufacturing",
        description:
            "I architected and deployed a comprehensive Odoo-based ERP and e-commerce solution for NSRL Garments. Beyond the Odoo implementation, I designed a robust AWS infrastructure using Route 53 for domain management and AWS Certificate Manager (ACM) for secure SSL provisioning. I configured an AWS CloudFront distribution to serve as a high-performance CDN and reverse proxy, ensuring fast global content delivery and secure SSL termination for the platform.",
        tools: [
            "Odoo 17",
            "AWS Route 53",
            "AWS CloudFront",
            "AWS Certificate Manager",
            "Python",
            "PostgreSQL",
            "Razorpay",
            "WhatsApp API",
            "Odoo Website",
            "Odoo Sales"
        ],
        role: "Odoo & Cloud Infrastructure Specialist",
        code: "",
        demo: "https://www.nsrlgarments.com/",
        // image: nsrl_garments,
    },
    {
        id: 3,
        name: "Yoode Shopify Partner Portal",
        description:
            "I have designed and developed a full-stack partner portal for Yoode to streamline Shopify store integrations. I created the responsive interactions using Vue.js embedded within Laravel Blade, styled with a combination of Bootstrap, Tailwind CSS, and the Tabler UI kit. The app features a dynamic dashboard with real-time statistics for users, orders, and revenue. I developed the robust backend API using Laravel and MySQL, implementing secure authentication and efficient data handling. I optimized the frontend build process using Vite.",
        tools: [
            "Laravel",
            "Vue.js",
            "MySQL",
            "Bootstrap",
            "Tailwind CSS",
            "Vite",
            "Tabler",
            "Sass/SCSS",
            "FontAwesome",
        ],
        role: "Full Stack Developer",
        code: "",
        demo: "",
        // image: yoode_portal,
    },
    {
        id: 4,
        name: "NSRL Odoo API Integration",
        description:
            "I designed and developed a robust middleware application to synchronize data between Odoo ERP and a local SQL Server. I created the modern dashboard UI using Vue.js 3, Tailwind CSS, and Vite for managing Sales Orders and Customers. I developed the backend API using Laravel 12 and PHP 8.2, implementing a custom JSON-RPC client for Odoo communication. The system features incremental data synchronization using Laravel Queues and handles file attachments efficiently.",
        tools: [
            "Laravel",
            "Vue.js",
            "Tailwind CSS",
            "SQL Server",
            "Odoo API",
            "PHP",
            "Vite",
            "Axios",
            "Laravel Queues",
        ],
        role: "Full Stack Developer",
        code: "",
        demo: "",
        // image: nsrl_odoo,
    },
    {
        id: 5,
        name: "Speedify - Network Speed Monitor",
        description:
            "I have designed and developed Speedify, a modern, cross-platform network speed monitoring desktop application. I created the UI using Python and Tkinter, implementing a custom glassmorphism design with layered transparency, rounded corners, and dynamic visual effects. The app features real-time download and upload tracking with high accuracy, a draggable always-on-top window, and efficient resource usage. I utilized the psutil library for system-level network statistics and threading to ensure a smooth, responsive user experience.",
        tools: [
            "Python",
            "Tkinter",
            "psutil",
            "PyInstaller",
            "Threading",
            "Glassmorphism UI",
        ],
        role: "Python Developer",
        code: "",
        demo: "",
        // image: speedify,
    },
    {
        id: 6,
        name: "NSRL Garments Stats",
        description: "A full-stack web application for tracking and analyzing garment manufacturing statistics. I developed the backend using Laravel (PHP) and the frontend with Vue.js, Tailwind CSS, and Bootstrap, incorporating GSAP for animations. The application is deployed on AWS Elastic Beanstalk with a secure custom subdomain configuration using AWS CloudFront and ACM certificates.",
        tools: [
            "Laravel",
            "Vue.js",
            "Tailwind CSS",
            "Bootstrap",
            "GSAP",
            "MySQL",
            "AWS Elastic Beanstalk",
            "AWS CloudFront",
            "AWS Certificate Manager"
        ],
        role: "Full Stack Developer",
        code: "",
        demo: "",
        // image: nsrl_stats,
    }
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
