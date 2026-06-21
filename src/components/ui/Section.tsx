type SectionProps = {
  children: React.ReactNode;
  label?: string;
  className?: string;
  ruled?: "top" | "both" | "none";
  id?: string;
};

export default function Section({
  children,
  label,
  className = "",
  ruled = "none",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-spacing ${
        ruled === "top" || ruled === "both" ? "border-t border-rule" : ""
      } ${ruled === "both" ? "border-b border-rule" : ""} ${className}`}
    >
      <div className="content-width">
        {label && <span className="section-label">{label}</span>}
        {children}
      </div>
    </section>
  );
}
