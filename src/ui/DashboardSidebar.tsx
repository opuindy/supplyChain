import { HiOutlineLogout } from "react-icons/hi";
import Button from "./Button";
import { useUserRole } from "../Context/UserRoleContext";
import ManufacturerLinks from "./ManufacturerLinks";
import DistributorLinks from "./DistributorLinks";
import RetailerLinks from "./RetailerLinks";

const DashboardSidebar = () => {
  const { role } = useUserRole();

  return (
    <div className="h-full w-[300px] bg-background">
      <div className="flex h-full flex-col items-start justify-start p-4">
        <div className="text-darkGray text-xl font-bold uppercase">
          supply chain
        </div>

        {role.trim() === "Manufacturer" && <ManufacturerLinks />}
        {role.trim() === "Distributor" && <DistributorLinks />}
        {role.trim() === "Retailer" && <RetailerLinks />}
        <Button className="!bg-linkBackground !text-darkGray mt-auto flex w-full items-center justify-start gap-x-2 text-left font-medium hover:!bg-secondary hover:!text-white">
          <HiOutlineLogout className="text-xl" />
          <span> Log Out</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
