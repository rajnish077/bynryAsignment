import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PropTypes from "prop-types";

function Map({ address }) {
  const { lat, lng } = address;

  // Fallback for invalid lat/lng
  if (!lat || !lng) {
    return (
      <div className="text-red-500 text-center">
        Invalid location data provided. Please check the address.
      </div>
    );
  }

  // Use the API key from the environment variable with a fallback for debugging
  const googleMapsApiKey =
    // eslint-disable-next-line no-undef
    process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "YOUR_DEFAULT_KEY";

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{ lat, lng }}
        zoom={13}
      >
        <Marker position={{ lat, lng }} title="Profile Location" />
      </GoogleMap>
    </LoadScript>
  );
}

Map.propTypes = {
  address: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default Map;
