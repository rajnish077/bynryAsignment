import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function ProfileCard({ profile: { id, name, photo, description } }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <div
      className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl text-white"
      onClick={handleProfileClick}
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white mb-4"
        />
      </div>

      {/* Profile Name */}
      <h2 className="text-xl font-bold text-center">{name}</h2>

      {/* Profile Description */}
      <p className="text-center text-sm mt-2 text-gray-200">{description}</p>

      {/* Call-to-Action */}
      <div className="mt-4 text-center">
        <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProfileCard;
