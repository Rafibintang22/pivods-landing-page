import { Nav, WhatsAppButton } from "@/components/global";
import {
	About,
	Hero,
	Services,
	FreeConsultation,
	Footer,
} from "@/components/section/";

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
