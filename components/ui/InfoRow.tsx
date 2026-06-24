interface InfoRowProps {
  name: string;
  value: string;
}

export default function InfoRow({ name, value }: InfoRowProps) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-textColor/70">{name}</span>
      <span className="shrink-0">{value}</span>
    </div>
  );
}
