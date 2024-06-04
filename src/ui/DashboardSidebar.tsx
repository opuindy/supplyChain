import { HiOutlineLogout } from "react-icons/hi";
import Button from "./Button";
import { useUserRole } from "../Context/UserRoleContext";
import ManufacturerLinks from "./ManufacturerLinks";
import DistributorLinks from "./DistributorLinks";
import RetailerLinks from "./RetailerLinks";
import { useLogout } from "../Hooks/useLogout";

const DashboardSidebar = () => {
  const handleLogout = useLogout();
  const { role } = useUserRole();

  return (
    <div className="h-full w-[300px] bg-background">
      <div className="flex h-full flex-col items-start justify-start p-4">
        <div className="text-xl font-bold uppercase text-darkGray">
          supply chain
        </div>

        {role.trim().toLowerCase() === "manufacturer" && <ManufacturerLinks />}
        {role.trim().toLowerCase() === "distributor" && <DistributorLinks />}
        {role.trim().toLowerCase() === "retailer" && <RetailerLinks />}
        <Button
          className="mt-auto flex w-full items-center justify-start gap-x-2 !bg-linkBackground text-left font-medium !text-darkGray hover:!bg-secondary hover:!text-white"
          onClick={handleLogout}
        >
          <HiOutlineLogout className="text-xl" />
          <span> Log Out</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
