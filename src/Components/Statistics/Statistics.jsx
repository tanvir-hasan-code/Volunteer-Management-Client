import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    plus: "+",
    label: "Volunteers",
    value: 500,
    icon: "https://media.istockphoto.com/id/931069122/vector/icon-with-the-concept-of-family-care-care-about-humanity.jpg?s=612x612&w=0&k=20&c=RWgHjgTaVOwdSQtPQcqQcTZ8t0MHdie7Jr0bnHZKvZc=",
  },
  {
    id: 2,
    plus: "+",
    label: "Projects Completed",
    value: 120,
    icon: "https://img.icons8.com/color/48/000000/project.png",
  },
  {
    id: 3,
    plus: "+",
    label: "Lives Impacted",
    value: 50000,
    icon: "https://img.icons8.com/color/48/000000/heart-with-pulse.png",
  },
  {
    id: 4,
    plus: "+",
    label: "Donations Received",
    value: 750000,
    icon: "https://img.icons8.com/color/48/000000/donation.png",
  },
  {
    id: 5,
    plus: "+",
    label: "Countries Served",
    value: 15,
    icon: "https://img.icons8.com/color/48/000000/world.png",
  },
  {
    id: 6,
    plus: "+",
    label: "Events Organized",
    value: 320,
    icon: "https://img.icons8.com/color/48/000000/calendar.png",
  },
  {
    id: 7,
    plus: "+",
    label: "Partners",
    value: 45,
    icon: "https://img.icons8.com/color/48/000000/handshake.png",
  },
  {
    id: 8,
    plus: "+",
    label: "Active Programs",
    value: 60,
    icon: "https://t3.ftcdn.net/jpg/05/34/89/38/360_F_534893878_tSVdocVoqFNq7GhEVnDCl1kQo37lYl6T.jpg",
  },
  {
    id: 9,
    plus: "+",
    label: "Volunteers Trained",
    value: 2000,
    icon: "https://img.icons8.com/color/48/000000/training.png",
  },
  {
    id: 10,
    plus: "+",
    label: "Communities Reached",
    value: 800,
    icon: "https://cdn-icons-png.flaticon.com/512/9462/9462901.png",
  },
];

const Statistics = () => {
  return (
    <div className="bg-[#568F87] py-1">
      <div className="w-full md:w-11/12 mx-auto my-12 text-center">
        <h2 className="text-3xl font-bold mb-8 playfair-font text-white">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 justify-center gap-3 px-3 md:px-0 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.id}
              className="bg-blue-500 text-white p-6 rounded-xl shadow-lg min-w-[150px]"
            >
              <img
                className="flex mx-auto rounded-2xl border-1 w-14 h-14 "
                src={stat.icon}
                alt={stat.label}
              />
              <p className=" font-bold">
                <CountUp end={stat.value} duration={15} separator="," />{stat.plus}
              </p>
              <p className="mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
