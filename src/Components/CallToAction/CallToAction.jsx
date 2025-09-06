import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const CallToAction = () => {
  const orgs = [
    {
      id: 1,
      name: "Helping Hands",
      logo: "https://i.ibb.co.com/7JDtVChN/images-q-tbn-ANd9-Gc-RVo-Gkm-Ct-Kx-Ee-SFAvb-HMG8-Ku3-w-Kqt-JZur-Rs-A-s.png",
    },
    {
      id: 2,
      name: "Green Earth",
      logo: "https://m.media-amazon.com/images/I/51L--KMbvsL.jpg",
    },
    {
      id: 3,
      name: "Health First",
      logo: "https://mentalhealthcommission.ca/wp-content/uploads/2021/08/mhfa-logo-square-semi-transparent-1-1024x1024.png",
    },
    {
      id: 4,
      name: "Food For All",
      logo: "https://www.weaverstreetmarket.coop/wp-content/uploads/2023/05/LOGO.jpg",
    },
    {
      id: 5,
      name: "Clean Oceans",
      logo: "https://i.ibb.co.com/8gCCgNKT/images-q-tbn-ANd9-Gc-TZa-Keaw-OEKcpc94qf2g-b-GRq-YMf-UJ30sy-Dxw-s.png",
    },
    {
      id: 6,
      name: "Education For Everyone",
      logo: "https://i.pinimg.com/736x/7d/19/e8/7d19e843e2795c0d4ff06ae97c24d880.jpg",
    },
    {
      id: 7,
      name: "Animal Care",
      logo: "https://static.vecteezy.com/system/resources/previews/008/249/343/non_2x/veterinary-logo-cat-and-dog-logo-design-pet-care-vet-clinic-logo-pet-clinic-vector.jpg",
    },
    {
      id: 8,
      name: "Youth Empowerment",
      logo: "https://img.freepik.com/premium-vector/illustration-teamwork-harmony-diversity-with-circle-colorful-leaves_1300528-5656.jpg?semt=ais_incoming&w=740&q=80",
    },
    {
      id: 9,
      name: "Disaster Relief",
      logo: "https://images.squarespace-cdn.com/content/v1/60f0204605ec7c28af9a710c/c9c3a99f-31ba-43d6-9539-e8f80698a705/Disaster+Relief+Foundation_Logo_TransparentBG.png?format=1500w",
    },
    {
      id: 10,
      name: "Mental Wellness",
      logo: "https://www.psypathy.com/wp-content/uploads/2021/10/412-1024x892.jpg",
    },
  ];

  return (
    <div className="bg-[#568F87] root-font px-5 md:px-0 py-5">
      <div className="w-full md:w-11/12  mx-auto my-12 mt-0">
        <h2 className="text-3xl font-bold text-center mb-8 playfair-font text-white">
          <Typewriter
          words={['Featured Organizations']}
          loop={0} 
          cursor
          cursorStyle="_ _"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={10000}
        />
          
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-6">
          {orgs.map((org, i) => (
            <motion.div
              key={org.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-110 duration-150 ease-in transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={org.logo}
                alt={org.name}
                className="w-20 h-20 rounded-full object-contain mb-2"
              />
              <h3 className="text-lg font-semibold text-center">{org.name}</h3>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <motion.a
            href="/allVolunteerPosts"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Join Now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
