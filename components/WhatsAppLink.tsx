"use client";

import type { AnchorHTMLAttributes } from "react";

export const WHATSAPP_EVENT = "open-whatsapp-dialog";

// JavaScript kapalıysa href ile telefon araması çalışmaya devam eder.
export default function WhatsAppLink({
  children,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href="tel:+905304778700"
      {...props}
      onClick={(e) => {
        onClick?.(e);
        e.preventDefault();
        window.dispatchEvent(new Event(WHATSAPP_EVENT));
      }}
    >
      {children}
    </a>
  );
}
