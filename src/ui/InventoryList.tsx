import { inventory } from "../utils/data";
import InventoryItems from "./InventoryItems";

const InventoryList = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-y-1 p-8">
      <div className="mx-auto grid w-full grid-cols-4 rounded-md bg-lightGray px-4 py-4 font-semibold">
        <div className="col-span-1">Product Name</div>
        <div className="col-span-1">Product Type</div>
        <div className="col-span-1">Quantity In Stock</div>
      </div>
      {inventory.map((item) => (
        <InventoryItems key={item.id} {...item} />
      ))}
    </section>
  );
};

export default InventoryList;
