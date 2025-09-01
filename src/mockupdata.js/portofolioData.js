const portofolioData = [
    {
        Id: 1,
        category: { label: "Company Profile", value: "company-profile" },
        title: "Multilink Trans Indonesia",
        description:
            "A sleek and responsive company profile website built to strengthen brand presence and highlight corporate services.",
        header: { src: "/portofolio/multilink-mockup.png", alt: "Company Profile Website" },
        content: [
            {
                type: "paragraph",
                text: "We developed a modern company profile website with a clean UI/UX that reflects the client’s brand values. The site is optimized for performance and accessibility, making it easier for potential clients to connect with Multilink Trans Indonesia.",
            },
            {
                type: "heading",
                text: "Summary",
            },
            {
                type: "paragraph",
                text: "The project aimed to provide Multilink Trans Indonesia with a digital presence that showcases their logistics services in a professional and modern way. The website highlights company achievements, services, and client testimonials.",
            },
            {
                type: "heading",
                text: "Technologies Used",
            },
            {
                type: "list",
                items: [
                    "Next.js for server-side rendering and performance",
                    "Tailwind CSS for responsive and modern styling",
                    "Headless CMS (Strapi) for content management",
                    "Vercel for deployment and hosting",
                ],
            },
        ],
    },
    {
        Id: 2,
        category: { label: "Information System", value: "information-system" },
        title: "Flood Control Management System (SIPBANJA-2)",
        description:
            "An integrated flood monitoring and control information system with GIS support.",
        header: {
            src: "/portofolio/sipbanja2-map-mockup.png",
            alt: "Flood Control Management Information System",
        },
        content: [
            {
                type: "paragraph",
                text: "We built a flood control management system that combines geospatial visualization with real-time monitoring of water levels. The system supports decision-making for authorities by providing predictive analysis and automated alerts.",
            },
            {
                type: "heading",
                text: "Summary",
            },
            {
                type: "paragraph",
                text: "The system helps local governments and disaster management agencies to plan, monitor, and respond to potential flood events more effectively.",
            },
            {
                type: "heading",
                text: "Technologies Used",
            },
            {
                type: "list",
                items: [
                    "Laravel for backend development",
                    "PostgreSQL with PostGIS for spatial data management",
                    "Leaflet.js for interactive maps",
                    "Bootstrap for UI framework",
                    "REST API for mobile and third-party integrations",
                ],
            },
        ],
    },
    {
        Id: 3,
        category: { label: "Mobile Application", value: "mobile-app" },
        title: "Flood Control Management System (SIPBANJA-1)",
        description: "Mobile app for flood monitoring and community reporting system.",
        header: {
            src: "/portofolio/sipbanja1-dash-mockup.png",
            alt: "Flood Control Mobile Application",
        },
        content: [
            {
                type: "paragraph",
                text: "We designed and developed a mobile app version of the flood monitoring system to empower citizens and field officers to report real-time flood conditions and receive early warnings.",
            },
            {
                type: "heading",
                text: "Summary",
            },
            {
                type: "paragraph",
                text: "The mobile app extends the web-based SIPBANJA system by offering mobile-first usability for faster reporting and access to critical information.",
            },
            {
                type: "heading",
                text: "Technologies Used",
            },
            {
                type: "list",
                items: [
                    "React Native for cross-platform mobile app development",
                    "Firebase for push notifications",
                    "REST API for data integration",
                    "Google Maps SDK for location-based services",
                ],
            },
        ],
    },
    {
        Id: 4,
        category: { label: "Mobile Application", value: "mobile-app" },
        title: "Smart Apartments App",
        description: "A smart living mobile application designed for Rusunami residents.",
        header: {
            src: "/portofolio/srusun-app-dash-mockup.png",
            alt: "Smart Apartments Mobile App",
        },
        content: [
            {
                type: "paragraph",
                text: "The Smart Apartments app provides residents with an all-in-one platform to manage their apartment living. It includes features such as online bill payments, maintenance requests, community announcements, and IoT device control.",
            },
            {
                type: "heading",
                text: "Summary",
            },
            {
                type: "paragraph",
                text: "The app is designed to improve convenience, security, and connectivity for residents by digitizing apartment services and integrating smart home devices.",
            },
            {
                type: "heading",
                text: "Technologies Used",
            },
            {
                type: "list",
                items: [
                    "Flutter for cross-platform mobile development",
                    "Firebase Authentication for secure login",
                    "IoT integration via MQTT protocol",
                    "Node.js + Express backend API",
                    "MongoDB for scalable data storage",
                ],
            },
        ],
    },
    {
        Id: 5,
        category: { label: "Information System", value: "information-system" },
        title: "Rusunami File Management System",
        description:
            "A document and file management system tailored for Rusunami residents and management.",
        header: {
            src: "/portofolio/jarrdin-member-mockup.png",
            alt: "Rusunami File Management System",
        },
        content: [
            {
                type: "paragraph",
                text: "This system digitizes document management for Rusunami residents and administrators, allowing secure storage, retrieval, and sharing of important documents such as ownership certificates, payment receipts, and community regulations.",
            },
            {
                type: "heading",
                text: "Summary",
            },
            {
                type: "paragraph",
                text: "The solution streamlines administrative work and provides residents with easier access to their digital documents anytime, anywhere.",
            },
            {
                type: "heading",
                text: "Technologies Used",
            },
            {
                type: "list",
                items: [
                    "Laravel for backend system",
                    "MySQL for structured database storage",
                    "Tailwind CSS for modern UI design",
                    "JWT Authentication for secure access",
                    "Cloud storage integration (AWS S3)",
                ],
            },
        ],
    },
];

export default portofolioData;
