import React from "react";
import NotificationItem from "./NotificationItem";

const NotificationList = ({ notifications, onSee }) => {
  return (
    <div className="flex flex-col gap-3 h-[900px] overflow-y-auto">
      {notifications.map((n) => (
        <NotificationItem
          key={n.id}
          message={n.message}
          insertDate={n.insertDate}
          seen={n.seen}
          onSee={() => onSee(n.id)}
        />
      ))}
    </div>
  );
};

export default NotificationList;
