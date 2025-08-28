"use client"
import { Check, CheckCircle2 } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

import {
    FaFacebookF,
    FaXTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa6";


const stats = [
    { number: "15+", text: "Years Of Experience" },
    { number: "500+", text: "Enterprise Teams Upskilled" },
    { number: "100+", text: "Companies Served" },
];

const logos = [
    "/assets/imgi_4_c7a9764c-611b-480a-90ac-b570304e09ae.png",
    "/assets/imgi_5_a3046e12-1eca-4986-85da-315d619ba61b.jpg",
    "/assets/imgi_6_a1022377-b5ba-4458-9c21-0104a0fa6e59.png",
    "/assets/imgi_7_bcd9ecf6-99b5-4347-92c8-e1dc46bb7f11.png",
    "/assets/imgi_14_1ce75568-d5e2-43b0-adb7-7abcea052ab6.png",
    "/assets/imgi_15_f854512b-a3be-4889-8e2e-e357815f23a5.png",
    "/assets/imgi_16_a08acffb-85dc-488c-b892-baf0573a9981.png",
    "/assets/imgi_17_b6f76adc-92e8-4e6f-87fb-6e3ff84eae58.png",
    "/assets/imgi_4_c7a9764c-611b-480a-90ac-b570304e09ae.png",
    "/assets/imgi_5_a3046e12-1eca-4986-85da-315d619ba61b.jpg",
    "/assets/imgi_6_a1022377-b5ba-4458-9c21-0104a0fa6e59.png",
    "/assets/imgi_7_bcd9ecf6-99b5-4347-92c8-e1dc46bb7f11.png",
    "/assets/imgi_14_1ce75568-d5e2-43b0-adb7-7abcea052ab6.png",
    "/assets/imgi_15_f854512b-a3be-4889-8e2e-e357815f23a5.png",
    "/assets/imgi_16_a08acffb-85dc-488c-b892-baf0573a9981.png",
    "/assets/imgi_17_b6f76adc-92e8-4e6f-87fb-6e3ff84eae58.png",
];

const HirePaloAltoEngineers = () => {
    const scrollRef = useRef(null);
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        let scrollInterval;

        if (scrollContainer) {
            scrollInterval = setInterval(() => {
                if (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight) {
                    scrollContainer.scrollTop = 0; // reset when reach bottom
                } else {
                    scrollContainer.scrollTop += 1; // smooth scroll
                }
            }, 30); // speed (smaller = faster)
        }

        return () => clearInterval(scrollInterval);
    }, []);
    return (
        <div
            className="bg-none lg:bg-[url('/assets/Green.jpg')] bg-cover bg-center bg-no-repeat"
        >
            <section className="relative w-full h-56 md:h-72 flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/imgi_37_17646.jpg"
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Text */}
                <h1 className="relative text-3xl md:text-5xl font-bold text-white">
                    Hire Palo Alto Engineers
                </h1>
            </section>

          <section className="w-full bg-white py-16">
  <div className="w-full md:max-w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
    
    {/* Left Content */}
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
        The Right AI Hire Doesn’t Just Code. <br /> They Deliver Intelligence.
      </h1>

      <p className="mt-6 font-semibold text-gray-800">
        Certified. Vetted. Ready to Secure.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Hiring for cybersecurity is high-stakes. You need engineers who not only understand
        firewalls but can also operate, troubleshoot, and optimize in mission-critical
        environments. We supply certified Palo Alto engineers trained on real deployments,
        not just courseware.
      </p>

      <p className="mt-4 font-semibold text-gray-800">
        Trained to defend. Certified to deliver. Ready on Day One.
      </p>

      <button className="mt-6 bg-lime-400 hover:bg-lime-500 transition text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md">
        Request Palo Alto Engineers →
      </button>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/assets/imgi_26_global-skills-datacenter-young-girl-in-the-lab.jpg"
        alt="Engineer"
        className="rounded-xl shadow-lg w-full max-w-md md:max-w-full"
      />
    </div>
  </div>
</section>


            <section className="bg-gray-900 text-white py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Why Generic Security Hires Fall Short
                        </h2>

                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="text-lime-400 mt-1" size={22} />
                                Certified on paper, untested in practice
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="text-lime-400 mt-1" size={22} />
                                No hands-on experience with PAN-OS or real rule base management
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="text-lime-400 mt-1" size={22} />
                                Misunderstanding of zero trust architectures and enterprise integrations
                            </li>
                        </ul>

                        <p className="mt-6 text-gray-400">
                            We provide engineers who know how to secure at scale.
                        </p>

                        <button className="mt-8 bg-lime-400 hover:bg-lime-500 transition text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md">
                            Talk To Advisor →
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/assets/imgi_50_Thinking-face-bro.png"
                            alt="Security Illustration"
                            className="w-full max-w-md md:max-w-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="w-full flex items-center justify-center bg-gray-50 py-10 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
                    Palo Alto Talent Built for Real Environments
                </h1>
            </section>

            <div
                className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-cover bg-center bg-no-repeat p-7"
            // replace with your image path
            >
                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 flex flex-col items-center text-center"
                    >
                        {/* Icon */}
                        <div className="bg-lime-300 rounded-full p-2 mb-4">
                            <Check className="text-black w-5 h-5" />
                        </div>

                        {/* Number */}
                        <h3 className="text-3xl font-bold text-gray-900">{item.number}</h3>

                        {/* Text */}
                        <p className="text-gray-700 mt-2">{item.text}</p>
                    </div>
                ))}
            </div>

            <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Auto Scrolling Logos */}
                    <div
                        ref={scrollRef}
                        className="h-[400px] overflow-hidden grid grid-cols-2 gap-4 pr-2"
                    >
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center border rounded-lg p-6 bg-white shadow-sm"
                            >
                                <img src={logo} alt={`client-${index}`} className="max-h-12 object-contain" />
                            </div>
                        ))}
                    </div>

                    {/* Right Content */}
                    <div>
                        <p className="text-gray-500 font-medium mb-2">Our Clients</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                            Trusted by 100+ Employers
                        </h2>
                        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                            Our Palo Alto engineers secure India’s largest telecom, banking, and infra networks.
                        </p>
                        <button className="mt-6 bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium px-6 py-3 rounded-md shadow-md transition">
                            See How We Train Enterprise Teams →
                        </button>
                    </div>
                </div>
            </section>


            <section className="relative w-full bg-lime-300 border-red">
                {/* Decorative Wave Background */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                    <svg
                        className="relative block w-full h-20 md:h-28"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        {/* <path
                                                                fill="#d9f24c"
                                                                fillOpacity="1"
                                                                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,186.7C672,171,768,117,864,117.3C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                                                            ></path> */}
                    </svg>
                </div>

                {/* Content */}
                <div className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
                    {/* Left Side */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Hire Trained Defenders. Not Just Paper Certs.
                        </h2>
                        <div className="h-[2px] w-32 bg-black mt-3 mb-5"></div>
                        <p className="text-black text-lg max-w-md">
                            Deploy certified Palo Alto engineers who know the firewall, the field, and the pressure.
                        </p>
                    </div>

                    {/* Right Side Button */}
                    <div className="flex justify-start md:justify-end">
                        <button className="bg-black text-lime-400 font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-gray-900 transition">
                            Talk To Us
                            <span className="text-xl">→</span>
                        </button>
                    </div>
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

export default HirePaloAltoEngineers