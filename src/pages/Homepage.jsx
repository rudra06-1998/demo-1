"use client";
import React from 'react';




const Homepage = () => {




  return (

    <div>

      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/Section.jpg')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col lg:flex-row items-center">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
              We train, certify, and place{" "}
              <span >engineers</span> in{" "}
              <span >cybersecurity</span>,{" "}
              <span >networking</span>, and{" "}
              <span >cloud</span>—ready to deliver from
              <br /> Day One.
            </h1>

            <p className="text-gray-200 max-w-xl">
              Powered by Datacipher – trusted by India’s top enterprises for over
              15 years.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
              <a
                href="#"
                className="bg-lime-300 hover:bg-lime-400 text-black px-6 py-3 rounded-md font-medium text-center"
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
              className="max-h-[450px] object-contain z-10 relative"
            />

            {/* Badges */}
            <div
              className="
      flex flex-col sm:flex-row gap-6 mt-6
      lg:absolute lg:w-full lg:bottom-4 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0
      z-20
    "
            >
              {/* Award Badge */}
              <div className="shadow-lg rounded-md px-4 py-3 text-center text-gray-800 flex items-center justify-center max-w-[200px] sm:max-w-[240px]">
                <img
                  src="/assets/Achievements.png"
                  alt="Achievements"
                  className="w-full h-auto"
                />
              </div>

              {/* Students Badge */}
              <div className="text-white shadow-lg lg:mt-[40px] rounded-md px-4 py-3 text-center flex items-center justify-center max-w-[200px] sm:max-w-[240px]">
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
          <div className="bg-lime-300 flex items-center justify-center p-6">
            <div
              className="bg-white/90 shadow-xl rounded-lg p-8  "
              style={{
                backgroundImage: "url('/assets/6a3acadcade27908fc1f6af9b5a6d3633a82966f.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",

              }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Tracking Progress and Milestones
              </h2>
              <p className="text-gray-600 mb-8">
                Effective progress tracking and milestone setting are critical components of...
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">15+</p>
                  <p className="text-gray-600 text-sm">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600 text-sm">Enterprise Teams</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">100+</p>
                  <p className="text-gray-600 text-sm">Companies Served</p>
                </div>
              </div>

              {/* Button */}
              <a
                href="#"
                className="inline-block bg-lime-300 hover:bg-lime-400 text-black px-6 py-3 rounded-md font-medium"
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

      {/* four images section */}

      <section style={{
        backgroundImage: "url('/assets/f6eed90f6e434cbf7870e3b92cf362c6c6a0c629.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
        className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">

          {/* Left Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <img
              src="/assets/Container (2).png"
              alt="Student 1"
              className="rounded-2xl w-full object-cover"
            />
            <img
              src="/assets/Container (3).png"
              alt="Student 2"
              className="rounded-2xl w-full object-cover"
            />
            <img
              src="/assets/Container (4).png"
              alt="Student 3"
              className="rounded-2xl w-full object-cover"
            />
            <img
              src="/assets/Container (5).png"
              alt="Student 4"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              For 15 Years, We’ve Trained India’s Top Engineers.
            </h2>
            <p className="text-gray-600 mb-8">
              Now, we’re scaling that legacy into a platform where learning leads directly to hiring.
            </p>

            <div className="space-y-8">
              {/* Block 1 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Global Skills was created to close the gap we saw too often
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Global Skills was created to close the gap we saw too often: Certified talent with nowhere to go.
                  Companies stuck with resumes, not readiness. We saw the gap and built Global Skills to close it.
                </p>
              </div>
              <hr className="border-gray-300" />

              {/* Block 2 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  A Platform for Skill, Hire, and Advance
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A unified system that connects learning, hiring, and career growth. A system that is engineered
                  to serve both enterprises and engineers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* three error images section */}

      <section className="relative bg-lime-200 bg-[url('/assets/Green.jpg')] bg-cover bg-center py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What We Do?
          </h2>
          <p className="mt-2 text-gray-700">
            Training. Certification. Placement. All in one powerful system.
          </p>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-8 lg:grid-cols-3">

            {/* Card 1 - Employers */}
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 flex flex-col items-start">
              <img
                src="/assets/Imagess (1).png"
                alt="For Employers"
                className="rounded-xl mb-6 w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">For Employers</h3>
              <p className="mt-2 text-gray-700 text-sm">
                Hire Certified Engineers. Ready from Day One.
              </p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Every engineer is trained through official vendor programs, vetted by
                experts, and deployed with confidence. No ramp-up. No guesswork.
              </p>
              <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                Hire ready engineer →
              </button>
            </div>

            {/* Card 2 - Engineers */}
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 flex flex-col items-start">
              <h3 className="text-lg font-semibold text-gray-900">For Engineers</h3>
              <p className="mt-2 text-gray-700 text-sm font-medium">
                Learn. Certify. Get placed. Grow.
              </p>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                We deliver licensed training from global tech vendors—Palo Alto,
                Juniper, and more. Certified instructors. Real lab experience. Direct
                career pathways.
              </p>
              <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                placement support for engineers →
              </button>

              {/* Inner sub-card */}
              <div className="mt-6">
                <img
                  src="/assets/Imagess (2).png"
                  alt="Engineer"
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>

            {/* Card 3 - Future Engineers */}
            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-2xl p-6 flex flex-col items-start">
              <img
                src="/assets/Imagess (3).png"
                alt="For Future Engineers"
                className="rounded-xl mb-6 w-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">For Future Engineers</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Not all freshers are ready for high-stakes certifications. That’s why
                we’re creating vendor-neutral, industry-aligned training in networking,
                security, and IT infrastructure fundamentals — built to prepare you
                before certification.
              </p>
              <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                foundational training programs →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by india's */}

      <section className="bg-[#f1f7fd] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Trusted by India’s <br className="hidden sm:block" />
            Most Demanding Enterprises
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our training division, Datacipher Education Services has delivered enterprise-grade programs to over 500 teams in banking, telecom, infrastructure, and IT services. That same trusted engine now powers Global Skills.
          </p>

          {/* Logos Grid */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "/assets/Placeholder Company Logoss.png",
              "/assets/Placeholder Company Logos (1).png",
              "/assets/Placeholder Company Logos (2).png",
              "/assets/Placeholder Company Logos (3).png",
              "/assets/Placeholder Company Logos (4).png",
              "/assets/Placeholder Company Logos (5).png",
              "/assets/Placeholder Company Logos (6).png",
              "/assets/Placeholder Compan.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white rounded-2xl border border-gray-200 p-6 h-28"
              >
                <img
                  src={logo}
                  alt={`Enterprise logo ${i + 1}`}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium flex items-center justify-center gap-2 mx-auto hover:bg-gray-800 transition">
              See How We Train Enterprise Teams →
            </button>
          </div>

        </div>
      </section>

      {/* Enterprises Don’t */}
      <section className="bg-[#d7ff3f] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Enterprises Don’t Just Choose Us. <br className="hidden sm:block" />
            They Come Back.
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base">
            We’ve helped hundreds of engineering teams level up – faster.
            <br />
            From on-demand certified engineers to custom enterprise training programs,
            Global Skills delivers the kind of talent companies want to keep coming back to.
          </p>

          {/* Features Grid */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "/assets/Frame.png",
                text: "Engineers deployed at leading banks, telecom giants, and IT providers."
              },
              {
                icon: "/assets/Frame (1).png",
                text: "Official, authorised training delivered to 500+ enterprise teams."
              },
              {
                icon: "/assets/Frame (2).png",
                text: "Trusted by 100+ companies across India’s most critical sectors."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center text-center"
              >
                {/* Icon from public/assets */}
                <div className=" w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <img src={item.icon} alt="icon" className="w-12 h-12 object-contain" />
                </div>
                {/* Text */}
                <p className="text-gray-900 font-medium">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Let’s Build */}
      <section style={{
        backgroundImage: "url('/assets/f6eed90f6e434cbf7870e3b92cf362c6c6a0c629.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }} className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* Top Small Text */}
          <p className="text-sm font-medium text-lime-500 mb-2">
            Let’s Build What’s Next Together
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Whether you’re hiring for high-impact roles or launching
            <br className="hidden sm:block" />
            your tech career, Global Skills gets you there.
          </h2>

          {/* Image */}
          <div className="mt-8">
            <img
              src="/assets/asdw.png" // <-- put your image inside public/assets
              alt="Team"
              className="rounded-2xl shadow-md mx-auto w-full max-w-4xl"
            />
          </div>

          {/* Subtext */}
          <p className="mt-8 text-gray-700 text-base sm:text-lg">
            Training that counts. Talent that delivers.
            <br />
            Careers that grow.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              Hire Job-Ready Engineers →
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              Start Your Tech Career →
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 transition"
            >
              I’m Exploring My Options →
            </a>
          </div>

        </div>
      </section>

      {/* footer */}

      <footer style={{ backgroundColor: "#333333" }} className=" text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Left Section: Logo + About + CTA */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/assets/whitelogo.png" alt="Global Skills" className="w-32 h-9" />
              {/* <span className="text-white font-bold text-lg">global skills</span> */}
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Global Skills was founded to close the gap between certification and
              contribution. Too often, engineers graduate with credentials but lack
              real-world readiness.
            </p>
            <a
              href="#"
              className="inline-block bg-lime-400 text-gray-900 font-medium px-6 py-3 rounded-md shadow hover:bg-lime-500 transition"
            >
              Start Your Tech Career →
            </a>
          </div>

          {/* Employers */}
          <div>
            <h4 className="text-white font-semibold mb-4">Employers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Hire Certified Engineers</a></li>
              <li><a href="#" className="hover:text-white">Hire AI Engineers</a></li>
              <li><a href="#" className="hover:text-white">Hire Palo Alto Engineers</a></li>
              <li><a href="#" className="hover:text-white">Hire Juniper Engineers</a></li>
              <li><a href="#" className="hover:text-white">Hire Programmers</a></li>
              <li><a href="#" className="hover:text-white">Hire Semiconductor</a></li>
              <li><a href="#" className="hover:text-white">Chip Design Engineers</a></li>
            </ul>
          </div>

          {/* Skills Training */}
          <div>
            <h4 className="text-white font-semibold mb-4">Skills Training</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Artificial Intelligence Skills</a></li>
              <li><a href="#" className="hover:text-white">Software Programming</a></li>
              <li><a href="#" className="hover:text-white">Networking Skills</a></li>
              <li><a href="#" className="hover:text-white">Cybersecurity Skills</a></li>
              <li><a href="#" className="hover:text-white">Semiconductor Chip Design Skills</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <img src="/assets/Vector (1).png" />
                <span>The Platina, Gachibowli, Hyderabad, INDIA</span>
              </li>
              <li className="flex items-start space-x-2">
                <img src="/assets/Vector (1).png" />
                <span>3800 N Lamar Blvd, Austin, Texas, USA</span>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/Vector (2).png" />
                <a href="tel:18008892877" className="hover:text-white">1800-8892-877</a>
              </li>
              <li className="flex items-center space-x-2">
                <img src="/assets/Vector (3).png" />
                <a href="mailto:hello@globalskills.net" className="hover:text-white">hello@globalskills.net</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row md:items-center md:justify-between p-26">
          {/* Left Side */}
          <p className="text-sm text-center md:text-left">
            © Copyright 2025. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex justify-center md:justify-end space-x-6 mt-4 md:mt-0 text-xl">
            <img src="/assets/Vector (4).png" className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <img src="/assets/Vector (5).png" className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <img src="/assets/Vector (6).png" className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <img src="/assets/Vector (7).png" className="w-5 h-5 cursor-pointer hover:opacity-80" />
          </div>
        </div>

      </footer>









    </div>
  );
};

export default Homepage;
