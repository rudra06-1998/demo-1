"use client";

import { Check } from "lucide-react";
import React, { useEffect, useRef } from "react";

const stats = [
  { number: "15+", text: "Years Of Experience" },
  { number: "500+", text: "Enterprise Teams Upskilled" },
  { number: "100+", text: "Companies Served" },
];

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

const HireAiEngineers = () => {
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
            src="/assets/imgi_37_8386440.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text */}
        <h1 className="relative text-3xl md:text-6xl font-bold text-white">
          Hire Ai Engineers
        </h1>
      </section>

      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-snug">
              The Right AI Hire Doesn’t <br /> Just Code. They Deliver <br />{" "}
              Intelligence.
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Hiring for AI is hard. You’re not just looking for someone who can
              run models. You need someone who understands data, interprets
              results, and knows when the output can be trusted. That’s why we
              don’t just certify AI engineers. We train them to deliver business
              outcomes.
            </p>

            <p className="mt-6 font-semibold text-gray-800">
              Ready for deployment. Ready for scale. Ready to own the AI stack.
            </p>

            <button className="mt-6 bg-[#d5f952] hover:bg-[#d5f952] text-[#333333] font-medium px-6 py-3 rounded-md shadow-md transition">
              Request Certified AI Engineers →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center w-[100%] h-[100%]">
            <img
              src="/assets/imgi_2_t1paibmtjim-1024x575.jpg" // replace with your image path
              alt="AI Hire"
              className="w-[100%] rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#333333] flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 gap-12">
        {/* Left Content */}
        <div
          style={{ border: "1px solid white" }}
          className="bg-[#333333] rounded-lg p-8 lg:w-1/2 text-white shadow-md"
        >
          <h2 className="text-4xl font-bold mb-6">
            Why Hiring For AI Is <br /> Broken
          </h2>

          <ul className="space-y-4 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#d5f952] text-xl">✔</span>
              Resumes packed with buzzwords, light on real work
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d5f952] text-xl">✔</span>
              Projects built in notebooks, not pipelines
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#d5f952] text-xl">✔</span>
              No idea how to scale from prototype to production
            </li>
          </ul>

          <p className="mt-6 text-gray-300">
            We fix that. We supply vetted, hands-on AI talent that can plug into
            your team and contribute from week one.
          </p>

          <button className="mt-8 bg-[#d5f952] text-black font-semibold px-6 py-3 rounded-md hover:bg-[#d5f952] transition">
            Talk To A Program Advisor →
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/assets/imgi_50_Shrug-bro.png"
            alt="AI Broken"
            className="max-w-md w-full"
          />
        </div>
      </section>

      <section className="w-full flex items-center justify-center bg-gray-50 py-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center">
          AI Talent, Built With Industry In Mind
        </h1>
      </section>

      <div
        style={{
          backgroundImage: "url('/assets/Green.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative w-full py-12 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="bg-[#d5f952] rounded-full p-2 mb-4">
                <Check className="text-black w-5 h-5" />
              </div>

              {/* Number */}
              <h3 className="text-3xl font-bold text-[#333333]">
                {item.number}
              </h3>

              {/* Text */}
              <p className="text-gray-700 mt-2">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

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
              Trusted By The Enterprises <br /> Securing India’s <br /> Digital
              Backbone
            </h2>
            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Backbone Our training division, Datacipher Education Services has
              delivered enterprise-grade programs to over 500 teams in banking,
              telecom, infrastructure, and IT services. That same trusted engine
              now powers Global Skills.
            </p>
            <button className="mt-6 bg-[#d5f952] hover:bg-[#d5f952] text-[#333333] font-medium px-6 py-3 rounded-md shadow-md transition">
              See How We Train Enterprise Teams →
            </button>
          </div>
        </div>
      </section>

      {/* sl */}
      <section className="relative w-full">
        <div className="bg-[#d5f952] relative max-w-6xl flex flex-col md:flex-row p-8 md:p-12 mx-auto w-full items-center md:items-start gap-6 rounded-lg min-h-[300px] md:min-h-[300px]">
          {/* Left Side */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-snug">
              Request Certified Engineers
            </h2>
            <div className="h-[2px] w-32 bg-black mt-3 mb-5"></div>

            <p className="text-black mt-4">
              Whether you need a single specialist or an entire team, we’ll
              connect you with certified, context-ready talent.
            </p>
          </div>

          {/* Right Side Buttons */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4 mt-6 md:mt-0">
            <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-[#333333] transition w-full md:w-auto justify-center md:justify-start">
              Request Certified Engineers
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
      {/* sl */}

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
export default HireAiEngineers;
