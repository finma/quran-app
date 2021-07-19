import React from "react";
import Ayat from "../Ayat";
import { motion } from "framer-motion";

interface SurahListProps {
  surah: Array<Ayat>;
}

interface Ayat {
  number: {
    inQuran: number;
    inSurah: number;
  };
  text: {
    arab: string;
  };
  translation: {
    id: string;
  };
}

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default function AyatList(props: SurahListProps) {
  const { surah } = props;
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="grid grid-cols-1 gap-6"
    >
      {surah.map((ayat) => (
        <Ayat
          key={ayat.number.inQuran}
          ayatSurah={ayat.number.inSurah}
          textArab={ayat.text.arab}
          textArti={ayat.translation.id}
        />
      ))}
    </motion.div>
  );
}
