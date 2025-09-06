import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';

const VolunteerCategories = () => {
  const categories = [
    { id: 1, name: "Education", icon: "📚" },
    { id: 2, name: "Environment", icon: "🌱" },
    { id: 3, name: "Health", icon: "💊" },
    { id: 4, name: "Community", icon: "🤝" },
  ];

  return (
    <div className="bg-[#568F87] root-font px-3 md:px-0 pt-1 pb-3">
      <div className="w-full md:w-11/12 mx-auto my-12">
        <h2 className="text-3xl text-white playfair-font font-bold text-center mb-8">
          <Typewriter
          words={['Volunteer Categories']}
          loop={0} 
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={5000}
        />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            >
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h3 className="text-lg font-semibold">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerCategories;
