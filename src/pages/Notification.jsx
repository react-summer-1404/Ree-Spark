import React, { useEffect, useState } from "react";
import NotificationList from "../components/notification/NotificationList";
import SeeNotification from "../core/services/api/notification/MySeeNotification.api";
import GetNotifications from "../core/services/api/notification/GetAllNotifications.api";
import toast from "react-hot-toast";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const data = await GetNotifications();
      setNotifications(Array.isArray(data) ? data : []);
      setLoading(false);
    };
    fetchNotifications();
  }, []);

  const handleSee = async (id) => {
    console.log("CALL SEE → ID:", id);

    const res = await SeeNotification(id);

    console.log("API RESPONSE:", res);

    if (res?.success) {
      toast.success("پیام خوانده شد");

      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, seen: true } : n))
      );
    } else {
      toast.error("مشکلی رخ داد");
    }
  };

  if (loading)
    return <div className="text-center mt-10">در حال بارگذاری...</div>;

  return (
    <div className="w-full max-w-xl mx-auto mt-10">
      <NotificationList notifications={notifications} onSee={handleSee} />
    </div>
  );
};

export { Notification };
