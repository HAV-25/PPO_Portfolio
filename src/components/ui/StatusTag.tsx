type StatusVariant = "live" | "build" | "prototype" | "concept" | "delivered";

type StatusTagProps = {
  children: React.ReactNode;
  variant?: "stack" | "status";
  status?: StatusVariant;
};

const statusStyles: Record<StatusVariant, string> = {
  live: "status-live",
  build: "status-build",
  prototype: "status-prototype",
  concept: "status-concept",
  delivered: "status-delivered",
};

export default function StatusTag({ children, variant = "stack", status }: StatusTagProps) {
  if (variant === "status" && status) {
    return (
      <span className={statusStyles[status]}>{children}</span>
    );
  }
  return <span className="stack-tag">{children}</span>;
}
