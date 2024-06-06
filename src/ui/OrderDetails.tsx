import { useState } from "react";
import { orders } from "../utils/data";
import DetailsCard from "./DetailsCard";
import { useParams } from "react-router-dom";
import QrCodeGenerator from "./QrCodeGenerator";
import Button from "./Button";

const OrderDetails = () => {
  const [qrIsVisible, setQrIsVisible] = useState(false);
  const { id } = useParams(); // Correct way to extract parameters
  const orderId = Number(id); // Convert id to a number
  const order = orders[orderId - 1]; // Adjust indexing to account for zero-based array
  console.log(order);

  const handleQrCodeGenerator = () => {
    setQrIsVisible(true);
  };

  // Check if product exists to avoid undefined errors
  if (!order) {
    return <div>Order not found</div>;
  }

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

  const orderData = encodeURIComponent(JSON.stringify(details));
  const orderUrl = `${window.location.origin}/manufacturer-information?data=${orderData}`;

  return (
    <div>
      <DetailsCard title="Product Details" details={details} />
      <div className="m-auto mb-4 mt-6 w-[800px] space-y-8 px-6 py-8 ">
        {qrIsVisible ? (
          <QrCodeGenerator value={orderUrl} />
        ) : (
          <Button onClick={handleQrCodeGenerator} disabled={qrIsVisible}>
            Generate Qr Code
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
