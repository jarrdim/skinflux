"use client";

import React, { useCallback, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { signOut } from "next-auth/react";
import Drop from "./Drop";
import { SafeUser } from "@/types";

interface Props{
  currentUser: SafeUser | null
}


const Menu = ({currentUser}:Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <>
      <div className="relative z-30">
        <div onClick={toggleOpen} className="p-2  bg-white   rounded-full flex flex-row items-center cursor-pointer gap-1 hover:shadow-md">
            <UserAvatar/>
            <AiFillCaretDown/>
        </div>
        {isOpen && (
            <div className="absolute flex flex-col cursor-pointer text-sm top-12 right-0 overflow-hidden w-[150px] bg-white  shadow-md rounded-md">
                {currentUser ?                 <div>
                    <Link href="/orders">
                    <MenuItem onClick={toggleOpen}>Your Odres</MenuItem>
                    </Link>
                    <Link href="/admin/manage-orders">
                    <MenuItem onClick={toggleOpen}>Dashboard</MenuItem>
                    </Link>
                    <MenuItem onClick={()=>{toggleOpen(); signOut()}}>Sign Out</MenuItem>
                </div> :
                <div>
                <Link href="/sign-in">
                    <MenuItem onClick={toggleOpen}>Login</MenuItem>
                    </Link>
                <Link href="/sign-up">
                    <MenuItem onClick={toggleOpen}>Sign Up</MenuItem>
                    </Link>

                </div> }

            </div>
        )}
      </div>
      {  isOpen ? <Drop onClick={toggleOpen} />: null}
    </>
  );
};

export default Menu;
