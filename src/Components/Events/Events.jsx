import { motion } from "framer-motion";

const events = [
  {
    id: 1,
    title: "Beach Cleanup",
    date: "2025-09-15",
    location: "Cox's Bazar",
  },
  { id: 2, title: "Tree Plantation", date: "2025-09-22", location: "Dhaka" },
  { id: 3, title: "Health Camp", date: "2025-10-01", location: "Chittagong" },
];

const Events = () => {
  return (
    <div className="bg-[#568F87] py-1">
      <div className="w-full md:w-11/12 mx-auto root-font my-12">
        <h2 className="text-3xl font-bold text-center mb-8 playfair-font text-white">
          Upcoming Events
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              className="bg-white shadow-lg rounded-xl p-6 max-w-sm hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-1">Date: {event.date}</p>
              <p className="text-gray-600 mb-4">Location: {event.location}</p>
              <a
                href="/"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
