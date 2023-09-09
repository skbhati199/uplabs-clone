import Header from "@/components/header/Header";
import PromotionHeader from "@/components/header/PromotionHeader";
import Nav from "@/components/header/nav";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
