import React from "react";
import Avatar from "@/components/Avatar";
import DropdownMenu from "./DropdownMenu";
import IconButton from "./IconButton";
import { DotsThreeVertical } from "@phosphor-icons/react";

const MessageBubble = ({
  isOwn,
  avatarSrc,
  avatarInitial,
  senderName,
  timestamp,
  message,
}) => {
  return (
    <div
      className={`relative flex gap-x-4 group ${
        isOwn ? "flex-row-reverse self-end" : "flex-row self-start"
      }`}
    >
      <Avatar size="sm" src={avatarSrc} initial={avatarInitial} />
      <div className="flex relative max-w-[800px] flex-col rounded-md p-3 ring-1 ring-inset ring-gray-200">
        <div
          className={`flex justify-between items-center gap-2 ${
            isOwn ? "flex-row-reverse self-end" : "flex-row self-start"
          }`}
        >
          <div className="py-0.5 text-xs leading-5 font-medium text-gray-900">
            {senderName}
          </div>
          <time
            dateTime={timestamp}
            className="flex-none py-0.5 text-xs leading-5 text-gray-500"
          >
            {timestamp}
          </time>
        </div>
        <div
          className={`absolute top-0 ${
            isOwn ? "left-0" : "right-0"
          } opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
        >
          <DropdownMenu
            trigger={
              <IconButton
                variant="ghost"
                icon={
                  <DotsThreeVertical
                    color="#525866"
                    aria-hidden="true"
                    size={16}
                    weight="bold"
                  />
                }
                size="small"
                tooltip="Settings"
              />
            }
            options={[
              {
                name: "Edit",
                onClick: () => {},
              },
              {
                name: "Delete",
                onClick: () => {},
              },
            ]}
          />
        </div>
        <p className="text-sm leading-6 text-gray-500">{message}</p>
      </div>
    </div>
  );
};

MessageBubble.defaultProps = {
  avatarSrc: null,
  avatarInitial: null,
};

export default MessageBubble;
