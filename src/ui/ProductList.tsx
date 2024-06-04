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
      <ProductItems
        productName="Herbron Bread"
        productType="Food"
        batchNumber="8991bh"
        manufacturerDate="14/05/2024"
        quantityProduce="200"
        id="1"
      />
      <ProductItems
        productName="Herbron Sachet Water"
        productType="Water"
        batchNumber="8098vw"
        manufacturerDate="10/05/2024"
        quantityProduce="500"
        id="2"
      />
      <ProductItems
        productName="Herbron Table Water"
        productType="Water"
        batchNumber="0091CF"
        manufacturerDate="21/05/2024"
        quantityProduce="350"
        id="3"
      />
      <ProductItems
        productName="Green Fertilizer"
        productType="Fertilizer"
        batchNumber="0001AA"
        manufacturerDate="06/04/2024"
        quantityProduce="80"
        id="4"
      />
    </section>
  );
};

export default ProductList;
