import React from "react";

export default function UserLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  return (
    <div>
      <div>{params.username}</div>
      {children}
    </div>
  );
}
