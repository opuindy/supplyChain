import Button from "./Button";

interface RetailerRequestProps {
  retailerName: string;
  retailerEmail: string;
  retailerAddress: string;
  quantityRequested: number;
  expectedDeliveryDate: string;
  requestDate: string;
  requestStatus: string;
  onApprove: () => void;
}

const RetailerRequestInfo = ({
  retailerName,
  retailerEmail,
  retailerAddress,
  quantityRequested,
  expectedDeliveryDate,
  requestDate,
  requestStatus,
  onApprove,
}: RetailerRequestProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 border-b py-4 font-medium capitalize md:grid-cols-8">
      <div className="p-2">{retailerName}</div>
      <div className="break-words p-2 lowercase">{retailerEmail}</div>
      <div className="break-words p-2">{retailerAddress}</div>
      <div className="p-2">{quantityRequested}</div>
      <div className="p-2">{requestDate}</div>
      <div className="p-2">{expectedDeliveryDate}</div>
      <div className="p-2">{requestStatus}</div>
      {requestStatus === "pending" && (
        <div className="flex items-center justify-end p-2">
          <Button onClick={onApprove}>Approve</Button>
        </div>
      )}
    </div>
  );
};

export default RetailerRequestInfo;
