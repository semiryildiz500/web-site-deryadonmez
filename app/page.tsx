import Image from "next/image";
import Link from "next/link";
import { Arrow, Mail, Phone } from "@/components/Icons";
import WhatsAppLink from "@/components/WhatsAppLink";
import { APPOINTMENT_URL } from "@/lib/whatsapp";

const W = 1223;
const H = 1286;

type Spot = { label: string; href: string; x: number; y: number; w: number; h: number };

// Koordinatlar referans görselin piksel değerleridir (1223x1286); yüzdeye çevrilir.
const spots: Spot[] = [
  { label: "Ana Sayfa", href: "/", x: 432, y: 30, w: 90, h: 42 },
  { label: "Hakkımda", href: "/hakkimda", x: 562, y: 30, w: 90, h: 42 },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz", x: 692, y: 30, w: 114, h: 42 },
  { label: "İletişim", href: "/iletisim", x: 850, y: 30, w: 66, h: 42 },
  { label: "Randevu Al", href: APPOINTMENT_URL, x: 987, y: 21, w: 192, h: 53 },
  { label: "İletişime Geçin", href: "/iletisim", x: 77, y: 670, w: 264, h: 62 },
  { label: "Tüm Hizmetlerimizi İnceleyin", href: "/hizmetlerimiz", x: 944, y: 936, w: 246, h: 34 },
  { label: "Telefon: 0530 477 87 00", href: "tel:+905304778700", x: 60, y: 1212, w: 184, h: 44 },
  { label: "E-posta: smmmderyadonmez@outlook.com", href: "mailto:smmmderyadonmez@outlook.com", x: 298, y: 1212, w: 362, h: 44 },
  { label: "Randevu Al", href: APPOINTMENT_URL, x: 968, y: 1208, w: 198, h: 54 },
];

const pct = (v: number, total: number) => `${((v / total) * 100).toFixed(3)}%`;

const mobileLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function HomePage() {
  return (
    <main id="icerik" className="flex-1 bg-navy">
      <h1 className="sr-only">Derya Dönmez - Serbest Muhasebeci Mali Müşavir</h1>

      <div className="relative mx-auto w-full max-w-[1600px]">
        <Image
          src="/images/v3-final.png"
          alt="Derya Dönmez, Serbest Muhasebeci Mali Müşavir. Güvenle Yönetilen Finansal Süreçler. Mesleğe başlama tarihi 01.09.2008, 18 yıldan fazla mesleki deneyim."
          width={W}
          height={H}
          priority
          unoptimized
          className="block h-auto w-full object-contain"
        />
        <div className="hidden md:block">
          {spots.map((s) =>
            s.href.startsWith("https://") ? (
              <a
                key={`${s.label}-${s.x}-${s.y}`}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} (WhatsApp, yeni sekmede açılır)`}
                className="absolute block focus-visible:bg-gold/20"
                style={{
                  left: pct(s.x, W),
                  top: pct(s.y, H),
                  width: pct(s.w, W),
                  height: pct(s.h, H),
                }}
              />
            ) : s.href.startsWith("tel:") ? (
              <WhatsAppLink
                key={`${s.label}-${s.x}-${s.y}`}
                aria-label={`${s.label} (WhatsApp penceresini aç)`}
                className="absolute block focus-visible:bg-gold/20"
                style={{
                  left: pct(s.x, W),
                  top: pct(s.y, H),
                  width: pct(s.w, W),
                  height: pct(s.h, H),
                }}
              />
            ) : (
            <Link
              key={`${s.label}-${s.x}-${s.y}`}
              href={s.href}
              aria-label={s.label}
              className="absolute block focus-visible:bg-gold/20"
              style={{
                left: pct(s.x, W),
                top: pct(s.y, H),
                width: pct(s.w, W),
                height: pct(s.h, H),
              }}
            />
            ),
          )}
        </div>
      </div>

      <nav
        aria-label="Mobil menü"
        className="border-t border-gold/40 bg-navy px-5 py-8 md:hidden"
      >
        <ul className="grid grid-cols-2 gap-3">
          {mobileLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block border border-gold/40 px-4 py-4 text-center text-white transition-colors hover:border-gold hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-col gap-3">
          <WhatsAppLink className="flex items-center justify-center gap-3 bg-gold px-4 py-4 text-lg font-medium text-navy">
            <Phone className="h-5 w-5" /> 0530 477 87 00
          </WhatsAppLink>
          <a
            href="mailto:smmmderyadonmez@outlook.com"
            className="flex items-center justify-center gap-3 break-all border border-gold px-4 py-4 text-gold"
          >
            <Mail className="h-5 w-5 shrink-0" /> smmmderyadonmez@outlook.com
          </a>
          <a
            href={APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border border-gold/40 px-4 py-4 text-white"
          >
            Randevu Al <Arrow />
          </a>
        </div>
      </nav>
    </main>
  );
}
