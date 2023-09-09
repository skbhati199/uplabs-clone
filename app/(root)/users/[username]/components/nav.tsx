import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function Nav() {
  return (
    <div className="shadow-md pb-2">
      <div className="flex flex-row items-center text-black max-w-6xl m-auto ">
        <Button variant={"link"} size={"icon"}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h4 className="flex flex-row  justify-center text-xl font-bold">Settings</h4>
      </div>
    </div>
  );
}
