import { useEffect, useState } from "react";
import Pagination from "../Pagination";

type Category = {
  name: string;
  sales: number;
  gross: string;
  change: string;
  changeColor: string;
  dotColor: string;
};

export const CategoriesCard = () => {
  const [sortBy, setSortBy] = useState("");
  const [get, setGet] = useState<any[]>([]); // Data from fetch


  // Fetching function
  const fetchFunct = async () => {
    const url = `https://dummyjson.com/products`;
    const response = await fetch(url);
    const data = await response.json();
    setGet(data.products); // Set the fetched data
  };


  const [search, setSearch] = useState("");
  const [clickSearch, setClickSearch] = useState("");

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  // Recalculate totalPages and currentData dynamically
  const totalPages = Math.ceil(get.length / itemsPerPage);
  const currentData = get
    .filter((item: any) =>
      item.title.toLowerCase().includes(clickSearch.toLowerCase())
    )
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Sorting function
  const sortListPrice = () => {
    let sortedData = [...get]; // Avoid mutating the original state
    if (sortBy === "Price") {
      sortedData.sort((a: any, b: any) => b.price - a.price);
    } else if (sortBy === "Rating") {
      sortedData.sort((a: any, b: any) => b.rating - a.rating);
    }
    setGet(sortedData); // Update state with sorted data
  };

  // Sorting based on the selected criteria
  useEffect(() => {
    if (sortBy) {
      sortListPrice(); // Re-sort whenever sortBy changes
    }
  }, [sortBy]); // Watch for sortBy changes only

  
  useEffect(() => {
    fetchFunct();
    if(search===""){
      fetchFunct();
    } // Fetch data when component mounts
  }, [search]);

  return (
    <div className="bg-white rounded-xl shadow p-6 lg:w-full sm:w-fit md:w-full">
      <div className="grid grid-cols-1 mb-4">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center border-b border-blue-500 py-2 col-span-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search"
            aria-label="Full name"
          />
          <button
            onClick={() => setClickSearch(search)}
            className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-800 text-sm py-1 px-2 rounded"
            type="button"
          >
            Search
          </button>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-sm rounded px-2 py-1 lg:h-3/4 md:h-full sm:h-full lg:w-full md:w-full sm:w-full lg:place-self-center lg:col-end-6"
        >
          <option>Price</option>
          <option>Rating</option>
        </select>
      </div>

      {/* List Items */}
      <div className="space-y-4">
        {currentData?.map((item: any, i: any) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div>
                <p className="text-sm font-medium text-gray-800">{item.title}</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-800">{item.price}</p>
              <div
                className={`text-xs text-white px-2 py-0.5 rounded bg-blue-600`}
              >
                {item.rating}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="grid grid-cols-1 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
