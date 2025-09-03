"use client";
import { Check } from "lucide-react";
import React, { useEffect, useRef } from "react";

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

const FoundationalTrainingPrograms = () => {
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
            src="/assets/imgi_16_17646.jpg"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text */}
        <h1 className="relative text-3xl md:text-6xl font-bold text-white">
          Foundational Training Programs
        </h1>
      </section>

      <section className="w-full bg-white py-16">
        <div className="w-full md:max-w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#333333] leading-tight">
              The First Step to Becoming a Network or Security Engineer Starts
              Here.
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              No fluff. No skipped steps. Just the solid foundation every great
              engineer needs
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-2">
              <button className="bg-[#d5f952] hover:bg-[#d5f952] transition text-[#333333] font-semibold px-6 py-3 rounded-md shadow-md flex-1">
                Get Started With Foundational Training →
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/imgi_2_101876.jpg"
              alt="Engineer"
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/assets/imgi_17_16287.jpg" // replace with your image path
              alt="Classroom Training"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
              We Designed These Programs To Be The Foundation Others Skip.
            </h2>
            <p className="text-gray-300 mt-6 leading-relaxed">
              Too many engineers jump into advanced certifications without the
              groundwork and get stuck. <br />
              <br />
              Our programs change that. <br />
              <br />
              We teach the core concepts others assume you already know—so you
              move forward with clarity, not confusion. <br />
              <br />
              If you’re serious about starting a career in networking or
              cybersecurity, start here. <br />
              <br />
              Ready to build your foundation?
            </p>

            {/* CTA Button */}
            <div className="mt-8">
              <a
                href="#programs"
                className="inline-block bg-[#d5f952] text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#d5f952] transition"
              >
                Explore The Programs Below →
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-[#d5f952] bg-cover bg-center bg-no-repeat py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-8 flex flex-col items-center text-center"
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

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="/assets/imgi_36_742.jpg" // replace with your image path
              alt="Handshake"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-snug">
              Training Trusted <br /> By Enterprises. <br /> Designed For You.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              For over 15 years, Datacipher has trained engineers for India’s
              most respected enterprises –{" "}
              <span className="font-medium">Palo Alto, Juniper, Fortinet</span>,
              and more.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Now under the Global Skills banner, those same experts bring that
              experience to you. Our foundational programs don’t just teach.
              They launch careers.
            </p>
          </div>
        </div>
      </section>

      {/* half green screen created by me */}
      <section className="relative w-full">
        <div className="bg-[#d5f952] relative max-w-6xl flex flex-col md:flex-row p-8 md:p-12 mx-auto w-full items-center md:items-start gap-6 rounded-lg min-h-[300px] md:min-h-[300px]">
          {/* Left Side */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-snug">
              Not Sure Where to Start? Let’s Find Your Path Together.
            </h2>

            <p className="text-black mt-4">
              Talk to someone who’s helped hundreds of engineers take their
              first step into tech.
            </p>
          </div>

          {/* Right Side Buttons */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4 mt-6 md:mt-0">
            <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-[#333333] transition w-full md:w-auto justify-center md:justify-start">
              Talk To A Learning Advisor
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

export default FoundationalTrainingPrograms;
