import { CategoriesCard } from "../../components/Organisms/CategoriesCard";


function Products() {
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6">
        <div className="lg:col-start-2 md:col-start-1 sm:col-start-1">
        <CategoriesCard/>
        </div>
        </div>
    </div>
  );
}

export default Products;