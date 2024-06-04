import { InputHTMLAttributes } from "react";
import {
  DeepMap,
  FieldValues,
  FieldErrors,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: DeepMap<FieldValues, FieldErrors>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  className?: string;
}

const Input = ({
  label,
  className,
  register,
  validationSchema,
  error,
  ...rest
}: InputProps) => {
  return (
    <div className="relative flex w-full flex-col gap-y-1">
      <label htmlFor={rest.id} className=" mr-auto text-base font-medium">
        {label}
      </label>
      <input
        type="text"
        {...rest}
        {...register(rest.name!, validationSchema)}
        className={`h-10  w-full rounded-md border-0 border-border bg-lightGray px-6 py-4 outline-none focus:border focus:border-secondary ${className ? className : ""}`}
      />
      {error && error[rest.name!] && (
        <span className="absolute -top-0 right-0 max-w-[70%] text-[.75rem] font-medium text-primaryRed">
          {error[rest.name!].message}
        </span>
      )}
    </div>
  );
};

export default Input;
