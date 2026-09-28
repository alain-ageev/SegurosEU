import { siteConfig } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16.004 3C8.832 3 3 8.832 3 16.004c0 2.34.624 4.524 1.716 6.42L3 29l6.768-1.776A12.9 12.9 0 0 0 16.004 29C23.176 29 29 23.168 29 16.004 29 8.832 23.176 3 16.004 3zm7.476 18.24c-.312.876-1.824 1.668-2.52 1.776-.648.096-1.464.144-2.364-.156-.54-.18-1.236-.408-2.124-.792-3.744-1.62-6.18-5.4-6.372-5.652-.18-.252-1.536-2.04-1.536-3.888s.972-2.76 1.32-3.144c.312-.348.684-.432.912-.432h.66c.216 0 .504-.012.768.588.288.648.972 2.364 1.056 2.532.084.168.144.372.036.6-.096.24-.144.372-.288.576-.144.204-.3.456-.432.612-.144.168-.3.348-.132.684.168.336.744 1.224 1.596 1.98 1.1.972 2.028 1.272 2.364 1.416.336.144.54.12.744-.072.204-.192.864-.996 1.092-1.34.228-.348.456-.288.768-.168.312.12 1.98.936 2.32 1.104.336.168.564.252.648.396.084.144.084.84-.228 1.716z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-[60] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 hover:bg-[#1ebe57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--edias-navy)] sm:right-6 sm:bottom-6 sm:size-16"
    >
      <WhatsAppIcon className="size-8 sm:size-9" />
    </a>
  );
}
