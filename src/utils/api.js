import axios from "axios";

export const fetchCoordinates = async (address) => {
  // eslint-disable-next-line no-undef
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  try {
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      {
        params: {
          address,
          key: apiKey,
        },
      }
    );

    const location = response.data.results[0]?.geometry.location;
    if (!location) throw new Error("Invalid address");
    return location;
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};
