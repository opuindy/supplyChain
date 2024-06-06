interface Detail {
  label: string;
  value: string | number;
}

interface DetailsCardProps {
  title: string;
  details: Detail[];
}

const DetailsCard = ({ title, details }: DetailsCardProps) => {
  return (
    <div className="m-auto mb-4 mt-6 w-[800px] space-y-8 overscroll-y-auto rounded-lg border border-lightGray bg-background px-6 py-8 shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-darkGray">{title}</h1>
      <div className="space-y-6">
        {details.map((detail, index) => (
          <div key={index} className="border-b border-border pb-4">
            <label className="font-bold text-darkGray">{detail.label}:</label>
            <p className="text-text">{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
