import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "I joined last year and it changed my life!",
  },
  { id: 2, name: "Jane Smith", text: "Amazing community, very supportive!" },
  {
    id: 3,
    name: "Ali Khan",
    text: "Volunteering here was an unforgettable experience.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#568F87] py-1 root-font">
      <div className="w-full md:w-11/12 mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-8 playfair-font text-white">
          <Typewriter
					words={['Testimonials']}
					loop={0} 
					cursor
					cursorStyle="...."
					typeSpeed={70}
					deleteSpeed={50}
					delaySpeed={8000}
				  />
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-white shadow-lg rounded-xl p-6 max-w-sm text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <p className="text-gray-700 mb-4">"{item.text}"</p>
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
