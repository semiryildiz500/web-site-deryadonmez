import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WhatsAppLink from "@/components/WhatsAppLink";
import { Mail, Phone, Pin } from "@/components/Icons";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Derya Dönmez SMMM ile iletişime geçin. Telefon: 0530 477 87 00, E-posta: smmmderyadonmez@outlook.com, İskenderun / Hatay.",
};

export default function IletisimPage() {
  return (
    <>
      <PageHero eyebrow="İLETİŞİM" title="İletişime Geçin">
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
          Sorularınız ve görüşme talepleriniz için aşağıdaki kanallardan bana ulaşabilirsiniz.
        </p>
      </PageHero>
      <section className="px-5 pb-24 sm:px-8 lg:px-14">
        <ul className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          <li className="border border-gold/30 bg-navy-2 p-8">
            <Phone className="h-9 w-9 text-gold" />
            <h2 className="mt-5 font-serif text-2xl">Telefon</h2>
            <WhatsAppLink className="mt-3 block text-lg text-white/85 hover:text-gold">
              0530 477 87 00
            </WhatsAppLink>
          </li>
          <li className="border border-gold/30 bg-navy-2 p-8">
            <Mail className="h-9 w-9 text-gold" />
            <h2 className="mt-5 font-serif text-2xl">E-posta</h2>
            <a href="mailto:smmmderyadonmez@outlook.com" className="mt-3 block break-all text-lg text-white/85 hover:text-gold">
              smmmderyadonmez@outlook.com
            </a>
          </li>
          <li className="border border-gold/30 bg-navy-2 p-8">
            <Pin className="h-9 w-9 text-gold" />
            <h2 className="mt-5 font-serif text-2xl">Konum</h2>
            <p className="mt-3 text-lg text-white/85">İskenderun / Hatay</p>
          </li>
        </ul>
      </section>
    </>
  );
}
