import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Cart from '../../components/Organisms/Cart';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Organisms/Pagination';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Product {
  total: number;
  discountedTotal: number;
}

interface Cart {
  products: Product[];
}

interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountedTotal: number;
    thumbnail: string;
  }
  
  interface Cart {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    totalProducts: number;
    totalQuantity: number;
  }

export const ChartCartDiscountedComponent = () => {

  const [get, setGet] = useState<any[]>([]); // Data from fetch
      
  
        // Fetching function
          const fetchFunct = async () => {
            const url = `https://dummyjson.com/carts`;
            const response = await fetch(url);
            const data = await response.json();
            setGet(data.carts); // Set the fetched data
          };
        
          useEffect(() => {
            fetchFunct(); // Fetch data when component mounts
          }, []);

          const itemsPerPage = 1;
                    const [currentPage, setCurrentPage] = useState(1);
                  
                    // Recalculate totalPages and currentData dynamically
                    const totalPages = Math.ceil(get.length / itemsPerPage);
                  
                    // Handle page change
                    const handlePageChange = (page: number) => {
                      setCurrentPage(page);
                    };
          
                    const currentData = get.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-2 max-w-lg mx-auto">
      <div className="grid grid-cols-1 mt-4 place-items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <Cart carts={currentData} />
      </div>
    </div>

  );
};