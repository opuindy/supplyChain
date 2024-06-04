import { RiHome4Line } from "react-icons/ri";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import DashboardLinks from "./DashboardLinks";

const ManufacturerLinks = () => {
  return (
    <ul className="mt-10 flex h-max w-full flex-col items-start justify-between gap-y-1">
      <DashboardLinks to="/dashboard">
        <RiHome4Line className="text-xl" /> Home
      </DashboardLinks>
      <DashboardLinks to="products">
        <MdProductionQuantityLimits className="text-xl" />
        Products
      </DashboardLinks>
      <DashboardLinks to="create-new-product">
        <IoCreate className="text-xl" />
        New Product
      </DashboardLinks>
    </ul>
  );
};

export default ManufacturerLinks;
