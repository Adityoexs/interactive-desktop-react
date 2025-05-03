import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

// Reusable fetch function to get recipes data
const fetchRecipes = async () => {
  const response = await fetch('https://dummyjson.com/recipes');
  const data = await response.json();
  return data?.recipes || [];
};

// Helper function to count occurrences of items in an array
const countItems = (items: string[]) => {
  return items.reduce((acc: Record<string, number>, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
};

// Meal Types Chart Component
export const ChartMealsComponent = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    fetchData();
  }, []);

  const mealTypeCounts = countItems(recipes.flatMap((recipe: any) => recipe.mealType));

  const pieData = {
    labels: Object.keys(mealTypeCounts),
    datasets: [
      {
        data: Object.values(mealTypeCounts),
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33B8', '#33D7FF'],
        borderColor: '#FFF',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Meal Type Distribution</h2>
      <Pie data={pieData} options={{ responsive: true }} />
    </div>
  );
};

// Tags Chart Component
export const ChartTagsComponent = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRecipes();
      setRecipes(data);
    };
    fetchData();
  }, []);

  const allTags = recipes.flatMap((recipe: any) => recipe.tags);
  const tagCounts = countItems(allTags);

  const pieTagsData = {
    labels: Object.keys(tagCounts),
    datasets: [
      {
        data: Object.values(tagCounts),
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33B8', '#33D7FF', '#FF6F61', '#B9FF00', '#FFCD00'],
        borderColor: '#FFF',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Tag Distribution in Recipes</h2>
      <Pie data={pieTagsData} options={{ responsive: true }} />
    </div>
  );
};
