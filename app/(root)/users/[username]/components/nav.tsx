import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function Nav() {
  return (
    <div className="shadow-md pb-2">
      <div className="flex flex-row items-center text-black max-w-6xl m-auto ">
        <Button variant={"link"} size={"icon"}>
          <ArrowLeft className="w-6 h-6" />
        </Button>
        <div className="flex flex-row justify-center items-center w-full">
          <h4 className="text-xl font-semibold dark:text-white">Settings</h4>
        </div>
      </div>
    </div>
  );
}
