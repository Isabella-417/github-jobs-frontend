import { useState } from "react";

export const SearchComponent = ({ search, updateJobsList }) => {
  const [searchedText, setSearchedText] = useState("");

  return (
    <form className="bg-white shadow p-2 flex rounded">
      <span className="w-auto flex justify-end items-center text-gray-500 p-2">
        <i className="material-icons text-3xl">
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </i>
      </span>
      <input
        className="w-full rounded p-2"
        type="text"
        placeholder="title of job"
        value={searchedText}
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <button
        type="button"
        className="bg-blue-400 hover:bg-blue-300 rounded text-white p-2 pl-4 pr-4"
        onClick={() => updateJobsList(searchedText)}
      >
        <p className="font-semibold text-xs">Search</p>
      </button>
    </form>
  );
};
