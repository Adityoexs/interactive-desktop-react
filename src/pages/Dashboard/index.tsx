import { CategoriesCard } from "../../components/Organisms/CategoriesCard";
import PostsList from "../../components/Organisms/Posts";
import { ChartCartDiscountedComponent } from "../Carts";
import { DashboardRecipes } from "../Recipes";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Chart Section */}
        <div className="col-span-1 lg:col-span-1">
          <ChartCartDiscountedComponent />
        </div>

        {/* Categories Card Section */}
        <div className="col-span-1 lg:col-span-2">
          <CategoriesCard />
        </div>

        {/* Posts List Section */}
        <div className="col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1">
          <PostsList />
        </div>

        {/* Recipes Section */}
        <div className="lg:col-span-2 md:col-span-1 sm:col-span-1 lg:row-span-2">
          <DashboardRecipes />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;