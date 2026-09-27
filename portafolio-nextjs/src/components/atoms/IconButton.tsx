import type { LucideIcon } from "lucide-react";

type Props = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export function IconButton({ href, label, icon: Icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:-translate-y-1 hover:border-amber-400 hover:text-slate-950 hover:shadow-lg"
    >
      <Icon size={19} />
    </a>
  );
}
