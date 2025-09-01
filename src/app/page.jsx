import { Nav, WhatsAppButton } from "@/components/global";
import {
	Portfolio,
	Hero,
	Services,
	FreeConsultation,
	Footer,
	About,
	BusinessStruggle,
} from "@/components/section/";
import CtaBanner from "@/components/ui/cta-banner";
export default function Home() {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<About />
				<BusinessStruggle />
				<CtaBanner />
				<Services />
				<Portfolio />
				<FreeConsultation />
				<Footer />
			</main>
			<WhatsAppButton />
		</>
	);
}
