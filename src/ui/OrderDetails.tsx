import { useState } from "react";
import { orders } from "../utils/data";
import DetailsCard from "./DetailsCard";
import { useParams } from "react-router-dom";
import QrCodeGenerator from "./QrCodeGenerator";
import Button from "./Button";
import RetailerRequestInfo from "./RetailerRequestInfo";

const OrderDetails = () => {
  const [qrIsVisible, setQrIsVisible] = useState(false);
  const { id } = useParams(); // Correct way to extract parameters
  const orderId = Number(id); // Convert id to a number
  const order = orders[orderId - 1]; // Adjust indexing to account for zero-based array
  console.log(order);

  const handleQrCodeGenerator = () => {
    setQrIsVisible(true);
  };

  const handleApproveRetailerRequest = (retailerIndex: number) => {
    // Logic to handle approving the retailer request (e.g., updating state, making API call, etc.)
    console.log(`Approved retailer: ${retailerIndex}`);
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
    <div className="max-w-6xl mx-auto p-4">
      <DetailsCard title="Product Details" details={details} />
      <div className="my-16">
        <h2 className="mb-4 text-2xl font-bold">Retailer Information</h2>

        {order?.retailers ? (
          <>
            <div className="grid grid-cols-1 gap-4 border-b pb-2 font-bold md:grid-cols-8">
              <p className="p-2">Name</p>
              <p className="p-2">Email</p>
              <p className="p-2">Address</p>
              <p className="p-2">Amount Requested</p>
              <p className="p-2">Request Date</p>
              <p className="p-2">Expected Delivery Date</p>
              <p className="p-2">Request Status</p>
              <p className="p-2">Action</p>
            </div>
            {order.retailers.map((retailer, index) => (
              <RetailerRequestInfo
                key={index}
                {...retailer}
                onApprove={() => handleApproveRetailerRequest(index)}
              />
            ))}
          </>
        ) : (
          <p className=" font-semibold text-darkGray">
            No Retailer has made a request yet.
          </p>
        )}
      </div>
      <div className="my-8">
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
