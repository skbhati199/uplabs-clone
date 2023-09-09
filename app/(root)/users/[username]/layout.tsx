import React from "react";
import Nav from "./components/nav";
import Sidebar from "./components/sidebar";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex-1">
      <Nav />
      <div className="grid grid-cols-10 lg:mx-[20%] md:mx-[10%] mx-10 gap-">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-8">{children}</div>
      </div>
    </div>
  );
}
