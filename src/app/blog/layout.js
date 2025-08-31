import { Nav, WhatsAppButton } from "@/components/global";

export default function Bloglayout({ children }) {
    return (
        <>
            <Nav />
            {children}
            <WhatsAppButton />
        </>
    );
}
