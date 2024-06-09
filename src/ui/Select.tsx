import { SelectHTMLAttributes } from "react";
import {
  DeepMap,
  FieldValues,
  FieldErrors,
  UseFormRegister,
  RegisterOptions,
} from "react-hook-form";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error: DeepMap<FieldValues, FieldErrors>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  validationSchema?: RegisterOptions;
  className?: string;
  options: {
    value:
      | string
      | {
          manufacturer: string;
          batchNumber: string;
        }
      | { distributor: string; orderNumber: string };
    label: string;
  }[];
}

const Select = ({
  label,
  className,
  error,
  validationSchema,
  register,
  options,
  ...rest
}: SelectProps) => {
  return (
    <div className="relative flex flex-col gap-y-1">
      <label htmlFor={rest.id} className="mr-auto text-base font-medium">
        {label}
      </label>
      <select
        {...register(rest.name!, {
          ...validationSchema,
          setValueAs: (value) => {
            try {
              return JSON.parse(value);
            } catch {
              return value;
            }
          },
        })}
        {...rest}
        className={`focus:border-primaryColor h-10 w-full rounded-md border-0 bg-lightGray px-6 py-2 outline-none focus:border ${className ? className : ""}`}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, i) => (
          <option
            key={i}
            value={
              typeof option.value === "string"
                ? option.value
                : JSON.stringify(option.value)
            }
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && error[rest.name!] && (
        <span className="absolute -top-0 right-0 text-[.75rem] text-primaryRed">
          {error[rest.name!].message}
        </span>
      )}
    </div>
  );
};

export default Select;
