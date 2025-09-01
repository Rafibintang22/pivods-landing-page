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
				<CtaBanner
					ctaText={"Ready to Break Those Challenges?"}
					smallText={
						<>
							Don’t worry — we offer{" "}
							<span className="font-semibold text-primary">
								free consultation
							</span>
							. Our team will help you address outdated systems,
							inefficiencies, and missed opportunities so your
							business can finally move forward with confidence.
						</>
					}
				/>
				<Services />
				<CtaBanner
					ctaText={"Have You Found the Right Service Yet?"}
					smallText={
						<>
							If you already have, we’re ready to help bring it to
							life. If not, don’t worry — we offer{" "}
							<span className="font-semibold text-primary">
								free consultation
							</span>{" "}
							to uncover your challenges and design the right
							solution. Either way, we’ll make sure your business
							moves forward with clarity and confidence.
						</>
					}
				/>
				<Portfolio />
				<FreeConsultation />
				<Footer />
			</main>
			<WhatsAppButton />
		</>
	);
}
