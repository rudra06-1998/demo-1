"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Plus, Minus } from "lucide-react";

const logos = [
  { src: "/assets/Genpact.png", alt: "Genpact" },
  { src: "/assets/Accenture.png", alt: "Accenture" },
  { src: "/assets/Infosys.png", alt: "Infosys" },
  { src: "/assets/KPMG.png", alt: "KPMG" },
  { src: "/assets/Capgemini.png", alt: "Capgemini" },
  { src: "/assets/Goldman Sachs.png", alt: "Goldman Sachs" },
  { src: "/assets/Cognizant.png", alt: "Cognizant" },
  { src: "/assets/Standard Chartered.png", alt: "Standard Chartered" },
];

const modules = [
  {
    title: "Module 1 : Data Science LaunchPad",
    content: [
      "Build an analytical mindset by learning Excel, Python, Power BI, and databases",
      "Get started with Prompt Engineering and Exploratory Data Analysis (EDA)",
      "Understand how data drives real business decisions through case studies",
      "Strengthen your data storytelling and problem-solving abilities",
    ],
  },
  {
    title: "Module 2 : Introduction to Generative AI",
    content: [],
  },
  {
    title: "Module 3 : GenAI in Action: Industry-Specific Applications",
    content: [],
  },
  {
    title: "Module 4 : Bringing GenAI to Life: Project Development",
    content: [],
  },
  {
    title: "Module 5 : Unveiling Generative AI",
    content: [],
  },
];

const benefits = [
  {
    img: "/assets/Leaders and Managers.png", // replace with your image
    title: "Leaders and Managers",
    desc: "seeking to implement Generative AI strategies",
  },
  {
    img: "/assets/Non-technical decision-makers.png",
    title: "Non-technical decision-makers",
    desc: "looking to drive innovation",
  },
  {
    img: "/assets/Consultants and Advisors.png",
    title: "Consultants and Advisors",
    desc: "building strategic roadmaps",
  },
  {
    img: "/assets/Entrepreneurs and startup founders.png",
    title: "Entrepreneurs and startup founders",
    desc: "leveraging Generative AI for innovation",
  },
];
const steps = [
  {
    title: "STEP 01",
    desc: "Complete the registration process",
  },
  {
    title: "STEP 02",
    desc: "Submit the required documentation",
  },
  {
    title: "STEP 03",
    desc: "Receive the admission offer letter",
  },
  {
    title: "STEP 04",
    desc: "Enrol by paying the 1st installment",
  },
];

const faqs = {
  about: [
    {
      q: "What the Generative AI for Managers in Association with PwC Academy is all about?",
      a: "This course, developed in collaboration with PwC Academy, is designed for Leaders and Managers who desire to understand the landscape of Generative AI and implement it within their organization. This program starts with the foundation of Generative AI, to explore various functions, using case studies to further expand your depth of understanding, and then building a generative AI project that can become your guide to implementing Gen AI in your organization.",
    },
    { q: "Who is eligible to enroll in this course?", a: "" },
    { q: "What kind of case studies will be included?", a: "" },
    { q: "Who will be teaching the classes?", a: "" },
    { q: "What will be the session timings?", a: "" },
    { q: "What will be the learning pedagogy for the program?", a: "" },
  ],
  enrollment: [
    { q: "What is the enrollment process?", a: "" },
    { q: "Are there any benefits for early registration?", a: "" },
    { q: "What documents are required?", a: "" },
  ],
};

