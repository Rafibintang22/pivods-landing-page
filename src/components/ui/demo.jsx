"use client";
import { animate, motion } from "motion/react";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faReact } from "@fortawesome/free-brands-svg-icons";
export function CardDemo() {
	return (
		<CardSkeletonContainer>
			<Skeleton />
		</CardSkeletonContainer>
	);
}

export const Skeleton = () => {
	const scale = [1, 1.1, 1];
	const transform = [
		"translateY(0px)",
		"translateY(-4px)",
		"translateY(0px)",
	];
	const sequence = [
		[
			".circle-1",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-2",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-3",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-4",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
		[
			".circle-5",
			{
				scale,
				transform,
			},
			{ duration: 0.8 },
		],
	];

	useEffect(() => {
		animate(sequence, {
			// @ts-ignore
			repeat: Infinity,
			repeatDelay: 1,
		});
	}, []);
	return (
		<div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
			<div className="h-40 w-px absolute bottom-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
				<div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
					<Sparkles />
				</div>
			</div>
			<div className="flex flex-row shrink-0 justify-around items-center gap-2">
				<Container className="h-8 w-8 circle-1 relative">
					<FontAwesomeIcon
						icon={faReact}
						className="text-[15px] text-primary"
					/>
				</Container>
				<Container className="h-12 w-12 circle-2">
					<FontAwesomeIcon
						icon={faJava}
						className="text-[20px] text-primary"
					/>
				</Container>
				<Container className="circle-3">
					<PythonLogo className="h-8 w-8 dark:text-white" />
				</Container>
				<Container className="h-12 w-12 circle-4">
					<GoLogo className="h-6 w-6 " />
				</Container>
				<Container className="h-8 w-8 circle-5">
					<TypeScriptLogo className="h-4 w-4 " />
				</Container>
				<Container className="h-8 w-8 circle-1">
					<PhpLogo className="h-4 w-4 " />
				</Container>
				<Container className="h-12 w-12 circle-2">
					<CppLogo className="h-6 w-6 dark:text-white" />
				</Container>
			</div>
			<div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
				<div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
					<Sparkles />
				</div>
			</div>
		</div>
	);
};
const Sparkles = () => {
	const randomMove = () => Math.random() * 2 - 1;
	const randomOpacity = () => Math.random();
	const random = () => Math.random();
	return (
		<div className="absolute inset-0">
			{[...Array(12)].map((_, i) => (
				<motion.span
					key={`star-${i}`}
					animate={{
						top: `calc(${random() * 100}% + ${randomMove()}px)`,
						left: `calc(${random() * 100}% + ${randomMove()}px)`,
						opacity: randomOpacity(),
						scale: [1, 1.2, 0],
					}}
					transition={{
						duration: random() * 2 + 4,
						repeat: Infinity,
						ease: "linear",
					}}
					style={{
						position: "absolute",
						top: `${random() * 100}%`,
						left: `${random() * 100}%`,
						width: `2px`,
						height: `2px`,
						borderRadius: "50%",
						zIndex: 1,
					}}
					className="inline-block bg-black dark:bg-white"
				></motion.span>
			))}
		</div>
	);
};

export const Card = ({ className, children }) => {
	return (
		<div
			className={cn(
				"max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
				className
			)}
		>
			{children}
		</div>
	);
};

export const CardTitle = ({ children, className }) => {
	return (
		<h3
			className={cn(
				"text-lg font-semibold text-gray-800 dark:text-white py-2",
				className
			)}
		>
			{children}
		</h3>
	);
};

export const CardDescription = ({ children, className }) => {
	return (
		<p
			className={cn(
				"text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
				className
			)}
		>
			{children}
		</p>
	);
};

export const CardSkeletonContainer = ({
	className,
	children,
	showGradient = true,
}) => {
	return (
		<div
			className={cn(
				"h-[15rem] md:h-[20rem] rounded-xl z-40",
				className,
				showGradient &&
					"bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
			)}
		>
			{children}
		</div>
	);
};

const Container = ({ className, children }) => {
	return (
		<div
			className={cn(
				`h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
				className
			)}
		>
			{children}
		</div>
	);
};

// JavaScript
export const JavaScriptLogo = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="#f7df1e" d="M0 0h128v128H0z" />
			<path d="M116.2 96.1c-1.3-8-6.6-14.7-22-21.1-5.4-2.5-11.3-4.3-13.1-8.4-.6-2.1-.7-3.4-.3-4.7 1-4.3 6-5.6 9.9-4.4 2.5.9 4.8 3.1 6.2 6.6 6.6-4.3 6.6-4.3 11.2-7.3-1.7-2.7-2.6-3.9-3.8-5.1-4.1-4.6-9.5-7-18.2-6.8l-4.5.6c-4.3 1.1-8.4 3.3-10.8 6.4-7.2 8.2-5.1 22.6 3.6 28.4 8.6 6.4 21.2 7.9 22.8 14.1 1.6 7.8-5.7 10.3-13 9.4-5.4-1.1-8.4-3.7-11.6-8.5l-12 6.9c1.4 3.1 2.9 4.6 5.3 7.4 11.3 11.5 39.7 11 44.8-6.5.2-.7 1.6-4.6.5-10.8zM69 52.9H56.4v32.1c0 13.7-15.6 14.2-20.9 10.5-2.6-1.3-3.9-2.7-5.5-5l-12 7c1.4 3.1 3.1 4.7 5.6 7.1 12.1 12.1 42.6 11.5 47.5-6.9.4-1.6.7-3.5.7-7.1V52.9z" />
		</svg>
	);
};

// Python
export const PythonLogo = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<linearGradient id="python-a" gradientTransform="rotate(90)">
				<stop offset="0" stopColor="#387eb8" />
				<stop offset="1" stopColor="#366994" />
			</linearGradient>
			<linearGradient id="python-b" gradientTransform="rotate(90)">
				<stop offset="0" stopColor="#ffe052" />
				<stop offset="1" stopColor="#ffc331" />
			</linearGradient>
			<path
				fill="url(#python-a)"
				d="M63.6.3c-4.6.02-9 .42-12.8 1.1-11.4 2-13.5 6.2-13.5 13.9v10.2h27v3.4H29.3c-7.7 0-14.5 4.6-16.6 13.4-2.5 10.3-2.6 16.8 0 27.5 1.9 7.7 6.3 13.4 14 13.4h9.1v-12.2c0-8.8 7.6-16.7 16.6-16.7h27.7c7.4 0 13.5-6.1 13.5-13.5V15.3c0-7.2-6.1-12.6-13.5-13.9C76 .6 68.2.2 63.6.3zM47.4 8.6c2.8 0 5.1 2.3 5.1 5.1 0 2.9-2.3 5.1-5.1 5.1-2.8 0-5.1-2.2-5.1-5.1 0-2.8 2.3-5.1 5.1-5.1z"
			/>
			<path
				fill="url(#python-b)"
				d="M93.4 28.9v11.7c0 9.2-7.8 17-16.6 17H49.1c-7.4 0-13.5 6.1-13.5 13.5v25.5c0 7.2 6.2 11.4 13.5 13.5 8.5 2.5 16.7 2.9 27.7 0 6.8-2 13.5-6.1 13.5-13.5v-10.1h-27v-3.4h40.5c7.7 0 10.6-5.3 13.5-13.4 2.8-8.3 2.7-16.3 0-27.5-1.9-7.7-5.8-13.4-13.5-13.4h-9.4zM80.8 102c2.8 0 5.1 2.2 5.1 5.1 0 2.8-2.3 5.1-5.1 5.1-2.9 0-5.1-2.3-5.1-5.1 0-2.9 2.2-5.1 5.1-5.1z"
			/>
		</svg>
	);
};

// Java
export const JavaLogo = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="#007396"
				d="M47.6 98.9s-5.2 3 3.6 4c10.5 1.2 15.9 1 27.5-1.2 0 0 3.1 1.9 7.5 3.5-26.8 11.5-60.7-.7-38.6-6.3zM43.8 83.5s-5.8 4.3 3.1 5.2c11.6 1.2 20.7 1.3 36.5-1.8 0 0 2.1 2.1 5.4 3.3-31.5 9.2-66.5.7-44.9-6.7zM69.2 61.2c6.6 7.6-1.7 14.4-1.7 14.4s16.8-8.6 9-19.4c-7.1-9.9-12.5-14.8 17-31.6 0 .1-46.4 11.6-24.3 36.6zM96.6 108.5s3.8 3.1-4.2 5.5c-15.3 4.6-63.8 6-77.2.2-4.8-2.1 4.2-5 7-5.6 2.9-.6 4.5-.5 4.5-.5-5.1-3.6-33.1 7.1-14.2 10.2 51.5 8.4 94-3.8 84.1-10.3zM50.5 68.1s-23.5 5.6-8.3 7.6c6.4.9 19.1.7 31.1-.3 9.7-.8 19.4-2.5 19.4-2.5s-3.4 1.5-5.8 3.2c-23.3 6.1-68.4 3.3-55.5-2.9 11-5.3 19.1-5.1 19.1-5.1zM91.7 92.2c23.7-12.3 12.7-24.1 5.1-22.5-1.9.4-2.7.8-2.7.8s.7-1.1 2-1.6c14.7-5.2 26.1 15.2-4.8 23.3 0 0 .4-.4.4-.8zM61.6 0S72.9 12.9 53.4 32c-15.8 15.7-3.6 24.6 0 34.8-9.2-8.3-16-15.6-11.5-22.4C49.3 34.1 67.8 27.3 61.6 0z"
			/>
		</svg>
	);
};

// Go
export const GoLogo = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="#00ADD8"
				d="M11.6 46.7l-2.8 4.2h8.6l2.8-4.2H11.6zm18.1 0l-2.8 4.2h8.6l2.8-4.2H29.7zM0 55.5l-2.8 4.2h24.4l2.8-4.2H0zm27.7 0l-2.8 4.2h41.2l2.8-4.2H27.7zm19.1-17c-.9 2.4-2.4 4.6-4.6 6.3-2.2 1.7-5.3 3-9.5 3.6l-1.7-3c3.2-.5 5.4-1.3 6.8-2.5 1.4-1.1 2.4-2.6 3-4.4h-8.5l1.4-3h11.5c-.1.7-.3 1.6-.6 2.3zM86.6 47c-2.5-1.5-6.2-2.4-11-2.6l-.8 3.1c3.3.2 5.9.8 7.8 1.9 2 .9 3.6 2.2 4.9 3.9h-12l1.4-3h-7.7c.3-1.2.6-2.2.9-3.1h17.2c-.1 0-.3 0-.3-.2zM71 54.3c-.5 1.5-1.4 2.8-2.5 4-1.2 1.1-2.6 2-4.4 2.6l-1.7-3c1.4-.4 2.6-1 3.4-1.8.9-.7 1.4-1.6 1.8-2.7h-6.6l1.4-3h9.3c-.3.9-.6 1.9-.9 2.9z"
			/>
		</svg>
	);
};

// TypeScript
export const TypeScriptLogo = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path fill="#3178c6" d="M0 0h128v128H0z" />
			<path
				fill="#fff"
				d="M42.9 63.6v7.1H59v45.5h8.3V70.7h16.2v-7.1H42.9zm46.8 6.6c-4.2 1-7.4 3-9.6 6.2-2.2 3.2-3.2 7.1-3 11.6h8.2c0-3.4.9-6 2.6-7.9 1.7-1.8 4.1-2.7 7.1-2.7 2.8 0 5 .9 6.6 2.6 1.6 1.7 2.5 4.2 2.5 7.3 0 2.2-.5 4.1-1.6 5.7s-3.4 3.2-6.9 4.9l-4.2 2c-3.6 1.7-6.2 3.7-7.9 6-1.7 2.3-2.5 5.2-2.5 8.8 0 2.7.6 5 1.8 7 .2.4.5.8.7 1.1h27.3v-7.1h-17c0-1.6.5-2.9 1.4-3.9.9-1 2.6-2 5-3.1 4.4-2.1 7.4-4.4 9.1-6.8 1.7-2.4 2.5-5.4 2.5-9 0-5-1.5-9-4.5-12-3-3-7.2-4.5-12.6-4.5-2.1.1-4.3.4-6.5 1z"
			/>
		</svg>
	);
};

// PHP
export const PhpLogo = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="#8993be"
				d="M64 0C28.7 0 0 14.3 0 32s28.7 32 64 32 64-14.3 64-32S99.3 0 64 0z"
			/>
			<path
				fill="#fff"
				d="M36.6 15.9h12.7c6.6 0 11.3 3.3 11.3 9.7 0 6.7-4.6 10.1-11.1 10.1h-5.6v8.3H36.6V15.9zm12.3 13.3c2.3 0 3.6-1.2 3.6-3.4 0-2.3-1.3-3.3-3.6-3.3h-4.9v6.7h4.9zM63.8 15.9h7.9l-2.4 12.3h4.8c6.6 0 11.3 3.3 11.3 9.7 0 6.7-4.6 10.1-11.1 10.1h-10.5L63.8 15.9zm8.2 20.1c2.3 0 3.6-1.2 3.6-3.4 0-2.3-1.3-3.3-3.6-3.3h-4.6l-1.3 6.7h5.9zM97.3 15.9h12.7c6.6 0 11.3 3.3 11.3 9.7 0 6.7-4.6 10.1-11.1 10.1h-5.6v8.3H97.3V15.9zm12.3 13.3c2.3 0 3.6-1.2 3.6-3.4 0-2.3-1.3-3.3-3.6-3.3h-4.9v6.7h4.9z"
			/>
		</svg>
	);
};

// C++
export const CppLogo = ({ className }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 128 128"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill="#00599C"
				d="M63.8 0L5.7 32v64l58.1 32 58.1-32V32L63.8 0zm0 11.7l47.1 26v52.6l-47.1 26-47.1-26V37.7l47.1-26z"
			/>
			<path
				fill="#fff"
				d="M63.8 23.7c-22.2 0-40.1 18-40.1 40.3s18 40.3 40.1 40.3c22.2 0 40.1-18 40.1-40.3s-17.9-40.3-40.1-40.3zm0 72.6c-17.8 0-32.3-14.6-32.3-32.6 0-18 14.5-32.6 32.3-32.6s32.3 14.6 32.3 32.6c0 18-14.5 32.6-32.3 32.6z"
			/>
			<path
				fill="#fff"
				d="M76.6 52.5h-6.1v6h-6v-6h-6.1v18h6.1v-6h6v6h6.1zM94.8 52.5h-6.1v6h-6v-6h-6.1v18h6.1v-6h6v6h6.1z"
			/>
		</svg>
	);
};
