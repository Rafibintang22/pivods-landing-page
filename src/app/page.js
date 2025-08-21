// Home.jsx
import Nav from "@/components/Nav";
import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import FreeConsultation from "@/components/section/FreeConsultation";
import Services from "@/components/section/Services";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/section/Footer";

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <About />
                <Services />
                <FreeConsultation />
                <Footer />
            </main>
            <WhatsAppButton />
        </>
    );
}
