import { motion } from "framer-motion";

export default function SectionWrapper({ children, initialX = -100 }) {
  return (
    <motion.div
      initial={{ x: initialX, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="my-20 px-6 md:px-20 overflow-visible"
    >
      <div className="p-6 rounded-xl shadow-md bg-white/70 backdrop-blur-sm transition-all duration-500">
        {children}
      </div>
    </motion.div>
  );
}
