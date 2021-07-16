interface AyatProps {
  ayatSurah: number;
  textArab: string;
  textArti: string;
}

export default function Ayat(props: AyatProps) {
  const { ayatSurah, textArab, textArti } = props;
  return (
    <div className="flex w-full border-b-2 justify-between p-1 md:p-4">
      <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full flex items-center justify-center border-2 font-normal text-xl sm:text-2xl text-gray-500 border-gray-300">
        {ayatSurah}
      </div>
      <div className="flex flex-col w-full md:ml-6">
        <div className="text-right font-normal text-3xl text-gray-800">
          <p className="leading-loose">{textArab}</p>
        </div>
        <div className="text-left font-normal text-lg text-gray-700 mt-4">
          <p>{textArti}</p>
        </div>
      </div>
    </div>
  );
}
