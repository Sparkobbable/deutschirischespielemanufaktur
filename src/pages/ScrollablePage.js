import React, { useRef } from "react";
import Home from "./home/Home";
import About from "./about/About";
import Idea from "./idea/Idea";
import Rules from "./rules/Rules";
import Order from "./order/Order";
import Privacy from "./privacy/Privacy";
import Impressum from "./impressum/Impressum";
import Contact from "./contact/Contact";

export default function ScrollablePage() {
  // Create refs for each section to scroll to
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const ideaRef = useRef(null);
  const rulesRef = useRef(null);
  const orderRef = useRef(null);
  const privacyRef = useRef(null);
  const impressumRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Export the scroll function to be used by the menu
  window.scrollToSection = (section) => {
    switch (section) {
      case "home":
        scrollToSection(homeRef);
        break;
      case "about":
        scrollToSection(aboutRef);
        break;
      case "idea":
        scrollToSection(ideaRef);
        break;
      case "rules":
        scrollToSection(rulesRef);
        break;
      case "order":
        scrollToSection(orderRef);
        break;
      case "privacy":
        scrollToSection(privacyRef);
        break;
      case "impressum":
        scrollToSection(impressumRef);
        break;
      case "contact":
        scrollToSection(contactRef);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Home Section */}
      <div ref={homeRef} className="min-h-screen py-10">
        <Home />
      </div>

      {/* About Section */}
      <div ref={aboutRef} className="min-h-screen py-10">
        <About />
      </div>

      {/* Idea Section */}
      <div ref={ideaRef} className="min-h-screen py-10">
        <Idea />
      </div>

      {/* Rules Section */}
      <div ref={rulesRef} className="min-h-screen py-10">
        <Rules />
      </div>

      {/* Order Section */}
      <div ref={orderRef} className="min-h-screen py-10">
        <Order />
      </div>

      {/* Privacy Section */}
      <div ref={privacyRef} className="min-h-screen py-10">
        <Privacy />
      </div>

      {/* Impressum Section */}
      <div ref={impressumRef} className="min-h-screen py-10">
        <Impressum />
      </div>

      {/* Contact Section */}
      <div ref={contactRef} className="min-h-screen py-10">
        <Contact />
      </div>
    </div>
  );
}