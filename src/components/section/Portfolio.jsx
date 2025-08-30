"use client";

import { ThreeDMarquee } from "../ui/3d-marquee";
import { BackgroundBeamsWithCollision } from "../ui/backgrounds-beams-with-collision";

export default function Portfolio() {
	const images = [
		"https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
		"https://assets.aceternity.com/animated-modal.png",
		"https://assets.aceternity.com/animated-testimonials.webp",
		"https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
		"https://assets.aceternity.com/github-globe.png",
		"https://assets.aceternity.com/glare-card.png",
		"https://assets.aceternity.com/layout-grid.png",
		"https://assets.aceternity.com/flip-text.png",
		"https://assets.aceternity.com/hero-highlight.png",
		"https://assets.aceternity.com/carousel.webp",
		"https://assets.aceternity.com/placeholders-and-vanish-input.png",
		"https://assets.aceternity.com/shooting-stars-and-stars-background.png",
		"https://assets.aceternity.com/signup-form.png",
		"https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
		"https://assets.aceternity.com/spotlight-new.webp",
		"https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
		"https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
		"https://assets.aceternity.com/tabs.png",
		"https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
		"https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
		"https://assets.aceternity.com/glowing-effect.webp",
		"https://assets.aceternity.com/hover-border-gradient.png",
		"https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
		"https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
		"https://assets.aceternity.com/macbook-scroll.png",
		"https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
		"https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
		"https://assets.aceternity.com/multi-step-loader.png",
		"https://assets.aceternity.com/vortex.png",
		"https://assets.aceternity.com/wobble-card.png",
		"https://assets.aceternity.com/world-map.webp",
	];
	return (
		<section
			id="Portfolio"
			className="relative min-h-screen w-full flex flex-col items-center justify-center text-center mt-24"
		>
			<BackgroundBeamsWithCollision>
				<div className="absolute top-0 z-10 max-w-3xl mx-auto">
					<h2 className="text-4xl font-bold mb-6 text-black dark:text-white">
						Portfolio <span className="text-primary">Us</span>
					</h2>
					<p className="text-gray-500 dark:text-gray-400 leading-relaxed">
						Pivods also known as Pioneer Inovasi Digital is a
						software house product. Founded in 2022, we have
						successfully delivered over 150 projects across various
						sectors, helping
					</p>
				</div>
				<ThreeDMarquee images={images} />
			</BackgroundBeamsWithCollision>
		</section>
	);
}