const CourseDetails = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("about");
  const [openFAQ, setOpenFAQ] = useState(0);

  const caseStudies = [
    {
      img: "/assets/Gen Al's role in enhancing Operational Efficiency.png",
      title: "Gen AI's role in enhancing Operational Efficiency",
      desc: "Understand how GenAI identifies and analyzes key clauses in commercial contracts, effectively reducing the risk of human oversight.",
    },
    {
      img: "/assets/Boosting Human Resource productivity with GenAI.png",
      title: "Boosting Human Resource productivity with GenAI",
      desc: "Explore how GenAI-powered chatbots help employees quickly access relevant HR policies, improving policy discovery and organizational transparency.",
    },
    {
      img: "/assets/Revolutionising IT & Technology Applications.png",
      title: "Revolutionising IT & Technology Applications",
      desc: "Learn how GenAI supports developers by assisting in code generation, streamlining workflows, and accelerating software development.",
    },
    {
      img: "/assets/Supercharging Sales and Marketing with GenAI.png",
      title: "Supercharging Sales and Marketing with GenAI",
      desc: "Discover how GenAI enhances marketing and sales by enabling the creation of targeted content, optimizing outreach, and boosting effectiveness.",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const tools = [
    { name: "Google Gemini", img: "/assets/Google Gemini.png" },
    { name: "ChatGPT", img: "/assets/ChatGPT.png" },
    { name: "Dall-E 2", img: "/assets/Dall-E 2.png" },
    { name: "Dialogflow", img: "/assets/Dialogflow.png" },
    { name: "TheresAnAIforThat", img: "/assets/TheresAnAIforThat.png" },
    { name: "MidJourney", img: "/assets/MidJourney.png" },
  ];
  return (
    <div>
      <section className="bg-[#f3f7fc] py-12 px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#333333] leading-tight">
              Generative AI <br /> for Managers
            </h1>
            <p className="mt-4 font-semibold text-lg text-gray-800">
              in Association with PwC Academy
            </p>
            <p className="mt-2 text-gray-600 max-w-xl">
              Become a Generative AI Leader & Transform yourself the PwC way
            </p>

            {/* Info Boxes */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">
              <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center gap-2">
                {/* <span className="text-gray-500">⏱</span> */}
                <img src="/assets/clock.svg.png" alt="img" />

                <span>
                  <strong className="text-black">4 Months</strong>
                  <br />
                  <span className="text-sm text-gray-600">Duration</span>
                </span>
              </div>
              <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center gap-2">
                {/* <span className="text-gray-500">📅</span> */}
                <img src="/assets/Frequency.png" alt="img" />

                <span>
                  <strong className="text-black">Weekend Sessions</strong>
                  <br />
                  <span className="text-sm text-gray-600">Frequency</span>
                </span>
              </div>
              <div className="bg-white rounded-full shadow-md px-6 py-3 flex items-center gap-2">
                {/* <span className="text-gray-500">💻</span> */}
                <img src="/assets/Contai.png" alt="img" />
                <span>
                  <strong className="text-black">Live Online Training</strong>
                  <br />
                  <span className="text-sm text-gray-600">Session type</span>
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 text-black rounded-full border-2 border-gray-900 font-medium hover:bg-gray-100">
                Download Brochure
              </button>
              <button className="px-8 py-3 rounded-full bg-[#333333] text-white font-medium hover:bg-[#333333] flex items-center gap-2">
                Apply Now →
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className=" h-72  sm:h-96  overflow-hidden ">
              <img
                src="/assets/bg-image.png"
                alt="Generative AI"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 2nd */}

      <div className="bg-gray-50 py-1">
        <h3 className="text-center text-xl font-semibold text-gray-800 mb-8">
          Our Alumni Work At
        </h3>
        <div className="p-4 max-w-12xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 px-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className=" rounded-lg flex items-center justify-center  hover:shadow-md transition"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-[100%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2nd */}

      {/* 3rd */}

      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-6"
        style={{ backgroundImage: "url('/assets/bgimage88.png')" }} // 👈 change path to your own image
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Level Up Your Problem-Solving Skills: 4P Approach
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto mb-12">
            This approach enables you to address real-world business challenges
            by utilizing battle-tested approaches from industry leaders and
            practitioners.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Practice */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-left">
              <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                PRACTICE
              </span>
              <h3 className="text-lg font-semibold mb-2">
                Learn from Industry Practitioners
              </h3>
              <p className="text-sm leading-relaxed text-gray-200">
                Learn proven methodologies from seasoned industry practitioners
                and PwC&apos;s Experts and understand how industry leaders
                approach complex problems.
              </p>
            </div>

            {/* Perspective */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-left">
              <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                PERSPECTIVE
              </span>
              <h3 className="text-lg font-semibold mb-2">
                Dive into Diverse Case Studies
              </h3>
              <p className="text-sm leading-relaxed text-gray-200">
                Analyze functional case studies across finance, marketing, and
                operations. Apply effective problem-solving techniques to
                various scenarios and build practical experience.
              </p>
            </div>

            {/* Process */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-left">
              <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                PROCESS
              </span>
              <h3 className="text-lg font-semibold mb-2">
                Develop a strong problem-solving mindset
              </h3>
              <p className="text-sm leading-relaxed text-gray-200">
                Conquer complex business challenges with the power of AI. Build
                confidence and competence to tackle similar issues in your
                career, leveraging cutting-edge technology to stay ahead.
              </p>
            </div>

            {/* Performance */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-left">
              <span className="bg-black/50 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                PERFORMANCE
              </span>
              <h3 className="text-lg font-semibold mb-2">
                Apply and Create Impact
              </h3>
              <p className="text-sm leading-relaxed text-gray-200">
                Create compelling presentations, pitch decks, or even approaches
                to convey your strategic solutions effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd */}
      {/* 4th */}
      <section className="relative py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Centered Heading */}
          <h2 className="text-center text-2xl text-black sm:text-3xl md:text-4xl font-bold leading-snug mb-10">
            Introducing Generative AI for Managers
            <br />
            in Association with PwC Academy
          </h2>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Paragraph */}
            <div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-left">
                The Generative AI for Managers program, in association with PwC
                Academy, enables participants to harness the transformative
                power of Generative AI (GenAI) within their organizations. This
                4-month program features a cutting-edge curriculum structured
                into four modules, progressing from foundational GenAI concepts
                to real-world industry applications. Participants will acquire
                the knowledge necessary to grasp GenAI&apos;s industry-wide
                impact and identify practical implementations within their
                teams. Through hands-on project experience, they will cultivate
                the skills required to bring their GenAI visions to fruition
                while simultaneously exploring the future of GenAI, ensuring
                preparedness for responsible development and emerging
                technologies.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="/assets/PWC.png" // 👈 replace with your image path
                alt="Generative AI Program"
                className="rounded-lg shadow-lg w-full max-w-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* 4th */}
      {/* 5th */}
      <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bgimage88.png')" }} // 👈 replace with your image
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {/* Card 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white">
            <img
              src="/assets/Taught by Experts and PwC Practitioners.png"
              alt="PwC"
              className="h-10 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Taught by Experts and PwC Practitioners
            </h3>
            <p className="text-sm leading-relaxed">
              Led by seasoned professionals from PwC and other top industry
              experts, this program combines academic rigor with real-world
              insights, offering a holistic understanding of Generative AI.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white">
            <img
              src="/assets/Generative AI Applications across Functions.png"
              alt="GenAI"
              className="h-10 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Generative AI Applications across Functions
            </h3>
            <p className="text-sm leading-relaxed">
              Tap into the potential of Generative AI with our comprehensive
              program that will equip you with the practical knowledge and
              skills to implement it effectively.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white">
            <img
              src="/assets/Taught by Experts and PwC Practitioners.png"
              alt="PwC"
              className="h-10 mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">
              Strategic Problem Solving
            </h3>
            <p className="text-sm leading-relaxed">
              Tackle real-world business problems under the guidance of Industry
              leaders and PwC Academy&apos;s Practitioners. Master their proven
              strategies for dissecting and conquering complex challenges.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white">
            <img
              src="/assets/d1008c44ef6a44b47c74e4f01795055d3521e317.png"
              alt="LinkedIn"
              className="h-10 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              Access to LinkedIn Learning & iimjobs/hirist
            </h3>
            <p className="text-sm leading-relaxed">
              Unlock your potential with 6 months of LinkedIn Learning and 6
              months of iimJobs. Gain in-demand GenAI skills and access
              exclusive job opportunities to accelerate your career.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-white">
            <img
              src="/assets/Taught by Experts and PwC Practitioners.png"
              alt="PwC"
              className="h-10 mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">
              Prestigious Certification from World-renowned PwC
            </h3>
            <p className="text-sm leading-relaxed">
              Validate your expertise in Generative AI with highly reputed PwC
              certification. Advance your career by acquiring in-depth knowledge
              and proficiency in GenAI skills.
            </p>
          </div>
        </div>
      </section>
      {/* 5th */}
      {/* 6th */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#333333]">
            Why should you join the <br />
            <span className="text-[#1a2541]">
              Generative AI for Managers Program?
            </span>
          </h2>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm">
              <h3 className="font-semibold text-[#333333] mb-2">
                Fuel growth and innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Learn how GenAI can revolutionize your industry and generate new
                revenue streams.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm">
              <h3 className="font-semibold text-[#333333] mb-2">
                Improve operational efficiency
              </h3>
              <p className="text-gray-600 text-sm">
                Streamline processes, reduce costs, and boost productivity with
                Gen AI-powered solutions.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm">
              <h3 className="font-semibold text-[#333333] mb-2">
                Harness data for better decisions
              </h3>
              <p className="text-gray-600 text-sm">
                Utilize GenAI to extract valuable insights from your data to
                inform strategic choices.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 text-left shadow-sm">
              <h3 className="font-semibold text-[#333333] mb-2">
                Gain a competitive edge
              </h3>
              <p className="text-gray-600 text-sm">
                Understand the future of GenAI and position your organization
                for long-term success.
              </p>
            </div>
          </div>

          {/* Market Info */}
          <div className="mt-16 text-gray-700 text-lg italic max-w-4xl mx-auto">
            The global AI market is projected to reach{" "}
            <span className="font-bold not-italic">118.06 billion by 2032</span>
            ,{" "}
            <span className="italic">
              growing at a CAGR of{" "}
              <span className="font-bold not-italic">27.02%</span> during the
              forecast period 2023 to 2032, driving significant demand for
              skilled AI professionals
            </span>
            <div className="mt-2 text-right text-sm text-gray-500">
              (We Forum)
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="bg-[#1a2541] text-white font-medium px-8 py-3 rounded-full shadow-md hover:bg-[#11182d] transition">
              Be Future-ready - Upskill and Lead
            </button>
          </div>
        </div>
      </section>
      {/* 6th */}
      {/* 7th */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
            Curriculum Highlights
          </h2>

          {/* Accordion */}
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-sm"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className={`w-full flex justify-between items-center px-4 py-4 text-left font-semibold text-gray-800 bg-gray-50 ${
                    openIndex === index ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <img src="/assets/award_star4.svg fill.png" alt="" />
                    {module.title}
                  </div>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {/* Content */}
                {openIndex === index && module.content.length > 0 && (
                  <div className="px-6 py-4 bg-gray-50 text-gray-700 text-sm">
                    <h4 className="font-semibold mb-2">Topic Covered</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {module.content.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12 flex justify-center">
            <button className="bg-[#1a2541] text-white font-medium px-10 py-3 rounded-full shadow-md hover:bg-[#11182d] transition flex items-center gap-2">
              Enrol Now →
            </button>
          </div>
        </div>
      </section>
      {/* 7th */}
      {/* 8th */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-black">
            Case Studies
          </h2>
          {/* Cards Row */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar scroll-smooth"
            >
              {caseStudies.map((item, index) => (
                <div
                  key={index}
                  className="min-w-[280px] sm:min-w-[320px] bg-white rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex justify-center gap-6 mt-8  ">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full border hover:bg-gray-100 transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full border hover:bg-gray-100 transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 8th */}
      {/* 9th */}
      <section className="bg-[#1b2431] py-16 px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Tools you will master
        </h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 bg-[#232f3e] rounded-lg px-4 py-3 w-[130px] sm:w-[150px] shadow-md hover:shadow-lg transition"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="h-10 sm:h-12 object-contain"
              />
              <p className="text-white text-sm sm:text-base">{tool.name}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="bg-white text-[#333333] font-medium px-6 sm:px-10 py-3 rounded-full shadow-md hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            Enrol Now →
          </button>
        </div>
      </section>
      {/* 9th */}
      {/* 10th */}

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
            About PwC Academy
          </h2>

          {/* Flex container */}
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
            {/* Left Image */}
            <div className="flex-1">
              <img
                src="/assets/bg-imageds.png" // replace with your image path
                alt="PwC Academy"
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="flex-1 text-gray-700 text-base leading-relaxed space-y-5">
              <p>
                PwC Academy is a learning and education service offering of PwC
                India. It provides diverse training courses based on the best
                practices of PwC’s global network of firms and brings real-life
                business experiences into the classroom. Our in-house subject
                matter experts help to make the learning more effective and
                practical by providing region and industry-focused scenarios and
                case studies.
              </p>

              <p>
                Based on our extensive know-how, we seek to deliver unique
                learning experiences that are stimulating, engaging and
                valuable, and which continue to have an impact long beyond the
                completion of the course. Through PwC Academy, our aim is to
                create a vibrant community of expert professionals well-versed
                in their respective areas.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 10th */}
      {/* 11th */}
      <section
        className="relative bg-cover bg-center py-16 px-6"
        style={{ backgroundImage: "url('/assets/bgimage88.png')" }} // replace with your bg image
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Learn from Top Industry Leaders and Experts
          </h2>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center text-left text-white">
              {/* Image */}
              <img
                src="/assets/bg-imae.png" // replace
                alt="Sounak Sarkar"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
              />

              {/* Text */}
              <div>
                <p className="text-sm md:text-base leading-relaxed mb-4">
                  Sounak has over 11 years of professional experience working
                  across industries like Energy, Retail, Telecom and Pharma. He
                  is an experienced practitioner with a demonstrated history of
                  working in digital solution conceptualization and incubation.
                  <br />
                  <br />
                  Sounak has worked extensively in the analysis, identification
                  and incubation of new solutions leveraging digital
                  technologies like AI/ Gen AI, metaverse, computer vision and
                  edge computing.
                </p>

                <h3 className="font-semibold">Sounak Sarkar</h3>
                <p className="text-sm opacity-80">
                  Manager - Emerging Technologies,
                  <br /> PwC India | Ex-Deloitte
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center text-left text-white">
              {/* Image */}
              <img
                src="/assets/bg-image (2).png" // replace
                alt="Dr. Yasha Pandit"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg"
              />

              {/* Text */}
              <div>
                <p className="text-sm md:text-base leading-relaxed mb-4">
                  Dr. Yasha has a career spanning 15+ years dedicated to her
                  role within PwC practice. Throughout her tenure, she has led
                  projects across multiple industries including pharma, life
                  sciences and manufacturing. Notably, she has successfully
                  navigated complex engagements, collaborating with
                  multi-disciplinary teams and clients worldwide.
                </p>

                <h3 className="font-semibold">Dr. Yasha Pandit</h3>
                <p className="text-sm opacity-80">
                  Director - Emerging Technologies,
                  <br /> PwC India
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-12">
            <button className="bg-white text-[#333333] px-8 py-3 rounded-full font-medium shadow-md hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
              Enrol Now →
            </button>
          </div>
        </div>
      </section>
      {/* 11th */}
      {/* 12th */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6 leading-snug">
              Achieve <span className="text-[#1d1f2f]">PwC Certification</span>{" "}
              <br />
              on Successful Completion
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Upon successful completion of this program, you will earn a
              Certificate in Generative AI for Managers, jointly awarded by
              Imarticus Learning and PwC. This certification will significantly
              help in enhancing your professional profile.
            </p>

            <p className="text-gray-700 mb-4">
              To qualify for this certification, you must meet the following
              requirements:
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">✦ Academic Performance:</span>{" "}
                Achieve a minimum average score of 50% in all graded
                assessments.
              </li>
              <li>
                <span className="font-semibold">✦ Attendance:</span> Maintain a
                minimum attendance of 80% for each module.
              </li>
            </ul>
          </div>

          {/* Right Certificate Image */}
          <div className="flex justify-center">
            <img
              src="/assets/CertWeb.webp.png" // replace with your certificate image
              alt="PwC Certificate"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* 12th */}
      {/* 13th */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="text-green-700">Who Can Benefit</span>{" "}
            <span className="text-[#333333]">from this Program?</span>
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-[#333333] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 13th */}
      {/* 14th */}
      <section className="w-full bg-white">
        {/* Top Eligibility Section */}
        <div className="bg-[#1A2238] text-white py-12 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Eligibility Criteria for the Program
          </h2>
          <ul className="space-y-3 text-base md:text-lg">
            <li>✦ Bachelor’s/Master’s degree in any specialization</li>
            <li>✦ Minimum of 50% marks in graduation</li>
          </ul>
        </div>

        {/* Enrollment Steps Section */}
        <div className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-[#333333]">
            Enroll in this program by following{" "}
            <span className="font-bold">these steps</span>
          </h3>

          {/* Steps */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-gray-100 px-6 py-6 rounded-full shadow-sm w-full lg:w-auto"
              >
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-12 h-12   text-white font-bold">
                  <img src="/assets/award_star1.svg.png" alt="" />
                </div>

                {/* Step Info */}
                <div className="text-left">
                  <h4 className="font-bold text-sm text-[#1A2238] uppercase">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Apply Now Button */}
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 bg-[#1A2238] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[#111827] transition">
              Apply Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      {/* 14th */}
      {/* 15th */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333]">
            Programme <span className="text-[#1A2238]">Fees</span>
          </h2>
          <p className="text-gray-600 mt-3 text-base md:text-lg">
            Invest in yourself to build a brighter tomorrow
          </p>

          {/* Card Layout */}
          <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Left Box */}
            <div className="bg-[#1A2238] text-white rounded-xl shadow-md px-10 py-16 flex flex-col items-center justify-center w-full lg:w-1/2">
              <p className="text-base mb-2">Total program fee</p>
              <h3 className="text-4xl md:text-5xl font-bold">₹1,00,000</h3>
              <p className="text-sm mt-2">(Inclusive of all taxes)</p>
            </div>

            {/* Right Box */}
            <div className="bg-white rounded-xl shadow-md w-full lg:w-1/2">
              {/* Tabs */}
              <div className="flex border-b">
                <button className="w-1/2 py-3 text-sm md:text-base font-semibold text-[#333333] border-b-2 border-[#1A2238]">
                  Installments
                </button>
                <button className="w-1/2 py-3 text-sm md:text-base text-gray-500 hover:text-[#333333]">
                  EMI Options
                </button>
              </div>

              {/* Installments List */}
              <div className="p-6">
                <div className="flex justify-between py-3 border-b text-gray-700">
                  <span>Registration Fees</span>
                  <span className="font-medium">₹ 10,000</span>
                </div>
                <div className="flex justify-between py-3 border-b text-gray-700">
                  <span>Installment 1</span>
                  <span className="font-medium">₹ 60,000</span>
                </div>
                <div className="flex justify-between py-3 text-gray-700">
                  <span>Installment 2</span>
                  <span className="font-medium">₹ 30,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 bg-[#1A2238] text-white px-10 py-3 rounded-full text-lg font-medium hover:bg-[#111827] transition">
              Pay Now <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
      {/* 15th */}
      {/* 16th */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="border-r lg:pr-6 flex lg:flex-col gap-4 text-gray-700">
            <button
              className={`flex items-center justify-between w-full py-3 px-4 rounded-md text-left font-medium ${
                activeTab === "about"
                  ? "bg-gray-100 text-[#333333]"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About the Program <ChevronRight size={18} />
            </button>
            <button
              className={`flex items-center justify-between w-full py-3 px-4 rounded-md text-left font-medium ${
                activeTab === "enrollment"
                  ? "bg-gray-100 text-[#333333]"
                  : "hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("enrollment")}
            >
              Enrollment, Fees, and Benefits <ChevronRight size={18} />
            </button>
          </aside>

          {/* FAQs */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-bold text-center lg:text-left text-[#333333]">
              Frequently Asked <span className="text-[#1A2238]">Questions</span>
            </h2>
            <p className="text-gray-500 mt-2 text-center lg:text-left">
              Browse answers to frequent concerns
            </p>

            <div className="mt-10 divide-y divide-gray-200">
              {faqs[activeTab].map((item, idx) => (
                <div key={idx} className="py-4">
                  <button
                    className="flex w-full items-center justify-between text-left text-[#333333] font-medium"
                    onClick={() => setOpenFAQ(openFAQ === idx ? -1 : idx)}
                  >
                    {item.q}
                    {openFAQ === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </button>
                  {openFAQ === idx && item.a && (
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 16th */}

      <footer className="bg-black text-gray-300 px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
          {/* Follow us */}
          <div className="space-y-4 col-span-1 md:col-span-1">
            <h3 className="font-semibold">Follow us!</h3>
            <button className="border border-gray-500 px-4 py-1 rounded hover:bg-[#333333] w-full sm:w-auto">
              Refer and Earn
            </button>
            <div className="flex gap-3 flex-wrap sm:flex gap-5">
              <img src="/assets/Link.png" />
              <img src="/assets/Link (1).png" />
              <img src="/assets/Link (2).png" />
            </div>
            <div className="flex gap-3 flex-wrap md:flex gap-5">
              <img src="/assets/Link (3).png" />
              <img src="/assets/Link (4).png" />
              <img src="/assets/Link (5).png" />
            </div>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-1">
              <li>About us</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Alumni speak</li>
              <li>Grievance redressal</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Work with us */}
          <div className="space-y-2">
            <h3 className="font-semibold">Work with us</h3>
            <ul className="space-y-1">
              <li>Become an instructor</li>
              <li>Blog as guest</li>
            </ul>
          </div>

          {/* Discover */}
          <div className="space-y-2">
            <h3 className="font-semibold">Discover</h3>
            <ul className="space-y-1">
              <li>Free Courses</li>
              <li>Skillup Sitemap</li>
              <li>Resources</li>
              <li>RSS feed</li>
              <li>SimpliMentor GPT</li>
            </ul>
          </div>

          {/* For Businesses */}
          <div className="space-y-2">
            <h3 className="font-semibold">For Businesses</h3>
            <ul className="space-y-1">
              <li>Corporate training</li>
              <li>Simplilearn Learning Hub+</li>
              <li>Guaranteed-to-run Classes</li>
              <li>Partners</li>
              <li>Government</li>
            </ul>
          </div>

          {/* Learn On the Go */}
          <div className="space-y-4">
            <h3 className="font-semibold">Learn On the Go!</h3>
            <button className="flex items-center gap-2 border border-gray-500 px-3 py-2 rounded hover:bg-[#333333] w-full">
              <img src="/assets/footer_sprite.svgz fill.png" alt="" />
              Get the Android App
            </button>
            <button className="flex items-center gap-2 border border-gray-500 px-3 py-2 rounded hover:bg-[#333333] w-full">
              <img src="/assets/footer_sprite.svgz fill (1).png" alt="" />
              Get the iOS App
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="text-sm space-y-3">
          <h4 className="font-semibold">Trending Post Graduate Programs</h4>
          <div className="flex flex-wrap gap-2 text-gray-400">
            <span>PG in Data Science</span> |
            <span>Cloud Computing and DevOps - IITG</span> |
            <span>Data Analytics Program</span> |<span>AI and ML Course</span> |
            <span>Business Analysis Certification Course</span> |
            <span>Data Engineering Certification Courses</span> |
            <span>Product Management Training Course</span>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Trending Master Programs</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
            <span>PMP Plus Certification Training Course</span>
            <span>Data Science Certification Course</span>
            <span>Data Analyst Course</span>
            <span>Masters in Artificial Intelligence</span>
            <span>Cloud Architect Certification Training Course</span>
            <span>DevOps Engineer Certification Training Course</span>
            <span>Cyber Security Expert Course</span>
            <span>Business Analyst Course</span>
          </div>
        </div>

        {/* Trending Courses */}
        <div className="space-y-3">
          <h4 className="font-semibold">Trending Courses</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
            <span>PMP Certification Training Course</span>
            <span>CSM Certification Course</span>
            <span>Data Science with Python Course</span>
            <span>AWS Certification</span>
            <span>CEH Certification</span>
            <span>AWS Technical Essentials</span>
            <span>AWS DevOps Certification</span>
            <span>ITIL Certification</span>
            <span>AZ 900 Certification</span>
            <span>CompTIA Security+ Certification</span>
            <span>AZ 400 Certification</span>
            <span>SAFe Certification</span>
            <span>CISSP Certification Training</span>
            <span>Tableau Certification Course</span>
            <span>Lean Six Sigma Green Belt Certification</span>
            <span>Lean Six Sigma Black Belt Certification</span>
            <span>Power BI Certification Course</span>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="space-y-3">
          <h4 className="font-semibold">Trending Categories</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
            <span>Project Management Courses</span>
            <span>Online Certifications</span>
            <span>Generative AI Courses</span>
            <span>Digital Marketing Courses</span>
            <span>Agile Certifications</span>
            <span>Cloud Computing Courses</span>
            <span>Cyber Security Courses</span>
            <span>EC-Council Certifications</span>
            <span>PeopleCert Certifications</span>
            <span>Scrum Alliance Certifications</span>
            <span>Web Development Courses</span>
            <span>Scaled Agile Certifications</span>
            <span>Google Cloud Courses</span>
            <span>ISC2 Certifications</span>
            <span>AXELOS Certifications</span>
            <span>ISACA Certifications</span>
            <span>PMI Certifications</span>
            <span>CompTIA certifications</span>
            <span>AWS Courses</span>
            <span>Microsoft Certifications</span>
          </div>
        </div>

        {/* Trending Resources */}
        <div className="space-y-3">
          <h4 className="font-semibold">Trending Resources</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400">
            <span>Python Tutorial</span>
            <span>JavaScript Tutorial</span>
            <span>Java Tutorial</span>
            <span>Angular Tutorial</span>
            <span>Node.js Tutorial</span>
            <span>Docker Tutorial</span>
            <span>Git Tutorial</span>
            <span>Kubernetes Tutorial</span>
            <span>Power BI Tutorial</span>
            <span>CSS Tutorial</span>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />

        {/* Bottom Section */}
        <div className="text-center text-xs md:text-sm space-y-3 text-gray-400">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#">Terms and Conditions</a>
            <span>•</span>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Refund Policy</a>
          </div>
          <p>
            Address: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed eiusmod tempor incididunt ut. Phone No:844-LEARN-00
            (22-2564-5545)
          </p>
          <p>
            © 2009-2025 – Global Skills. All Rights Reserved. The certification
            names are the trademarks of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CourseDetails;
