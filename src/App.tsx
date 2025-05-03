import { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import DefaultNavbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { ChartMealsComponent, ChartTagsComponent } from './components/Organisms/Chart';
import { ChartCartDiscountedComponent } from './pages/Carts';
import { Recipes } from './pages/Recipes';
import Products from './pages/Products\'';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router> {/* Wrap the app with Router */}
      <DefaultNavbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<ChartCartDiscountedComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
