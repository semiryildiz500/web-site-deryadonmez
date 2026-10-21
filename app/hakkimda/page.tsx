import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Mail, Phone } from "@/components/Icons";
import WhatsAppLink from "@/components/WhatsAppLink";
import { APPOINTMENT_URL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Hakkımda",
  description:
    "Derya Dönmez, Serbest Muhasebeci Mali Müşavir. 01.09.2008'den bu yana güven, şeffaflık, titizlik ve mesleki etik ilkeleriyle muhasebe ve mali müşavirlik hizmeti. Arsuz / Hatay.",
  alternates: { canonical: "/hakkimda" },
  openGraph: {
    title: "Hakkımda | Derya Dönmez SMMM",
    description:
      "Güvenin, titizliğin ve profesyonelliğin buluştuğu noktada. Derya Dönmez, Serbest Muhasebeci Mali Müşavir.",
    locale: "tr_TR",
    type: "profile",
  },
};

const W = 1536;
const H = 1024;

type Spot = { label: string; href: string; x: number; y: number; w: number; h: number };

// Koordinatlar görselin piksel değerleridir (1536x1024); yüzdeye çevrilir.
const spots: Spot[] = [
  { label: "Derya Dönmez SMMM - Ana Sayfa", href: "/", x: 150, y: 10, w: 245, h: 62 },
  { label: "Ana Sayfa", href: "/", x: 732, y: 26, w: 90, h: 36 },
  { label: "Hakkımda", href: "/hakkimda", x: 846, y: 26, w: 88, h: 44 },
  { label: "Hizmetlerimiz", href: "/hizmetlerimiz", x: 958, y: 26, w: 118, h: 36 },
  { label: "İletişim", href: "/iletisim", x: 1098, y: 26, w: 68, h: 36 },
  { label: "Randevu Al", href: APPOINTMENT_URL, x: 1224, y: 18, w: 170, h: 50 },
];

const pct = (v: number, total: number) => `${((v / total) * 100).toFixed(3)}%`;

const mobileLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function AboutPage() {
  return (
    <main id="icerik" className="flex-1 bg-navy">
      <h1 className="sr-only">Hakkımda - Derya Dönmez, Serbest Muhasebeci Mali Müşavir</h1>

      <div className="relative mx-auto w-full max-w-[1600px]">
        <Image
          src="/images/derya-hakkimda-v1.png"
          alt="Hakkımda. Derya Dönmez, Serbest Muhasebeci Mali Müşavir. Güvenin, titizliğin ve profesyonelliğin buluştuğu noktada. Mesleki Yaklaşımım: güven, titizlik, şeffaflık, güncellik, sürdürülebilirlik. Mesleki Yolculuk: 01 Eylül 2008 mesleğe resmî başlangıç, 18 yılı aşkın mesleki birikim."
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

      <nav aria-label="Mobil menü" className="border-t border-gold/40 bg-navy px-5 py-8 md:hidden">
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
