"use client";
export default function ScrollDownIcon() {
    return (
        <div className="flex flex-col items-center justify-center fadePulse">
            {/* Mouse Logo */}
            <div className="absolute bottom-10 w-6 h-10 border border-gray-400 dark:border-gray-600 rounded-full flex justify-center items-start">
                <div className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-moveUpDown"></div>
            </div>

            {/* Text */}
            <p className="absolute bottom-5 mt-3 text-gray-500 dark:text-gray-400 text-xs animate-moveUpDown">
                Scroll Down
            </p>

            {/* Custom Animation */}
            <style jsx>{`
                @keyframes moveUpDown {
                    0%,
                    100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(6px);
                    }
                }
                .animate-moveUpDown {
                    animation: moveUpDown 1.5s infinite ease-in-out;
                }

                @keyframes fadePulse {
                    0%,
                    100% {
                        opacity: 0.4;
                    }
                    50% {
                        opacity: 1;
                    }
                }
                .fadePulse {
                    animation: fadePulse 2s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
}
