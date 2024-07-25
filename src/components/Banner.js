"use client";
import { getDanhSachPhim } from "@/services/services";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ConfigProvider, Rate } from "antd";
import { Icon_Play } from "./Icon";
import Link from "next/link";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Banner = () => {
  const [page, setPage] = useState(``);
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDanhSach = async () => {
    try {
      setLoading(true);
      const res = await getDanhSachPhim();
      setFilm(res.data.items);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getDanhSach();
  }, []);
  return (
    <div>
      <Carousel
        autoPlay
        infinite={true}
        draggable={true}
        responsive={responsive}
        className="flex w-full gap-x-3"
      >
        {film.map((item, index) => (
          <div
            key={index}
            className="relative mx-2 rounded-md group  min-h-[350px] max-h-[350px] cursor-pointer "
          >
            <Link href={`/phim/${item.slug}`}>
              <div className="absolute w-full h-full z-0 backdrop-blur-sm left-0 top-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/55 rounded-full size-16 flex justify-center opacity-0 group-hover:opacity-100 items-center transition-all duration-300 ease-in-out">
                <Icon_Play className="text-[30px] " />
              </div>
              <p className="absolute top-0 bg-blue-500 px-2 py-1 rounded ">
                {item.year}
              </p>
              <div className="">
                <Image
                  src={`${item.poster_url}`}
                  className="min-h-[400px] object-contain"
                  width={300}
                  height={350}
                  alt=""
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              {/* <ConfigProvider
                theme={{
                  token: {
                    colorText: "rgba(255, 255, 255, 1)",
                    fontSize: "12px",
                  },
                }}
              >
                <Rate
                  className="absolute top-0 p-1 bg-black/55 w-full line-clamp-1 text-[12px]"
                  count={10}
                  allowHalf
                  defaultValue={item.tmdb.vote_average}
                />
              </ConfigProvider> */}

              <p className="absolute bottom-0 line-clamp-2 w-full h-16 text-black text-[18px] bg-white/55 px-2 font-bold py-1 ">
                {item.name}
              </p>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
