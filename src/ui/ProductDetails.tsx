import { useParams } from "react-router-dom";
import QrCodeGenerator from "./QrCodeGenerator";
import Button from "./Button";
import { products } from "../utils/data";
import DetailsCard from "./DetailsCard";
import { useState } from "react";
import ProductDistributorInfo from "./ProductDistributorInfo";

const ProductDetails = () => {
  const [qrIsVisible, setQrIsVisible] = useState(false);
  const { id } = useParams(); // Correct way to extract parameters
  const productId = Number(id); // Convert id to a number
  const product = products[productId - 1]; // Adjust indexing to account for zero-based array

  const handleQrCodeGenerator = () => {
    setQrIsVisible(true);
  };

  const handleApproveRequest = (distributorIndex: number) => {
    // Logic to handle approving the request (e.g., updating state, making API call, etc.)
    console.log(`Approved distributor: ${distributorIndex}`);
  };

  // Check if product exists to avoid undefined errors
  if (!product) {
    return <div>Product not found</div>;
  }

  const details = [
    { label: "Product Name", value: product.productName },
    { label: "Product Type", value: product.productType },
    { label: "Batch Number", value: product.batchNumber },
    { label: "Manufacturing Date", value: product.manufacturingDate },
    { label: "Expiry Date", value: product.expiryDate },
    { label: "Quantity Produced", value: product.quantityProduced },
    { label: "Product Description", value: product.description },
    { label: "Source", value: product.source },
    { label: "Ingredients", value: product.ingredients },
    { label: "Treatment Methods", value: product.treatmentMethods },
    { label: "Packaging Type", value: product.packagingType },
    { label: "Packaging Date", value: product.packagingDate },
    { label: "Storage Requirements", value: product.storageRequirements },
    { label: "Special Instructions", value: product.specialInstructions },
    { label: "Raw Material Information", value: "" },
    { label: "Source of Raw Material", value: product.rawMaterialSource },
    { label: "Type of Raw Material", value: product.rawMaterialType },
    { label: "Supplier Information", value: product.supplierInfo },
    { label: "Procurement Date", value: product.procurementDate },
    { label: "Quantity Procured", value: product.quantityProcured },
    { label: "Additional Information", value: product.additionalInfo },
  ];

  const productData = encodeURIComponent(JSON.stringify(details));
  const productUrl = `${window.location.origin}/manufacturer-information?data=${productData}`;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <DetailsCard title="Product Details" details={details} />
      <div className="my-16">
        <h2 className="mb-4 text-2xl font-bold">Distributor Information</h2>

        {product.distributors ? (
          <>
            <div className="grid grid-cols-1 gap-4 border-b pb-2 font-bold md:grid-cols-7">
              <p className="p-2">Name</p>
              <p className="p-2">Email</p>
              <p className="p-2">Address</p>
              <p className="p-2">Amount Requested</p>
              <p className="p-2">Request Status</p>
              <p className="p-2">Remaining Product Quantity</p>
              <p className="p-2">Actions</p>
            </div>
            {product.distributors.map((distributor, index) => (
              <ProductDistributorInfo
                key={index}
                {...distributor}
                onApprove={() => handleApproveRequest(index)}
              />
            ))}
          </>
        ) : (
          <p className="font-semibold text-darkGray">
            No distributor has made a request yet.
          </p>
        )}
      </div>
      <div className="my-8">
        {qrIsVisible ? (
          <QrCodeGenerator value={productUrl} />
        ) : (
          <Button onClick={handleQrCodeGenerator} disabled={qrIsVisible}>
            Generate QR Code
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
