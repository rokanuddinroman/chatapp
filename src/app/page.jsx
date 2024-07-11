"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import IconButton from "@/components/IconButton";
import ChatListItem from "@/components/ChatListItem";
import DropdownMenu from "@/components/DropdownMenu";
import BaseModal from "@/components/BaseModal";
import MassMessage from "@/components/MassMessage";
import MessageBubble from "@/components/MessageBubble";
import ChatMessages from "@/components/ChatMessages";
import NewConversation from "@/components/NewConversation";
import {
  DotsThreeVertical,
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react";

const navigation = [
  {
    name: "Sterling",
    type: "individual",
    href: "#",
    current: false,
    lastMessage: "Hey Rokan",
    fromNow: "12:24pm",
    src: "https://bc3-production-assets-cdn.basecamp-static.com/5173658/people/BAhpBFxqLAI=--9a7fbf353c64904bdc48e4ef3dd3b92173b0f47b/avatar?v=1",
  },
  {
    name: "Sterling, Himel",
    type: "group",
    href: "#",
    current: true,
    lastMessage: "Hey Rokan",
    fromNow: "12:24pm",
    src: [
      "https://bc3-production-assets-cdn.basecamp-static.com/5173658/people/BAhpBFxqLAI=--9a7fbf353c64904bdc48e4ef3dd3b92173b0f47b/avatar?v=1",
      "https://bc3-production-assets-cdn.basecamp-static.com/5173658/people/BAhpBEPyRgI=--1ec84cff8e6670bc80b8141b90d46e489775500d/avatar?v=1",
    ],
  },
  {
    name: "Himel",
    type: "individual",
    href: "#",
    current: false,
    lastMessage: "Hey Rokan",
    fromNow: "12:24pm",
    src: "https://bc3-production-assets-cdn.basecamp-static.com/5173658/people/BAhpBEPyRgI=--1ec84cff8e6670bc80b8141b90d46e489775500d/avatar?v=1",
  },
  {
    name: "Rokan",
    type: "individual",
    href: "#",
    current: false,
    lastMessage: "Hey Himel",
    fromNow: "12:24pm",
    src: "https://bc3-production-assets-cdn.basecamp-static.com/5173658/people/BAhpBNaJvAI=--36791c259c6478cebfb4ec37776e3bd298e96203/avatar?v=1",
  },
  {
    name: "New User",
    type: "individual",
    href: "#",
    current: false,
    lastMessage: "Hey Rokan",
    fromNow: "12:24pm",
    // src: "https://bc3-production-assets-cdn.basecamp-static.com/5173658/people/BAhpBFxqLAI=--9a7fbf353c64904bdc48e4ef3dd3b92173b0f47b/avatar?v=1",
  },
  {
    name: "No Profile User",
    type: "individual",
    href: "#",
    current: false,
    lastMessage: "Hey Rokan",
    fromNow: "12:24pm",
    // src: "https://bc3-production-assets-cdn.basecamp-static.com/5173658/people/BAhpBFxqLAI=--9a7fbf353c64904bdc48e4ef3dd3b92173b0f47b/avatar?v=1",
  },
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNewConversation = () => {
    console.log("New Conversation");
  };

  const handleSubmit = (message, mood) => {
    console.log("message:", message, "mood:", mood);
  };

  const handleMoodChange = (newMood) => {
    console.log(newMood);
  };

  const handleAttachFile = () => {
    console.log("Attach file");
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [openConversation, setOpenConversation] = useState(false);

  const handleCloseConversation = () => setOpenConversation(false);
  const handleOpenConversation = () => setOpenConversation(true);

  return (
    <>
      <div>
        <BaseModal isOpen={open} onClose={handleClose}>
          <MassMessage onClose={handleClose} />
        </BaseModal>
        <BaseModal isOpen={openConversation} onClose={handleCloseConversation}>
          <NewConversation onClose={handleCloseConversation} />
        </BaseModal>
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <TransitionChild>
                <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                  <button
                    type="button"
                    onClick={() => setSidebarOpen(false)}
                    className="-m-2.5 p-2.5"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div className="flex h-16 shrink-0 items-center">
                  <img
                    alt="Your Company"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    className="h-8 w-auto"
                  />
                </div>
                <nav className="flex flex-1 flex-col">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <ChatListItem
                              key={25}
                              user={{
                                avatar:
                                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                name: item.name,
                              }}
                              lastMessage="How you doing?"
                              time="12:35pm"
                              current={item.current}
                              onClick={() => {}}
                            />
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <div className="text-xs font-semibold leading-6 text-gray-400">
                        Your teams
                      </div>
                      <ul role="list" className="-mx-2 mt-2 space-y-1">
                        {teams.map((team) => (
                          <li key={team.name}>
                            <a
                              href={team.href}
                              className={classNames(
                                team.current
                                  ? "bg-gray-50 text-indigo-600"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              )}
                            >
                              <span
                                className={classNames(
                                  team.current
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                                )}
                              >
                                {team.initial}
                              </span>
                              <span className="truncate">{team.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="mt-auto">
                      <a
                        href="#"
                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        <Cog6ToothIcon
                          aria-hidden="true"
                          className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                        />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-80 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <h6 className="text-lg font-medium text-[#0A0D14]">
                  Conversion
                </h6>
                <div className="flex gap-4 items-center">
                  <DropdownMenu
                    trigger={
                      <IconButton
                        variant="neutral"
                        icon={
                          <Plus
                            color="#525866"
                            aria-hidden="true"
                            size={20}
                            weight="bold"
                          />
                        }
                        tooltip="Settings"
                      />
                    }
                    options={[
                      {
                        name: "New Conversation",
                        onClick: handleOpenConversation,
                      },
                      { name: "Mass Message", onClick: handleOpen },
                    ]}
                  />
                  <IconButton
                    variant="neutral"
                    icon={
                      <MagnifyingGlass
                        size={20}
                        weight="bold"
                        color="#525866"
                        aria-hidden="true"
                      />
                    }
                    tooltip="Settings"
                  />
                </div>
              </div>
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <ChatListItem
                          key={25}
                          chat={{
                            type: item.type,
                            avatar: item.src ?? null,
                            avatars: item.src ?? null,
                            name: item.name,
                          }}
                          lastMessage={item.lastMessage}
                          time={item.fromNow}
                          current={item.current}
                          onClick={() => {}}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                  >
                    <Cog6ToothIcon
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-80">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Separator */}
            <div
              aria-hidden="true"
              className="h-6 w-px bg-gray-200 lg:hidden"
            />

            <div className="flex flex-1 items-center gap-x-4 justify-between lg:gap-x-6">
              <h6 className="text-base font-medium text-[#0A0D14]">
                Sterling Jones
              </h6>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <DropdownMenu
                  trigger={
                    <IconButton
                      variant="neutral"
                      icon={
                        <DotsThreeVertical
                          color="#525866"
                          aria-hidden="true"
                          size={20}
                          weight="bold"
                        />
                      }
                      tooltip="Settings"
                    />
                  }
                  options={[
                    {
                      name: "Delete Conversation",
                      onClick: handleNewConversation,
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8 flex flex-col justify-between gap-8 h-[calc(100vh-144px)]">
              {/* <div className="flex items-center flex-wrap gap-8">
                <Button variant="primary" size="xs">
                  Primary xs
                </Button>
                <Button variant="primary" size="sm">
                  Primary sm
                </Button>
                <Button variant="primary" size="md">
                  Primary md
                </Button>
                <Button variant="primary" size="lg">
                  Primary lg
                </Button>
                <Button variant="primary" size="xl">
                  Primary xl
                </Button>
                <Button variant="secondary" size="xs">
                  Secondary xs
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary sm
                </Button>
                <Button variant="secondary" size="md">
                  Secondary md
                </Button>
                <Button variant="secondary" size="lg">
                  Secondary lg
                </Button>
                <Button variant="secondary" size="xl">
                  Secondary xl
                </Button>
                <Button variant="soft" size="xs">
                  Soft xs
                </Button>
                <Button variant="soft" size="sm">
                  Soft sm
                </Button>
                <Button variant="soft" size="md">
                  Soft md
                </Button>
                <Button variant="soft" size="lg">
                  Soft lg
                </Button>
                <Button variant="soft" size="xl">
                  Soft xl
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  startIcon={
                    <Plus aria-hidden="true" size={16} weight="bold" />
                  }
                  // onClick={handleClick}
                >
                  Click me
                </Button>
                <Button variant="primary" size="md" loading>
                  Loading
                </Button>
              </div>

              <div className="flex items-center gap-8">
                <Avatar variant="rounded" alt="" />
                <Avatar size="md" initial="JD" />
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  variant="circle"
                  alt=""
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  variant="rounded"
                  alt=""
                />
                <Avatar
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  variant="square"
                  alt=""
                />
              </div>

              <div className="flex items-center gap-8">
                <IconButton
                  icon={<BellIcon aria-hidden="true" className="h-6 w-6" />}
                  tooltip="User Profile"
                />
                <IconButton
                  variant="outlined"
                  icon={<BellIcon aria-hidden="true" className="h-6 w-6" />}
                  tooltip="Settings"
                />
                <IconButton
                  size="small"
                  icon={<BellIcon aria-hidden="true" className="h-6 w-6" />}
                  tooltip="Notifications"
                />
                <IconButton
                  size="large"
                  icon={<BellIcon aria-hidden="true" className="h-6 w-6" />}
                  tooltip="Help"
                />
              </div>

              <ChatListItem
                key={25}
                user={{
                  avatar:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  name: "Rokan",
                }}
                lastMessage="How you doing?"
                time="12:35pm"
                current={true}
                onClick={() => {}}
              />

              <ChatListItem
                key={25}
                user={{
                  avatar:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  name: "Rokan",
                }}
                lastMessage="How you doing?"
                time="12:35pm"
                current={false}
                onClick={() => {}}
              />
              <DropdownMenu
                trigger={
                  <IconButton
                    variant="neutral"
                    icon={
                      <Plus
                        color="#525866"
                        aria-hidden="true"
                        size={20}
                        weight="bold"
                      />
                    }
                    tooltip="Settings"
                  />
                }
                options={[
                  { name: "Your Profile", href: "#" },
                  { name: "Settings", href: "#" },
                  { name: "Sign out", href: "#" },
                ]}
              /> */}
              <div className="h-full flex flex-col gap-8 justify-end">
                <MessageBubble
                  isOwn={true}
                  avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  senderName="John Doe"
                  timestamp="3d ago"
                  message="Called client, they reassured me the invoice would be paid by the 25th."
                />
                <MessageBubble
                  isOwn={false}
                  avatarInitial="CH"
                  senderName="Chelsea Hagon"
                  timestamp="2d ago"
                  message="Thanks for the update, John. I'll follow up with them next week if we haven't received it."
                />
              </div>
              <div className="sticky bottom-0 left-0 right-0">
                <ChatMessages
                  onSubmit={handleSubmit}
                  onMoodChange={handleMoodChange}
                  onAttachFile={handleAttachFile}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
