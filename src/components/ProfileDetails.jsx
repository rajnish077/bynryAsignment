import { useParams } from "react-router-dom";
import Map from "../components/Map";
import mockData from "../utils/mockData";
import { fetchCoordinates } from "../utils/api";
import { useEffect, useState } from "react";

function ProfileDetails() {
  const { id } = useParams();
  // const profile = mockData.find((p) => p.id === id);
  const [profile, setProfile] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const userProfile = mockData.find((p) => p.id === parseInt(id));
        if (!userProfile) throw new Error("User not found");

        setProfile(userProfile);

        // Fetch coordinates for the user's address
        const coords = await fetchCoordinates(userProfile.address);
        setCoordinates(coords);
      } catch (err) {
        setError(err.message);
      }
    };

    loadProfile();
  }, [id]);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!profile || !coordinates) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {profile ? (
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-6">{profile.name}</h1>
          <div className="flex items-center mb-6">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-32 h-32 rounded-full mr-6"
            />
            <p className="text-lg">{profile.description}</p>
          </div>
          <h2 className="text-xl font-bold mb-4">Location</h2>
          <Map address={profile.address} />
        </div>
      ) : (
        <p className="text-center text-xl">Profile not found</p>
      )}
    </div>
  );
}

export default ProfileDetails;
