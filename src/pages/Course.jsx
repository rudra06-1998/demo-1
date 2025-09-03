"use client";
import React, { useMemo, useState } from "react";
// import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

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

const CATEGORIES = [
  "Most Popular",
  "Generative AI",
  "AI & Machine Learning",
  "Data Science & Business Analytics",
  "Project Management",
  "Cyber Security",
  "Agile and Scrum",
  "Cloud Computing & DevOps",
  "Business and Leadership",
  "Software Development",
  "Product and Design",
  "IT Service and Architecture",
  "Quality Management",
  "Digital Marketing",
];

// sample courses (map categories however you like)
const ALL_COURSES = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Certified Investment Banking Operations Professional",
  duration: "3 or 6 Months | Classroom or Live Online Training",
  job: "100% Job Assurance",
  batches: "1200+ Batches Completed",
  placements: "36000+ Placements",
  // swap for your own images in /public/assets/
  image:
    i % 3 === 0
      ? "/assets/Certified Investment Banking Operations Professional.png"
      : i % 3 === 1
      ? "/assets/Certified Investment Banking Operations Professional (1).png"
      : "/assets/Certified Investment Banking Operations Professional (2).png",
  category:
    i % 6 === 0
      ? "Generative AI"
      : i % 6 === 1
      ? "AI & Machine Learning"
      : i % 6 === 2
      ? "Project Management"
      : i % 6 === 3
      ? "Cyber Security"
      : i % 6 === 4
      ? "Cloud Computing & DevOps"
      : "Most Popular",
}));

