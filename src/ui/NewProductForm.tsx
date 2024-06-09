import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "./Button";

interface IFormInput {
  productName: string;
  productType: string;
  batchNumber: string;
  manufacturingDate: string;
  expiryDate: string;
  quantityProduced: number;
  description?: string;
  source?: string;
  ingredients?: string;
  treatmentMethods?: string;
  packagingType: string;
  packagingDate: string;
  storageRequirements: string;
  specialInstructions?: string;
  rawMaterialSource?: string;
  rawMaterialType?: string;
  supplierInfo?: string;
  procurementDate?: string;
  quantityProcured?: number;
  additionalInfo?: string;
}

const NewProductForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate("dashboard/products");
  };

  const productType = useWatch({
    control,
    name: "productType",
    defaultValue: "default",
  });

  return (
    <form
      className="m-auto mt-8 min-h-72 w-[800px] space-y-8 py-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">
          Create New Product
        </h1>
        <p className="text-lg text-darkGray">
          Fill in the details below to add a new product to your inventory.
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
        name="batchNumber"
        id="batchNumber"
        label="Batch Number"
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
        name="manufacturingDate"
        id="manufacturingDate"
        label="Manufacturing Date"
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

      <Input
        name="expiryDate"
        id="expiryDate"
        label="Expiry Date"
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

      <Input
        name="quantityProduced"
        id="quantityProduced"
        label="Quantity Produced"
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

      {productType && productType !== "Other" && (
        <>
          <TextArea
            name="description"
            id="description"
            label="Product Description"
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
        </>
      )}

      {productType === "Bread" && (
        <>
          <TextArea
            name="ingredients"
            id="ingredients"
            label="Ingredients"
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
            name="source"
            id="source"
            label="Ingredient Source"
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
        </>
      )}

      {productType === "Water" && (
        <>
          <TextArea
            name="source"
            id="source"
            label="Water Source"
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
            name="treatmentMethods"
            id="treatmentMethods"
            label="Treatment Methods"
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
        </>
      )}

      <Input
        name="packagingType"
        id="packagingType"
        label="Packaging Type"
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
        name="packagingDate"
        id="packagingDate"
        label="Packaging Date"
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
        name="storageRequirements"
        id="storageRequirements"
        label="Storage Requirements"
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
        name="specialInstructions"
        id="specialInstructions"
        label="Special Instructions"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
      />

      <h2 className=" text-xl font-semibold text-primary">
        Raw Material Information
      </h2>

      <Input
        name="rawMaterialSource"
        id="rawMaterialSource"
        label="Source of Raw Material"
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
        name="rawMaterialType"
        id="rawMaterialType"
        label="Type of Raw Material"
        className="w-full           text-base"
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
        name="supplierInfo"
        id="supplierInfo"
        label="Supplier Information"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
      />

      <Input
        name="procurementDate"
        id="procurementDate"
        label="Procurement Date"
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

      <Input
        name="quantityProcured"
        id="quantityProcured"
        label="Quantity Procured"
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
        Create Product
      </Button>
    </form>
  );
};

export default NewProductForm;
