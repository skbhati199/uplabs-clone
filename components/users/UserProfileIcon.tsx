"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

export default function UserProfileIcon() {
  const theme = useTheme()
  return (
    <div>
      <Image
        className="w-20 h-20 rounded-full"
        width={100}
        height={100}
        alt="profile"
        src={theme.theme === "dark" ? "/logo/dark/icon-192.png" :"/logo/icon-192.png"}
      />
    </div>
  );
}