/** ---------- icons (inline SVG, no extra deps) ---------- */
const ChevronDown = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckCircle = ({ className = "w-4 h-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <circle cx="12" cy="12" r="9" strokeWidth="1.6" />
    <path
      d="M8 12l2.5 2.5L16 9"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRight = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
    <path d="M10.293 15.707a1 1 0 010-1.414L12.586 12H4a1 1 0 110-2h8.586l-2.293-2.293a1 1 0 111.414-1.414l4.243 4.243a1 1 0 010 1.414l-4.243 4.243a1 1 0 01-1.414 0z" />
  </svg>
);

const Course = () => {
  const [activeCategory, setActiveCategory] = useState("Most Popular");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const router = useRouter();
  // filter (keep static if you don't need it)
  const filtered = useMemo(() => {
    if (activeCategory === "Most Popular") return ALL_COURSES;
    return ALL_COURSES.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const start = (page - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  const go = (p) => setPage((prev) => Math.min(Math.max(p, 1), totalPages));

  const handleClick = (course) => {
    console.log("handleClick", course);
    router.push("/course-details");
  };

  return (
    <div>
      {/* //1-- */}
      <div className="bg-white">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-12 py-16 gap-10">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] leading-snug">
              Unlock Unlimited Live <br /> Classes for Your Workforce
            </h2>

            <ul className="mt-6 space-y-3 text-lg text-gray-700">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                {/* <span className="text-green-600 font-bold">✔</span> */}
                <img src="/assets/tick.png" alt="" />
                <span>
                  <span className="font-semibold">700+</span> Live classes
                  monthly
                </span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <img src="/assets/tick.png" alt="" />
                <span>
                  <span className="font-semibold">550+</span> Learning solutions
                </span>
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <img src="/assets/tick.png" alt="" />
                <span>
                  <span className="font-semibold">100+</span> Hands-on projects
                  with labs
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <img
              src="/assets/newus3.jpg.png"
              alt="Workforce Training"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Alumni Section */}
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
      </div>
      {/* //1-- */}
      {/* //2-- */}

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Heading */}
          <header className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#333333]">
              Learn using a <span className="text-[#333333]">curriculum</span>{" "}
              built by industry
            </h2>
            <p className="mt-2 text-gray-500">
              Designed to meet market demands and propel your career success
            </p>
          </header>

          {/* Mobile filter trigger */}
          <div className="lg:hidden mb-5">
            <button
              onClick={() => setMobileOpen((s) => !s)}
              className="w-full flex items-center justify-between bg-black text-white px-4 py-3 rounded-md"
            >
              <span className="font-medium">{activeCategory}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {mobileOpen && (
              <ul className="mt-2 border rounded-md bg-white overflow-hidden">
                {CATEGORIES.map((c) => (
                  <li key={c}>
                    <button
                      onClick={() => {
                        setActiveCategory(c);
                        setMobileOpen(false);
                        setPage(1);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === c
                          ? "bg-gray-100 text-[#333333] font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* main layout */}
          <div className="flex gap-6">
            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className=" rounded-xl bg-white overflow-hidden ">
                {/* <div className="flex items-center justify-between bg-black text-white px-4 py-3">
            <span className="font-medium">Most Popular</span>
            <ChevronDown className="w-4 h-4 opacity-90" />
          </div> */}

                <ul className="py-2">
                  {CATEGORIES.map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => {
                          setActiveCategory(c);
                          setPage(1);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition ${
                          activeCategory === c
                            ? "bg-black text-white px-4 py-3 font-medium rounded-md"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {activeCategory === c ? (
                          <div className="flex items-center justify-between ">
                            {" "}
                            {c} <ChevronDown className="w-4 h-4 opacity-90" />
                          </div>
                        ) : (
                          c
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Cards grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {pageItems.map((course) => (
                  <article
                    key={course.id}
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
                  >
                    {/* image + ribbon */}
                    <div className="relative">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-40 md:h-44 xl:h-48 object-cover"
                      />
                      <span className="absolute bottom-2 left-2 text-[11px] md:text-xs bg-white/95 text-gray-800 border border-gray-200 px-2 py-1 rounded shadow-sm">
                        {course.duration}
                      </span>
                    </div>

                    {/* body */}
                    <div className="p-4 md:p-5">
                      <h3 className="text-[15px] md:text-base font-semibold text-[#333333] leading-snug">
                        {course.title}
                      </h3>

                      <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-gray-500" />
                          {course.job}
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-gray-500" />
                          {course.batches}
                        </li>
                        <li>
                          <span className="font-semibold text-gray-800">
                            {course.placements}
                          </span>
                          {/* thin highlight bar */}
                          <div className="mt-1 h-2 rounded-full bg-gray-100 overflow-hidden">
                            <div className="h-2 w-1/3 bg-blue-100" />
                          </div>
                        </li>
                      </ul>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() => handleClick(course)}
                          type="button"
                          className="flex-1 rounded-full border border-gray-300 bg-white text-[#333333] text-sm font-medium py-2.5 hover:bg-gray-50 cursor-pointer"
                        >
                          Apply Now
                        </button>
                        <button
                          type="button"
                          className="flex-1 rounded-full bg-[#333333] text-white text-sm font-medium py-2.5 hover:bg-black flex items-center justify-center gap-2"
                        >
                          Know More <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <nav className="mt-8 flex justify-center items-center gap-2">
                <button
                  onClick={() => go(page - 1)}
                  disabled={page === 1}
                  className="px-3.5 py-2 border border-gray-300 rounded-md text-sm bg-white text-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                {Array.from(
                  { length: Math.min(totalPages, 6) },
                  (_, i) => i + 1
                ).map((n) => (
                  <button
                    key={n}
                    onClick={() => go(n)}
                    className={`px-3.5 py-2 rounded-md text-sm border transition ${
                      page === n
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {n}
                  </button>
                ))}

                {totalPages > 6 && (
                  <>
                    <span className="px-2 text-gray-500">…</span>
                    <button
                      onClick={() => go(totalPages)}
                      className="px-3.5 py-2 rounded-md text-sm border bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
                    >
                      {totalPages}
                    </button>
                  </>
                )}

                <button
                  onClick={() => go(page + 1)}
                  disabled={page === totalPages}
                  className="px-3.5 py-2 border border-gray-300 rounded-md text-sm bg-white text-black hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* //2-- */}

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

export default Course;
