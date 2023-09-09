import React from "react";
import Applogo from "@/components/logo/app-logo";
import SearchBox from "@/components/search/SearchBox";
import ExtraLargeButton from "@/components/features/extra-large-button";
import UserProfileIcon from "@/components/users/UserProfileIcon";
import { ModeToggle } from "../theme/mode-toggle";

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center px-8 ">
      <div className="flex flex-row">
        <Applogo  className={"text-4xl"} subClassName="text-2xl"/>
        <SearchBox />
      </div>
      <div className="flex flex-row gap-2 justify-center items-center">
        <ExtraLargeButton title="GET UNLIMITED DOWNLOADS" variant="primary" />
        <ExtraLargeButton title="CHALLENGES" variant="secondary" />
        <ExtraLargeButton title="UPLOAD" variant="secondary" />
        <UserProfileIcon  />
        <ModeToggle />
      </div>
    </div>
  );
}
