import "./description-container.css";
export function DescriptionContainer({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="description-container">
      <h3>{title}</h3>
      <h5>{value}</h5>
    </div>
  );
}
