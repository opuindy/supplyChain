import { Link } from "react-router-dom";

interface InventoryItemsProps {
  productName: string;
  productType: string;
  quantityInStock: number;
  id: string;
}

const InventoryItems = ({
  productName,
  productType,
  quantityInStock,
  id,
}: InventoryItemsProps) => {
  return (
    <Link
      to={`${id}`}
      className="mx-auto grid w-full cursor-pointer grid-cols-4 rounded-md bg-slate-50 px-4 py-3 font-medium transition-all duration-200 ease-linear hover:translate-x-2 hover:bg-lightAccent"
    >
      <div className="col-span-1">{productName}</div>
      <div className="col-span-1">{productType}</div>
      <div className="col-span-1">{quantityInStock}</div>
    </Link>
  );
};

export default InventoryItems;
