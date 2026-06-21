import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "cream";
  external?: boolean;
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    cream: "btn-cream",
  };

  const classes = `${styles[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
