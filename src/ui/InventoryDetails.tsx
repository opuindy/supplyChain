import { useParams } from "react-router-dom";
import { inventory } from "../utils/data";
import DetailsCard from "./DetailsCard";
import QRCode from "qrcode.react";

const InventoryDetails = () => {
  const { id } = useParams<{ id: string }>();
  const item = inventory.find((item) => item.id === id);

  if (!item) {
    return (
      <div className="m-auto mt-8 flex min-h-72 w-[800px] items-center justify-center text-3xl font-bold text-primary">
        Item not found!
      </div>
    );
  }

  const {
    productName,
    productType,
    quantityInStock,
    stockingDate,
    storageDetails,
    displayInformation,
    saleDate,
    customerName,
    customerContact,
    additionalInfo,
  } = item;

  const details = [
    { label: "Product Name", value: productName },
    { label: "Product Type", value: productType },
    { label: "Quantity In Stock", value: quantityInStock },
    { label: "Stocking Date", value: stockingDate },
    { label: "Storage Details", value: storageDetails },
    { label: "Display Information", value: displayInformation },
    { label: "Sale Date", value: saleDate },
    { label: "Customer Name", value: customerName },
    { label: "Customer Contact", value: customerContact },
    { label: "Additional Information", value: additionalInfo },
  ];

  return (
    <>
      <DetailsCard title="Inventory Details" details={details} />
      <QRCode
        value={`${details.map(({ label, value }) => `${label}:${value}`).join("\n")}`}
        size={128}
        fgColor="#000"
      />
    </>
  );
};

export default InventoryDetails;
