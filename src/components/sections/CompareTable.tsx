import { Check, X } from "lucide-react";

export function CompareTable({
  leftLabel,
  rightLabel,
  rows,
}: {
  leftLabel: string;
  rightLabel: string;
  rows: { feature: string; left: string; right: string }[];
}) {
  const renderCell = (v: string) => {
    if (v === "yes")
      return (
        <Check className="h-5 w-5 text-[--color-brand]" aria-label="yes" />
      );
    if (v === "no")
      return <X className="h-5 w-5 text-[--color-muted]" aria-label="no" />;
    return <span className="text-sm text-[--color-ink]">{v}</span>;
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-[--color-border] bg-[--color-surface] shadow-[var(--shadow-card)] my-10">
      <table className="w-full text-left">
        <thead className="bg-[--color-bg] text-sm">
          <tr>
            <th className="p-4 font-semibold text-[--color-ink]">Feature</th>
            <th className="p-4 font-semibold text-[--color-ink]">{leftLabel}</th>
            <th className="p-4 font-semibold text-[--color-ink]">{rightLabel}</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {rows.map((r, i) => (
            <tr key={r.feature} className={i % 2 ? "bg-[--color-bg]" : ""}>
              <td className="p-4 font-medium text-[--color-ink]">{r.feature}</td>
              <td className="p-4">{renderCell(r.left)}</td>
              <td className="p-4">{renderCell(r.right)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
