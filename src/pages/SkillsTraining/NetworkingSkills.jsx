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

const NetworkingSkills = () => {
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
            className='bg-white'
        >
            <section className="relative w-full h-56 md:h-72 flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/assets/imgi_35_1181354.jpg"
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                {/* Text */}
                <h1 className="relative text-3xl md:text-5xl font-bold text-white">
                    Networking Skills
                </h1>
            </section>

            <section className="w-full bg-white py-16">
                <div className="w-full md:max-w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">

                    {/* Left Content */}
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Not Just Certified. Battle-Tested.
                        </h1>


                        <p className="mt-4 text-gray-600 leading-relaxed">
                      Networking is no longer about just configuring routers. It's about building secure, scalable, AI-integrated infrastructure that works under pressure. We train engineers who think like architects, not just operators.
                      
                      
                       </p>

                        <p className="mt-4 font-semibold text-gray-800">
                           Ready to configure. Ready to troubleshoot. Ready to lead.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-2">
                            <button className="bg-lime-400 hover:bg-lime-500 transition text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md flex-1">
                                Join The Networking Track →
                            </button>
                            <button className="bg-lime-400 hover:bg-lime-500 transition text-gray-900 font-semibold px-6 py-3 rounded-md shadow-md flex-1">
                                Hire Networking Engineers →
                            </button>
                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="/assets/imgi_42_6621829.jpg"
                            alt="Engineer"
                            className="rounded-xl shadow-lg w-full max-w-md md:max-w-full"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#2d2d2d] px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Box */}
        <div className="bg-[#2d2d2d] border border-gray-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Where Most Training Falls Short
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-lime-400 mr-2">✔</span>
              Too focused on passing certifications
            </li>
            <li className="flex items-start">
              <span className="text-lime-400 mr-2">✔</span>
              Little exposure to real-world fault scenarios
            </li>
            <li className="flex items-start">
              <span className="text-lime-400 mr-2">✔</span>
              No training in automation, SDN, or AI-driven monitoring tools
            </li>
          </ul>
          <p className="mt-6 text-gray-300 leading-relaxed">
            We train for outcomes i.e. engineers who can adapt to dynamic networks, not just static labs.
          </p>
        </div>

        {/* Right Box */}
        <div className="bg-lime-400 rounded-xl p-8 text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powered By Datacipher
          </h2>
          <p className="mb-6 leading-relaxed">
            Global Skills is backed by Datacipher Education Services, India’s trusted enterprise training partner for over 15 years. Datacipher is an official training partner for global tech leaders like Palo Alto Networks, Juniper Networks, and Check Point. That expertise flows into every Global Skills program.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2">✔</span>
              Vendor-authorized courseware
            </li>
            <li className="flex items-start">
              <span className="mr-2">✔</span>
              Certified instructors with real deployment experience
            </li>
            <li className="flex items-start">
              <span className="mr-2">✔</span>
              Direct alignment with industry certifications and job roles
            </li>
          </ul>
        </div>

      </div>
    </section>

    <section className="w-full px-4 py-12 text-center">
  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
    Engineers Companies Call First
  </h2>
  <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
    Our networking engineers have joined core infra, cloud, and security teams 
    across India’s top enterprises.
  </p>
</section>
















































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
                    
                  Our network engineers support India’s largest banking, telecom, and infrastructure operations.
                       </p>
                        <button className="mt-6 bg-lime-400 hover:bg-lime-500 text-gray-900 font-medium px-6 py-3 rounded-md shadow-md transition">
                            See How We Train Enterprise Teams →
                        </button>
                    </div>
                </div>
            </section>


            {/* half green screen created by me */}
            <section className="relative w-full">
                <div className="bg-lime-300 relative max-w-6xl flex flex-col md:flex-row p-6 mx-auto w-full items-center md:items-start gap-6 rounded-lg">

                    {/* Left Side */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="text-2xl md:text-4xl font-bold text-black leading-snug">
                           Get Network-Ready. Stay Mission-Critical.
                        </h2>

                        <p className='text-black'>
                    Whether you're aiming to join a NOC or lead a migration to SD-WAN, Global Skills gets you there.
                            
                            </p>
                    </div>

                    {/* Right Side Buttons */}
                    <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4 mt-6 md:mt-0">
                        <button className="bg-black text-lime-400 font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-gray-900 transition w-full md:w-auto justify-center md:justify-start">
                           Join The Programming Track
                            <span className="text-xl">→</span>
                        </button>

                        <button className="bg-black text-lime-400 font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-gray-900 transition w-full md:w-auto justify-center md:justify-start">
                            Hire Programmers Now 
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

export default NetworkingSkills