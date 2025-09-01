const portofolioData = [
    {
        Id: 1,
        category: { label: "Company Profile", value: "company-profile" },
        title: "Multilink Trans Indonesia",
        description:
            "A sleek and responsive company profile website built to strengthen brand presence and highlight corporate services.",
        summary:
            "A sleek and responsive company profile website built to strengthen brand presence and highlight corporate services.",
        header: {
            src: "/portofolio/multilink-mockup.png",
            alt: "Multilink Company Profile Website",
        },
        details: [
            {
                type: "paragraph",
                text: "We developed a modern company profile website with a clean UI/UX that reflects the client’s brand values. The site is optimized for performance and accessibility, making it easier for potential clients to connect with Multilink Trans Indonesia.",
            },
            {
                type: "paragraph",
                text: "The website highlights company achievements, services, and client testimonials in a visually appealing and structured way.",
            },
        ],
        button: { label: "Visit Site", link: "https://multilink.co.id" },
    },

    {
        Id: 2,
        category: { label: "Information System", value: "information-system" },
        title: "Flood Control Management System (SIPBANJA-2)",
        description:
            "An integrated flood monitoring and control information system with GIS support to improve disaster preparedness and response.",
        summary:
            "An integrated flood monitoring and control information system with GIS support to improve disaster preparedness and response.",
        header: {
            src: "/portofolio/sipbanja2-map-mockup.png",
            alt: "Flood Control Management Information System",
        },
        details: [
            {
                type: "paragraph",
                text: "We built a flood control management system that combines geospatial visualization with real-time monitoring of water levels.",
            },
            {
                type: "paragraph",
                text: "The system supports decision-making for authorities by providing predictive analysis, automated alerts, and comprehensive reporting features.",
            },
        ],
        button: null,
    },

    {
        Id: 3,
        category: { label: "Mobile Application", value: "mobile-app" },
        title: "Flood Control Management System (SIPBANJA-1)",
        description:
            "A mobile app for flood monitoring and community reporting system, empowering citizens and field officers with real-time information.",
        summary:
            "A mobile app for flood monitoring and community reporting system, empowering citizens and field officers with real-time information.",
        header: {
            src: "/portofolio/sipbanja1-dash-mockup.png",
            alt: "Flood Control Mobile Application",
        },
        details: [
            {
                type: "paragraph",
                text: "We designed and developed a mobile app version of the flood monitoring system to empower citizens and field officers to report real-time flood conditions and receive early warnings.",
            },
            {
                type: "paragraph",
                text: "The mobile app extends the web-based SIPBANJA system by offering mobile-first usability for faster reporting and access to critical information.",
            },
        ],
        button: null,
    },

    {
        Id: 4,
        category: { label: "Mobile Application", value: "mobile-app" },
        title: "Smart Apartments App",
        description:
            "A smart living mobile application designed for Rusunami residents, integrating digital services and IoT device control.",
        summary:
            "A smart living mobile application designed for Rusunami residents, integrating digital services and IoT device control.",
        header: {
            src: "/portofolio/srusun-app-dash-mockup.png",
            alt: "Smart Apartments Mobile App",
        },
        details: [
            {
                type: "paragraph",
                text: "The Smart Apartments app provides residents with an all-in-one platform to manage their apartment living. It includes features such as online bill payments, maintenance requests, community announcements, and IoT device control.",
            },
            {
                type: "paragraph",
                text: "The app is designed to improve convenience, security, and connectivity for residents by digitizing apartment services and integrating smart home devices.",
            },
        ],
        button: null,
    },

    {
        Id: 5,
        category: { label: "Information System", value: "information-system" },
        title: "Rusunami File Management System",
        description:
            "A document and file management system tailored for Rusunami residents and administrators to digitize paperwork.",
        summary:
            "A document and file management system tailored for Rusunami residents and administrators to digitize paperwork.",
        header: {
            src: "/portofolio/jarrdin-member-mockup.png",
            alt: "Rusunami File Management System",
        },
        details: [
            {
                type: "paragraph",
                text: "This system digitizes document management for Rusunami residents and administrators, allowing secure storage, retrieval, and sharing of important documents such as ownership certificates, payment receipts, and community regulations.",
            },
            {
                type: "paragraph",
                text: "The solution streamlines administrative work and provides residents with easier access to their digital documents anytime, anywhere.",
            },
        ],
        button: null,
    },

    {
        Id: 6,
        category: { label: "IoT Development", value: "iot-dev" },
        title: "Smart Integrated Scale System (KSIP Agro)",
        description:
            "An IoT-based smart weighing and receiving system integrated with Odoo ERP, improving efficiency, accuracy, and transparency.",
        summary:
            "An IoT-based smart weighing and receiving system integrated with Odoo ERP, improving efficiency, accuracy, and transparency.",
        header: { src: "/portofolio/ksipagro.jpg", alt: "Smart Integrated Scale IoT System" },
        details: [
            {
                type: "paragraph",
                text: "We developed the Smart Integrated Scale (SIS) for KSIP Agro, automating the weighing and receiving process by integrating digital scales, cameras, and ERP synchronization.",
            },
            {
                type: "paragraph",
                text: "The system captures product weight and images, prints barcode labels, and updates Odoo ERP in real-time to reduce manual errors and ensure transparency with suppliers.",
            },
        ],
        button: null,
    },

    {
        Id: 7,
        category: { label: "IoT Development", value: "iot-dev" },
        title: "Safety Multipurpose Box",
        description:
            "A smart safety box with emergency tools, a public display, and multifunctional surveillance for public facilities.",
        summary:
            "A smart safety box with emergency tools, a public display, and multifunctional surveillance for public facilities.",
        header: { src: "/portofolio/bandara.jpg", alt: "Safety Multipurpose Box" },
        details: [
            {
                type: "paragraph",
                text: "Developed for PT Angkasa Pura, the Safety Multipurpose Box integrates emergency response tools such as AEDs and gas masks with a Raspberry Pi-powered display for public information and advertising.",
            },
            {
                type: "paragraph",
                text: "The system includes surveillance integration with CCTV and real-time image processing to enhance safety management.",
            },
        ],
        button: null,
    },
];

export default portofolioData;
