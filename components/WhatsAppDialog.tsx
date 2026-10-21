"use client";

import { useEffect, useRef } from "react";
import { WHATSAPP_EVENT } from "./WhatsAppLink";

export default function WhatsAppDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const open = () => {
      lastFocus.current = document.activeElement as HTMLElement | null;
      if (!ref.current?.open) ref.current?.showModal();
    };
    window.addEventListener(WHATSAPP_EVENT, open);
    return () => window.removeEventListener(WHATSAPP_EVENT, open);
  }, []);

  const close = () => ref.current?.close();

  return (
    <dialog
      ref={ref}
      aria-labelledby="wa-baslik"
      onClose={() => lastFocus.current?.focus()}
      onClick={(e) => {
        if (e.target === ref.current) close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-md overflow-hidden rounded-2xl border border-gold/40 bg-navy-2 p-0 text-white shadow-2xl backdrop:bg-black/70"
    >
      <div className="flex items-center gap-4 bg-navy px-5 py-4">
        <span
          aria-hidden="true"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-xl text-gold"
        >
          DD
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="wa-baslik" className="font-serif text-2xl leading-tight">
            Derya Dönmez
          </h2>
          <p className="text-sm text-gold">Serbest Muhasebeci Mali Müşavir</p>
        </div>
        <button
          type="button"
          onClick={close}
          aria-label="Pencereyi kapat"
          className="-mr-1 flex h-10 w-10 shrink-0 items-center justify-center self-start rounded-full text-2xl leading-none text-white/80 hover:text-gold"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>

      <div className="bg-[#efe7da] px-5 py-6">
        <div className="max-w-[92%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[15px] leading-relaxed text-navy shadow">
          <p>Merhaba, ben Derya Dönmez. 👋</p>
          <p className="mt-3">
            Mali müşavirlik ve muhasebe hizmetlerimiz hakkında bilgi almak için benimle
            iletişime geçebilirsiniz.
          </p>
          <p className="mt-3">Size nasıl yardımcı olabilirim?</p>
        </div>
      </div>

      <div className="bg-navy-2 px-5 py-5">
        <a
          href="https://wa.me/905304778700"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3.5 text-base font-semibold text-[#06260f] transition-colors hover:bg-[#1fbd5b]"
        >
          WhatsApp&apos;ta Görüşme Başlat
          <span className="sr-only"> (yeni sekmede açılır)</span>
        </a>
      </div>
    </dialog>
  );
}
