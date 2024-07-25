"use client";
import { Loading } from "@/components/Loading";
import PlayerCustom from "@/components/Player";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Phim = () => {
  const [episodes, setEpisodes] = useState([]);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();
  const [active, setActive] = useState(0);
  const [film, setFilm] = useState("");
  useEffect(() => {
    const getFilm = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://phimapi.com/phim/${slug}`);
        setMovie(res.data.movie);
        setEpisodes(res.data.episodes);
        setFilm(res.data?.episodes[0].server_data[0].link_m3u8);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getFilm();
  }, [slug]);
  return (
    <div>
      <div>
        <div>
          {loading ? (
            <div className="flex justify-center items-center">
              <Loading />
            </div>
          ) : (
            <div>
              <div className="flex flex-col lg:flex-row gap-x-5">
                <div>
                  <div>
                    <Image
                      className="object-cover h-[250px] lg:max-h-[400px] lg:min-h-[400px]"
                      width={640}
                      height={500}
                      src={movie.thumb_url}
                      alt=""
                    />
                  </div>
                  <div className="bg-white/55 w-full my-2 py-2 px-3 font-bold">
                    {movie.name}
                  </div>
                  <div className="inline-block gap-x-2 ">
                    {movie.category?.map((item) => (
                      <div
                        className="inline-block mr-1 mb-1 cursor-pointer rounded px-2 py-1 bg-white/55"
                        key={item.id}
                      >
                        <Link href={`/the-loai/${item.slug}`}>{item.name}</Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border rounded object-contain p-1">
                  <PlayerCustom urlVideo={film} />
                </div>
              </div>

              <div className="flex justify-start items-center mt-2">
                <div className="min-w-fit">Số Tập:</div>
                <div className="inline-block">
                  {episodes[0]?.server_data?.map((item, index) => (
                    <div
                      className="cursor-pointer inline-block m-1"
                      onClick={() => {
                        setFilm(item?.link_m3u8);
                        setActive(index);
                      }}
                      key={index}
                    >
                      <span
                        className={`${
                          active === index
                            ? "text-white !bg-orange-500 "
                            : " text-white"
                        }  bg-white/55 px-2 rounded`}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Phim;
