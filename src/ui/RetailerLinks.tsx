import { RiHome4Line } from "react-icons/ri";
import { MdStorefront } from "react-icons/md"; // Example icon for retailer
import { IoCreate } from "react-icons/io5";
import DashboardLinks from "./DashboardLinks";

const RetailerLinks = () => {
  return (
    <ul className="mt-10 flex h-max w-full flex-col items-start justify-between gap-y-1">
      <DashboardLinks to="/dashboard">
        <RiHome4Line className="text-xl" /> Home
      </DashboardLinks>
      <DashboardLinks to="inventory">
        <MdStorefront className="text-xl" /> Inventory
      </DashboardLinks>
      <DashboardLinks to="create-new-inventory">
        <IoCreate className="text-xl" /> New Item
      </DashboardLinks>
    </ul>
  );
};

export default RetailerLinks;
