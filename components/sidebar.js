import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";

import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl-start fixed h-full xl:ml-24">
      {/* logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
          alt=""
        ></Image>
      </div>
      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notification" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* button     */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>
      {/* mini-profile */}
      <div className="hoverEffect text-gray flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="data:image/jpeg;base64,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"
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5">
          <h4 className="font-bold">Afari Stephen</h4>
          <p className="text-gray-500 ">@codewithAfari</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}
