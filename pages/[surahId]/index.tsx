import Layout from "../../components/Layout";
import AyatList from "../../components/AyatList";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { deleteSurah, getDetailSurah } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/reducer";
import { RotateSpinner } from "react-spinners-kit";
import { motion } from "framer-motion";

interface Surah {
  name: {
    transliteration: {
      id: string;
    };
  };
  verses: Array<any>;
}

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function SurahDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const surahId = String(router.query.surahId);

  const { surah }: { surah: Surah } = useSelector(
    (state: RootReducer) => state.surahReducer
  );

  useEffect(() => {
    dispatch(getDetailSurah(surahId));

    return () => {
      dispatch(deleteSurah());
    };
  }, [dispatch, surahId]);

  const previousHandler = () => {
    surahId === "1"
      ? router.push("/114")
      : router.push(`/${Number(surahId) - 1}`);
  };

  const nextHandler = () => {
    surahId === "114"
      ? router.push("/1")
      : router.push(`/${Number(surahId) + 1}`);
  };

  return (
    <Layout>
      {surah.name ? (
        <motion.main
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <h2 className="text-4xl text-gray-600 my-8 text-center">
            Surah {surah.name.transliteration.id}
          </h2>
          <AyatList surah={surah.verses} />
          <div className="w-full flex justify-between my-6">
            <motion.button
              initial={{
                color: "gray",
                backgroundColor: "white",
              }}
              whileHover={{
                scale: 1.1,
                color: "white",
                backgroundColor: "gray",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  duration: 0.2,
                },
              }}
              onClick={previousHandler}
              className="flex space-x-2 items-center uppercase  rounded-lg p-2 border-2 font-medium"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <p>Surah Sebelumnya</p>
            </motion.button>
            <motion.button
              onClick={nextHandler}
              className="flex space-x-2 items-center uppercase text-gray-600 rounded-lg p-2 border-2 font-medium hover:text-white hover:bg-gray-600"
            >
              <p>Surah Selanjutnya</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </motion.button>
          </div>
        </motion.main>
      ) : (
        <div className="mt-4 flex justify-center items-center h-32">
          <RotateSpinner size={60} color="#E5E7EB" loading />
        </div>
      )}
    </Layout>
  );
}
