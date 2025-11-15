import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// آیکون پیش‌فرض Marker
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// ---- کامپوننت مارکر ----
const LocationMarker = ({ onSelect }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);

      try {
        // درخواست به Nominatim API برای گرفتن آدرس از مختصات
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        const address = data.display_name || "آدرس پیدا نشد";
        onSelect({ lat, lng, address });
      } catch (err) {
        console.error("Error fetching address:", err);
        onSelect({ lat, lng, address: "خطا در دریافت آدرس" });
      }
    },
  });

  return position ? <Marker position={position}></Marker> : null;
};

// ---- کامپوننت اصلی ----
const ProfileMap = () => {
  const [location, setLocation] = useState(null);

  return (
    <div dir="rtl" className="flex flex-col gap-4 mt-6">
      <h2 className="font-semibold text-right">آدرس محل سکونت</h2>
      <p className="text-blue-600 text-sm text-right">
        داخل نقشه موقعیت مکانی محل سکونت خود را انتخاب کنید
      </p>

      <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-300">
        <MapContainer
          center={[36.56332, 53.06009]}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker onSelect={setLocation} />
        </MapContainer>
      </div>

      {location && (
        <div className="text-sm text-right mt-3 text-gray-700">
          <div>
            <span className="font-semibold text-blue-600">آدرس: </span>
            {location.address}
          </div>
          <div className="mt-1 text-gray-500">
            مختصات: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMap;


