import { RiReactjsLine } from "react-icons/ri";
import { SiLaravel, SiMongodb, SiMysql, SiVuedotjs, SiNextdotjs, SiExpress } from "react-icons/si"; // Importing additional icons
import { motion } from "framer-motion";

const containerVariants = (duration) => ({
  initial: { y: -10 },
  animate: { 
    y: [10, -10],
    transition: { 
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const MotionDiv = ({ variants, children }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4"
  >
    {children}
  </motion.div>
);

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 p-24">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <MotionDiv variants={containerVariants(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </MotionDiv>
        <MotionDiv variants={containerVariants(3)}>
          <SiLaravel className="text-7xl text-red-700" />
        </MotionDiv>
        <MotionDiv variants={containerVariants(2.5)}>
          <SiMongodb className="text-7xl text-green-700" />
        </MotionDiv>
        <MotionDiv variants={containerVariants(3)}>
          <SiMysql className="text-7xl text-orange-600" />
        </MotionDiv>
        <MotionDiv variants={containerVariants(2.5)}>
          <SiVuedotjs className="text-7xl text-green-500" />
        </MotionDiv>
        <MotionDiv variants={containerVariants(3)}>
          <SiNextdotjs className="text-7xl text-white" />
        </MotionDiv>
        <MotionDiv variants={containerVariants(2.5)}>
          <SiExpress className="text-7xl text-green-700" />
        </MotionDiv>
      </motion.div>
    </div>
  );
};

export default Technologies;
