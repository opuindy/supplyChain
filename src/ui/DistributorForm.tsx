import {
  useForm,
  useController,
  SubmitHandler,
  useWatch,
} from "react-hook-form";
import {
  isEmailValid,
  isPhoneValid,
  isValidPassword,
  passwordsMatch,
  toLowerCase,
} from "../utils/formValidators";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Input from "./Input";

import Button from "./Button";
import TextArea from "./TextArea";
import { useNavigate } from "react-router-dom";

interface IFormInput {
  distributorName: string;
  phoneNumber: string;
  email: string;
  address: string;
  businessRegistrationNumber: string;
  website: string;
  distributorDescription: string;

  yearsInOperation: number;
  productCategories: string;
  operationalRegions: string;
  warehousingFacilities: string;
  transportationCapabilities: string;
  businessCategory: string;
  password: string;
  confirmPassword: string;
}

const DistributorForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: { businessCategory: "distributor" },
  });

  const password = useWatch({
    control,
    name: "password",
    defaultValue: "",
  });

  const { field } = useController({
    name: "phoneNumber",
    control,
    rules: {
      required: {
        value: true,
        message: "This field is required",
      },
      validate: {
        isPhoneValid: (value) => isPhoneValid(value) || "Invalid phone number",
      },
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate("/dashboard", { replace: true });
  };

  return (
    <form
      className="m-auto mt-8 min-h-72 w-[800px] space-y-8 py-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name="distributorName"
        id="distributorName"
        label="Distributor Name"
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
      <Input
        name="businessRegistrationNumber"
        id="businessRegistrationNumber"
        label="Business Registration Number"
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
      <Input
        name="website"
        id="website"
        label="Company Website"
        type="url"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
          pattern: {
            value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
            message: "Invalid URL",
          },
        }}
      />
      <TextArea
        name="distributorDescription"
        id="distributorDescription"
        label="Distributor Description"
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
      <div className="flex items-center justify-between gap-x-8">
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
        <div className="relative w-full">
          <label htmlFor="phoneNumber" className="text-base font-medium">
            Phone Number
          </label>
          <PhoneInput
            defaultCountry="ng"
            value={field.value}
            onChange={field.onChange}
            className="w-full bg-lightGray "
            inputClassName="phoneInputStyle"
          />
          {errors && errors["phoneNumber"] && (
            <span className="absolute -top-0 right-0 text-[.75rem] text-primaryRed">
              {errors["phoneNumber"].message}
            </span>
          )}
        </div>
      </div>
      <Input
        name="address"
        id="address"
        label="Address"
        type="text"
        error={errors}
        register={register}
        disabled={isSubmitting}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        className="text-base"
      />

      <Input
        name="yearsInOperation"
        id="yearsInOperation"
        label="Years in Operation"
        type="number"
        error={errors}
        register={register}
        disabled={isSubmitting}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        className="text-base"
      />
      <Input
        name="productCategories"
        id="productCategories"
        label="Product Categories"
        type="text"
        error={errors}
        register={register}
        disabled={isSubmitting}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        className="text-base"
      />

      <Input
        name="operationalRegions"
        id="operationalRegions"
        label="Operational Regions"
        type="text"
        error={errors}
        register={register}
        disabled={isSubmitting}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        className="text-base"
      />

      <Input
        name="warehousingFacilities"
        id="warehousingFacilities"
        label="Warehousing Facilities"
        type="text"
        error={errors}
        register={register}
        disabled={isSubmitting}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        className="text-base"
      />
      <Input
        name="transportationCapabilities"
        id="transportationCapabilities"
        label="Transportation Capabilities"
        type="text"
        error={errors}
        register={register}
        disabled={isSubmitting}
        validationSchema={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        className="text-base"
      />
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="password"
          id="password"
          label="Password"
          type="password"
          error={errors}
          register={register}
          disabled={isSubmitting}
          validationSchema={{
            required: {
              value: true,
              message: "This field is required",
            },
            validate: {
              isValidPassword: (value) =>
                isValidPassword(value) ||
                "Password must be 8+ characters, with upper, lower, and special characters.",
            },
          }}
          className="text-base"
        />
        <Input
          name="confirmPassword"
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          error={errors}
          register={register}
          disabled={isSubmitting}
          validationSchema={{
            required: {
              value: true,
              message: "This field is required",
            },
            validate: {
              passwordsMatch: (value) =>
                passwordsMatch(password, value) || "Passwords do not match",
            },
          }}
          className="text-base"
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export default DistributorForm;
