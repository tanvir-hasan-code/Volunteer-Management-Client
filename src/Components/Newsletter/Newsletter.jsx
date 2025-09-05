import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Newsletter = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleBlur = () => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <div className="bg-[#568F87] py-1">
      <motion.div
        className="w-full md:w-11/12 mx-auto my-12 bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white mb-6">
          Get latest updates on volunteering and events.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            ref={inputRef}
            type="email"
            onBlur={handleBlur}
            placeholder="Enter your email"
            className="p-3 rounded-lg flex-1 text-gray-900"
          />
          <button
            type="submit"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Newsletter;
