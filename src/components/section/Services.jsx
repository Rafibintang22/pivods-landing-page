import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { layoutStyles } from "@/app/style";
export default function Services() {
	const contents = [
		{
			title: "Collaborative Editing",
			description:
				"Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
			content: (
				<div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
					Collaborative Editing
				</div>
			),
		},
		{
			title: "Real time changes",
			description:
				"See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
			content: (
				<div className="flex h-full w-full items-center justify-center text-white">
					ejwhkds,n
				</div>
			),
		},
		{
			title: "Version control",
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
			content: (
				<div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
					Version control
				</div>
			),
		},
		{
			title: "Running out of content",
			description:
				"Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
			content: (
				<div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
					Running out of content
				</div>
			),
		},
	];
	return (
		<section id="Services" className="mt-24">
			<div className={layoutStyles.container}>
				<div className="text-center">
					<div className="sticky top-0 right-0 left-0 z-10 max-w-3xl mx-auto text-center w-full">
						<span className="bg-primary/20 text-primary h-fit px-4 py-1 rounded-full text-[15px] backdrop-blur-md">
							Our Services
						</span>
						<h2 className="text-4xl font-bold my-6 text-black dark:text-white">
							We Make Technology
							<span className="text-primary">
								{" "}
								That Drives Growth
							</span>
						</h2>

						<p className="text-gray-500 dark:text-gray-400 leading-relaxed">
							Transform your business with technology that solves
							real challenges and drives measurable growth. From
							smart websites to IoT, AI, and automation — get
							solutions that help you scale faster.
						</p>
					</div>
				</div>
				<StickyScroll content={contents} />
			</div>
		</section>
	);
}
