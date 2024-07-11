import React from "react";
import Avatar from "@/components/Avatar";

const ChatListItem = ({ chat, lastMessage, time, current, onClick }) => {
  const isGroup = chat.type === "group";

  const renderAvatar = () => {
    if (isGroup) {
      return (
        <div className="relative w-10 h-10">
          <div className="absolute bottom-0 left-0">
            <Avatar
              src={chat.avatars[0]}
              variant="circle"
              alt={chat.name}
              size="xs"
            />
          </div>
          <div className="absolute top-0 right-0">
            <Avatar
              src={chat.avatars[1]}
              variant="circle"
              alt={chat.name}
              size="xs"
            />
          </div>
        </div>
      );
    } else {
      return <Avatar src={chat.avatar} variant="circle" alt={chat.name} />;
    }
  };

  return (
    <div
      className={`flex items-center max-w-[400px] w-full gap-3 py-2 px-3 rounded-md cursor-pointer ${
        current
          ? "bg-gray-50 text-indigo-600"
          : "text-gray-700 hover:bg-[#F4F4F4] hover:text-indigo-600"
      }`}
      onClick={() => onClick(chat)}
    >
      <div className="select-none">{renderAvatar()}</div>
      <div className="flex w-full flex-col">
        <div className="flex flex-1 items-center justify-between gap-2">
          <p className="font-semibold text-sm select-none">{chat.name}</p>
          <p className="text-xs select-none text-gray-500">{time}</p>
        </div>
        <p className="pb-1 text-xs text-gray-500 select-none">{lastMessage}</p>
      </div>
    </div>
  );
};

ChatListItem.defaultProps = {
  chat: {
    type: "individual",
    avatar: "",
    avatars: ["", ""],
    name: "Unknown User",
  },
  lastMessage: "",
  time: "",
  current: false,
  onClick: () => {},
};

export default ChatListItem;
