"use client";
import { cn } from "@/lib/utils";
import { Nav, WhatsAppButton } from "@/components/global";
import Image from "next/image";
import {
    TextRevealCard,
    TextRevealCardDescription,
    TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/section/Footer";

export default function About() {
    const numberHistory = [
        { num: "10+", desc: "Profesional Years" },
        { num: "50+", desc: "Happy Clients" },
        { num: "100+", desc: "Projects" },
        { num: "100+", desc: "Projects" },
    ];

    const data = [
        {
            title: "Step 1",
            content: (
                <div>
                    <p className="mb-4 text-xs font-bold uppercase text-neutral-800 md:text-sm dark:text-neutral-200">
                        Understand Your Needs
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        We start by listening to your goals and challenges, then turn them into
                        clear requirements.
                    </p>
                </div>
            ),
        },
        {
            title: "Step 2",
            content: (
                <div>
                    <p className="mb-4 text-xs font-bold uppercase text-neutral-800 md:text-sm dark:text-neutral-200">
                        Design & Build Together
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        We create the blueprint and develop your solution step by step, keeping you
                        involved throughout.
                    </p>
                </div>
            ),
        },
        {
            title: "Step 3",
            content: (
                <div>
                    <p className="mb-4 text-xs font-bold uppercase text-neutral-800 md:text-sm dark:text-neutral-200">
                        Launch & Support
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        We deploy your product and stay with you to ensure smooth operation and
                        continuous improvement.
                    </p>
                </div>
            ),
        },
    ];

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

					<div className="container flex flex-col items-center">
						<h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-900 dark:text-gray-100">
							About
						</h1>
						<p className="font-semibold text-center">
							Let’s deepen our introduction — would you like to
							start?
						</p>
					</div>
				</section>
				<section className="bg-background min-h-max w-full relative">
					<div className="relative py-10 md:py-50 w-full">
						{/* Circle background */}
						<div className="circle absolute top-[10vh] left-[2vw] w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] bg-primary/40 rounded-full"></div>
						<div className="circle absolute top-[25vh] left-[50vw] w-[40vw] h-[40vw] lg:top-[45vh] lg:left-[10vw] md:top-[45vh] md:left-[15vw] sm:w-[30vw] sm:h-[30vw] md:w-[25vw] md:h-[25vw] rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]"></div>

						{/* Content */}
						<div className="flex flex-wrap md:flex-nowrap items-start justify-center gap-6 md:gap-12 mx-auto">
							<div className="w-full h-[18rem] sm:h-[22rem] md:h-[25rem] bg-white/5 backdrop-blur-3xl rounded-md border border-primary shadow"></div>
							<div className="w-full text-center md:text-left relative">
								<div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-primary/30 blur-[200px] z-10"></div>

								<div className="head-title text-md text-start font-bold text-white mb-4">
									We craft realities from the sparks of your
									imagination
								</div>

								<p className="mb-3 text-gray-300 text-start">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Voluptas omnis consectetur
									quibusdam error molestiae. Dolorum, maxime
									quis reprehenderit ipsum ratione voluptate
									placeat quibusdam atque. Et aut facilis
									natus vitae! Vel.
								</p>
								<p className="mb-3 text-gray-300 text-start">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Voluptas omnis consectetur
									quibusdam error molestiae. Dolorum, maxime
									quis reprehenderit ipsum ratione voluptate
									placeat quibusdam atque. Et aut facilis
									natus vitae! Vel. lore
								</p>
								<p className="mb-3 text-gray-300 text-start">
									Lorem ipsum dolor sit amet, consectetur
									adipisicing elit. Voluptas omnis consectetur
									quibusdam error molestiae. Dolorum, maxime
									quis reprehenderit ipsum ratione voluptate
									placeat quibusdam atque. Et aut facilis
									natus vitae! Vel.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full bg-primary/10 block">
					<div className="py-12">
						<div className="container grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
							{numberHistory.map((child, i) => (
								<div key={i} className="px-4">
									<div className="number text-md md:text-lg font-bold">
										{child.num}
									</div>
									<div className="w-max mx-auto desc text-xs md:text-sm font-semibold text-primary">
										{child.desc}
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
				<section className="bg-background mb-24">
					<div className="container">
						<Timeline
							data={data}
							title={
								"Our Steps to Bring Your Vision Into Reality"
							}
							description={
								"We know trusting a software team is a big decision. That’s why we created a simple, proven path that shows exactly how we’ll work with you — from idea to launch — so you can move forward with confidence."
							}
						/>
					</div>
				</section>
				<Footer />
			</main>
			<WhatsAppButton />
		</>
	);
}
