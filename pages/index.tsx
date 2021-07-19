import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SurahList from "../components/SurahList";
import SearchInput from "../components/SearchInput";
import { RotateSpinner } from "react-spinners-kit";
import { useSelector } from "react-redux";
import { RootReducer } from "../redux/reducer";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const { surahList } = useSelector((state: RootReducer) => state.surahReducer);

  useEffect(() => {
    if (surahList) setLoading(false);
  }, [surahList]);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-col justify-center items-center"
        >
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <h2 className="text-4xl text-gray-600 mt-4 text-center">
            Daftar Isi
          </h2>
          {loading ? (
            <motion.div variants={variants} className="mt-4">
              <RotateSpinner size={60} color="#E5E7EB" loading={loading} />
            </motion.div>
          ) : (
            <SurahList term={searchTerm} />
          )}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
