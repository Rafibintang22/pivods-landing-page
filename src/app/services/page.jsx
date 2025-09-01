import { Nav, WhatsAppButton } from "@/components/global";
import { Services, Footer } from "@/components/section/";
import CtaBanner from "@/components/ui/cta-banner";
import Image from "next/image";
import { layoutStyles } from "../style";
import { CardDemo, Skeleton } from "@/components/ui/demo";
export default function PivodsServices() {
	return (
		<>
			<Nav />
			<main>
				<section className="h-[35vh] lg:h-[50vh] w-full flex justify-center items-center">
					<Image
						src="/Wave-line.png"
						alt="background-wave"
						fill
						className="object-cover -z-10 opacity-20"
						priority
					/>

					<div
						className={`${layoutStyles.container} flex flex-col items-center`}
					>
						<h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-gray-100">
							Services
						</h1>
						<p className="font-semibold text-center max-w-2xl max-lg:w-full">
							Every challenge deserves the right solution. Our
							services are designed to{" "}
							<span className="text-primary">
								streamline operations
							</span>
							,{" "}
							<span className="text-primary">unlock growth</span>,
							and{" "}
							<span className="text-primary">
								future-proof your business
							</span>
							. Explore how we turn complexity into clarity.
						</p>
					</div>
				</section>
				<Skeleton />
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
				<Footer />
			</main>
			<WhatsAppButton />
		</>
	);
}
