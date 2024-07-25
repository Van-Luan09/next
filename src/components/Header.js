"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState();
  const [showMenu, setShowMenu] = useState(true);
  const pathname = usePathname();
  return (
    <div className="w-full bg-slate-300 mb-2.5 rounded p-0.5 max-w-screen-xl mx-auto">
      <div className="flex items-center justify-between w-full relative px-2">
        <div className="lg:hidden text-white font-bold text-3xl w-1/2">
          PHIMMOI.COM
        </div>
        <div
          className="flex flex-col gap-y-2 cursor-pointer hover:text-orange-500 lg:hidden absolute right-0 pr-2"
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className="w-10 h-1 bg-slate-100 rounded"></div>
          <div className="w-10 h-1 bg-slate-100 rounded"></div>
          <div className="w-10 h-1 bg-slate-100 rounded"></div>
        </div>
      </div>
      <div
        className={` ${
          !showMenu
            ? "flex  pt-2 absolute top-[42px] w-full left-0"
            : "hidden lg:flex"
        }  bg-black rounded text-zinc-100`}
      >
        <div className="flex flex-col gap-y-3 justify-start items-start lg:items-center lg:flex-row gap-x-5 p-2.5  border-t border-black w-full lg:border-none relative z-50">
          <Link
            className={`hidden lg:block text-white font-bold text-3xl  ${
              pathname === "/" ? "text-orange-500" : ""
            }`}
            href={"/"}
          >
            PHIMMOI.COM
          </Link>
          <Link
            className={`hover:text-orange-500 ${
              pathname === "/" ? "text-orange-500" : ""
            }`}
            href={"/"}
          >
            Trang chủ
          </Link>
          <Link
            className={`hover:text-orange-500 ${
              pathname === "/phim-bo" ? "text-orange-500" : ""
            }`}
            href={"/phim-bo"}
          >
            Phim Bộ
          </Link>
          <Link
            className={`hover:text-orange-500 ${
              pathname === "/phim-le" ? "text-orange-500" : ""
            }`}
            href={"/phim-le"}
          >
            Phim Lẽ
          </Link>
          <Link
            className={`hover:text-orange-500 ${
              pathname === "/phim-hh" ? "text-orange-500" : ""
            }`}
            href={"/phim-hh"}
          >
            Hoạt Hình
          </Link>

          <Link
            className={`hover:text-orange-500 ${
              pathname === "/phim-18" ? "text-orange-500" : ""
            }`}
            href={"/phim-18"}
          >
            Phim 18+
          </Link>
          <Link
            className={`hover:text-orange-500 ${
              pathname === "/tv-shows" ? "text-orange-500" : ""
            }`}
            href={"/tv-shows"}
          >
            TV Shows
          </Link>
          <Link
            className={`hover:text-orange-500 group relative cursor-pointer ${
              pathname === "/the-loai" ? "text-orange-500" : ""
            }`}
            href={"/the-loai"}
          >
            Thể Loại
            <div className="bg-transparent lg:py-5 absolute z-50 w-[350px]">
              <div className="hidden bg-black group-hover:grid grid-cols-3 z-50 w-[350px] h-fit p-2.5 left-1/4 lg:-translate-x-1/3  border-t-4 border-zinc-100 before:content-[''] before:border-l-[15px] before:absolute before:-top-8 before:left-1/3 before:border-l-transparent before:border-r-[15px] before:border-r-transparent before:border-t-[15px] before:border-t-transparent  before:z-50 before:border-b-[15px] before:border-whtie">
                {/* {theLoai.map((item, index) => (
            <Link
              onClick={() => setActiveMenu(index)}
              href={`/the-loai/${item.slug}`}
              key={index}
              className={`hover:text-orange-500 ${
                activeMenu === index ? "text-orange-500" : "text-zinc-300"
              }`}
            >
              <div>{item.name}</div>
            </Link>
          ))} */}
              </div>
            </div>
          </Link>
          <Link
            className={`hover:text-orange-500 cursor-pointer group relative ${
              pathname === "/quoc-gia" ? "text-orange-500" : ""
            }`}
            href={"/quoc-gia"}
          >
            Quốc Gia
            <div className="absolute w-[350px] py-5 z-50">
              <div className="hidden bg-black group-hover:grid grid-cols-3 z-50 w-[350px] h-fit p-2.5 left-1/4 -translate-x-1/3  border-t-4 border-zinc-100 before:content-[''] before:border-l-[15px] before:absolute before:-top-8 before:left-1/3 before:border-l-transparent before:border-r-[15px] before:border-r-transparent before:border-t-[15px] before:border-t-transparent  before:z-50 before:border-b-[15px] before:border-whtie">
                {/* {quocGia.map((item, index) => (
            <Link
              onClick={() => setActiveMenu(index)}
              href={`/quoc-gia/${item.slug}`}
              key={index}
              className={` hover:text-orange-500 ${
                activeMenu === index ? "text-orange-500" : "text-zinc-300"
              }`}
            >
              <div>{item.name}</div>
            </Link>
          ))} */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
