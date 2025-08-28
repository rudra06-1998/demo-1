import React from 'react'
import {
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa6";



const clients = [
    { name: "Ericsson", logo: "/assets/imgi_4_c7a9764c-611b-480a-90ac-b570304e09ae.png" },
    { name: "Aramco", logo: "/assets/imgi_5_a3046e12-1eca-4986-85da-315d619ba61b.jpg" },
    { name: "Tata Play", logo: "/assets/imgi_6_a1022377-b5ba-4458-9c21-0104a0fa6e59.png" },
    { name: "Adani", logo: "/assets/imgi_7_bcd9ecf6-99b5-4347-92c8-e1dc46bb7f11.png" },
    { name: "Deloitte", logo: "/assets/imgi_14_1ce75568-d5e2-43b0-adb7-7abcea052ab6.png" },
    { name: "CaixaBank", logo: "/assets/imgi_15_f854512b-a3be-4889-8e2e-e357815f23a5.png" },
    { name: "Inflow", logo: "/assets/imgi_16_a08acffb-85dc-488c-b892-baf0573a9981.png" },
    { name: "Genpact", logo: "/assets/imgi_17_b6f76adc-92e8-4e6f-87fb-6e3ff84eae58.png" },
];

const ContactUs = () => {
    return (
        <div>

            <section className="relative w-full h-56 md:h-72 flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/imgi_33_httpselements.envato.comfinding-solution-together-NS43RM6-1.jpg" // <-- replace with your image path
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Text */}
                <h1 className="relative text-3xl md:text-5xl font-bold text-white">
                    Contact Us
                </h1>
            </section>


            <section className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <p className="text-gray-500 font-semibold mb-3 flex items-center gap-2">
                            <span className="w-12 h-[1px] bg-gray-400"></span> Contact Us
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            Let’s Build A Talent Solution That Fits You.
                        </h2>
                        <p className="mt-6 text-gray-700 font-semibold">
                            Enterprise talent needs aren’t standard. Neither are ours.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We’d love to understand your requirements. Share a few quick details
                            below, and our team will get in touch to explore how Global Skills
                            can help meet your talent goals.
                        </p>
                        <p className="mt-4 text-gray-500">
                            No spam. No pressure. Just a conversation.
                        </p>
                    </div>

                    {/* Right Form */}
                    <div className="bg-black text-white p-8 rounded-lg shadow-lg">
                        <form className="space-y-5">
                            {/* Full + Company Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold mb-1">
                                        Full Name <span className="text-lime-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold mb-1">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Email <span className="text-lime-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />
                            </div>

                            {/* Course */}
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Course
                                </label>
                                <input
                                    type="text"
                                    placeholder="Course"
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold mb-1">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-lime-400 text-black font-semibold py-3 rounded-md hover:bg-lime-500 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>



            <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side - Text */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-gray-400"></div>
                            <span className="text-gray-500 font-semibold">Our Clients</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
                            Trusted By India’s Top Enterprises Through Our Training Division.
                        </h2>
                    </div>

                    {/* Right Side - Logos Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-12 object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative w-full bg-lime-400 overflow-hidden">
                {/* Background Wave */}
                <div className="absolute bottom-0 left-0 w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        className="w-full h-24 md:h-32"
                        preserveAspectRatio="none"
                    >

                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-20 md:py-28">
                    <h2 className="text-2xl md:text-4xl font-extrabold text-black">
                        Need To Reach Us Directly?
                    </h2>
                    <p className="mt-4 text-base md:text-lg text-black">
                        We support both enterprise partnerships and individual placement journeys.
                    </p>
                </div>
            </section>

            <footer className="bg-[#2b2b2b] text-gray-200 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    {/* Column 1: Logo + Text */}
                    <div>
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <img src="/assets/whitelogo.png" alt="img" />
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-gray-300 max-w-xs">
                            Global Skills was founded to close the gap between certification and
                            contribution. Too often, engineers graduate with credentials but
                            lack real-world readiness.
                        </p>
                        <button className="mt-6 bg-lime-400 text-black font-semibold px-5 py-3 rounded-md flex items-center gap-2 hover:bg-lime-500 transition">
                            Start Your Tech Career →
                        </button>
                    </div>

                    {/* Column 2: Employers */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Employers</h3>
                        <div className="h-[2px] w-14 bg-lime-400 mb-4"></div>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Hire Certified Engineers</li>
                            <li>Hire AI Engineers</li>
                            <li>Hire Palo Alto Engineers</li>
                            <li>Hire Juniper Engineers</li>
                            <li>Hire Programmers</li>
                            <li>Hire Semiconductor Chip Design Engineers</li>
                        </ul>
                    </div>

                    {/* Column 3: Skills Training */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">
                            Skills Training
                        </h3>
                        <div className="h-[2px] w-14 bg-lime-400 mb-4"></div>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li>Artificial Intelligence Skills</li>
                            <li>Software Programming</li>
                            <li>Networking Skills</li>
                            <li>Cybersecurity Skills</li>
                            <li>Semiconductor Chip Design Skills</li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="bg-lime-400 text-black p-6 rounded-md">
                        <h3 className="text-lg font-bold mb-3">Contact Info</h3>
                        <div className="h-[2px] w-14 bg-black mb-4"></div>
                        <ul className="space-y-3 text-sm">
                            <li>📧 hello@globalskills.net</li>
                            <li>📍 The Platina, Gachibowli, Hyderabad, INDIA</li>
                            <li>📍 3800 N Lamar Blvd, Austin, Texas, USA</li>
                            <li>📞 1800-8892-877</li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    Copyright 2025. All Rights Reserved.
                </div>
            </footer>
        </div>
    )
}

export default ContactUs