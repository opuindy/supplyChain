import { Outlet } from "react-router-dom";
import Header from "./Header";
// import DottedBackground from "./DottedBackground";

const ApplicationLayout = () => {
  return (
    <>
      {/* <DottedBackground /> */}
      <Header />
      <main className="w-full">
        <Outlet />
      </main>
    </>
  );
};

export default ApplicationLayout;
