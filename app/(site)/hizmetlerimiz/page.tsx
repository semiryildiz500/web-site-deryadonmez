import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { Arrow } from "@/components/Icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Genel muhasebe, vergi danışmanlığı, şirket kuruluşu, SGK işlemleri, e-dönüşüm, mali danışmanlık ve daha fazlası. Muhasebe ve mali müşavirlik hizmetleri.",
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero eyebrow="HİZMETLERİMİZ" title="Muhasebe ve Mali Müşavirlik Hizmetleri">
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/85">
          İşletmelerin mali süreçlerini mevzuata uygun, düzenli ve sürdürülebilir şekilde yönetmelerine yardımcı oluyoruz. Vergi yükümlülüklerinden finansal raporlamaya kadar ihtiyaç duydukları profesyonel desteği sunuyoruz.
        </p>
      </PageHero>
      <section className="px-5 pb-24 sm:px-8 lg:px-14">
        <ul className="mx-auto grid max-w-[1100px] gap-6 sm:grid-cols-2">
          {services.map(({ title, description, Icon }) => (
            <li key={title} className="border border-gold/30 bg-navy-2 p-8 transition-colors hover:border-gold">
              <Icon className="h-12 w-12 text-gold" />
              <h2 className="mt-5 font-serif text-2xl font-medium">{title}</h2>
              <p className="mt-3 leading-relaxed text-white/80">{description}</p>
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-14 max-w-[1100px]">
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-4 bg-gold px-9 py-4 text-lg font-medium text-navy transition-colors hover:bg-white"
          >
            İletişime Geçin <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
