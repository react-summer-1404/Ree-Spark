import React, { useState } from "react";


const Marker = () => (
  <div style={{
    color: "red",
    background: "white",
    padding: "5px 5px",
    borderRadius: "50%",
    textAlign: "center"
  }}>📍</div>
);

const MapSelector = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  const handleClick = async ({ lat, lng }) => {
    setLocation({ lat, lng });

    // Reverse Geocoding
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${localStorage.getItem("GOOGLE_MAPS_KEY")}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        setAddress(data.results[0]?.formatted_address || "آدرس پیدا نشد");
      } else {
        setAddress("آدرس پیدا نشد");
      }
    } catch (error) {
      console.error(error);
      setAddress("خطا در دریافت آدرس");
    }
  };

  return (
    <div>
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: localStorage.getItem("GOOGLE_MAPS_KEY") }}
          defaultCenter={{ lat: 36.5633, lng: 53.0601 }} 
          defaultZoom={12}
          onClick={handleClick}
        >
          {location && <Marker lat={location.lat} lng={location.lng} />}
        </GoogleMapReact>
      </div>

      {location && (
        <div style={{ marginTop: "10px" }}>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
          <p>آدرس: {address}</p>
        </div>
      )}
    </div>
  );
};

export default MapSelector;
