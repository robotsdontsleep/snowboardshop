interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <div
      className={`inline-block rounded-full border border-textColor/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brandColor backdrop-blur-sm mb-6 ${className}`}
    >
      {children}
    </div>
  );
}