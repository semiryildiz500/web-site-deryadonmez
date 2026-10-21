import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import WhatsAppDialog from "@/components/WhatsAppDialog";

const serif = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const sans = Jost({
  variable: "--font-sans-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: "Derya Dönmez SMMM | Serbest Muhasebeci Mali Müşavir",
    template: "%s | Derya Dönmez SMMM",
  },
  description:
    "Derya Dönmez, Serbest Muhasebeci Mali Müşavir. İskenderun / Hatay'da muhasebe, vergi danışmanlığı ve mali müşavirlik hizmetleri.",
  openGraph: {
    title: "Derya Dönmez SMMM",
    description: "Güvenle Yönetilen Finansal Süreçler",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${serif.variable} ${sans.variable} antialiased`}>
      <body className="flex min-h-screen flex-col bg-navy text-white">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-navy"
        >
          İçeriğe geç
        </a>
        {children}
        <WhatsAppDialog />
      </body>
    </html>
  );
}
