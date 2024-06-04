// import { useParams } from "react-router-dom";
import { product } from "../utils/data";

const ProductDetails = () => {
  // const { id } = useParams();

  return (
    <div className="m-auto mb-4 mt-6  w-[800px] space-y-8 overscroll-y-auto rounded-lg border border-lightGray bg-background px-6 py-8 shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-secondary">
        Product Details
      </h1>
      <div className="space-y-6">
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Product Name:</label>
          <p className="text-text">{product.productName}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Product Type:</label>
          <p className="text-text">{product.productType}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Batch Number:</label>
          <p className="text-text">{product.batchNumber}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Manufacturing Date:</label>
          <p className="text-text">{product.manufacturingDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Expiry Date:</label>
          <p className="text-text">{product.expiryDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Quantity Produced:</label>
          <p className="text-text">{product.quantityProduced}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Product Description:
          </label>
          <p className="text-text">{product.description}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Source:</label>
          <p className="text-text">{product.source}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Ingredients:</label>
          <p className="text-text">{product.ingredients}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Treatment Methods:</label>
          <p className="text-text">{product.treatmentMethods}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Packaging Type:</label>
          <p className="text-text">{product.packagingType}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Packaging Date:</label>
          <p className="text-text">{product.packagingDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Storage Requirements:
          </label>
          <p className="text-text">{product.storageRequirements}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Special Instructions:
          </label>
          <p className="text-text">{product.specialInstructions}</p>
        </div>
        <h2 className="mt-6 text-2xl font-semibold text-secondary">
          Raw Material Information
        </h2>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Source of Raw Material:
          </label>
          <p className="text-text">{product.rawMaterialSource}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Type of Raw Material:
          </label>
          <p className="text-text">{product.rawMaterialType}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Supplier Information:
          </label>
          <p className="text-text">{product.supplierInfo}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Procurement Date:</label>
          <p className="text-text">{product.procurementDate}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">Quantity Procured:</label>
          <p className="text-text">{product.quantityProcured}</p>
        </div>
        <div className="border-b border-border pb-4">
          <label className="font-bold text-darkGray">
            Additional Information:
          </label>
          <p className="text-text">{product.additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
