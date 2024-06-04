import { Link } from "react-router-dom";

interface OrderItemsProp {
  orderNumber: string;
  customerName: string;
  batchNumber: string;
  orderDate: string;
  deliveryDate: string;
  orderedQuantity: string;
  id: string;
}

const OrderItems = ({
  orderNumber,
  customerName,
  batchNumber,
  orderDate,
  deliveryDate,
  orderedQuantity,
  id,
}: OrderItemsProp) => {
  return (
    <Link
      to={`${id}`}
      className="mx-auto grid w-full cursor-pointer grid-cols-6 rounded-md bg-slate-50 px-4 py-3 font-medium transition-all duration-200 ease-linear hover:translate-x-2 hover:bg-lightAccent"
    >
      <div className="col-span-1">{orderNumber}</div>
      <div className="col-span-1">{customerName}</div>
      <div className="col-span-1 uppercase">{batchNumber}</div>
      <div className="col-span-1">{orderDate}</div>
      <div className="col-span-1">{deliveryDate}</div>
      <div className="col-span-1">{orderedQuantity}</div>
    </Link>
  );
};

export default OrderItems;
