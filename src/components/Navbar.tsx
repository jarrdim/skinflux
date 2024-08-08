import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { HandMetal } from "lucide-react";
import CartProductCount from "./CartProductCount";
import Menu from "./Menu";
import { getCurrectUser } from "@/actions/getCurrentUser";
import SearchBar from "./SearchBar";

const Navbar = async () => {
  const currentUser = await getCurrectUser();

  return (
    <div className=" bg-rose-300 py-2 border-b border-pink-300 fixed w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between gap-3 md:gap-0 px-4">
        <Link href="/">
          <div >SkinFlux</div>
          {/* <HandMetal className="h-6 w-6 text-black" /> */}
        </Link>

        {/* <div>
          <SearchBar />
        </div> */}

        <span className="text-gray-900 text-lg font-sans hidden md:block">
          Welcome to SkinFlux
        </span>
        {currentUser ? (
          `Hi, ${currentUser.name}`
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}

        <div className="flex item-center gap-8 md:gap-12">
          <CartProductCount />
          <div>
            <Menu currentUser={currentUser} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
