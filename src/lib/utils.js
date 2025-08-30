import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const clients = [
    {
        name: "Injourney Airpors",
        alt: "Injourney Airpors - Pivods Client",
        logo: "/clients/injourney.png"
    },
    {
        name: "PUPR",
        alt: "Ministry Of Housing Project - Pivods Client",
        logo: "/clients/pupr.png"
    },
    {
        name: "SRusun",
        alt: "Smart Housing - Pivods Client",
        logo: "/clients/srusun.png"
    },
    {
        name: "BBWS Citarum",
        alt: "BBWS Citarum - Pivods Client",
        logo: "/clients/bbws.png"
    },
    {
        name: "KSIP Agro",
        alt: "KSIP Agro - Pivods Client",
        logo: "/clients/ksip.png"
    },
    {
        name: "TEDx",
        alt: "TEDx - Pivods Client",
        logo: "/clients/tedx.png"
    },
    {
        name: "Multilink Trans",
        alt: "Multilink Trans - Pivods Client",
        logo: "/clients/multilink.png"
    },
    {
        name: "Jardin Cihampelas",
        alt: "Jardin Cihampelas - Pivods Client",
        logo: "/clients/jardin.png"
    },
    {
        name: "HMPSArs",
        alt: "Architecture Student Association - Pivods Client",
        logo: "/clients/hmpsars.png"
    },


]