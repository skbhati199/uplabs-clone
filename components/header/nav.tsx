import React from "react";
import NavItem from "./nav-item";

type Narbar = {
  url: string;
  title: string;
};

const navBars: Narbar[] = [
  {
    url: "/",
    title: "🔥Trending",
  },
  {
    url: "/templates",
    title: "Templates",
  },
  {
    url: "/illustrations",
    title: "Illustrations",
  },
  {
    url: "/ui-kits",
    title: "UI Kits",
  },
  {
    url: "/icons",
    title: "Icons",
  },
  {
    url: "/mockups",
    title: "Mockups",
  },
  {
    url: "/themes",
    title: "Themes",
  },
  {
    url: "/fonts",
    title: "Fonts",
  },
];

export default function Nav() {
  return (
    <div className="bg-white dark:bg-background flex flex-row shadow-md">
      {navBars.map((item: Narbar) => (
        <NavItem url={item.url} key={item.url} title={item.title} />
      ))}
    </div>
  );
}
