"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat =
  | { kind: "counter"; value: number; prefix?: string; suffix: string; label: string; sublabel: string }
  | { kind: "text"; display: string; label: string; sublabel: string };

const stats: Stat[] = [
  {
    kind: "counter",
    value: 18,
    suffix: "+",
    label: "Years in fintech & payments",
    sublabel: "Payments, enterprise financial services and technology across Europe and global markets.",
  },
  {
    kind: "counter",
    value: 120,
    suffix: "+",
    label: "Global delivery organisation",
    sublabel: "Technical implementation and delivery specialists across four regions.",
  },
  {
    kind: "counter",
    value: 25,
    prefix: "$",
    suffix: "M+",
    label: "Technology partnerships",
    sublabel: "Strategic programmes involving Microsoft and Verizon at Mastercard.",
  },
  {
    kind: "counter",
    value: 30,
    suffix: "%",
    label: "Faster delivery cycles",
    sublabel: "Delivery and programme-management redesign at enterprise scale.",
  },
];

function Counter({ value, prefix = "", suffix = "", started }: { value: number; prefix?: string; suffix?: string; started: boolean }) {
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
            <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.08 }} className="flex flex-col">
              {stat.kind === "counter" ? <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} started={inView} /> : <span className="stat-number" style={{ fontVariantNumeric: "normal" }}>{stat.display}</span>}
              <p className="font-jakarta font-semibold text-navy text-[15px] mt-2 leading-tight">{stat.label}</p>
              <p className="font-jakarta text-slate text-[14px] mt-1 leading-[1.55]">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
