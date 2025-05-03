import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  value: number;
  change: number;
  positive: boolean;
}

interface RecipesProps {
  icon: ReactNode;
  title: string;
  value: number;
}

export const AnalyticsCard = ({ icon, title, value, change, positive }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full sm:w-1/2 lg:w-1/4 md:h-1/4 transition transform hover:scale-[1.01]">
      <div className="flex items-center justify-between">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
          {icon}
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value.toLocaleString()}</h3>
          <p className={`text-sm mt-1 font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {positive ? 'Increased' : 'Decreased'} by {change.toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export const RecipesCard = ({ icon, title, value }: RecipesProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 sm:w-1/2 lg:w-full md:w-1/2 transition transform hover:scale-[1.01]">
      <div className="flex items-center justify-between">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl`}>
          {icon}
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
          {/* <p className={`text-sm mt-1 font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {positive ? 'Increased' : 'Decreased'} by {change.toFixed(2)}%
          </p> */}
        </div>
      </div>
    </div>
  );
};