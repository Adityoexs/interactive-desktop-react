
import { FaUsers, FaChartLine, FaDollarSign, FaThumbsUp } from "react-icons/fa";
import { AnalyticsCard } from "../../components/Organisms/AnalyticsCard";
import { CategoriesCard } from "../../components/Organisms/CategoriesCard";
import { useEffect, useState } from "react";

type Category = {
    name: string;
    sales: number;
    gross: string;
    change: string;
    changeColor: string;
    dotColor: string;
  };


function Products() {
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6">
        <div className="lg:col-start-2 md:col-start-1 sm:col-start-1">
        <CategoriesCard/>
        </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Products;