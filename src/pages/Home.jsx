import { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import SearchFilter from "../components/SearchFilter";
import mockData from "../utils/mockData";
import { motion } from "framer-motion";

function Home() {
  const [profiles, setProfiles] = useState(mockData);
  const [filteredProfiles, setFilteredProfiles] = useState(mockData);

  useEffect(() => {
    // Fetch data from backend API here if needed
    setProfiles(mockData); // Ensure profiles are set correctly
  }, []);

  const handleSearch = (query) => {
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 min-h-screen w-full">
      {/* Search Filter */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-8"
      >
        <SearchFilter onSearch={handleSearch} />
      </motion.div>

      {/* Profile Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 px-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {filteredProfiles.map((profile) => (
          <motion.div
            key={profile.id}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProfileCard profile={profile} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Home;

// import { useNavigate } from "react-router-dom";
// import mockData from "../utils/mockData";

// function Home() {
//   const navigate = useNavigate();

//   const handleProfileClick = (id) => {
//     navigate(`/profile/${id}`);
//   };

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {mockData.map((profile) => (
//         <div
//           key={profile.id}
//           className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
//           onClick={() => handleProfileClick(profile.id)}
//         >
//           <img
//             src={profile.photo}
//             alt={profile.name}
//             className="w-24 h-24 rounded-full mx-auto mb-4"
//           />
//           <h2 className="text-lg font-bold">{profile.name}</h2>
//           <p>{profile.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Home;
