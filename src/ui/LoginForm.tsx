import { useForm, SubmitHandler } from "react-hook-form";
import { isEmailValid, toLowerCase } from "../utils/formValidators";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useUserRole } from "../Context/UserRoleContext";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();
  const { setRole } = useUserRole();
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    setRole("distributor");
    navigate("/dashboard", { replace: true });
  };

  const handleNavigate = () => {
    setRole("");
    navigate("/register");
  };

  return (
    <form
      className="flex w-full flex-col items-center justify-between gap-y-6 pl-6 pr-20"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full text-left">
        <h1 className="">
          <span className="block text-lg text-secondary">Login</span>
          <span className="block text-3xl font-medium">Your account</span>
        </h1>
      </div>

      <Input
        name="email"
        id="email"
        label="Email"
        type="email"
        error={errors}
        register={register}
        disabled={isSubmitting}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
          validate: {
            isEmailValid: (value) => isEmailValid(value) || "Invalid email",
          },
          setValueAs: (v) => toLowerCase(v),
        }}
        className="text-base"
      />

      <Input
        name="password"
        type="password"
        id="password"
        label="Password"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
      />

      <Button type="submit" className="mr-auto">
        Login
      </Button>

      <p className="mr-auto text-left">
        <span>Don"t have an account?</span>{" "}
        <span className="cursor-pointer text-accent" onClick={handleNavigate}>
          Sign Up
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
