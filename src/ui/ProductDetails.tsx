import React from "react";
import { product } from "../utils/data";
import DetailsCard from "./DetailsCard";

const ProductDetails: React.FC = () => {
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

  return <DetailsCard title="Product Details" details={details} />;
};

export default ProductDetails;
