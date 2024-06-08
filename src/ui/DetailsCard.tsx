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
    <div className="mb-6 rounded-md bg-white p-6 shadow">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      <div className="grid grid-cols-1 gap-x-16 gap-y-4 md:grid-cols-2">
        {details.map((detail, index) => (
          <div key={index} className="border-b py-2">
            <p className="font-semibold">{detail.label}:</p>
            <p>{detail.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsCard;
