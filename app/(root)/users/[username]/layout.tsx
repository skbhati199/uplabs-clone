import React from "react";
import Nav from "./components/nav";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div >
      <Nav />
      {children}
    </div>
  );
}
