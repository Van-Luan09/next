import Image from "next/image";
import Link from "next/link";
import React from "react";
import Skeleton from "./Skeleton";
import { Loading } from "./Loading";

const CardFilm = ({ film, loading }) => {
  return (
    <div className="bg-black p-2 max-w-screen-xl mx-auto">
      <div>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full">
            <Loading />
            {Array(10)
              .fill()
              .map((item, ind) => (
                <Skeleton key={ind} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full ">
            {film?.map((item, index) => (
              <Link to={`/phim/${item.slug}`} key={index}>
                <div className="w-full bg-black/55">
                  <div>
                    <Image
                      className="w-[250px] h-auto object-contain flex-shrink-0"
                      src={item.poster_url}
                      alt=""
                    />
                  </div>
                  <div className="line-clamp-2 py-2.5 h-16 text-white">
                    {item.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFilm;
