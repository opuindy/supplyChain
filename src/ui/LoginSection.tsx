import { useLogout } from "../Hooks/useLogout";
import Button from "./Button";
import LoginForm from "./LoginForm";

const LoginSection = () => {
  const handleLogout = useLogout();

  return (
    <div className="glassyBg relative m-auto  flex w-full max-w-custom items-center justify-center shadow-lg">
      <Button
        className="absolute right-24 top-8 bg-transparent !text-accent hover:bg-transparent "
        onClick={handleLogout}
      >
        Disconnect
      </Button>
      <div className="bg my-auto flex h-full min-h-[65vh] w-1/2 flex-col items-center justify-center gap-4 text-center">
        <p className=" text-4xl font-medium">Welcome</p>
        <p className=" text-lg font-light">
          At Hebron, we innovate the way you track your products, from inception
          to perfection. Join us and see the future of product management.
        </p>
      </div>
      <div className="flex h-full min-h-[65vh] w-1/2 items-center justify-center p-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginSection;
