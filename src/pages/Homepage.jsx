"use client";
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

const Homepage = () => {
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
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Section.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="w-full lg:w-3/4 text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-Outfit  Sans-serif font-bold">
              We train, certify, and place engineers in cybersecurity,
              networking, and cloud —ready to deliver from Day One.
            </h1>

            <p className="text-gray-200 max-w-xl">
              Powered by Datacipher – trusted by India’s top enterprises for
              over 15 years.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <a
                href="#"
                className="bg-[#d5f952] hover:bg-[#d5f952] text-black px-6 py-3 rounded-md font-medium text-center"
              >
                Hire Job-Ready Engineers
              </a>
              <a
                href="#"
                className="flex items-center justify-center text-white font-medium hover:underline"
              >
                Start Your Tech Career →
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex flex-col items-center relative">
            <img
              src="/assets/Hero Girl Image.png"
              alt="Student"
              className="max-h-[600px] object-contain z-10 relative"
            />

            {/* Badges */}
            <div className="flex flex-col sm:flex-row gap-6 mt-6 lg:absolute lg:w-full lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 z-20">
              {/* Award Badge */}
              <div className=" px-4 py-3 text-center text-gray-800 flex items-center justify-center max-w-[200px] sm:max-w-[240px]">
                <img
                  src="/assets/Achievements.png"
                  alt="Achievements"
                  className="w-full h-auto"
                />
              </div>

              {/* Students Badge */}
              <div className="text-white  lg:mt-[40px]  px-4 py-3 text-center flex items-center justify-center max-w-[200px] sm:max-w-[240px]">
                <img
                  src="/assets/Trusted Image.png"
                  alt="Trusted Students"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tracking progress */}
      <section className=" ">
        <div className="max-w-full mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side with Lime Background */}
          <div className="bg-[#d5f952] flex items-center justify-center p-6">
            <div
              className="bg-white/90 shadow-xl rounded-lg p-8  "
              style={{
                backgroundImage:
                  "url('/assets/6a3acadcade27908fc1f6af9b5a6d3633a82966f.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#333333] mb-4">
                Tracking Progress and Milestones
              </h2>
              <p className="text-gray-600 mb-8">
                Effective progress tracking and milestone setting are critical
                components of...
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#333333]">15+</p>
                  <p className="text-gray-600 text-sm">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#333333]">500+</p>
                  <p className="text-gray-600 text-sm">Enterprise Teams</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#333333]">100+</p>
                  <p className="text-gray-600 text-sm">Companies Served</p>
                </div>
              </div>

              {/* Button */}
              <a
                href="#"
                className="inline-block bg-[#d5f952] hover:bg-[#d5f952] text-black px-6 py-3 rounded-md font-medium"
              >
                Know More →
              </a>
            </div>
          </div>

          <img
            src="/assets/Image.png"
            alt="Students working"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* three error images section */}

      {/* <section className="relative bg-lime-200 bg-[url('/assets/Green.jpg')] bg-cover bg-center py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
       
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333]">
            What We Do?
          </h2>
          <p className="mt-2 text-gray-700">
            Training. Certification. Placement. All in one powerful system.
          </p>

          
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
           
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 flex flex-col items-start">
              <img
                src="/assets/Imagess (1).png"
                alt="For Employers"
                className="rounded-xl mb-6 w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-[#333333]">
                For Employers
              </h3>
              <p className="mt-2 text-gray-700 text-sm">
                Hire Certified Engineers. Ready from Day One.
              </p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Every engineer is trained through official vendor programs,
                vetted by experts, and deployed with confidence. No ramp-up. No
                guesswork.
              </p>
              <button className="mt-4 bg-[#333333] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                Hire ready engineer →
              </button>
            </div>

           
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 flex flex-col items-start">
              <h3 className="text-lg font-semibold text-[#333333]">
                For Engineers
              </h3>
              <p className="mt-2 text-gray-700 text-sm font-medium">
                Learn. Certify. Get placed. Grow.
              </p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                We deliver licensed training from global tech vendors—Palo Alto,
                Juniper, and more. Certified instructors. Real lab experience.
                Direct career pathways.
              </p>
              <button className="mt-4 bg-[#333333] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                placement support for engineers →
              </button>

              
              <div className="mt-6">
                <img
                  src="/assets/Imagess (2).png"
                  alt="Engineer"
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>

           
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 flex flex-col items-start">
              <img
                src="/assets/Imagess (3).png"
                alt="For Future Engineers"
                className="rounded-xl mb-6 w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-[#333333]">
                For Future Engineers
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Not all freshers are ready for high-stakes certifications.
                That’s why we’re creating vendor-neutral, industry-aligned
                training in networking, security, and IT infrastructure
                fundamentals — built to prepare you before certification.
              </p>
              <button className="mt-4 bg-[#333333] text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                foundational training programs →
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <section className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div>
            <img
              src="/assets/global-skills-datacenter-young-girl-1024x768.jpeg" // replace with your image path
              alt="Engineer"
              className="w-full rounded-xl shadow-md object-cover aspect-[3/4] md:aspect-[4/5]"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#333333] leading-snug">
              For 15 Years, We’ve Trained India’s Top Engineers.
            </h1>
            <p className="mt-3 text-lg text-gray-600">
              Now, we’re scaling that legacy into a platform where learning
              leads directly to hiring.
            </p>

            {/* First block */}
            <div className="mt-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-15 w-15 rounded-full bg-[#333333] flex items-center justify-center">
                  {/* 01_Home_01-6   01_Home_01-5*/}
                  <img
                    src="/assets/01_Home_01-5.png" // replace with your image path
                    alt="icon"
                    className="w-[90%] rounded-xl "
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#333333]">
                  Global Skills Was Created To Close The Gap We Saw Too Often
                </h3>
                <p className="mt-1 text-gray-600 text-base">
                  Global Skills was created to close the gap we saw too often:
                  Certified talent with nowhere to go. Companies stuck with
                  resumes, not readiness. We saw the gap and built Global Skills
                  to close it.
                </p>
              </div>
            </div>

            {/* Second block */}
            <div className="mt-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-15 w-15 rounded-full bg-[#333333] flex items-center justify-center">
                  {/* 01_Home_01-6   01_Home_01-5*/}
                  <img
                    src="/assets/01_Home_01-6.png" // replace with your image path
                    alt="icon"
                    className="w-[90%] rounded-xl "
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#333333]">
                  A Platform For Skill, Hire, And Advance
                </h3>
                <p className="mt-1 text-gray-600 text-base">
                  A unified system that connects learning, hiring, and career
                  growth. A system that is engineered to serve both enterprises
                  and engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training. Certification. */}

   <section className="bg-[#0d0c0f] py-24">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      What We Do?
    </h2>
    <p className="text-gray-300 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
      Training. Certification. Placement. All in one powerful system.
    </p>

    {/* Cards Grid */}
    <div className="grid gap-10 md:grid-cols-3">
      {/* Card 1 */}
      <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden h-full">
        <img
          src="/assets/789822-1024x683.webp"
          alt="For Employers"
          className="block w-full h-72 object-cover"
        />
        <div className="p-8 flex flex-col flex-1 text-left">
          <h3 className="text-3xl font-bold mb-4 text-black">For Employers</h3>
          <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-base">
            <span className="font-semibold">
              Hire Certified Engineers. Ready from Day One.
            </span><br/><br/>
            Every engineer is trained through official vendor programs, vetted
            by experts, and deployed with confidence. No ramp-up. No guesswork.
          </p>
          <button className="mt-auto bg-[#d5f952] text-black font-bold py-4 px-6 rounded-xl hover:bg-lime-300 transition text-base">
            Hire Ready Engineer →
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden h-full">
        <img
          src="/assets/101882.webp"
          alt="For Engineers"
          className="block w-full h-72 object-cover"
        />
        <div className="p-8 flex flex-col flex-1 text-left">
          <h3 className="text-3xl font-bold mb-4 text-black">For Engineers</h3>
          <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-base">
            <span className="font-semibold">Learn. Certify. Get placed. Grow.</span><br/><br/>
            We deliver licensed training from global tech vendors — Palo Alto,
            Juniper, and more. Certified instructors. Real lab experience. Direct
            career pathways.
          </p>
          <button className="mt-auto bg-[#d5f952] text-black font-bold py-4 px-6 rounded-xl hover:bg-lime-300 transition text-base">
            Placement Support For Engineers →
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden h-full relative">
        {/* Coming Soon Badge */}
        <div className="absolute top-6 right-6 bg-[#d5f952] text-black px-4 py-2 rounded-lg font-bold text-sm shadow">
          Coming Soon
        </div>

        <img
          src="/assets/16287.webp"
          alt="For Future Engineers"
          className="block w-full h-72 object-cover"
        />
        <div className="p-8 flex flex-col flex-1 text-left">
          <h3 className="text-3xl font-bold mb-4 text-black">For Future Engineers</h3>
          <br/>
          <p className="text-gray-600 mb-6 flex-1 leading-relaxed text-base">
            Not all freshers are ready for high-stakes certifications. That’s why
            we’re creating vendor-neutral, industry-aligned training in networking,
            security, and IT infrastructure fundamentals — built to prepare you
            before certification.
          </p>
          <button className="mt-auto bg-[#d5f952] text-black font-bold py-4 px-6 rounded-xl hover:bg-lime-300 transition text-base">
            Foundational Training Programs →
          </button>
        </div>
      </div>
    </div>
  </div>
