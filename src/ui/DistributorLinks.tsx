import { RiHome4Line } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md"; // Example icon for distributor
import { IoCreate } from "react-icons/io5";
import DashboardLinks from "./DashboardLinks";

const DistributorLinks = () => {
  return (
    <ul className="mt-10 flex h-max w-full flex-col items-start justify-between gap-y-1">
      <DashboardLinks to="/dashboard">
        <RiHome4Line className="text-xl" /> Home
      </DashboardLinks>
      <DashboardLinks to="orders">
        <MdLocalShipping className="text-xl" /> Orders
      </DashboardLinks>
      <DashboardLinks to="create-new-order">
        <IoCreate className="text-xl" /> New Order
      </DashboardLinks>
    </ul>
  );
};

export default DistributorLinks;
