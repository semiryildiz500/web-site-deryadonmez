import type { ReactNode } from "react";

type P = { className?: string };

function Svg({ className = "h-10 w-10", children }: P & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const Calculator = (p: P) => (
  <Svg {...p}>
    <rect x="9" y="4" width="30" height="40" rx="3" />
    <rect x="14" y="9" width="20" height="8" rx="1" />
    <path d="M15 24h2M23 24h2M31 24h2M15 30h2M23 30h2M31 30h2M15 36h2M23 36h2M31 36h2" />
  </Svg>
);
export const Document = (p: P) => (
  <Svg {...p}>
    <path d="M12 4h17l9 9v31H12z" />
    <path d="M29 4v9h9M18 22h14M18 28h14M18 34h14" />
  </Svg>
);
export const Building = (p: P) => (
  <Svg {...p}>
    <path d="M8 44V14l14-6v36M22 44V18l18 4v22M4 44h40" />
    <path d="M13 20h4M13 27h4M13 34h4M28 26h4M28 33h4M34 26h2M34 33h2" />
  </Svg>
);
export const People = (p: P) => (
  <Svg {...p}>
    <circle cx="24" cy="14" r="7" />
    <path d="M10 42c0-9 6-15 14-15s14 6 14 15" />
    <circle cx="9" cy="22" r="4" />
    <circle cx="39" cy="22" r="4" />
    <path d="M2 36c0-5 3-8 7-8M46 36c0-5-3-8-7-8" />
  </Svg>
);
export const Cloud = (p: P) => (
  <Svg {...p}>
    <path d="M14 36a9 9 0 0 1-1-18 11 11 0 0 1 21 2 8 8 0 0 1 0 16z" />
    <path d="M18 28l4 4 8-8" />
  </Svg>
);
export const Chart = (p: P) => (
  <Svg {...p}>
    <path d="M6 6v36h36" />
    <path d="M13 32l9-10 7 6 11-14" />
    <path d="M34 14h6v6" />
  </Svg>
);
export const Home = (p: P) => (
  <Svg {...p}>
    <path d="M6 22L24 7l18 15M11 19v25h26V19" />
    <path d="M20 44V30h8v14" />
  </Svg>
);
export const Briefcase = (p: P) => (
  <Svg {...p}>
    <rect x="5" y="14" width="38" height="28" rx="3" />
    <path d="M17 14V9h14v5M5 26h38M21 26v4h6v-4" />
  </Svg>
);
export const CalendarIcon = (p: P) => (
  <Svg {...p}>
    <rect x="6" y="9" width="36" height="34" rx="3" />
    <path d="M6 18h36M15 5v8M33 5v8M14 26h20M14 34h12" />
  </Svg>
);
export const Award = (p: P) => (
  <Svg {...p}>
    <circle cx="24" cy="19" r="13" />
    <path d="M18 19l5 5 8-9M15 31l-4 13 8-4 5 5 3-9M33 31l4 13-8-4" />
  </Svg>
);
export const Phone = (p: P) => (
  <Svg {...p}>
    <path d="M10 6h8l4 11-5 3a24 24 0 0 0 11 11l3-5 11 4v8a4 4 0 0 1-4 4C21 42 6 27 6 10a4 4 0 0 1 4-4z" fill="currentColor" stroke="none" />
  </Svg>
);
export const Mail = (p: P) => (
  <Svg {...p}>
    <rect x="4" y="9" width="40" height="30" rx="3" fill="currentColor" stroke="none" />
    <path d="M6 12l18 14 18-14" stroke="#040d1e" />
  </Svg>
);
export const Pin = (p: P) => (
  <Svg {...p}>
    <path d="M24 4c-8 0-14 6-14 14 0 10 14 26 14 26s14-16 14-26c0-8-6-14-14-14z" fill="currentColor" stroke="none" />
    <circle cx="24" cy="18" r="5" fill="#040d1e" stroke="none" />
  </Svg>
);
export const Arrow = ({ className = "h-5 w-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12h18M15 6l6 6-6 6" />
  </svg>
);

export const Shield = (p: P) => (
  <Svg {...p}>
    <path d="M24 4l16 6v12c0 10-7 17-16 21C15 39 8 32 8 22V10z" />
    <path d="M16 23l6 6 10-12" />
  </Svg>
);export const Chat = (p: P) => (
  <Svg {...p}>
    <path d="M6 8h36v24H20l-9 8v-8H6z" />
    <path d="M14 17h20M14 24h12" />
  </Svg>
);
export const Sprout = (p: P) => (
  <Svg {...p}>
    <path d="M24 44V22M24 26c-8 0-12-5-12-12 8 0 12 5 12 12zM24 22c0-7 4-12 12-12 0 7-4 12-12 12z" />
    <path d="M16 44h16" />
  </Svg>
);
