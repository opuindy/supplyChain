import { products } from "../utils/data";
import ProductItems from "./ProductItems";

const ProductList = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-y-1 p-8">
      <div className="mx-auto grid w-full grid-cols-5 rounded-md bg-lightGray px-4 py-4 font-semibold">
        <div className="col-span-1"> Product Name</div>
        <div className="col-span-1"> Product Type</div>
        <div className="col-span-1"> Batch Number</div>
        <div className="col-span-1"> Manufacture Date</div>
        <div className="col-span-1"> Quantity Produce</div>
      </div>
      {products &&
        products.map((product, i) => (
          <ProductItems
            productName={product.productName}
            productType={product.productType}
            batchNumber={product.batchNumber}
            manufacturerDate={product.manufacturingDate}
            quantityProduce={`${product.quantityProduced}`}
            id={(i + 1).toString()}
            key={i}
          />
        ))}
    </section>
  );
};

export default ProductList;
