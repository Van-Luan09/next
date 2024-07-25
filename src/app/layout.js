import "./globals.css";
import Header from "@/components/Header";
import { FilmContextProvider } from "./ContextAPI/FilmContext";

export const metadata = {
  title: "PHIMMOI.COM",
  description:
    "Phim bộ mới nhất tuyển chọn chất lượng cao, phim bộ trọn bộ vietsub cập nhật nhanh nhất. Phim bộ vietsub nhanh nhất",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-black"}>
        <FilmContextProvider>
          <Header />
          <div className="max-w-screen-xl mx-auto rounded-md bg-slate-300 p-0.5">
            <div className="bg-black rounded-md p-5 text-white">{children}</div>
          </div>
        </FilmContextProvider>
      </body>
    </html>
  );
}
