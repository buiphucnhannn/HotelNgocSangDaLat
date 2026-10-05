import Container from "./Container";

// Tiêu đề dùng chung cho các section: eyebrow + title + mô tả.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Container>
      <div className={`max-w-2xl ${alignCls}`}>
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mt-4 text-base leading-relaxed ${
              dark ? "text-white/70" : "text-slate-600"
            }`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </Container>
  );
}
