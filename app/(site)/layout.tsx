import Header from "@/components/Header";
import ContactStrip from "@/components/ContactStrip";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <main id="icerik" className="flex-1">
        {children}
      </main>
      <ContactStrip />
    </>
  );
}
