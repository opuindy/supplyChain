import Button from "./Button";

interface DistributorInfoProps {
  name: string;
  email: string;
  address: string;
  productsRequested: number;
  requestState: string;
  remainingProductQuantity: number;
  onApprove: () => void;
}

const ProductDistributorInfo = ({
  name,
  email,
  address,
  productsRequested,
  requestState,
  remainingProductQuantity,
  onApprove,
}: DistributorInfoProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 border-b py-4 font-medium capitalize md:grid-cols-7">
      <div className="p-2">{name}</div>
      <div className="break-words p-2 lowercase">{email}</div>
      <div className="break-words p-2">{address}</div>
      <div className="p-2">{productsRequested}</div>
      <div className="p-2">{requestState}</div>
      <div className="p-2">{remainingProductQuantity}</div>
      {requestState === "pending" && (
        <div className=" col-span-1 mt-2 flex items-center justify-end md:mt-0">
          <Button onClick={onApprove}>Approve</Button>
        </div>
      )}
    </div>
  );
};

export default ProductDistributorInfo;
