import { useLocation } from "react-router-dom";
import DetailsCard from "./../ui/DetailsCard";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ManufacturerInformationPage = () => {
  const query = useQuery();
  const orderData = query.get("data");
  const product = orderData ? JSON.parse(decodeURIComponent(orderData)) : null;

  console.log(product);

  if (!product) {
    return (
      <div className="flex">
        <h1 className="m-auto text-3xl">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <DetailsCard title="Product Details" details={product} />
    </div>
  );
};

export default ManufacturerInformationPage;
