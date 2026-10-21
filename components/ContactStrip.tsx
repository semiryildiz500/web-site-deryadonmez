import Link from "next/link";
import { Arrow, Mail, Phone, Pin } from "./Icons";
import WhatsAppLink from "./WhatsAppLink";

export default function ContactStrip() {
  return (
    <footer className="border-t border-gold/40 bg-navy">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-14">
        <WhatsAppLink className="flex items-center gap-4 text-lg transition-colors hover:text-gold">
          <Phone className="h-6 w-6 text-gold" /> 0530 477 87 00
        </WhatsAppLink>
        <span className="hidden h-12 w-px bg-white/20 lg:block" aria-hidden="true" />
        <a href="mailto:smmmderyadonmez@outlook.com" className="flex items-center gap-4 break-all text-lg transition-colors hover:text-gold">
          <Mail className="h-6 w-6 shrink-0 text-gold" /> smmmderyadonmez@outlook.com
        </a>
        <span className="hidden h-12 w-px bg-white/20 lg:block" aria-hidden="true" />
        <p className="flex items-center gap-4 text-lg">
          <Pin className="h-6 w-6 text-gold" /> İskenderun / Hatay
        </p>
        <Link
          href="/iletisim"
          className="inline-flex items-center gap-4 bg-gold px-10 py-4 text-lg font-medium text-navy transition-colors hover:bg-white"
        >
          Randevu Al <Arrow />
        </Link>
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/50">
        © Derya Dönmez SMMM. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}
