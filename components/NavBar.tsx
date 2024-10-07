"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [menuStatus, setMenuStatus] = useState("hidden ");
  function updateMenuStatus() {
    if (menuStatus === "hidden ") {
      setMenuStatus("block ");
    } else {
      setMenuStatus("hidden ");
    }
  }
  return (
    <section className="container flex items-center justify-between">
      <div className="text-2xl font-bold">LearnCloudToday.com</div>
      <div className="flex items-center">
        <Link href="#" className="px-4">
          Reviews
        </Link>
        <div onMouseEnter={updateMenuStatus} onMouseLeave={updateMenuStatus}>
          <Link href="#" className="px-4">
            Courses
          </Link>
          <div className={menuStatus + "absolute flex flex-col bg-white p-5"}>
            <Link href="#" className="">
              Azure
            </Link>
            <Link href="#" className="">
              GCP
            </Link>
            <Link href="#" className="">
              AWS
            </Link>
          </div>
        </div>
        <Link
          href="/enroll"
          className="mx-4 rounded-full border bg-[#7272ff] px-4 py-2 font-semibold text-white"
        >
          ENROLL NOW
        </Link>
      </div>
    </section>
  );
}
