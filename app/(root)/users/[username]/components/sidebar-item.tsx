"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarItem({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={url} className="px-2">
      <h4 className="text-black dark:text-white text-xl font-medium">
          {title}
        </h4>
    </Link>
  );
}
