import { useParams } from "react-router-dom";
import QrCodeGenerator from "./QrCodeGenerator";
import Button from "./Button";

import { products } from "../utils/data";
import DetailsCard from "./DetailsCard";
import { useState } from "react";

const ProductDetails = () => {
  const [qrIsVisible, setQrIsVisible] = useState(false);
  const { id } = useParams(); // Correct way to extract parameters
  const productId = Number(id); // Convert id to a number
  const product = products[productId - 1]; // Adjust indexing to account for zero-based array

  const handleQrCodeGenerator = () => {
    setQrIsVisible(true);
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

  const productData = encodeURIComponent(JSON.stringify(product));
  const productUrl = `${window.location.origin}/manufacturer-information?data=${productData}`;

  return (
    <div>
      <DetailsCard title="Product Details" details={details} />
      <div className="m-auto mb-4 mt-6 w-[800px] space-y-8 px-6 py-8 ">
        {qrIsVisible ? (
          <QrCodeGenerator value={productUrl} />
        ) : (
          <Button onClick={handleQrCodeGenerator} disabled={qrIsVisible}>
            Generate Qr Code
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
