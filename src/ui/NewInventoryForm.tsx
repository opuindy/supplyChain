import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "./Button";

interface IFormInput {
  productName: string;
  productType: string;
  quantityInStock: number;
  stockingDate: string;
  storageDetails: string;
  displayInformation: string;
  saleDate?: string;
  customerName?: string;
  customerContact?: string;
  additionalInfo?: string;
}

const NewInventoryForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate("/inventory", { replace: true });
  };

  return (
    <form
      className="m-auto mt-8 min-h-72 w-[800px] space-y-8 py-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">
          Add New Inventory
        </h1>
        <p className="text-lg text-darkGray">
          Fill in the details below to add new inventory.
        </p>
      </div>
      <Input
        name="productName"
        id="productName"
        label="Product Name"
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

      <Select
        name="productType"
        id="productType"
        label="Product Type"
        options={[
          { value: "", label: "Select Product Type" },
          { value: "Bread", label: "Bread" },
          { value: "Water", label: "Water" },
          { value: "Other", label: "Other" },
        ]}
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
        name="quantityInStock"
        id="quantityInStock"
        label="Quantity In Stock"
        type="number"
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
        name="stockingDate"
        id="stockingDate"
        label="Stocking Date"
        type="date"
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

      <TextArea
        name="storageDetails"
        id="storageDetails"
        label="Storage Details"
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

      <TextArea
        name="displayInformation"
        id="displayInformation"
        label="Product Display Information"
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
        name="saleDate"
        id="saleDate"
        label="Sale Date (Optional)"
        type="date"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
      />

      <Input
        name="customerName"
        id="customerName"
        label="Customer Name (Optional)"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
      />

      <Input
        name="customerContact"
        id="customerContact"
        label="Customer Contact (Optional)"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
      />

      <TextArea
        name="additionalInfo"
        id="additionalInfo"
        label="Additional Information"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
      />

      <Button type="submit" disabled={isSubmitting}>
        Add Inventory
      </Button>
    </form>
  );
};

export default NewInventoryForm;
