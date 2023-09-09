"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavItem({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const pathname = usePathname();
  return (
    <Link href={url} className="px-2">
      <div className="group relative px-4 py-6 transition duration-300 ease-in-out hover:text-blue-500 focus:outline-none">
        <h4 className="text-black dark:text-white text-xl font-medium">
          {title}
        </h4>
        {pathname === url ? (
          <div className="absolute inset-x-0 bottom-0 h-1 transform scale-x-100 bg-blue-500 transition-transform duration-300 ease-in-out"></div>
        ) : (
          <></>
        )}
      </div>
    </Link>
  );
}
