import { motion } from "framer-motion";
import useAuth from "../../Hooks/Auth/useAuth";

const blogs = [
  {
    id: 1,
    title: "Volunteer Tips",
    snippet: "Learn how to become an effective volunteer with simple steps.",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "Community Success Story",
    snippet: "How our volunteers changed thousands of lives in rural areas.",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "Upcoming Projects",
    snippet: "Check out the new projects we are launching this month.",
    link: "/blog/3",
  },
];

const Blog = () => {

  const { theme } = useAuth();

  return (
    <div className={`${theme === 'light'? "bg-[#568F87]": ""} root-font py-1`}>
      <div className="w-full md:w-11/12 mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-8 playfair-font text-white">Latest Articles</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {blogs.map((b, i) => (
            <motion.div
              key={b.id}
              className={`${theme === 'light'? 'bg-white': "bg-gray-700"} shadow-lg rounded-xl p-6 max-w-sm hover:scale-105 transition-transform`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className={`mb-4 ${theme === 'light'? "text-gray-600": ""}`}>{b.snippet}</p>
              <a href={b.link} className="text-blue-600 hover:underline">
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
