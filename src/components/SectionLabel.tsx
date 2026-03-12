interface SectionLabelProps {
  label: string;
  number?: string;
}

export function SectionLabel({ label, number }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      {number && (
        <span className="micro-label text-[var(--color-text-tertiary)]">
          {number}
        </span>
      )}
      <div className="h-px flex-1 bg-[var(--color-border)]" />
      <span className="micro-label">{label}</span>
    </div>
  );
}
