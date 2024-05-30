import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen min-h-screen w-full items-start justify-between gap-x-2 bg-lightGray">
      <DashboardSidebar />
      <div className="h-full w-full space-y-2">
        <div className="text-darkGray flex min-h-16 bg-background p-2 pr-6">
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
