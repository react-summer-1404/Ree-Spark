import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// آیکون مارکر سفارشی
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
});

const LocationMarker = ({ setLocation, setAddress }) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setLocation({ lat, lng });

      // Reverse Geocoding با Nominatim (OpenStreetMap)
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
        );
        const data = await response.json();
        setAddress(data.display_name || "آدرس پیدا نشد");
      } catch (error) {
        console.error(error);
        setAddress("خطا در دریافت آدرس");
      }
    },
  });

  return null;
};

const MapSelector = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState("");

  return (
    <div>
      <div style={{ height: "500px", width: "100%" }}>
        <MapContainer
          center={[36.5633, 53.0601]}
          zoom={12}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <LocationMarker setLocation={setLocation} setAddress={setAddress} />

          {location && (
            <Marker position={[location.lat, location.lng]} icon={customIcon} />
          )}
        </MapContainer>
      </div>

      {location && (
        <div dir="rtl" style={{ marginTop: "10px" }}>
          <p>عرض جغرافیایی: {location.lat}</p>
          <p>طول جغرافیایی: {location.lng}</p>
          <p>آدرس: {address}</p>
        </div>
      )}
    </div>
  );
};

export default MapSelector;
