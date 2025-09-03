"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({
	children,
	direction = "up",
	delay = 0,
}) {
	const { ref, inView } = useInView({
		triggerOnce: false, // biar bisa bolak-balik
		threshold: 0.2, // 20% masuk viewport
	});

	const variants = {
		hidden: {
			opacity: 0,
			x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
			y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
			transition: { duration: 0.6 },
		},
		visible: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: { duration: 0.6, delay },
		},
	};

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={inView ? "visible" : "hidden"} // masuk = muncul, keluar = hilang
		>
			{children}
		</motion.div>
	);
}
