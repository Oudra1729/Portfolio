import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h1>

      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/4"
            >
              <p className="text-sm text-neutral-400">{experience.Duration}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
              className="lg:w-3/4 space-y-3"
            >
              <h3 className="text-xl font-semibold text-white">
                {experience.role}{" "}
                <span className="block text-sm text-purple-400">
                  {experience.company}
                </span>
              </h3>
              <p className="text-neutral-400">{experience.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100/10 text-purple-300 border border-purple-500 rounded-full px-3 py-1 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
