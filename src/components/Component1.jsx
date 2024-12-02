i
import { gsap } from "gsap";

const ContentSection = () => {
  const contentRef = useRef();

  useEffect(() => {
    gsap.from(contentRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={contentRef} className="content-section p-8">
      <h1 className="text-3xl font-bold mb-4">Building Trust</h1>
      <p className="mb-8">
        Integrating AI for sustainable and intelligent construction solutions.
      </p>
      <button className="bg-blue-500 text-white p-2 rounded">Learn More</button>
    </div>
  );
};

export default ContentSection;
