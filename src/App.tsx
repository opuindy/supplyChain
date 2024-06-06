import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
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
import DashboardHomePage from "./pages/DashboardHomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage";
import ManufacturerInformationPage from "./pages/ManufacturerInformationPage";
import DistributorInformationPage from "./pages/DistributorInformationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicationLayout />}>
          {/* Nest the HomePage inside the ApplicationLayout */}
          <Route index element={<HomePage />} />
          <Route
            path="manufacturer-information"
            element={<ManufacturerInformationPage />}
          />
          <Route
            path="distributor-information"
            element={<DistributorInformationPage />}
          />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
          <Route path="create-new-product" element={<CreateNewProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetailsPage />} />
          <Route path="create-new-order" element={<CreateNewOrder />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/:id" element={<InventoryDetailsPage />} />
          <Route path="create-new-inventory" element={<CreateNewInventory />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
