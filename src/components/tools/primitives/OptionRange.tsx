"use client";

import { useId } from "react";

export function OptionRange({
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string;
  valueLabel: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (next: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-[--color-ink] mb-2">
        {label}: <span className="text-[--color-muted] font-normal">{valueLabel}</span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.currentTarget.value))}
        className="w-full min-h-[44px] accent-[--color-brand]"
      />
    </div>
  );
}
