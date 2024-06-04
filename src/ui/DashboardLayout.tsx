import { Outlet, useNavigate } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";
import { useUserRole } from "../Context/UserRoleContext";
import { useEffect } from "react";

const DashboardLayout = () => {
  const { role } = useUserRole();
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate("/");
    }
  }, [navigate, role]);

  return (
    <div className="flex h-screen min-h-screen w-full items-start justify-between gap-x-2 bg-lightGray">
      <DashboardSidebar />
      <div className="h-full w-full space-y-2">
        <div className="flex min-h-16 bg-background p-2 pr-6 text-darkGray">
          <DashboardHeader />
        </div>
        <div
          className=" overflow-y-scroll bg-background"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
