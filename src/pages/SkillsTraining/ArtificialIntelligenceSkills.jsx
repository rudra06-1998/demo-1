"use client";
import { Check, CheckCircle2 } from "lucide-react";
import React, { useEffect, useRef } from "react";

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

const ArtificialIntelligenceSkills = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    if (scrollContainer) {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0; // reset to start
        } else {
          scrollContainer.scrollLeft += 1; // smooth horizontal scroll
        }
      }, 20); // speed
    }

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <div className="bg-white">
      <section className="relative w-full h-56 md:h-78 flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/imgi_36_8386440.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text */}
        <h1 className="relative text-3xl md:text-6xl font-bold text-white">
          Artificial Intelligence Skills
        </h1>
      </section>

      <section className="w-full bg-white py-16">
        <div className="w-full md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
              The AI Talent Gap Is Real. <br /> We Close It.
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Companies want AI engineers. But most training programs stop at
              theory. At Global Skills, we don’t. We take learners beyond
              YouTube tutorials and into real-world AI readiness. From
              foundational ML to deploying production-grade models, we train
              talent that delivers.{" "}
            </p>

            <p className="mt-4 font-semibold text-gray-800">
              Ready-to-deploy AI engineers. No guesswork.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <button className="bg-[#d5f952] hover:bg-[#d5f952] transition text-[#333333] font-semibold px-6 py-3 rounded-md shadow-md flex-1">
                Get AI Training Details →
              </button>
              <button className="bg-[#d5f952] hover:bg-[#d5f952] transition text-[#333333] font-semibold px-6 py-3 rounded-md shadow-md flex-1">
                Talk To A Program Advisor →
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/imgi_2_t1paibmtjim-1024x575.jpg"
              alt="Engineer"
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#333333] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="bg-[#333333] p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Most AI Training Fails
            </h2>
            <p className="mt-6 mb-6 text-gray-400">
              Most AI programs focus on syntax, not systems. They teach you how
              to build a model but not how to make it matter in business.
            </p>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-[#d5f952] mt-1" size={22} />
                Engineers can code, but can’t interpret results.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-[#d5f952] mt-1" size={22} />
                Engineers can code, but can’t interpret results.
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-[#d5f952] mt-1" size={22} />
                Models work in notebooks, but break in production.
              </li>
            </ul>

            <button className="mt-8 bg-[#d5f952] hover:bg-[#d5f952] transition text-[#333333] font-semibold px-6 py-3 rounded-md shadow-md">
              Talk To A Program Advisor →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/imgi_50_Shrug-bro.png"
              alt="Security Illustration"
              className="w-full max-w-md md:max-w-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-100 to-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold leading-snug text-[#333333]">
              We Fix That. Our AI Curriculum Is Outcome-Driven And
              Production-Aligned. We Focus On Core Fundamentals, Contextual
              Learning, And Deployment Readiness.
            </h2>

            {/* Highlight Badge */}
            <div className="mt-8 inline-block bg-lime-200 text-black px-6 py-4 rounded-md shadow-md text-sm md:text-base font-semibold">
              <span className="flex items-center gap-2">
                <span className="text-xl">🏅</span>
                TRUSTED BY 100+ COMPANIES ACROSS INDIA’S MOST CRITICAL SECTORS.
              </span>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-lime-200 rounded-full">
                🤝
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333]">
                  Hands-On From Day 1
                </h3>
                <p className="text-gray-600 text-sm">
                  No rote learning. Just labs, simulations, and projects.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-lime-200 rounded-full">
                🧠
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333]">
                  Built With Enterprise In Mind
                </h3>
                <p className="text-gray-600 text-sm">
                  Everything we teach maps to real-world AI use cases across
                  BFSI, telecom, and SaaS.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-lime-200 rounded-full">
                🎯
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#333333]">
                  Placement-Ready
                </h3>
                <p className="text-gray-600 text-sm">
                  We don’t just train. We match talent to companies who need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Auto Scrolling Logos */}
          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden whitespace-nowrap w-full py-4"
          >
            <div className="grid grid-rows-3 grid-flow-col gap-6">
              {logos.map((src, idx) => (
                <div
                  key={idx}
                  className="w-40 h-40 flex items-center justify-center border rounded-lg shadow-sm bg-white"
                >
                  <img
                    src={src}
                    alt={`logo-${idx}`}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-gray-500 font-medium mb-2">Our Clients</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-snug">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Backbone Our training division, Datacipher Education Services has
              delivered enterprise-grade programs to over 500 teams in banking,
              telecom, infrastructure, and IT services. That same trusted engine
              now powers Global Skills.Our programmers are trusted by India’s
              leading product and service companies.
            </p>
            <button className="mt-6 bg-[#d5f952] hover:bg-[#d5f952] text-[#333333] font-medium px-6 py-3 rounded-md shadow-md transition">
              See How We Train Enterprise Teams →
            </button>
          </div>
        </div>
      </section>

      {/* half green screen created by me */}
      <section className="relative w-full">
        <div className="bg-[#d5f952] relative max-w-6xl flex flex-col md:flex-row p-6 mx-auto w-full items-center md:items-start gap-6 rounded-lg">
          {/* Left Side */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-snug">
              Whether you're an engineer looking to break into AI or an employer
              who needs AI talent that’s ready to deploy, Global Skills gets you
              there.
            </h2>
          </div>

          {/* Right Side Buttons */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4 mt-6 md:mt-0">
            <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-[#333333] transition w-full md:w-auto justify-center md:justify-start">
              Start Your AI Journey
              <span className="text-xl">→</span>
            </button>

            <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-[#333333] transition w-full md:w-auto justify-center md:justify-start">
              Start Your AI Journey
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
              Global Skills was founded to close the gap between certification
              and contribution. Too often, engineers graduate with credentials
              but lack real-world readiness.
            </p>
            <button className="mt-6 bg-[#d5f952] text-black font-semibold px-5 py-3 rounded-md flex items-center gap-2 hover:bg-[#d5f952] transition">
              Start Your Tech Career →
            </button>
          </div>

          {/* Column 2: Employers */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Employers</h3>
            <div className="h-[2px] w-14 bg-[#d5f952] mb-4"></div>
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
            <div className="h-[2px] w-14 bg-[#d5f952] mb-4"></div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Artificial Intelligence Skills</li>
              <li>Software Programming</li>
              <li>Networking Skills</li>
              <li>Cybersecurity Skills</li>
              <li>Semiconductor Chip Design Skills</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="bg-[#d5f952] text-black p-6 rounded-md">
            <h3 className="text-lg font-bold mb-3">Contact Info</h3>
            <div className="h-[2px] w-14 bg-black mb-4"></div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <img
                  src="/assets/file/download (4).svg"
                  className="w-4 h-4"
                  alt="phone"
                />{" "}
                hello@globalskills.net
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/assets/file/download (3).svg"
                  className="w-4 h-4"
                  alt="phone"
                />{" "}
                The Platina, Gachibowli, Hyderabad, INDIA
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/assets/file/download (3).svg"
                  className="w-4 h-4"
                  alt="phone"
                />{" "}
                3800 N Lamar Blvd, Austin, Texas, USA
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/assets/file/download (2).svg"
                  className="w-4 h-4"
                  alt="phone"
                />
                1800-8892-877
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#333333]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#333333]"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#333333]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#333333]"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-[#333333]"
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
  );
};

export default ArtificialIntelligenceSkills;
