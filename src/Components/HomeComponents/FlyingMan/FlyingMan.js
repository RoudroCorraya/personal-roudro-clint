import { motion, useScroll, useTransform } from "framer-motion";
import ironman from "../../../assets/image/flyman/flingman.PNG"; // Adjust path accordingly

const FlyingMan = () => {
  const { scrollYProgress } = useScroll(); // Track scroll position

  // Moving left to right and downwards
  const x = useTransform(scrollYProgress, [0, 1], ["-50vw", "100vw"]); // Moves left to right
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]); // Moves down
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "25deg"]); // Tilt effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Slight scale increase

  return (
    <div className="relative h-[300vh] overflow-hidden">
      <motion.img
        src={ironman}
        alt="Flying Iron Man"
        className="absolute w-[200px] top-10 left-0 z-[999] border-2 border-red-500" // High z-index to stay on top
        style={{ x, y, rotate, scale }}
      />
    </div>
  );
};

export default FlyingMan;