</section>




      <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Left Auto Scrolling Logos (60% on large screens) */}
          <div
            ref={scrollRef}
            className="lg:col-span-3 overflow-x-auto overflow-y-hidden whitespace-nowrap w-full py-4"
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

          {/* Right Content (40% on large screens) */}
          <div className="lg:col-span-2 md:w-[90%]">
            <div className="flex items-center text-[#707070] font-semibold text-lg mb-2">
              <div className="w-20 h-[1px] bg-[#707070] mr-3"></div>
              Our Clients
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] leading-snug">
              Trusted by India’s Most Demanding Enterprises
            </h2>

            <p className="mt-4 text-[#777777] text-base md:text-[16px] tracking-wider leading-relaxed">
              Our training division, Datacipher Education Services has delivered
              enterprise-grade programs to over 500 teams in banking, telecom,
              infrastructure, and IT services. That same trusted engine now
              powers Global Skills.
            </p>

            <button className="mt-6 bg-[#d5f952] hover:bg-[#d5f952]  text-[#333333] font-medium px-6 py-3 rounded-md shadow-md transition">
              <p className=" font-bold"> See How We Train Enterprise Teams →</p>
            </button>
          </div>
        </div>
      </section>

      {/* <section className="bg-[#d7ff3f] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
         
          <h2 className="text-3xl sm:text-4xl font-bold text-[#333333]">
            Enterprises Don’t Just Choose Us. <br className="hidden sm:block" />
            They Come Back.
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            We’ve helped hundreds of engineering teams level up – faster.
            <br />
            From on-demand certified engineers to custom enterprise training
            programs, Global Skills delivers the kind of talent companies want
            to keep coming back to.
          </p>

          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "/assets/Frame.png",
                text: "Engineers deployed at leading banks, telecom giants, and IT providers.",
              },
              {
                icon: "/assets/Frame (1).png",
                text: "Official, authorised training delivered to 500+ enterprise teams.",
              },
              {
                icon: "/assets/Frame (2).png",
                text: "Trusted by 100+ companies across India’s most critical sectors.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
              >
                
                <div className=" w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-12 h-12 object-contain"
                  />
                </div>
               
                <p className="text-[#333333] font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Let’s Build */}
      {/* <section
        style={{
          backgroundImage:
            "url('/assets/f6eed90f6e434cbf7870e3b92cf362c6c6a0c629.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-gray-50 py-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-medium text-lime-500 mb-2">
            Let’s Build What’s Next Together
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#333333]">
            Whether you’re hiring for high-impact roles or launching
            <br className="hidden sm:block" />
            your tech career, Global Skills gets you there.
          </h2>

          <div className="mt-8">
            <img
              src="/assets/asdw.png"
              alt="Team"
              className="rounded-2xl shadow-md mx-auto w-full max-w-4xl"
            />
          </div>

          
          <p className="mt-8 text-gray-700 text-base sm:text-lg">
            Training that counts. Talent that delivers.
            <br />
            Careers that grow.
          </p>

          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-[#333333] text-white rounded-lg shadow-md hover:bg-[#333333] transition"
            >
              Hire Job-Ready Engineers →
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-[#333333] text-white rounded-lg shadow-md hover:bg-[#333333] transition"
            >
              Start Your Tech Career →
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-[#333333] text-white rounded-lg shadow-md hover:bg-[#333333] transition"
            >
              I’m Exploring My Options →
            </a>
          </div>
        </div>
      </section> */}

      <section className="bg-gradient-to-b from-gray-100 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              Enterprises Don’t Just Choose Us. They Come Back.
            </h2>
            <p className="text-gray-600 mb-4">
              We’ve helped hundreds of engineering teams level up - faster.
            </p>
            <p className="text-gray-600 mb-4">
              From on-demand certified engineers to custom enterprise training
              programs, Global Skills delivers the kind of talent companies want
              to keep coming back to.
            </p>
            <p className="text-gray-600 mb-6">
              We are not just a vendor. We are a partner in performance. From
              the classroom to the command line.
            </p>

            <button className="bg-[#d5f952] text-black font-semibold px-6 py-4 rounded-lg shadow hover:bg-lime-300 transition ">
              Get In Touch →
            </button>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="flex items-center bg-white rounded-xl shadow p-6">
              <div className="flex-shrink-0 bg-[#d5f952] rounded-full p-3">
                {/* Icon */}
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-4 text-gray-800 font-medium p-4">
                Engineers Deployed At Leading Banks, Telecom Giants, And IT
                Providers.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex items-center bg-white rounded-xl shadow p-6">
              <div className="flex-shrink-0 bg-[#d5f952] rounded-full p-3">
                {/* Icon */}
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-3-3h-4m-6 5h6m-6 0a3 3 0 01-3-3V7a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3m-6 0H7a3 3 0 01-3-3v-2h5"
                  />
                </svg>
              </div>
              <p className="ml-4 text-gray-800 font-medium p-4">
                Official, Authorised Training Delivered To 500+ Enterprise
                Teams.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex items-center bg-white rounded-xl shadow p-6">
              <div className="flex-shrink-0 bg-[#d5f952] rounded-full p-3">
                {/* Icon */}
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className="ml-4 text-gray-800 font-medium p-4">
                Trusted By 100+ Companies Across India’s Most Critical Sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* half green screen created by me */}
     <section className="relative w-full px-4 sm:px-6 lg:px-8 py-12">
  <div className="bg-[#d5f952] relative max-w-6xl mx-auto rounded-lg flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 p-6 md:p-10">
    
    {/* Left Side */}
    <div className="w-full md:w-2/3 text-center md:text-left">
      <p className="text-black text-lg md:text-xl font-medium mb-2">
        Let’s Build What’s Next Together
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
        Whether you're an engineer looking to break into AI or an employer
        who needs AI talent that’s ready to deploy, Global Skills gets you
        there.
      </h2>
    </div>

    {/* Right Side Buttons */}
    <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-4">
      <p className="text-black text-lg md:text-2xl text-center md:text-left font-medium md:w-[90%]">
        Training that counts. Talent that delivers. Careers that grow.
      </p>

      <div className="flex flex-col gap-3 w-full">
        <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center justify-center md:justify-start gap-2 hover:bg-[#333333] transition w-full md:w-auto">
          Hire Job-Ready Engineers
          <span className="text-xl">→</span>
        </button>

        <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center justify-center md:justify-start gap-2 hover:bg-[#333333] transition w-full md:w-auto">
          Start Your Tech Career
          <span className="text-xl">→</span>
        </button>

        <button className="bg-black text-[#d5f952] font-semibold px-6 py-4 rounded-md flex items-center justify-center md:justify-start gap-2 hover:bg-[#333333] transition w-full md:w-auto">
          I'm Exploring My Options
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  </div>
</section>


      {/* footer */}

       <footer className="bg-[#333333] text-gray-200 py-12 md:p-20">
              <div  className="max-w-9xl  mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10  ">
                {/* Column 1: Logo + Text */}
                <div className="">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <img src="/assets/whitelogo.png" alt="img" />
                  </h2>
                  <p className="mt-4 md:text-1xl leading-relaxed text-gray-300 max-w-xs">
                    Global Skills was founded to close the gap between certification
                    and contribution. Too often, engineers graduate with credentials
                    but lack real-world readiness.
                  </p>
                  <button className="mt-6 bg-[#d5f952] text-black font-semibold px-5 py-3 rounded-md flex items-center gap-2 hover:bg-[#d5f952] transition">
                    Start Your Tech Career →
                  </button>
                </div>
      
                {/* Column 2: Employers */}
                <div className="">
                  <h3 className="text-lg font-semibold text-white mb-3">Employers</h3>
                  <div className="h-[2px] w-14 bg-[#d5f952] mb-4"></div>
                  <ul className="space-y-2 text-gray-300 md:text-1xl">
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
                  <ul className="space-y-2 text-gray-300  md:text-1xl">
                    <li>Artificial Intelligence Skills</li>
                    <li>Software Programming</li>
                    <li>Networking Skills</li>
                    <li>Cybersecurity Skills</li>
                    <li>Semiconductor Chip Design Skills</li>
                  </ul>
                </div>
      
                {/* Column 4: Contact Info */}
                <div className="bg-[#d5f952] text-black p-12 rounded-md ">
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

export default Homepage;
