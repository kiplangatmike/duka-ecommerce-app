import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleClick = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const search = await fetch(
      `https://fakestoreapi.com/search=q${searchTerm}`
    );
    const res = await search.json();
    onSearch(res);
    console.log(res);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            className="min-w-8 rounded-l-lg px-4 py-2 focus:outline-none"
            placeholder="search..."
            value={searchTerm}
            onChange={handleClick}
          />
          <button
            className="bg-pink-500 hover:bg-purple-500 text-white font-bold rounded-r-lg px-4 py-2 focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
export default Searchbar;
