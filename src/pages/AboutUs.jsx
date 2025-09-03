import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";
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

const items = [
  {
    title: "Real-World Readiness",
    desc: "Every program includes hands-on labs, live simulations, and instructor-led walkthroughs that map to production tasks, not theory.",
  },
  {
    title: "Certification-Backed",
    desc: "We partner directly with global tech vendors to deliver authorized, up-to-date certification pathways.",
  },
  {
    title: "Placement-Focused",
    desc: "We don’t just train engineers. We place them in roles where they make an immediate impact.",
  },
];

const offerings = [
  {
    icon: "🧠",
    text: "Certified Engineers In AI, Cybersecurity, Networking, Software Development, And Semiconductor Design",
  },
  {
    icon: "👥",
    text: "Custom Training And Upskilling For Enterprise Teams",
  },
  {
    icon: "🔍",
    text: "Role-Specific Hiring Support For High-Impact Tech Roles",
  },
];
const AboutUs = () => {
  return (
    <div>
      <div className="relative w-full h-[250px] md:h-[350px] flex items-center justify-center bg-cover bg-center">
        {/* Dark overlay */}
        <div
          style={{
            backgroundImage:
              "url('/assets/imgi_15_computer-network-security-server-room-data-center-d-render-dark-blue-generative-ai.png')",
          }}
          className="absolute inset-0  bg-opacity-50"
        ></div>

        {/* Heading */}
        <h1 className="relative text-white text-3xl md:text-5xl font-bold text-center">
          About Us
        </h1>
      </div>
      <section className="bg-white py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/assets/imgi_26_global-skills-datacenter-young-girl-in-the-lab.jpg" // replace with your image
              alt="About Global Skills"
              className="rounded-xl shadow-lg w-full max-w-md md:max-w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            {/* Small Heading */}
            <p className="text-gray-600 font-semibold mb-2 flex items-center">
              <span className="h-[1px] w-10 bg-gray-400 mr-3"></span>
              About Global Skills
            </p>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-snug mb-4">
              We Don’t Just Train. We <br />
              Build Talent That <br />
              Delivers.
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 leading-relaxed mb-6">
              Global Skills was founded to close the gap between certification
              and contribution. Too often, engineers graduate with credentials
              but lack real-world readiness. We saw it in every enterprise
              handover, every NOC transition, every unmet SLA and we decided to
              change it.
            </p>

            {/* Button */}
            <button className="bg-[#d5f952] hover:bg-[#d5f952] text-[#333333] font-semibold px-6 py-3 rounded-md shadow-md transition-all flex items-center gap-2">
              Start Your Tech Career
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="relative bg-[#d5f952] py-16 px-6 md:px-12">
        {/* Wave Effect (optional SVG) */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-40 text-lime-300"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
          >
            <path
              fill="currentColor"
              d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,186.7C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>

      <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#333333]">
              Built On 15+ Years Of <br /> Enterprise Training
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              We are powered by{" "}
              <span className="font-semibold text-gray-800">
                Datacipher Education Services
              </span>
              , an award-winning global training partner for companies like
              <span className="font-semibold"> Palo Alto Networks</span>,
              <span className="font-semibold"> Juniper Networks</span>, and
              <span className="font-semibold"> Check Point</span>. We’ve trained
              over 500 enterprise teams across telecom, banking, healthcare, and
              IT services.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Now, with Global Skills, we’re channeling that experience into a
              talent platform where learning leads to hiring and careers start
              with momentum.
            </p>

            {/* CTA Button */}
            <button className="mt-8 bg-[#d5f952] hover:bg-[#d5f952] text-[#333333] font-semibold px-6 py-3 rounded-md shadow-md transition-all">
              Start Your Tech Career →
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/imgi_18_global-skills-datacenter-young-girl-1024x768.jpg" // Replace with your actual image path
              alt="Enterprise Training"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12">
            Our Approach
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-lg p-6 text-left hover:shadow-xl transition"
              >
                {/* Icon */}
                <div className="flex items-center mb-4">
                  <img src="/assets/imgi_3_01_Home_01-10.png" alt="" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#333333] mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              What We Offer
            </h2>
            <div className="space-y-6">
              {offerings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="bg-[#d5f952] text-black text-2xl p-3 rounded-full flex items-center justify-center w-12 h-12">
                    {item.icon}
                  </div>
                  {/* Text */}
                  <p className="text-lg leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/assets/imgi_19_datacenter-young-girl.jpg"
              alt="What We Offer"
              className="rounded-lg shadow-lg w-full max-w-md lg:max-w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-[#333333] mb-6">
              Why Employers Work With Us
            </h2>
            <p className="text-gray-600 mb-8">
              From the classroom to the command line, we help teams and careers
              scale.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#d5f952] hover:bg-[#d5f952] text-black px-6 py-3 rounded-md font-medium transition">
                Explore Talent Tracks →
              </button>
              <button className="bg-[#d5f952] hover:bg-[#d5f952] text-black px-6 py-3 rounded-md font-medium transition">
                Talk To A Consultant →
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 p-6 bg-white shadow-md rounded-xl ">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#d5f952]">
                👥
              </div>
              <p className="font-semibold text-[#333333]">
                Candidates That Are Vetted, Lab-Tested, And Context-Aware
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white shadow-md rounded-xl ">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#d5f952]">
                🛠️
              </div>
              <p className="font-semibold text-[#333333]">
                Engineers Who Understand Both Tools And Business Use Cases
              </p>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white shadow-md rounded-xl ">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#d5f952]">
                📋
              </div>
              <p className="font-semibold text-[#333333]">
                A Deployment Process That’s Fast, Flexible, And Frictionless
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative w-full bg-[#d5f952] border-red">
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
              Request Certified Engineers
            </h2>
            <div className="h-[2px] w-32 bg-black mt-3 mb-5"></div>
            <p className="text-black text-lg max-w-md">
              Whether you need a single specialist or an entire team, we’ll
              connect you with certified, context-ready talent.
            </p>
          </div>

          {/* Right Side Button */}
          <div className="flex justify-start md:justify-end">
            <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center gap-2 hover:bg-[#333333] transition">
              Request Certified Engineers
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

export default AboutUs;
