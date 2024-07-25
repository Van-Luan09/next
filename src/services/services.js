import axios from "axios";

const url = "https://phimapi.com/v1";
// https://avdbapi.com/api.php/provide/vod/at/json

const getDanhSachPhim = async () => {
  const res = await axios.get(
    `https://phimapi.com/danh-sach/phim-moi-cap-nhat?page=1`
  );
  return res;
};

const getPhimDetail = async (slug) => {
  const res = await axios.get(`https://phimapi.com/phim/${slug}`);
  return res;
};
const getPhimLe = async (page) => {
  const res = await axios.get(`${url}/api/danh-sach/phim-le?page=${page}`);
  return res;
};

const getPhimBo = async (page) => {
  const res = await axios.get(
    `${url}/api/danh-sach/phim-bo?page=${page}&limit=30`
  );
  return res;
};

const getPhimHoatHinh = async (page) => {
  const res = await axios.get(
    `${url}/api/danh-sach/hoat-hinh?page=${page}&limit=30`
  );
  return res;
};

const getTiviShow = async (page) => {
  const res = await axios.get(`${url}/api/danh-sach/tv-shows?page=${page}`);
  return res;
};
const getTheLoai = async () => {
  const res = await axios.get(`https://phimapi.com/the-loai`);
  return res;
};
const getTheLoaiDetail = async (slug, page) => {
  const res = await axios.get(
    `${url}/api/the-loai/${slug}?page=${page}&limit=30`
  );
  return res;
};
const getQuocGia = async () => {
  const res = await axios.get(`https://phimapi.com/quoc-gia`);
  return res;
};
const getQuocGiaDetail = async (slug, page) => {
  const res = await axios.get(
    `${url}/api/quoc-gia/${slug}?page=${page}&limit=24`
  );
  return res;
};
export {
  getDanhSachPhim,
  getPhimDetail,
  getPhimLe,
  getPhimBo,
  getPhimHoatHinh,
  getTiviShow,
  getTheLoai,
  getTheLoaiDetail,
  getQuocGia,
  getQuocGiaDetail,
};
