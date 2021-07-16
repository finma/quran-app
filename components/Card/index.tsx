import { useRouter } from "next/dist/client/router";

interface CardProps {
  number: number;
  namaSurah: string;
  artiSurah: string;
  kaligrafi: string;
}

export default function Card(props: CardProps) {
  const router = useRouter();
  const { number, namaSurah, artiSurah, kaligrafi } = props;
  return (
    <div
      className="flex justify-between shadow-md rounded-md cursor-pointer"
      onClick={() => {
        router.push(`/${number}`);
      }}
    >
      <div className="flex items-center justify-center w-1/5 bg-gray-500 text-white rounded-l-md text-4xl px-4">
        {number}
      </div>
      <div className="flex flex-col w-4/5 p-4 font-xl">
        <div className="flex justify-between border-b ">
          <p>{namaSurah}</p>
          <p>{kaligrafi}</p>
        </div>
        <div>{artiSurah}</div>
      </div>
    </div>
  );
}
