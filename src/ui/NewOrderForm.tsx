import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "./Button";

interface IFormInput {
  orderNumber: string;
  customerName: string;
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
    navigate("/orders", { replace: true });
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
        <p className="text-darkGray text-lg">
          Fill in the details below to add a new order.
        </p>
      </div>
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

      <Input
        name="customerName"
        id="customerName"
        label="Customer Name"
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
