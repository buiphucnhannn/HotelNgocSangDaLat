import Link from "next/link";

// Nút dùng chung cho toàn trang.
export default function Button({
  children,
  href = "#contact",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2";
  const styles = {
    primary: "bg-brand-500 text-navy-950 hover:bg-brand-400",
    dark: "bg-navy-900 text-white hover:bg-navy-800",
    outline: "border border-white/40 bg-white/10 text-white hover:bg-white/20",
    ghost: "border border-slate-200 bg-white text-navy-900 hover:border-brand-400",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
