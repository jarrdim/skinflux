import React from "react";
import { IconType } from "react-icons/lib";

interface StatusProps {
  text: string;
  icon: IconType;
  bg: string;
  color: string;
}
const Status = ({ text, icon: Icon, bg, color }: StatusProps) => {
  return (
    <div className={`flex items-center p-2 rounded ${bg} ${color}`}>
      <Icon className="mr-2" />
      <span>{text}</span>
    </div>
  );
};


export default Status;
