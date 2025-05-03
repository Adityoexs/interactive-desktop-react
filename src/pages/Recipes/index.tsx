import { useEffect, useState } from "react";
import { RecipesCard } from "../../components/Organisms/AnalyticsCard";
import { FaUsers } from "react-icons/fa";
import { ChartMealsComponent, ChartTagsComponent } from "../../components/Organisms/Chart";

// Reusable fetch function
const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data?.recipes || [];
};

// Helper function to count occurrences of items (tags, meal types)
const countItems = (items: string[]) => {
  return items.reduce((acc: Record<string, number>, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

export const Recipes = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  // Fetch recipes when the component mounts
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('https://dummyjson.com/recipes');
      setRecipes(data);
    };
    getData();
  }, []);

  const total = recipes.length;
  const allTags = Array.from(new Set(recipes.flatMap((r: any) => r.tags)));
  const allMeals = Array.from(new Set(recipes.map((r: any) => r.meal)));

  const tagStats = countItems(allTags);
  const mealStats = countItems(allMeals);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-6 mt-10">
        {/* Total Recipes */}
        <div className="lg:col-start-2 md:col-start-1 sm:col-start-1">
          <RecipesCard
            icon={<FaUsers />}
            title="Total Recipes"
            value={total}
          />
        </div>

        {/* Recipes by Meal */}
        <div className="lg:col-start-2 md:col-start-1 sm:md:col-start-1 lg:row-span-3">
          <ChartMealsComponent />
        </div>

        {/* Recipes by Tag */}
        <div className="lg:col-start-3 md:col-start-1 sm:col-start-1 lg:h-full row-span-3">
          <ChartTagsComponent />
        </div>
      </div>
    </div>
  );
};

// Dashboard Recipes Component
export const DashboardRecipes = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  // Fetch recipes when the component mounts
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData('https://dummyjson.com/recipes');
      setRecipes(data);
    };
    getData();
  }, []);

  const total = recipes.length;
  const allTags = Array.from(new Set(recipes.flatMap((r: any) => r.tags)));
  const allMeals = Array.from(new Set(recipes.map((r: any) => r.meal)));

  const tagStats = countItems(allTags);
  const mealStats = countItems(allMeals);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid lg:grid-cols-4 md:grid-cols-1 gap-6 lg:row-span-4">
        {/* Total Recipes */}
        <div className="lg:col-start-1 lg:col-end-3 md:col-start-1 sm:col-start-1">
          <RecipesCard
            icon={<FaUsers />}
            title="Total Recipes"
            value={total}
          />
        </div>

        {/* Recipes by Tag */}
        <div className="lg:col-start-1 lg:col-end-3 md:col-start-1 sm:md:col-start-1 lg:row-span-3">
          <ChartTagsComponent />
        </div>

        {/* Recipes by Meal */}
        <div className="lg:col-start-3 md:col-start-1 sm:col-start-1 lg:h-full row-span-3 max-w-screen-lg mx-auto">
          <ChartMealsComponent />
        </div>
      </div>
    </div>
  );
};
