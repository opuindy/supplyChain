import { InputHTMLAttributes } from "react";
import {
  DeepMap,
  FieldValues,
  FieldErrors,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error: DeepMap<FieldValues, FieldErrors>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  className?: string;
}

const TextArea = ({
  label,
  className,
  error,
  validationSchema,
  register,
  ...rest
}: InputProps) => {
  return (
    <div className="relative flex flex-col gap-y-1">
      <label htmlFor={rest.id} className="mr-auto text-base font-medium">
        {label}
      </label>
      <textarea
        type="text"
        {...register(rest.name!, validationSchema)}
        {...rest}
        className={`bg-lightGray focus:border-primaryColor h-20 w-full rounded-md border-0 px-6 py-4 outline-none focus:border ${className ? className : ""}`}
      />
      {error && error[rest.name!] && (
        <span className="text-primaryRed absolute -top-0 right-0 text-[.75rem]">
          {error[rest.name!].message}
        </span>
      )}
    </div>
  );
};

export default TextArea;
