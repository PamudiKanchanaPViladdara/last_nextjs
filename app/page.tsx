"use client";

import { useEffect, useRef, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";

export default function Home() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLInputElement>(null);

  const openDropdown = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if(menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler)
    };
  }, [])

  return (
    <div className="p-12">
      <div className="flex flex-col gap-4 justify-center items-center mx-auto p-4 w-[200px] bg-white rounded-2xl m-[16px]">
        <div onClick={() => {setOpen(!open)}} className="bg-gray-300 p-4 rounded-full">
          <div className="rounded-full bg-black">
            <AiOutlineGithub />
          </div>
        </div>
        {open && (
          <div ref={menuRef} className="flex flex-col gap-[4px] rounded-md w-full bg-gray-200">
            <button className="text-[14px] text-black hover:bg-gray-600 p-1 hover:border-l-[3px] border-black rounded-md">
              Sign In
            </button>
            <button className="text-[14px] text-black hover:bg-gray-600 p-1 hover:border-l-[3px] border-black rounded-md">
              Log out
            </button>
            <button className="text-[14px] text-black hover:bg-gray-600 p-1 hover:border-l-[3px] border-black rounded-md">
              Your Profile
            </button>
            <button className="text-[14px] text-black hover:bg-gray-600 p-1 hover:border-l-[3px] border-black rounded-md">
              Setting
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
