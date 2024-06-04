import { useNavigate } from "react-router-dom";
import { disconnect } from "@wagmi/core";
import { config } from "../main";
import { useUserRole } from "../Context/UserRoleContext";
import { getAccount } from "wagmi/actions";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setRole } = useUserRole();
  const { connector } = getAccount(config);

  const handleLogout = async () => {
    try {
      await disconnect(config, {
        connector,
      }); // Disconnect the wallet
      setRole(""); // Clear the user role
      navigate("/"); // Redirect to login page
    } catch (error) {
      console.error("Failed to disconnect", error);
    }
  };

  return handleLogout;
};
