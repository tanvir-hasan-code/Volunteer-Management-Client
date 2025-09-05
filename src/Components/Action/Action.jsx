import { motion } from "framer-motion";

const Action = () => {
  return (
    <div className="bg-[#568F87] root-font px-5 md:px-0 py-5 root-font">
      <motion.div
        className=" bg-blue-600 text-white py-12 mt-12 rounded-4xl text-center w-full lg:w-7/12 md:w-10/12 mx-auto md:rounded-tl-full md:rounded-br-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
        <p className="mb-6 text-sm md:text-md">
          Join us today and be part of a community that cares!
        </p>
        <a
          href="/join"
          className="bg-white text-blue-600 text-xs px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Join Now
        </a>
      </motion.div>
    </div>
  );
};

export default Action;
