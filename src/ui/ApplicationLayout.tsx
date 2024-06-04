import { Outlet } from "react-router-dom";
import Header from "./Header";

const ApplicationLayout = () => {
  return (
    <>
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </>
  );
};

export default ApplicationLayout;
