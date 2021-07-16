import React from "react";
import Ayat from "../Ayat";

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

export default function AyatList(props: SurahListProps) {
  const { surah } = props;
  return (
    <div className="grid grid-cols-1 gap-6">
      {surah.map((ayat) => (
        <Ayat
          key={ayat.number.inQuran}
          ayatSurah={ayat.number.inSurah}
          textArab={ayat.text.arab}
          textArti={ayat.translation.id}
        />
      ))}
    </div>
  );
}
