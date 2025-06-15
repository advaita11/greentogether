import React, { useState, useEffect } from "react";
import bgImage from "./assets/background.jpg"; // Ensure this image exists in your project
import drive1 from "./assets/ddn1.jpg";
import drive2 from "./assets/ddn2.jpg";
import drive3 from "./assets/ddn3.jpg";
import drive4 from "./assets/ddn4.jpg";
import drive5 from "./assets/ddn5.jpg";
import drive6 from "./assets/ddn6.jpg";
import groupPhoto from "./assets/grpphoto.jpg"; // Add your group image here
import donationPreview from "./assets/donation.jpg"; // Add an image for preview

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [hoveringDonate, setHoveringDonate] = useState(false);
  const [showFlyout, setShowFlyout] = useState(false);
  const [hoverMessage, setHoverMessage] = useState("");
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonPosition, setComingSoonPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleOverlayClick = (e) => {
    if (e.target.id === "flyout-overlay") {
      setShowFlyout(false);
    }
  };

  const handleComingSoonHover = (e, message) => {
    const rect = e.target.getBoundingClientRect();
    setComingSoonPosition({ top: rect.top + window.scrollY - 40, left: rect.left + rect.width / 2 });
    setHoverMessage(message);
    setShowComingSoon(true);
  };

  const handleComingSoonLeave = () => {
    setShowComingSoon(false);
  };

  return (
    <main className={`font-sans ${darkMode ? "bg-gray-900 text-white" : "text-gray-800 bg-white"}`}>
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-green-600 text-white px-4 py-2 rounded-2xl shadow hover:bg-green-700 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Hero Section with Background Image */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-start items-center text-center px-4 pt-32"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-60 p-6 rounded-xl max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-green-700 dark:text-green-300">GreenTogether</h1>
          <p className="mt-4 text-xl md:text-2xl text-green-900 dark:text-green-200 max-w-xl">
            Uniting Hearts for a Greener Tomorrow
          </p>
          <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
            A community of changemakers working to protect the planet and uplift local lives.
          </p>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white dark:bg-gray-800 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center text-green-700 dark:text-green-300 mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-3xl leading-relaxed text-gray-800 dark:text-white">
              At <span className="text-green-700 dark:text-green-300 font-semibold">GreenTogether</span>, we believe that real change starts in our neighborhoods. Our mission is to foster awareness,
              action, and accountability for environmental sustainability and social well-being. From <span className="italic">tree-planting drives</span> to
              <span className="italic"> clean-up campaigns</span> and <span className="italic">education workshops</span>, we’re building a future where people and the planet thrive together.
            </p>
          </div>
          <div>
            <img src={groupPhoto} alt="Our Team" className="rounded-2xl shadow-lg w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Plantation Drive Gallery */}
      <section className="py-16 bg-green-50 dark:bg-gray-900 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-green-700 dark:text-green-300 mb-8">Plantation Drives</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          {[drive1, drive2, drive3, drive4, drive5, drive6].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Drive ${i + 1}`}
              className="rounded-2xl shadow-lg object-cover h-72 w-full hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 bg-green-50 dark:bg-gray-900 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-semibold text-green-700 dark:text-green-300 mb-8">Our Causes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {[
            { icon: "🌱", title: "Climate Action" },
            { icon: "♻️", title: "Waste Management & Recycling" },
            { icon: "📚", title: "Community Education" },
            { icon: "💧", title: "Clean Water Access" },
            { icon: "❤️", title: "Health & Hygiene Drives" },
          ].map((cause) => (
            <div
              key={cause.title}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md border border-green-200 dark:border-green-500"
            >
              <div className="text-4xl mb-2">{cause.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">{cause.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 bg-white dark:bg-gray-800 px-6 md:px-20 text-center relative">
        <h2 className="text-3xl font-semibold text-green-700 dark:text-green-300 mb-4">Get Involved</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200 mb-8">
          Your time, skills, or a simple share can make a difference.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {["Volunteer with us", "Donate to our campaign", "Host a local event"].map((item) => (
            <div
              key={item}
              className="relative bg-green-100 dark:bg-green-700 px-6 py-4 rounded-2xl shadow text-green-800 dark:text-white font-medium hover:bg-green-200 dark:hover:bg-green-600 transition cursor-pointer"
              onMouseEnter={(e) => {
                if (item === "Volunteer with us" || item === "Host a local event") {
                  handleComingSoonHover(e, "Coming Soon!");
                } else if (item === "Donate to our campaign") {
                  setHoveringDonate(true);
                }
              }}
              onMouseLeave={() => {
                handleComingSoonLeave();
                setHoveringDonate(false);
              }}
              onClick={(e) => {
                if (item === "Donate to our campaign") {
                  setShowFlyout(true);
                } else {
                  e.preventDefault();
                }
              }}
            >
              {item}
              {item === "Donate to our campaign" && hoveringDonate && (
                <img
                  src={donationPreview}
                  alt="Donation Preview"
                  className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-48 rounded-xl shadow-lg border border-green-500"
                />
              )}
            </div>
          ))}
        </div>

        {showComingSoon && (
          <div
            className="absolute z-40 px-4 py-2 bg-yellow-100 border border-yellow-500 text-yellow-800 rounded-xl shadow"
            style={{ top: comingSoonPosition.top, left: comingSoonPosition.left, transform: "translateX(-50%)" }}
          >
            {hoverMessage}
          </div>
        )}

        {/* Flyout */}
        {showFlyout && (
          <div
            id="flyout-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleOverlayClick}
          >
            <div
              className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-2xl p-6 shadow-lg w-[90%] sm:w-1/2 max-w-xl relative"
              onClick={(e) => e.stopPropagation()} // ⛔ prevent closing flyout on internal click
            >
              <button
                onClick={() => setShowFlyout(false)}
                className="absolute top-2 right-4 text-xl text-gray-600 dark:text-gray-300 hover:text-red-500"
              >
                ✖
              </button>
              <h3 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">Support Our Campaign</h3>
              <p className="mb-4">
                Your generous donations help us run awareness programs, sponsor local drives, and provide green kits to
                volunteers. Even a small contribution goes a long way.
              </p>
              <a
                href={donationPreview}
                download="GreenTogether-Donation.jpg"
                onClick={(e) => e.stopPropagation()} // ⛔ prevent closing on image click
              >
                <img
                  src={donationPreview}
                  alt="Support Preview"
                  className="w-full rounded-xl border border-green-400 cursor-pointer"
                />
              </a>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 text-center">
        <p className="text-sm">© 2025 GreenTogether Community. All rights reserved.</p>
        <div className="mt-2 flex flex-col sm:flex-row justify-center gap-4 items-center text-sm">
          <a href="#" className="hover:underline">Instagram</a>
          <a href="mailto:support@green2gether.in" className="hover:underline">Email Us</a>
          <a href="https://www.linkedin.com/in/ujjwal-chhibber/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
