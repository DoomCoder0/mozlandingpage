import { useEffect } from "react";
import PropTypes from "prop-types";
import ContentSection from "./ContentSection.jsx"; // Renamed to match the actual component
import Content from "./Content.jsx";  // If your file is named Content.jsx
import Component2 from "./components/Component2";




const FrameComponent2 = ({ className = "" }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate"); // Ensure this class exists with proper animations
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.15 } // Trigger animation when 15% of the element is visible
    );

    // Observe all elements with data-animate-on-scroll
    scrollAnimElements.forEach((element) => observer.observe(element));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`frame-component2 w-full flex flex-row items-start justify-start ${className}`}
    >
      <div
        data-animate-on-scroll
        className="animate-section opacity-0 transition-opacity duration-500"
      >
        <ContentSection /> {/* Using the updated component name */}
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

FrameComponent2.defaultProps = {
  className: "",
};

export default FrameComponent2;
