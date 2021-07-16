import Layout from "../../components/Layout";
import AyatList from "../../components/AyatList";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { deleteSurah, getDetailSurah } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/reducer";
import { RotateSpinner } from "react-spinners-kit";

interface Surah {
  name: {
    transliteration: {
      id: string;
    };
  };
  verses: Array<any>;
}

export default function SurahDetail() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { surah }: { surah: Surah } = useSelector(
    (state: RootReducer) => state.surahReducer
  );

  useEffect(() => {
    const surahId = String(router.query.surahId);

    dispatch(getDetailSurah(surahId));

    return () => {
      dispatch(deleteSurah());
    };
  }, [router.query]);

  return (
    <Layout>
      {surah.name ? (
        <main>
          <h2 className="text-4xl text-gray-600 my-8 text-center">
            Surah {surah.name.transliteration.id}
          </h2>
          <AyatList surah={surah.verses} />
        </main>
      ) : (
        <div className="mt-4 flex justify-center items-center h-32">
          <RotateSpinner size={60} color="#E5E7EB" loading />
        </div>
      )}
    </Layout>
  );
}
