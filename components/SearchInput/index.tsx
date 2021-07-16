interface SearchInputProps {
  searchTerm: string;
  setSearchTerm: any;
}

export default function SearchInput(props: SearchInputProps) {
  const { searchTerm, setSearchTerm } = props;

  const searchHandler = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="w-full md:w-1/2 relative">
      <input
        value={searchTerm}
        onChange={(e) => searchHandler(e)}
        placeholder="Cari Surah ..."
        className="border-2 outline-none w-full my-4 pl-10 pr-2 py-2 text-gray-600 font-normal rounded-xl "
      />
      <div className="absolute top-7 left-2 text-gray-400">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
}
