import LoginForm from "./LoginForm";

const LoginSection = () => {
  return (
    <div className="glassyBg m-auto flex  w-full max-w-custom items-center justify-center shadow-lg">
      <div className="h-full min-h-[70vh] w-1/2 text-center">
        <p className="mt-28 text-4xl font-medium">Welcome</p>
        <p className="mt-4 text-lg font-light">
          At Hebron, we innovate the way you track your products, from inception
          to perfection. Join us and see the future of product management.
        </p>
      </div>
      <div className="h-full min-h-[70vh] w-1/2 p-4">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginSection;
