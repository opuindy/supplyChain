import { useLocation } from "react-router-dom";
import DetailsCard from "./../ui/DetailsCard";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ManufacturerInformationPage = () => {
  const query = useQuery();
  const orderData = query.get("data");
  const order = orderData ? JSON.parse(decodeURIComponent(orderData)) : null;

  if (!order) {
    return (
      <div className="flex">
        <h1 className="m-auto text-3xl">Order not found</h1>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-0">
      <DetailsCard title="Product Details" details={order} />
    </div>
  );
};

export default ManufacturerInformationPage;
