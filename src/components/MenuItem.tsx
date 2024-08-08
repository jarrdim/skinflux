import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
}
const MenuItem = ({children, onClick}:Props) => {
  return <div onClick={onClick} className="  text-white  top-12  hover:bg-neutral-100 hover:text-rose-500 transition px-4 py-3 bg-slate-600">
    {children}
  </div>;
};

export default MenuItem;
