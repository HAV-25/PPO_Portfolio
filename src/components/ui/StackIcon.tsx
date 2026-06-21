"use client";

import React from "react";

type P = { size?: number };

function ReactIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="2" fill="#61DAFB" />
      <ellipse cx="10" cy="10" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.4" />
      <ellipse cx="10" cy="10" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 10 10)" />
      <ellipse cx="10" cy="10" rx="9" ry="3.4" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(-60 10 10)" />
    </svg>
  );
}

function NextjsIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#000" />
      <path d="M7 14V6L13 14V6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="miter" />
    </svg>
  );
}

function VercelIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <polygon points="10,2 19,18 1,18" fill="#000" />
    </svg>
  );
}

function SupabaseIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M11.5 2.5L4 12H10.5L9 17.5L16.5 8H10L11.5 2.5Z" fill="#3ECF8E" />
    </svg>
  );
}

function N8nIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#EA580C" />
      <circle cx="4.5" cy="10" r="2" fill="#fff" />
      <circle cx="10" cy="6" r="2" fill="#fff" />
      <circle cx="15.5" cy="10" r="2" fill="#fff" />
      <line x1="6.4" y1="9.2" x2="8.2" y2="7.4" stroke="#fff" strokeWidth="1" />
      <line x1="11.8" y1="7.4" x2="13.6" y2="9.2" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}

function OpenAIIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#000" />
      <circle cx="10" cy="10" r="6.5" stroke="#fff" strokeWidth="1.2" />
      <path d="M10 4.5L12.5 7.5L15.5 8L13.5 10.5L14 13.5L10 12L6 13.5L6.5 10.5L4.5 8L7.5 7.5Z" fill="#fff" opacity="0.85" />
    </svg>
  );
}

function AnthropicIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#D4865C" />
      <path d="M10 4L6 15H8L8.8 12.5H11.2L12 15H14L10 4ZM9.3 11L10 8.5L10.7 11H9.3Z" fill="#fff" />
    </svg>
  );
}

function StripeIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#635BFF" />
      <path d="M13 7C13 5.8 12 5 10.5 5C8.5 5 7 6 7 7.5C7 9 8.5 9.8 10.5 10.5C12.5 11.2 13.5 12 13.5 13.5C13.5 15 12 16 10 16C8.5 16 7 15.2 7 14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function ExpoIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="10" fill="#000" />
      <path d="M4.5 14C7 9 13 9 15.5 14" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M10 6L13 11H7Z" fill="#fff" />
    </svg>
  );
}

function GitHubIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M10 1C5.03 1 1 5.03 1 10C1 13.9 3.5 17.2 7 18.4C7.5 18.5 7.7 18.2 7.7 17.9V16.4C5.1 17 4.5 15.1 4.5 15.1C4.1 14.1 3.5 13.8 3.5 13.8C2.7 13.3 3.6 13.3 3.6 13.3C4.5 13.4 4.9 14.3 4.9 14.3C5.7 15.6 7 15.2 7.6 15C7.7 14.4 7.9 14 8.2 13.7C6.3 13.5 4.3 12.7 4.3 9.5C4.3 8.6 4.7 7.8 5.2 7.2C5.1 7 4.7 6 5.3 4.7C5.3 4.7 6.1 4.4 7.7 5.6C8.4 5.4 9.2 5.3 10 5.3C10.8 5.3 11.6 5.4 12.3 5.6C13.9 4.4 14.7 4.7 14.7 4.7C15.3 6 15 7 14.8 7.2C15.3 7.8 15.7 8.6 15.7 9.5C15.7 12.7 13.7 13.5 11.8 13.7C12.1 14.1 12.4 14.7 12.4 15.6V17.9C12.4 18.2 12.6 18.5 13.1 18.4C16.5 17.2 19 13.9 19 10C19 5.03 15 1 10 1Z" fill="#1F2328" />
    </svg>
  );
}

function TailwindIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 8.5C5.8 6 7.5 4.7 10 5C11.7 5.2 12.7 6.2 13.5 7.5C14.2 8.5 15 9 16.5 8.5" stroke="#38BDF8" strokeWidth="1.7" strokeLinecap="round" fill="none" />
      <path d="M5 13C5.8 10.5 7.5 9.2 10 9.5C11.7 9.7 12.7 10.7 13.5 12C14.2 13 15 13.5 16.5 13" stroke="#38BDF8" strokeWidth="1.7" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function FramerIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 3H16V10H10L16 17H10V10H4V3Z" fill="#0055FF" />
    </svg>
  );
}

function SentryIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 2.5L17 15.5H3L10 2.5Z" stroke="#F55D3E" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M7 15.5C7 12.5 9.5 10 12.5 10" stroke="#F55D3E" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <circle cx="17" cy="15.5" r="1" fill="#F55D3E" />
    </svg>
  );
}

function ElevenLabsIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#131316" />
      <rect x="4" y="6" width="3" height="8" rx="1.5" fill="#fff" />
      <rect x="8.5" y="3" width="3" height="14" rx="1.5" fill="#fff" />
      <rect x="13" y="6" width="3" height="8" rx="1.5" fill="#fff" />
    </svg>
  );
}

function PostgresIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#336791" />
      <ellipse cx="10" cy="8.5" rx="5" ry="5" stroke="#fff" strokeWidth="1.2" fill="none" />
      <path d="M12.5 10.5Q14 14 12 16M10 13V16" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function GoogleIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M19 10.2C19 9.4 18.9 8.7 18.8 8H10V12H15.1C14.8 13.3 14.1 14.4 13 15.1V17.6H16.2C17.9 16 19 13.3 19 10.2Z" fill="#4285F4" />
      <path d="M10 20C12.7 20 14.9 19.1 16.2 17.6L13 15.1C12.1 15.7 11.1 16 10 16C7.4 16 5.2 14.2 4.4 11.8H1.1V14.3C2.4 16.9 5.9 20 10 20Z" fill="#34A853" />
      <path d="M4.4 11.8C4.2 11.2 4.1 10.6 4.1 10C4.1 9.4 4.2 8.8 4.4 8.2V5.7H1.1C0.5 7 0.1 8.5 0.1 10C0.1 11.5 0.5 13 1.1 14.3L4.4 11.8Z" fill="#FBBC04" />
      <path d="M10 4C11.3 4 12.4 4.5 13.3 5.3L16.3 2.3C14.9 1 12.7 0 10 0C5.9 0 2.4 3.1 1.1 5.7L4.4 8.2C5.2 5.8 7.4 4 10 4Z" fill="#EA4335" />
    </svg>
  );
}

function MetaIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#1877F2" />
      <path d="M14 10H11.8V17H9.5V10H7.5V8H9.5V6.8C9.5 4.8 10.7 3.5 12.5 3.5H14V5.5H12.8C12.3 5.5 12 5.8 12 6.4V8H14L13.7 10H14Z" fill="white" />
    </svg>
  );
}

function ShopifyIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#96BF48" />
      <path d="M13.5 5.5C13.5 5.5 13.3 4 11.8 3.7L11.5 5.5M6.5 7H13.5L14.5 16H5.5L6.5 7Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8.5 7V9C8.5 9.8 9.1 10.5 10 10.5C10.9 10.5 11.5 9.8 11.5 9V7" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function AmazonIcon({ size = 14 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill="#FF9900" />
      <path d="M5 13.5C5 13.5 9 15.5 15 13.5" stroke="#232F3E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M13.5 12.5L15.5 14L13.5 15.5" stroke="#232F3E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M7.5 10.5L10 5L12.5 10.5" stroke="#232F3E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <line x1="8.2" y1="9.5" x2="11.8" y2="9.5" stroke="#232F3E" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

const BRAND_COLORS: Record<string, [string, string]> = {
  perplexity: ["#1FB8CD", "#fff"],
  gemini: ["#4285F4", "#fff"],
  langgraph: ["#1C3C3C", "#fff"],
  langchain: ["#1C3C3C", "#fff"],
  langfuse: ["#4B3FC3", "#fff"],
  lovable: ["#FF4F64", "#fff"],
  postiz: ["#6366F1", "#fff"],
  revenuecat: ["#EE5253", "#fff"],
  posthog: ["#F54E00", "#fff"],
  hetzner: ["#D50C2D", "#fff"],
  scaleway: ["#7B3FE4", "#fff"],
  ovhcloud: ["#123F6D", "#fff"],
  clerk: ["#6C47FF", "#fff"],
  onesignal: ["#E54B4D", "#fff"],
  resend: ["#000000", "#fff"],
  virlo: ["#7C3AED", "#fff"],
  javascript: ["#F7DF1E", "#000"],
  postman: ["#FF6C37", "#fff"],
  shadcn: ["#09090B", "#fff"],
  perplexitysonar: ["#1FB8CD", "#fff"],
};

function InitialIcon({ name, size = 14 }: { name: string; size?: number }) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  const entry = Object.entries(BRAND_COLORS).find(([k]) => key.includes(k) || k.includes(key));
  const [bg, fg] = entry ? entry[1] : ["#5A6A8A", "#fff"];
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect width="20" height="20" rx="4" fill={bg} />
      <text x="10" y="14.5" textAnchor="middle" fill={fg} fontSize="11" fontWeight="700" fontFamily="system-ui,sans-serif">
        {name.charAt(0).toUpperCase()}
      </text>
    </svg>
  );
}

const ICON_LOOKUP: Array<[string[], React.FC<P>]> = [
  [["react native", "reactnative", "react"], ReactIcon],
  [["next.js", "nextjs", "next.js 14"], NextjsIcon],
  [["vercel"], VercelIcon],
  [["supabase"], SupabaseIcon],
  [["n8n"], N8nIcon],
  [["openai", "gpt image", "gpt-4", "gpt4", "dall-e", "dalle", "openai realtime", "gpt-4o", "gpt image-2", "gpt image 1", "gpt image 2", "gemini"], OpenAIIcon],
  [["anthropic", "claude", "claude api", "claude vision"], AnthropicIcon],
  [["stripe"], StripeIcon],
  [["expo", "expo-av", "expo-speech"], ExpoIcon],
  [["github"], GitHubIcon],
  [["tailwind css", "tailwindcss", "tailwind"], TailwindIcon],
  [["framer motion", "framer"], FramerIcon],
  [["sentry"], SentryIcon],
  [["elevenlabs", "eleven labs"], ElevenLabsIcon],
  [["pgvector", "postgresql", "postgres"], PostgresIcon],
  [["google ads", "ga4", "google analytics"], GoogleIcon],
  [["meta ads", "facebook graph api", "facebook", "meta"], MetaIcon],
  [["shopify"], ShopifyIcon],
  [["amazon seller api", "amazon", "aws"], AmazonIcon],
];

export default function StackIcon({ name, size = 14 }: { name: string; size?: number }) {
  const n = name.toLowerCase();
  for (const [keys, Icon] of ICON_LOOKUP) {
    if (keys.some((k) => n.includes(k))) {
      return <Icon size={size} />;
    }
  }
  return <InitialIcon name={name} size={size} />;
}
