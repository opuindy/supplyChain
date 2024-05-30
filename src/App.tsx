import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage.";
import ApplicationLayout from "./ui/ApplicationLayout";
import Dashboard from "./ui/Dashboard";
import RegisterPage from "./pages/RegisterPage";
import Products from "./pages/Products";
import CreateNewProduct from "./pages/CreateNewProduct";
import Login from "./pages/Login";
import CreateNewOrder from "./pages/CreateNewOrder";
import Orders from "./pages/Orders";
import CreateNewInventory from "./pages/CreateNewInventory";
import Inventory from "./ui/Inventory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationLayout />}>
          {/* Nest the HomePage inside the ApplicationLayout */}
          <Route index element={<HomePage />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Outlet />} />
          <Route path="products" element={<Products />} />
          <Route path="create-new-product" element={<CreateNewProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="create-new-order" element={<CreateNewOrder />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="create-new-inventory" element={<CreateNewInventory />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
