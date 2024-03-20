"use client";

import Link from "next/link";
import { navbarContent } from "../../configs/navbarConfig";

const HackerHouseHeader = () => {
  return (
    <div className="">
      <Link href={"/"}>
        <img src={navbarContent.logo} />
      </Link>

      <div></div>
    </div>
  );
};

export default HackerHouseHeader;
