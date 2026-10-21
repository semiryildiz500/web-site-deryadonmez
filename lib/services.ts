import type { ComponentType } from "react";
import {
  Building,
  Calculator,
  Chart,
  Cloud,
  Document,
  Home,
  Briefcase,
  People,
} from "@/components/Icons";

export type Service = {
  title: string;
  description: string;
  Icon: ComponentType<{ className?: string }>;
};

export const services: Service[] = [
  {
    title: "Genel Muhasebe Hizmetleri",
    description:
      "Defter ve kayıtların mevzuata uygun şekilde tutulması, hesapların düzenli takibi ve dönemsel mali tabloların hazırlanması.",
    Icon: Calculator,
  },
  {
    title: "Vergi Danışmanlığı ve Beyanname İşlemleri",
    description:
      "Vergi yükümlülüklerinin takibi, beyannamelerin süresinde hazırlanması ve vergisel konularda bilgilendirme ile danışmanlık.",
    Icon: Document,
  },
  {
    title: "Şirket Kuruluşu ve Kurumsal İşlemler",
    description:
      "Şahıs ve şirket kuruluş süreçleri ile tür değişikliği, adres ve ortaklık değişikliği gibi kurumsal işlemlerde destek.",
    Icon: Building,
  },
  {
    title: "SGK ve Personel Özlük İşlemleri",
    description:
      "İşe giriş ve çıkış bildirgeleri, aylık prim ve hizmet belgeleri ile personel özlük dosyalarının yasal düzenlemelere uygun yürütülmesi.",
    Icon: People,
  },
  {
    title: "E-Dönüşüm ve Elektronik Muhasebe",
    description:
      "E-fatura, e-arşiv, e-defter gibi elektronik uygulamalara geçiş ve bu süreçlerin takibinde yönlendirme.",
    Icon: Cloud,
  },
  {
    title: "Mali Danışmanlık ve Finansal Raporlama",
    description:
      "İşletmenin mali durumunu yansıtan raporların hazırlanması ve karar süreçlerini destekleyen mali analiz ve danışmanlık.",
    Icon: Chart,
  },
  {
    title: "İnşaat ve Gayrimenkul Muhasebesi",
    description:
      "İnşaat ve gayrimenkul faaliyetlerine özgü muhasebe uygulamaları, vergi düzenlemeleri ve kayıt süreçlerinde destek.",
    Icon: Home,
  },
  {
    title: "İşletme Açılış, Değişiklik ve Kapanış İşlemleri",
    description:
      "İşletmenin açılış, değişiklik ve kapanış süreçlerinde gerekli bildirim ve kayıt işlemlerinin mevzuata uygun yürütülmesi.",
    Icon: Briefcase,
  },
];
