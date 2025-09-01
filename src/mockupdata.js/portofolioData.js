const portofolioData = [
    {
        Id: 1,
        category: { label: "Company Profile", value: "company-profile" },
        title: "Modern Company Profile Website",
        description:
            "A sleek and responsive company profile website built to showcase brand identity.",
        header: { src: "/portfolio/company1.jpg", alt: "Company Profile Website" },
        content: [
            {
                type: "paragraph",
                text: "We developed a modern company profile website with a clean UI/UX that reflects the client’s brand values. The site is optimized for performance and accessibility.",
            },
            {
                type: "heading",
                text: "Key Features",
            },
            {
                type: "list",
                items: [
                    "Responsive design for all devices",
                    "SEO-optimized content structure",
                    "Custom CMS for easy content updates",
                    "Integration with corporate social media",
                ],
            },
            {
                type: "image",
                src: "/portfolio/company1-preview.jpg",
                alt: "Company Profile Preview",
                caption: "Homepage of the modern company profile website.",
            },
        ],
    },
    {
        Id: 2,
        category: { label: "Information System", value: "information-system" },
        title: "Hospital Management Information System",
        description: "A complete system for managing hospital operations efficiently.",
        header: { src: "/portfolio/infosys1.jpg", alt: "Hospital Management Information System" },
        content: [
            {
                type: "paragraph",
                text: "We designed and implemented a hospital management information system (HMIS) that streamlines patient registration, medical records, and billing processes.",
            },
            {
                type: "heading",
                text: "Modules Included",
            },
            {
                type: "list",
                items: [
                    "Patient registration & electronic health records",
                    "Appointment scheduling system",
                    "Pharmacy & inventory management",
                    "Billing and insurance integration",
                ],
            },
            {
                type: "quote",
                text: "“This system improved operational efficiency by 40% within six months.” – Client Feedback",
            },
        ],
    },
    {
        Id: 3,
        category: { label: "Mobile Application", value: "mobile-app" },
        title: "E-Commerce Mobile Application",
        description: "Cross-platform mobile app for seamless shopping experiences.",
        header: { src: "/portfolio/mobile1.jpg", alt: "E-Commerce Mobile App" },
        content: [
            {
                type: "paragraph",
                text: "We built a mobile application for e-commerce that allows customers to browse products, track orders, and make secure payments with ease.",
            },
            {
                type: "heading",
                text: "Core Functionalities",
            },
            {
                type: "list",
                items: [
                    "User-friendly product catalog",
                    "Multiple payment gateway integration",
                    "Real-time order tracking",
                    "Push notifications for promotions",
                ],
            },
            {
                type: "image",
                src: "/portfolio/mobile1-preview.jpg",
                alt: "E-Commerce App Screens",
                caption: "The app provides a smooth and modern shopping experience.",
            },
        ],
    },
    {
        Id: 4,
        category: { label: "IoT Development", value: "iot-dev" },
        title: "Smart Home IoT Development",
        description: "IoT solution to automate and monitor home devices.",
        header: { src: "/portfolio/iot1.jpg", alt: "Smart Home IoT System" },
        content: [
            {
                type: "paragraph",
                text: "Our IoT solution enables homeowners to control and monitor their devices remotely, improving convenience and energy efficiency.",
            },
            {
                type: "heading",
                text: "System Capabilities",
            },
            {
                type: "list",
                items: [
                    "Remote lighting and climate control",
                    "Smart energy consumption monitoring",
                    "Security system with motion sensors",
                    "Voice assistant integration",
                ],
            },
            {
                type: "quote",
                text: "“With the IoT system, I can control my entire home from my smartphone.” – User Testimonial",
            },
        ],
    },
];

export default portofolioData;
