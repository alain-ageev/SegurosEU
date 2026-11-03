import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="edias-attention fixed bottom-4 left-4 z-[60] block size-14 overflow-hidden rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--edias-navy)] sm:bottom-6 sm:left-6 sm:size-16"
    >
      <Image
        src="/images/whatsapp-float.png"
        alt=""
        width={256}
        height={256}
        className="size-full object-cover"
        unoptimized
        priority
      />
    </a>
  );
}
