import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "./Button";

const manufacturerOptions = [
  { value: "", label: "Select Manufacturer" },
  {
    label: "Hebron Bread\u00A0\u00A0\u00A0\u00A0Batch No: 1234FH",
    value: { manufacturer: "Hebron Bread", batchNumber: "1234FH" },
  },
  {
    label: "Hebron Water\u00A0\u00A0\u00A0\u00A0Batch No: 334DO",
    value: { manufacturer: "Hebron Water", batchNumber: "334DO" },
  },
  {
    label: "Green Fertilizer\u00A0\u00A0\u00A0\u00A0Batch No: 5678GF",
    value: { manufacturer: "Green Fertilizer", batchNumber: "5678GF" },
  },
  {
    label: "Blue Pesticide\u00A0\u00A0\u00A0\u00A0Batch No: 9101BP",
    value: { manufacturer: "Blue Pesticide", batchNumber: "9101BP" },
  },
];

interface Option {
  manufacturer: string;
  batchNumber: string;
}

interface IFormInput {
  orderNumber: string;
  manufacturer: Option;
  productName: string;
  productType: string;
  quantityOrdered: number;
  batchNumber: string;
  orderDate: string;
  deliveryDate: string;
  transportationDetails: string;
  storageConditions: string;
  receiptDate: string;
  transferDate: string;
  additionalInfo?: string;
}

const NewOrderForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    navigate("dashboard/orders", { replace: true });
  };

  return (
    <form
      className="m-auto mt-8 min-h-72 w-[800px] space-y-8 py-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-3xl font-bold text-primary">
          Create New Order
        </h1>
        <p className="text-lg text-darkGray">
          Fill in the details below to add a new order.
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
        label="Manufacturer"
        id="manufacturer"
        className="w-full text-base"
        name="manufacturer"
        register={register}
        error={errors}
        disabled={isSubmitting}
        options={manufacturerOptions}
        validationSchema={{ required: "Manufacturer is required" }}
      />
      <Input
        name="orderNumber"
        id="orderNumber"
        label="Order Number"
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
        name="quantityOrdered"
        id="quantityOrdered"
        label="Quantity Ordered"
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
        name="orderDate"
        id="orderDate"
        label="Order Date"
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
        name="deliveryDate"
        id="deliveryDate"
        label="Delivery Date"
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
        name="transportationDetails"
        id="transportationDetails"
        label="Transportation Details"
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
        name="storageConditions"
        id="storageConditions"
        label="Storage Conditions"
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
        name="receiptDate"
        id="receiptDate"
        label="Date of Receipt"
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
        name="transferDate"
        id="transferDate"
        label="Date of Transfer"
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
        name="additionalInfo"
        id="additionalInfo"
        label="Additional Information"
        className="w-full text-base"
        error={errors}
        disabled={isSubmitting}
        register={register}
      />

      <Button type="submit" disabled={isSubmitting}>
        Create Order
      </Button>
    </form>
  );
};

export default NewOrderForm;
