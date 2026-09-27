type Props = {
  label: string;
  value: number;
};

export function ProgressBar({ label, value }: Props) {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{label}</span>
        <span className="text-slate-400">{safeValue}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-slate-700" aria-label={`${label}: ${safeValue}%`}>
        <div className="h-full rounded-full bg-amber-400" style={{ width: `${safeValue}%` }} />
      </div>
    </div>
  );
}
