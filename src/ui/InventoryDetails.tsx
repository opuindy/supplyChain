import { useParams } from "react-router-dom";
import { inventory } from "../utils/data";

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

  return (
    <div className="m-auto mt-8 min-h-72 w-[800px] rounded-lg border border-border bg-background p-8 shadow-md">
      <h2 className="mb-4 text-3xl font-bold text-primary">
        Inventory Details
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Product Name:</h3>
          <p className="text-text">{productName}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Product Type:</h3>
          <p className="text-text">{productType}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Quantity In Stock:</h3>
          <p className="text-text">{quantityInStock}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Stocking Date:</h3>
          <p className="text-text">{stockingDate}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Storage Details:</h3>
          <p className="text-text">{storageDetails}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Display Information:</h3>
          <p className="text-text">{displayInformation}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Sale Date:</h3>
          <p className="text-text">{saleDate}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Customer Name:</h3>
          <p className="text-text">{customerName}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">Customer Contact:</h3>
          <p className="text-text">{customerContact}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-darkGray">
            Additional Information:
          </h3>
          <p className="text-text">{additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetails;
