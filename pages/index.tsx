import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SurahList from "../components/SurahList";
import SearchInput from "../components/SearchInput";
import { RotateSpinner } from "react-spinners-kit";
import { useSelector } from "react-redux";
import { RootReducer } from "../redux/reducer";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { surahList } = useSelector((state: RootReducer) => state.surahReducer);

  useEffect(() => {
    if (surahList) setLoading(false);
  });

  const searchHandler = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h2 className="text-4xl text-gray-600 mt-4 text-center">Daftar Isi</h2>
        {loading ? (
          <div className="mt-4">
            <RotateSpinner size={60} color="#E5E7EB" loading={loading} />
          </div>
        ) : (
          <SurahList term={searchTerm} />
        )}
      </div>
    </Layout>
  );
}
