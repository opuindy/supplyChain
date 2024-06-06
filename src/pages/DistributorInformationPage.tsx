import { useLocation } from "react-router-dom";
import DetailsCard from "./../ui/DetailsCard";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const DistributorInformationPage = () => {
  const query = useQuery();
  const productData = query.get("data");
  const product = productData
    ? JSON.parse(decodeURIComponent(productData))
    : null;

  if (!product) {
    return (
      <div className="flex">
        <h1 className="m-auto text-3xl">Product not found</h1>
      </div>
    );
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
    { label: "Source of Raw Material", value: product.rawMaterialSource },
    { label: "Type of Raw Material", value: product.rawMaterialType },
    { label: "Supplier Information", value: product.supplierInfo },
    { label: "Procurement Date", value: product.procurementDate },
    { label: "Quantity Procured", value: product.quantityProcured },
    { label: "Additional Information", value: product.additionalInfo },
  ];

  return (
    <div className="px-4 md:px-0">
      <DetailsCard title="Product Details" details={details} />
    </div>
  );
};

export default DistributorInformationPage;
