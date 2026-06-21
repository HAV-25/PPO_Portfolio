"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 18, suffix: "+", label: "Years experience", sublabel: "In fintech & payments" },
  { value: 25, prefix: "$", suffix: "M+", label: "Partnerships delivered", sublabel: "At Mastercard · 4 regions" },
  { value: 120, suffix: "+", label: "Team scale managed", sublabel: "Cross-regional, at VP level" },
  { value: 6, suffix: "", label: "AI ventures built", sublabel: "Independently, since 2024" },
];

function Counter({
  value,
  prefix = "",
  suffix = "",
  started,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const steps = 40;
    const increment = value / steps;
    const interval = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span className="stat-number">
      {prefix && <span>{prefix}</span>}
      {count}
      {suffix && <span className="stat-suffix">{suffix}</span>}
    </span>
  );
}

export default function StatBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div className="bg-cream-card" ref={ref}>
      <div className="content-width py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }}
              className="flex flex-col"
            >
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                started={inView}
              />
              <p className="font-jakarta font-semibold text-navy text-[14px] mt-2 leading-tight">
                {stat.label}
              </p>
              <p className="font-jakarta text-slate text-[13px] mt-0.5">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
