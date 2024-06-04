import { orders } from "../utils/data";
import OrderItems from "./OrderItems";

const OrderList = () => {
  return (
    <section className="flex h-full w-full flex-col items-center justify-start gap-y-1 p-8">
      <div className="mx-auto grid w-full grid-cols-6 rounded-md bg-lightGray px-4 py-4 font-semibold">
        <div className="col-span-1">Order Number</div>
        <div className="col-span-1">Customer Name</div>
        <div className="col-span-1">Batch Number</div>
        <div className="col-span-1">Order Date</div>
        <div className="col-span-1">Delivery Date</div>
        <div className="col-span-1">Ordered Quantity</div>
      </div>
      {orders.map((order) => (
        <OrderItems key={order.id} {...order} />
      ))}
    </section>
  );
};

export default OrderList;
