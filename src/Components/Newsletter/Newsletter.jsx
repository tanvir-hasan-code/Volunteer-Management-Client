import { motion } from "framer-motion";
import useAuth from "../../Hooks/Auth/useAuth";

const Newsletter = () => {
 const {theme } = useAuth()

  return (
    <div className={`${theme === 'light'? "bg-[#568F87]": ""} px-5 py-1 root-font`}>
      <motion.div
        className={`w-full md:w-11/12 mx-auto my-12 bg-gradient-to-r ${theme === "light"? "from-blue-600 to-indigo-600": "from-blue-900 to-indigo-900"} p-8 rounded-xl text-center`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4 playfair-font">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white mb-6">
          Get latest updates on volunteering and events.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className={`p-3 rounded-lg flex-1 ${theme === 'light'? "text-gray-900": "text-white"}`}
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
