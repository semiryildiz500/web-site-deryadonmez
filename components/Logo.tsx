import Link from "next/link";

export function Monogram({ className = "h-14 w-14" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 64"
      className={className}
      fill="none"
      stroke="#e8c183"
      aria-hidden="true"
    >
      <g strokeWidth="2.2" strokeLinejoin="round">
        <path d="M6 8h16c14 0 20 10 20 24S36 56 22 56H6" />
        <path d="M14 8v48" strokeWidth="3.4" />
        <path d="M36 8h14c14 0 24 10 24 24S64 56 50 56H36" />
        <path d="M44 8v48" strokeWidth="3.4" />
      </g>
    </svg>
  );
}

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4" aria-label="Derya Dönmez SMMM - Ana Sayfa">
      <Monogram className="h-12 w-14 sm:h-14 sm:w-16" />
      <span className="h-12 w-px bg-white/30" aria-hidden="true" />
      <span className="leading-tight">
        <span className="block font-serif text-xl font-medium tracking-wide sm:text-2xl">
          DERYA DÖNMEZ
        </span>
        <span className="mt-1 block text-[10px] tracking-[0.25em] text-white/80 sm:text-xs">
          SERBEST MUHASEBECİ
          <br />
          MALİ MÜŞAVİR
        </span>
      </span>
    </Link>
  );
}
