import { Nav, WhatsAppButton } from "@/components/global";

export default function Portofoliolayout({ children }) {
    return (
        <>
            <Nav />
            {children}
            <WhatsAppButton />
        </>
    );
}
