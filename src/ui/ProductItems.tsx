import { Link } from "react-router-dom";

interface ProductItemsProp {
  productName: string;
  productType: string;
  batchNumber: string;
  manufacturerDate: string;
  quantityProduce: string;
  id: string;
}
const ProductItems = ({
  productName,
  productType,
  batchNumber,
  manufacturerDate,
  quantityProduce,
  id,
}: ProductItemsProp) => {
  return (
    <>
      <Link
        to={`${id}`}
        className="mx-auto grid w-full cursor-pointer grid-cols-5 rounded-md  bg-slate-50 px-4 py-3 font-medium transition-all duration-200 ease-linear hover:translate-x-2 hover:bg-lightAccent"
      >
        <div className="col-span-1 "> {productName}</div>
        <div className="col-span-1"> {productType}</div>
        <div className="col-span-1 uppercase"> {batchNumber}</div>
        <div className="col-span-1"> {manufacturerDate}</div>
        <div className="col-span-1"> {quantityProduce}</div>
      </Link>
    </>
  );
};

export default ProductItems;
