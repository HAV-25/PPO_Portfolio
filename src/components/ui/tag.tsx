type StatusVariant = "live" | "build" | "prototype" | "concept" | "delivered";

type TagProps = {
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

export default function Tag({ children, variant = "stack", status }: TagProps) {
  if (variant === "status" && status) {
    return (
      <span className={statusStyles[status]}>{children}</span>
    );
  }
  return <span className="stack-tag">{children}</span>;
}
