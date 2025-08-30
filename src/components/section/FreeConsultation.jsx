"use client";

import { Button } from "@/components/global";
import { BackgroundGradient } from "../ui/background-gradient";
import { layoutStyles } from "@/app/style";

export default function FreeConsultation() {
    return (
        <section id="FreeConsultation" className="mt-24 py-12 lg:py-24">
            <div className={layoutStyles.container}>
                <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="flex gap-8 w-full flex-wrap md:flex-nowrap">
                        {/* Left content */}
                        <div className="w-full lg:w-5/12">
                            <div className="animate-fadeInUp">
                                <h2 className="text-4xl uppercase font-bold mb-6 text-black dark:text-white">
                                    Free Consultation
                                </h2>
                                <div className="text-sm font-semibold mb-6 text-black dark:text-white">
                                    You have come all the way here, why don’t take the first step
                                    and send us an email? It’s free!
                                </div>
                                <div className="text-xs text-gray-700 dark:text-gray-300">
                                    <p>
                                        We offer a free, no pressure, no strings attached — just a
                                        friendly chat to help you understand what you need for your
                                        next step in the digital world. We’ll guide you with care so
                                        your business can grow with ease.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right form */}
                        <div className="w-full lg:w-7/12">
                            <form
                                method="post"
                                id="home-contact-form"
                                className="space-y-6 animate-fadeInUp"
                                aria-label="Contact form"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="InputName"
                                            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        >
                                            Name
                                        </label>
                                        <input
                                            id="InputName"
                                            type="text"
                                            name="name"
                                            maxLength={100}
                                            className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="InputEmail"
                                            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        >
                                            Work Email
                                        </label>
                                        <input
                                            id="InputEmail"
                                            type="email"
                                            name="email"
                                            maxLength={200}
                                            className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="InputPhone"
                                            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            id="InputPhone"
                                            type="tel"
                                            name="phone"
                                            maxLength={20}
                                            className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="InputCompany"
                                            className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        >
                                            Company
                                        </label>
                                        <input
                                            id="InputCompany"
                                            type="text"
                                            name="company"
                                            maxLength={150}
                                            className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="InputMessage"
                                        className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="InputMessage"
                                        name="message"
                                        rows={4}
                                        maxLength={500}
                                        className="w-full rounded-md border border-gray-300/40 dark:border-gray-600/40 bg-white/50 dark:bg-gray-800/50 backdrop-blur-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full md:w-auto px-6 py-2 rounded-md bg-primary text-white text-xs font-semibold shadow-md hover:shadow-lg hover:bg-primary/90 transition duration-300 ease-in-out"
                                >
                                    Send
                                </Button>
                            </form>
                        </div>
                    </div>
                </BackgroundGradient>
            </div>
        </section>
    );
}
