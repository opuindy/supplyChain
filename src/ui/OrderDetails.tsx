import { order } from "../utils/data";

const OrderDetails = () => {
  // Placeholder data

  return (
    <div className="m-auto mt-8 min-h-72 w-[800px] space-y-8 rounded-lg border border-border bg-background px-6 py-8 shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-secondary">Order Details</h1>
      <div className="space-y-6">
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Order Number:</label>
          <p className="text-text">{order.orderNumber}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Customer Name:</label>
          <p className="text-text">{order.customerName}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Product Type:</label>
          <p className="text-text">{order.productType}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Quantity Ordered:</label>
          <p className="text-text">{order.quantityOrdered}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Batch Number:</label>
          <p className="text-text">{order.batchNumber}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Order Date:</label>
          <p className="text-text">{order.orderDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Delivery Date:</label>
          <p className="text-text">{order.deliveryDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Transportation Details:
          </label>
          <p className="text-text">{order.transportationDetails}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Storage Conditions:</label>
          <p className="text-text">{order.storageConditions}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Date of Receipt:</label>
          <p className="text-text">{order.receiptDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Date of Transfer:</label>
          <p className="text-text">{order.transferDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Additional Information:
          </label>
          <p className="text-text">{order.additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
