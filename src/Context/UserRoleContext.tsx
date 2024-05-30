import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the context state
interface UserRoleContextType {
  role: string;
  setRole: (role: string) => void;
}

// Create the context with default values
const UserRoleContext = createContext<UserRoleContextType | undefined>(
  undefined,
);

// Create a provider component
const UserRoleProvider = ({ children }: { children: ReactNode }) => {
  const [role, setRole] = useState<string>("");

  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
};

// Create a custom hook for easy access to the context
const useUserRole = () => {
  const context = useContext(UserRoleContext);
  if (context === undefined) {
    throw new Error("useUserRole must be used within a UserRoleProvider");
  }
  return context;
};

export { UserRoleProvider, useUserRole };
