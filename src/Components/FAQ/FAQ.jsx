import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I join as a volunteer?",
    answer:
      "Simply click on the 'Join Us' button and fill out the registration form.",
  },
  {
    question: "Is there any registration fee?",
    answer: "No, joining as a volunteer is completely free of cost.",
  },
  {
    question: "Can I participate in multiple events?",
    answer: "Yes, you can join as many events as you want.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index, e) => {
    e.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#568F87] py-1 root-font">
      <div className="w-full md:w-11/12 mx-auto my-12">
        <h2 className="text-3xl font-bold text-center mb-8 playfair-font text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow rounded-lg p-4 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              onClick={(e) => toggleFAQ(index, e)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </h3>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    className="mt-2 text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
