import { useState } from "react";

import ManufatcturerForm from "./ManufatcturerForm";
import DistributorForm from "./DistributorForm";
import RetailerForm from "./RetailerForm";
import registerImage from "./../assets/images/loginImg.jpg";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "../Context/UserRoleContext";
import Button from "./Button";
import { useLogout } from "../Hooks/useLogout";

const Register = () => {
  const handleLogout = useLogout();
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();
  const { setRole } = useUserRole();

  const handleClickTab = (tabNum: number, newRole: string) => {
    setTab(tabNum);
    setRole(newRole);
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <section
      className="globalPadding min-h-screen w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${registerImage})` }}
    >
      <div className="glassyBg container relative">
        <Button
          className="absolute right-24 top-8 bg-transparent !text-accent hover:bg-transparent "
          onClick={handleLogout}
        >
          Disconnect
        </Button>
        <h2 className="mt-16 text-center text-3xl font-medium">
          Join Our Network Today!
        </h2>
        <p className="text-center">
          <span>Already have an account?</span>{" "}
          <span className="cursor-pointer text-accent" onClick={handleNavigate}>
            Login
          </span>
        </p>
        <div className="mt-8 w-full space-y-8 text-center">
          <p className="text-2xl"> Select Your Business Category </p>

          <div className="m-auto flex max-w-[400px] items-center justify-between font-bold">
            <button
              className={`cursor-pointer rounded p-2 transition-colors ${tab === 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => handleClickTab(1, "Manufacturer")}
            >
              Manufacturer
            </button>
            <button
              className={`cursor-pointer rounded p-2 transition-colors ${tab === 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => handleClickTab(2, " Distributor")}
            >
              Distributor
            </button>
            <button
              className={`cursor-pointer rounded p-2 transition-colors ${tab === 3 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
              onClick={() => handleClickTab(3, " Retailer")}
            >
              Retailer
            </button>
          </div>
        </div>
        <div>
          {tab === 1 && <ManufatcturerForm />}
          {tab === 2 && <DistributorForm />}
          {tab === 3 && <RetailerForm />}
        </div>
      </div>
    </section>
  );
};

export default Register;
