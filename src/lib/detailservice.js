import {
    Globe,
    Settings,
    Users,
    BarChart2,
    ShieldAlert,
    Zap,
    Database, Workflow, Headphones, BarChart4, Lock, Rocket, Bot, Clock, MessageSquare, TrendingUp, Smile,
    Activity,
    Filter,
    PieChart,
    Wifi, Cpu, Eye, Layers, Shield
    , Brain, Search,
    Smartphone, Monitor, Package
} from "lucide-react";

export const pivodsServices = {
    "company-profile": {
        bannerImage: "/services/compro/1.jpg",
        title: <div className="w-full flex flex-col mt-10 gap-y-3">
            <span className="bg-primary/20 text-primary w-fit h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                Company Profile
            </span>
            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                Build{" "}
                <span className="text-primary">
                    Credibility & Growth
                </span>{" "}
                with a Professional Company Profile
            </h2>
        </div>,
        whatIs: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            A Company Profile is more than just an introduction — it’s your <span className="text-primary font-semibold">digital identity</span>.
            It showcases your brand story, builds trust, and opens the door to new opportunities.
            With a professional design and clear structure, your company profile becomes the <span className="text-primary font-semibold">first impression</span>
            that defines how clients and partners perceive your business.
        </p>,
        trends: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Studies show that <span className="text-primary font-semibold">over 80%</span> of established companies
            use a company profile as their official digital presence.
            Businesses with a strong profile are <span className="text-primary font-semibold">60% more likely</span>
            to gain client trust and close deals faster.
            On top of that, having a clear and accessible profile can boost revenue by up to <span className="text-primary font-semibold">35%</span>,
            as potential customers find it easier to connect and engage with your brand.
        </p>,
        flexImages: ["/services/compro/2.jpg", "/services/compro/3.jpg"],
        importance: [
            {
                icon: <Globe size={15} />,
                header: "Digital Visibility",
                description:
                    "Without a proper company profile, your business is almost invisible in today’s digital-first world."
            },
            {
                icon: <Settings size={15} />,
                header: "Competitive Disadvantage",
                description:
                    "Competitors with professional profiles instantly look more reliable, leaving you one step behind."
            },
            {
                icon: <Users size={15} />,
                header: "Client Trust",
                description:
                    "Modern clients trust brands that look professional — a profile can improve conversion rates by up to 40%."
            },
            {
                icon: <BarChart2 size={15} />,
                header: "Growth Accelerator",
                description:
                    "A clear profile simplifies partnerships, attracts investors, and supports expansion into new markets."
            },
            {
                icon: <ShieldAlert size={15} />,
                header: "Brand Credibility",
                description:
                    "Without an official profile, your business risks being seen as small, unprofessional, or unreliable."
            },
            {
                icon: <Zap size={15} />,
                header: "Act Now",
                description:
                    "In today’s digital era, a company profile is not optional — it’s an urgent requirement to stay relevant and competitive."
            },
        ],
    },
    "information-system": {
        bannerImage: "/services/informationsystem/1.jpg",
        title: <div className="w-full flex flex-col mt-10 gap-y-3">
            <span className="bg-primary/20 text-primary w-fit h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                Information System
            </span>
            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                Empower{" "}
                <span className="text-primary">
                    Efficiency & Control
                </span>{" "}
                with Smart Information Systems
            </h2>
        </div>,
        whatIs: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            An Information System is the backbone of a modern business.
            It integrates processes, data, and technology into one seamless platform.
            With a smart system, you gain <span className="text-primary font-semibold">real-time insights</span>,
            reduce manual work, and accelerate decision-making.
            In short, it turns complex operations into <span className="text-primary font-semibold">scalable growth</span>.
        </p>,
        trends: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Research shows that <span className="text-primary font-semibold">over 75%</span> of growing companies
            adopt digital information systems to streamline their operations.
            Businesses that use integrated systems report a <span className="text-primary font-semibold">50% reduction</span>
            in operational costs and up to <span className="text-primary font-semibold">2x faster</span> decision-making.
            Companies with data-driven operations also achieve revenue growth of <span className="text-primary font-semibold">30% annually</span>.
        </p>,
        flexImages: ["/services/informationsystem/2.jpg", "/services/informationsystem/3.jpg"],
        importance: [
            {
                icon: <Database size={15} />,
                header: "Centralized Access",
                description:
                    "Without an information system, data stays scattered — making it harder for teams to collaborate effectively."
            },
            {
                icon: <Workflow size={15} />,
                header: "Operational Bottlenecks",
                description:
                    "Manual workflows slow your business down, leading to wasted time, higher costs, and limited scalability."
            },
            {
                icon: <Headphones size={15} />,
                header: "Customer Experience",
                description:
                    "Clients expect quick and accurate responses — without system integration, satisfaction rates drop significantly."
            },
            {
                icon: <BarChart4 size={15} />,
                header: "Data-Driven Growth",
                description:
                    "Every day your business generates valuable data — an information system transforms it into actionable insights."
            },
            {
                icon: <Lock size={15} />,
                header: "Risk Management",
                description:
                    "Relying on outdated processes increases the risk of errors, data loss, and compliance issues."
            },
            {
                icon: <Rocket size={15} />,
                header: "Don’t Fall Behind",
                description:
                    "Competitors are automating fast — adopting an information system today keeps your business competitive tomorrow."
            },
        ],
    },
    "ai-agent-overflow": {
        bannerImage: "/services/aiagent/1.jpg",
        title: <div className="w-full flex flex-col mt-10 gap-y-3">
            <span className="bg-primary/20 text-primary w-fit h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                AI Agent Overflow System
            </span>
            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                Scale{" "}
                <span className="text-primary">
                    Customer Support & Operations
                </span>{" "}
                with AI Agents
            </h2>
        </div>,
        whatIs: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            An AI Agent Overflow System helps businesses handle{" "}
            <span className="text-primary font-semibold">high-volume interactions</span>
            without hiring more staff. It automates responses, routes inquiries, and supports your team
            in delivering <span className="text-primary font-semibold">24/7 seamless service</span>.
        </p>,
        trends: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Over <span className="text-primary font-semibold">65%</span> of companies using AI agents
            report a <span className="text-primary font-semibold">40% cost reduction</span> in customer service.
            Businesses that adopt AI systems respond to clients{" "}
            <span className="text-primary font-semibold">3x faster</span>
            and improve customer satisfaction by <span className="text-primary font-semibold">50%</span>.
        </p>,
        flexImages: ["/services/aiagent/2.jpg", "/services/aiagent/3.jpg"],
        importance: [
            { icon: <Bot size={15} />, header: "Automation", description: "Handle repetitive queries instantly without human intervention." },
            { icon: <Clock size={15} />, header: "24/7 Availability", description: "Serve customers anytime, anywhere — no downtime." },
            { icon: <MessageSquare size={15} />, header: "Scalable Support", description: "Manage 100s of conversations simultaneously with ease." },
            { icon: <TrendingUp size={15} />, header: "Boost Productivity", description: "Let your team focus on complex tasks while AI handles the rest." },
            { icon: <Smile size={15} />, header: "Customer Satisfaction", description: "Faster responses mean happier and more loyal clients." },
            { icon: <Zap size={15} />, header: "Stay Ahead", description: "Adopting AI ensures your business stays competitive in digital service." },
        ],
    },
    "data-analytics": {
        bannerImage: "/services/data/1.jpg",
        title: <div className="w-full flex flex-col mt-10 gap-y-3">
            <span className="bg-primary/20 text-primary w-fit h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                Data Analytics & Dashboard
            </span>
            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                Turn{" "}
                <span className="text-primary">
                    Data into Decisions
                </span>{" "}
                with Smart Dashboards
            </h2>
        </div>,
        whatIs: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Data Analytics & Dashboards allow you to monitor performance,
            track KPIs, and gain <span className="text-primary font-semibold">real-time insights</span>.
            Instead of raw data, you see clear visuals that support{" "}
            <span className="text-primary font-semibold">faster decision-making</span>.
        </p>,
        trends: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Over <span className="text-primary font-semibold">70%</span> of companies say
            dashboards improve decision speed by <span className="text-primary font-semibold">2x</span>.
            Businesses using analytics-driven strategies achieve{" "}
            <span className="text-primary font-semibold">25% higher profit margins</span>
            and <span className="text-primary font-semibold">5x ROI</span> from marketing campaigns.
        </p>,
        flexImages: ["/services/data/2.jpg", "/services/data/3.jpg"],
        importance: [
            { icon: <BarChart2 size={15} />, header: "Clear Insights", description: "Transform complex data into easy-to-read visuals." },
            { icon: <Activity size={15} />, header: "Real-Time Tracking", description: "Monitor business performance live, not monthly." },
            { icon: <Filter size={15} />, header: "Customizable Views", description: "Focus on KPIs that matter most to your strategy." },
            { icon: <PieChart size={15} />, header: "Better Decisions", description: "Data-backed insights reduce guesswork and mistakes." },
            { icon: <TrendingUp size={15} />, header: "Revenue Growth", description: "Analytics-driven companies grow 2x faster." },
            { icon: <Globe size={15} />, header: "Accessibility", description: "Dashboards available anywhere, on any device." },
        ],
    },
    "iot-development": {
        bannerImage: "/services/iot/1.jpg",
        title: <div className="w-full flex flex-col mt-10 gap-y-3">
            <span className="bg-primary/20 text-primary w-fit h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                IoT Development
            </span>
            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                Connect{" "}
                <span className="text-primary">
                    Devices & Data
                </span>{" "}
                for Smarter Operations
            </h2>
        </div>,
        whatIs: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            IoT (Internet of Things) connects devices and sensors, allowing{" "}
            <span className="text-primary font-semibold">automation, monitoring, and control</span>.
            From smart homes to industrial systems, IoT empowers businesses with{" "}
            <span className="text-primary font-semibold">real-time visibility</span>.
        </p>,
        trends: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            By 2030, over <span className="text-primary font-semibold">25 billion devices</span> will be IoT-connected.
            Companies using IoT report <span className="text-primary font-semibold">30% lower costs</span>
            and <span className="text-primary font-semibold">45% efficiency gains</span> in operations.
        </p>,
        flexImages: ["/services/iot/2.jpg", "/services/iot/3.jpg"],
        importance: [
            { icon: <Wifi size={15} />, header: "Seamless Connectivity", description: "Integrate multiple devices into one ecosystem." },
            { icon: <Cpu size={15} />, header: "Smart Automation", description: "Trigger actions automatically based on data." },
            { icon: <Eye size={15} />, header: "Real-Time Monitoring", description: "Track performance and anomalies instantly." },
            { icon: <Layers size={15} />, header: "Scalable Integration", description: "Easily add more devices as your business grows." },
            { icon: <Shield size={15} />, header: "Enhanced Security", description: "Protect connected systems from cyber risks." },
            { icon: <Zap size={15} />, header: "Competitive Advantage", description: "Adopt IoT to innovate faster than competitors." },
        ],
    },
    "machine-learning": {
        bannerImage: "/services/ml/1.jpg",
        title: <div className="w-full flex flex-col mt-10 gap-y-3">
            <span className="bg-primary/20 text-primary w-fit h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                Machine Learning Development
            </span>
            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                Unlock{" "}
                <span className="text-primary">
                    Predictive Power
                </span>{" "}
                with Machine Learning
            </h2>
        </div>,
        whatIs: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Machine Learning (ML) enables systems to{" "}
            <span className="text-primary font-semibold">learn from data</span>
            and improve over time without manual programming.
            It’s the key to <span className="text-primary font-semibold">personalization, automation, and prediction</span>.
        </p>,
        trends: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Over <span className="text-primary font-semibold">80%</span> of enterprises
            are investing in ML to stay competitive.
            ML adoption leads to <span className="text-primary font-semibold">50% faster decision-making</span>
            and <span className="text-primary font-semibold">25% higher productivity</span>.
        </p>,
        flexImages: ["/services/ml/2.jpg", "/services/ml/3.jpg"],
        importance: [
            { icon: <Brain size={15} />, header: "Smart Predictions", description: "Anticipate trends, risks, and customer behavior." },
            { icon: <Search size={15} />, header: "Pattern Recognition", description: "Detect insights hidden in large datasets." },
            { icon: <Cpu size={15} />, header: "Process Automation", description: "Let algorithms handle repetitive tasks." },
            { icon: <TrendingUp size={15} />, header: "Scalable Growth", description: "Support expansion with adaptive models." },
            { icon: <ShieldCheck size={15} />, header: "Risk Reduction", description: "Catch anomalies before they become costly issues." },
            { icon: <Rocket size={15} />, header: "Innovation Driver", description: "Build smarter solutions that keep your business future-ready." },
        ],
    },
    "mobile-desktop-app": {
        bannerImage: "/services/app/1.jpg",
        title: <div className="w-full flex flex-col mt-10 gap-y-3">
            <span className="bg-primary/20 text-primary w-fit h-fit px-4 py-2 rounded-full text-[15px] backdrop-blur-md">
                Mobile & Desktop Application
            </span>
            <h2 className="text-4xl max-md:text-md font-bold mb-6 text-left text-white dark:text-gray-100">
                Build{" "}
                <span className="text-primary">
                    Seamless Apps
                </span>{" "}
                for Every Platform
            </h2>
        </div>,
        whatIs: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Mobile & Desktop Applications are{" "}
            <span className="text-primary font-semibold">direct touchpoints</span>
            between your business and customers.
            From productivity tools to customer apps, they deliver{" "}
            <span className="text-primary font-semibold">smooth digital experiences</span>.
        </p>,
        trends: <p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
            Users spend <span className="text-primary font-semibold">90% of mobile time</span> inside apps.
            Companies investing in custom apps experience{" "}
            <span className="text-primary font-semibold">3x higher engagement</span>
            and <span className="text-primary font-semibold">40% sales growth</span>.
        </p>,
        flexImages: ["/services/app/2.jpg", "/services/app/3.jpg"],
        importance: [
            { icon: <Smartphone size={15} />, header: "Mobile-First", description: "Reach customers directly on their smartphones." },
            { icon: <Monitor size={15} />, header: "Cross-Platform", description: "Develop apps for both desktop and mobile seamlessly." },
            { icon: <Users size={15} />, header: "User Experience", description: "Deliver fast, intuitive, and engaging interfaces." },
            { icon: <Package size={15} />, header: "Custom Solutions", description: "Tailor apps to your unique business needs." },
            { icon: <TrendingUp size={15} />, header: "Revenue Channel", description: "Apps drive customer engagement and sales growth." },
            { icon: <Zap size={15} />, header: "Future-Ready", description: "Stay relevant as digital adoption accelerates globally." },
        ],
    }

}