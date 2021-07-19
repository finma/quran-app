import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSurah } from "../../redux/action";
import { RootReducer } from "../../redux/reducer";
import { motion } from "framer-motion";
import Card from "../Card";

interface Surah {
  number: number;
  name: {
    transliteration: {
      id: string;
    };
    translation: {
      id: string;
    };
    short: string;
  };
}

interface SurahListProps {
  term: string;
}

export default function SurahList(props: SurahListProps) {
  const { term } = props;
  const dispatch = useDispatch();
  const { surahList }: { surahList: Array<Surah> } = useSelector(
    (state: RootReducer) => state.surahReducer
  );

  useEffect(() => {
    dispatch(getSurah());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-12 w-full">
      {surahList
        .filter((val) => {
          if (term) {
            return Object.values(
              `${val.name.transliteration.id} ${val.name.translation.id}`
            )
              .join("")
              .toLowerCase()
              .includes(term.toLowerCase());
          }
          return val;
        })
        .map((surah) => (
          <Card
            key={surah.number}
            number={surah.number}
            namaSurah={surah.name.transliteration.id}
            artiSurah={surah.name.translation.id}
            kaligrafi={surah.name.short}
          />
        ))}
    </div>
  );
}
