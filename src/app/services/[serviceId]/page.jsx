import { layoutStyles } from "@/app/style";
import React from "react";
import Image from "next/image";
export default function page() {
	return (
		<section className={layoutStyles.container}>
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
						, <span className="text-primary">unlock growth</span>,
						and{" "}
						<span className="text-primary">
							future-proof your business
						</span>
						. Explore how we turn complexity into clarity.
					</p>
				</div>
			</section>
			<div className="wraper">
				<div className="grid grid-cols-12 gap-3">
					<div className="col-span-8 ">
						<div className="w-full h-20 bg-white"></div>
						<h3 className="font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px] ">
							Web Development
						</h3>
						<p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Metus dis posuere amet tincidunt commodo,
							velit. Ipsum, hac nibh fermentum nisi, platea
							condimentum cursus velit dui. Massa volutpat odio
							facilisis purus sit elementum. Non, sed velit dictum
							quam. Id risus pharetra est, at rhoncus, nec
							ullamcorper tincidunt. Id aliquet duis sollicitudin
							diam, elit sit. Et nisi in libero facilisis sed est.
							Elit curabitur amet risus bibendum. Posuere et eget
							orci, tempor enim.
						</p>
						<p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
							Hac nibh fermentum nisi, platea condimentum cursus
							velit dui. Massa volutpat odio facilisis purus sit
							elementum. Non, sed velit dictum quam. Id risus
							pharetra est, at rhoncus, nec ullamcorper tincidunt.
							Id aliquet duis sollicitudin diam, elit sit.
						</p>
						<div className="grid grid-cols-12 gap-3 mt-3">
							<div className="col-span-6 col:col-span-12">
								<div className="w-full h-20 bg-white"></div>
							</div>
							<div className="col-span-6 col:col-span-12">
								<div className="w-full h-20 bg-white"></div>
							</div>
						</div>
						<div className="max-w-[590px] mt-[40px]">
							<h3 className="font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]">
								Our Capabilities
							</h3>
							<p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
								Massa volutpat odio facilisis purus sit
								elementum. Non, sed velit dictum quam. Id risus
								pharetra est, at rhoncus, nec ullamcorper
								tincidunt. Id aliquet duis sollicitudin diam.
							</p>
							<ul>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Non saed velit dictum quam risus pharetra
									esta.
								</li>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Id risus pharetra est, at rhoncus, nec
									ullamcorper tincidunt.
								</li>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Hac nibh fermentum nisi, platea condimentum
									cursus.
								</li>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Massa volutpat odio facilisis purus sit
									elementum.
								</li>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Elit curabitur amet risus bibendum.
								</li>
							</ul>
						</div>
						<h3 className="font-medium  mt-[40px] font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px] ">
							Our approach
						</h3>
						<p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8] mb-[20px]">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Consequat suspendisse aenean tellus augue
							morbi risus. Sit morbi vitae morbi sed urna sed
							purus. Orci facilisi eros sed pellentesque. Risus id
							sed tortor sed scelerisque. Vestibulum elit
							elementum, magna id viverra non, velit. Pretium,
							eros, porttitor fusce auctor vitae id. Phasellus
							scelerisque nibh eleifend vel enim mauris purus.
							Rutrum vel sem adipiscing nisi vulputate molestie
							scelerisque molestie ultrices. Eu, fusce vulputate
							diam interdum morbi ac a.
						</p>
						<div className="max-w-[590px] mt-[40px]">
							<h3 className="font-medium font-base-font text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]">
								Our Work Process
							</h3>
							<ul>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Non saed velit dictum quam risus pharetra
									esta.
								</li>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Id risus pharetra est, at rhoncus, nec
									ullamcorper tincidunt.
								</li>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Hac nibh fermentum nisi, platea condimentum
									cursus.
								</li>
								<li className="py-[10px] text-white pl-[35px] relative before:absolute before:left-0 before:top-1/2 before:transform before:w-[25px] before:h-[25px] before:leading-[25px] before:rounded-[50%] before:text-center before:text-[14px] before:text-[#59C378] before:bg-[#59c3781a] before:-translate-y-1/2 before:font-['themify'] before:content-['\e64c']">
									Massa volutpat odio facilisis purus sit
									elementum.
								</li>
							</ul>
						</div>
						<h3 className="font-medium font-base-font mt-[40px] text-white text-[35px] leading-[130.5%] mb-[20px] md:text-[25px]">
							Related Service
						</h3>
						<div className="grid grid-cols-12 gap-3 items-center">
							<div className="col-span-4 md:col-span-6 sm:col-span-12">
								<div className="p-[20px] lg:py-[20px] lg:px-[10px] border border-[#333]">
									<i className="fi flaticon-vector text-[40px] text-white"></i>
									<h2 className="font-semibold font-base-font text-white text-[22px] mt-[10px]  mb-[12px] md:text-[20px]">
										Graphic Design
									</h2>
									<p className="text-[18px] sm:text-[15px] leading-[26px] font-normal text-[#D8D8D8]">
										Lacus, etiam sed est eu tempus need
										Temer diam congue laoret .
									</p>
								</div>
							</div>
							<div className="col-span-4 md:col-span-6 sm:col-span-12">
								<div className="p-[20px] lg:py-[20px] lg:px-[10px] border border-[#333]">
									<i className="fi flaticon-palette text-[40px] text-white"></i>
									<h2 className="font-semibold font-base-font text-white text-[22px] mt-[10px]  mb-[12px] md:text-[20px]">
										Brand Identity
									</h2>
									<p className="text-[18px] sm:text-[15px] leading-[26px] font-normal text-[#D8D8D8]">
										Lacus, etiam sed est eu tempus need
										Temer diam congue laoret .
									</p>
								</div>
							</div>
							<div className="col-span-4 md:col-span-6 sm:col-span-12">
								<div className="p-[20px] lg:py-[20px] lg:px-[10px] border border-[#333]">
									<i className="fi flaticon-add text-[40px] text-white"></i>
									<h2 className="font-semibold font-base-font text-white text-[22px] mt-[10px]  mb-[12px] md:text-[20px]">
										UI/UX Design
									</h2>
									<p className="text-[18px] sm:text-[15px] leading-[26px] font-normal text-[#D8D8D8]">
										Lacus, etiam sed est eu tempus need
										Temer diam congue laoret .
									</p>
								</div>
							</div>
						</div>
						<div className="p-[30px] rounded-[20px] shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)] mt-[40px]">
							<div className="mb-[30px]">
								<h2 className="font-medium  font-base-font text-white text-[35px] leading-[130.5%] md:text-[25px]">
									Have project in mind? Let's discuss
								</h2>
								<p className="text-[16px] leading-[26px] font-normal text-[#D8D8D8]">
									Get in touch with us to see how we can help
									you with your project
								</p>
							</div>
							<form
								method="post"
								className="contact-validation-active"
								id="contact-form-main"
							>
								<div className="grid grid-cols-12 gap-3">
									<div className="col-span-12 mb-3">
										<select
											name="service"
											className="form-control w-full h-[50px] border-0 pl-[10px] focus:outline-0 focus:shadow-none bg-[#2c2c2c] text-[#D8D8D8]"
										>
											<option
												disabled="disabled"
												selected=""
											>
												Services
											</option>
											<option>Web Design</option>
											<option>Graphics Design</option>
											<option>Marketing</option>
										</select>
									</div>
									<div className="col-span-12">
										<textarea
											className="form-control w-full h-[120px] border-0 pl-[10px] focus:outline-0 focus:shadow-none bg-[#2c2c2c] text-[#D8D8D8]"
											name="note"
											id="note"
											placeholder="Message..."
										></textarea>
									</div>
								</div>
								<div className="mt-[10px]">
									<button
										type="submit"
										className="theme-btn bg-[#59C378] rounded-[6px]"
									>
										Send Massege
									</button>
									<div id="loader">
										<i className="ti-reload"></i>
									</div>
								</div>
								<div className="clearfix error-handling-messages">
									<div id="success">
										Thank you Massage Sended
									</div>
									<div id="error">
										{" "}
										Error occurred while sending email.
										Please try again later.{" "}
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-span-4 ">
						<div className="pl-[45px] md:pl-0 md:mt-[80px] sm:mt-[70px] md:max-w-[400px]">
							<form>
								<div className="relative">
									<button
										type="submit"
										className="text-[20px] text-white  bg-[#59C378] absolute right-[10px] top-[52%] h-[50px]
                                leading-[50px] w-[50px] rounded-[6px] transform -translate-y-1/2"
									>
										<i className="ti-search"></i>
									</button>
								</div>
							</form>
							<div className="mt-[65px]">
								<h3
									className="text-[23px] relative text-white text-left font-base-font capitalize pb-[20px] font-bold
                            before:content-[''] before:bg-[#59C378] before:w-[55px] before:absolute before:h-[4px] before:left-0 before:bottom-0 before:rounded-[10px]
                            after:content-[''] after:bg-[#383636] after:w-[80%] after:absolute after:h-[4px] after:left-[65px] after:bottom-0 after:rounded-[10px]
                            "
								>
									Services
								</h3>
								<ul>
									<li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
										<a
											href="service-single.html"
											className="text-[#D8D8D8] group hover:text-[#59C378] text-[16px] font-semibold block transition-all"
										>
											Web Development{" "}
											<span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-[#59C378] transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
												5
											</span>
										</a>
									</li>
									<li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
										<a
											href="service-single.html"
											className="text-[#D8D8D8] group hover:text-[#59C378] text-[16px] font-semibold block transition-all"
										>
											App Development{" "}
											<span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-[#59C378] transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
												7
											</span>
										</a>
									</li>
									<li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
										<a
											href="service-single.html"
											className="text-[#D8D8D8] group hover:text-[#59C378] text-[16px] font-semibold block transition-all"
										>
											Softwere Development{" "}
											<span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-[#59C378] transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
												3
											</span>
										</a>
									</li>
									<li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
										<a
											href="service-single.html"
											className="text-[#D8D8D8] group hover:text-[#59C378] text-[16px] font-semibold block transition-all"
										>
											Social Media Marketing{" "}
											<span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] absolute right-0 text-center rounded-[50%] text-[18px]">
												8
											</span>
										</a>
									</li>
									<li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
										<a
											href="service-single.html"
											className="text-[#D8D8D8] group hover:text-[#59C378] text-[16px] font-semibold block transition-all"
										>
											Graphic Design{" "}
											<span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-[#59C378] transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
												6
											</span>
										</a>
									</li>
									<li className="text-[16px] mt-[15px] group transition-all pt-[6px] relative">
										<a
											href="service-single.html"
											className="text-[#D8D8D8] group hover:text-[#59C378] text-[16px] font-semibold block transition-all"
										>
											Brand Identity{" "}
											<span className="inline-block w-[30px] h-[30px] leading-[30px] bg-[#2c2c2c] hover:bg-[#59C378] transition-all absolute right-0 text-center rounded-[50%] text-[18px]">
												2
											</span>
										</a>
									</li>
								</ul>
							</div>
							<div className="mt-[65px]">
								<h3
									className="text-[23px] relative text-white text-left font-base-font capitalize pb-[20px] font-bold
                            before:content-[''] before:bg-[#59C378] before:w-[55px] before:absolute before:h-[4px] before:left-0 before:bottom-0 before:rounded-[10px]
                            after:content-[''] after:bg-[#383636] after:w-[80%] after:absolute after:h-[4px] after:left-[65px] after:bottom-0 after:rounded-[10px]
                            "
								>
									Newsletter
								</h3>
								<p className="text-[16px] mt-[25px] leading-[26px] font-normal text-[#D8D8D8] mb-[15px]">
									Join 20,000 Sabscribers!
								</p>
								<form className="form">
									<button
										type="submit"
										className="bg-[#59C378] w-full h-[55px] rounded-[10px] text-center text-white my-[20px]"
									>
										Sign Up
									</button>
									<span className="text-[15px] text-[#D8D8D8]">
										By signing up you agree to our{" "}
										<a href="#">Privecy Policy</a>
									</span>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
