import { Nav, WhatsAppButton } from "@/components/global";
import {
	Portfolio,
	Hero,
	Services,
	FreeConsultation,
	Footer,
	About,
} from "@/components/section/";

export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<About />
				<Services />
				<Portfolio />
				<FreeConsultation />
				<Footer />
			</main>
			<WhatsAppButton />
		</>
	);
}
