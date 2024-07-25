"use client";
import { getPhimBo, getQuocGia, getTheLoai } from "@/services/services";
import { createContext, useContext, useEffect, useState } from "react";

const filmContext = createContext({});

export const FilmContextProvider = ({ children }) => {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(false);
  const [theLoai, setTheLoai] = useState([]);
  const [quocGia, setQuocGia] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    const getPhimBoData = async () => {
      try {
        setLoading(true);
        const res = await getPhimBo(page);
        setFilm(res.data.data.items);
        setTotal(res.data.data.params.pagination.totalPages);
        setPage(res.data.data.params.pagination.currentPage);
        setPageSize(res.data.data.params.pagination.totalItemsPerPage);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPhimBoData();
  }, [page]);
  return (
    <filmContext.Provider
      value={{
        film,
        page,
        loading,
        pageSize,
        theLoai,
        quocGia,
        total,
      }}
    >
      {children}
    </filmContext.Provider>
  );
};
export const useFilmContextData = () => useContext(filmContext);
