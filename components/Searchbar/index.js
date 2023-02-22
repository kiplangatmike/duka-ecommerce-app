import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const handleClick = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="">
      <form >
        <input
          type="text"
          className=" border border-gray-400 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="search..."
          value={search}
          onChange={handleClick}
        />
        <button
          className="bg-pink-500 hover:bg-purple-500 text-white font-bold rounded-r-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
          onClick={handleSubmit}
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Searchbar;
