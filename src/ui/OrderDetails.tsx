import { order } from "../utils/data";
import DetailsCard from "./DetailsCard";

const OrderDetails = () => {
  const details = [
    { label: "Order Number", value: order.orderNumber },
    { label: "Customer Name", value: order.customerName },
    { label: "Product Type", value: order.productType },
    { label: "Quantity Ordered", value: order.quantityOrdered },
    { label: "Batch Number", value: order.batchNumber },
    { label: "Order Date", value: order.orderDate },
    { label: "Delivery Date", value: order.deliveryDate },
    { label: "Transportation Details", value: order.transportationDetails },
    { label: "Storage Conditions", value: order.storageConditions },
    { label: "Date of Receipt", value: order.receiptDate },
    { label: "Date of Transfer", value: order.transferDate },
    { label: "Additional Information", value: order.additionalInfo },
  ];

  return <DetailsCard title="Order Details" details={details} />;
};

export default OrderDetails;
