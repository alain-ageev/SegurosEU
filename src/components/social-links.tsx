import { siteConfig } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.262 2.242 1.324 3.608.058 1.266.07 1.646.07 4.84s-.012 3.575-.07 4.84c-.062 1.366-.35 2.633-1.324 3.608-.975.975-2.242 1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.575-.012-4.84-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 15.575 2.163 15.195 2.163 12s.012-3.575.07-4.84c.062-1.366.35-2.633 1.324-3.608C4.532 2.583 5.8 2.295 7.165 2.233 8.431 2.175 8.811 2.163 12 2.163zm0 1.622c-3.153 0-3.524.012-4.766.069-1.04.048-1.604.218-1.98.362-.5.194-.856.426-1.231.801-.375.375-.607.731-.801 1.231-.144.376-.314.94-.362 1.98-.057 1.242-.069 1.613-.069 4.766s.012 3.524.069 4.766c.048 1.04.218 1.604.362 1.98.194.5.426.856.801 1.231.375.375.731.607 1.231.801.376.144.94.314 1.98.362 1.242.057 1.613.069 4.766.069s3.524-.012 4.766-.069c1.04-.048 1.604-.218 1.98-.362.5-.194.856-.426 1.231-.801.375-.375.607-.731.801-1.231.144-.376.314-.94.362-1.98.057-1.242.069-1.613.069-4.766s-.012-3.524-.069-4.766c-.048-1.04-.218-1.604-.362-1.98-.194-.5-.426-.856-.801-1.231-.375-.375-.731-.607-1.231-.801-.376-.144-.94-.314-1.98-.362-1.242-.057-1.613-.069-4.766-.069zm0 2.838a5.338 5.338 0 1 1 0 10.676 5.338 5.338 0 0 1 0-10.676zm0 1.622a3.716 3.716 0 1 0 0 7.432 3.716 3.716 0 0 0 0-7.432zm6.406-2.845a1.248 1.248 0 1 1 0 2.496 1.248 1.248 0 0 1 0-2.496z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  {
    name: "Instagram",
    href: siteConfig.instagram,
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: siteConfig.linkedin,
    Icon: LinkedInIcon,
  },
] as const;

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socialLinks.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          title={name}
          className="inline-flex size-10 items-center justify-center border border-white/20 text-white transition-colors hover:border-[var(--edias-gold)] hover:bg-[var(--edias-gold)] hover:text-[var(--edias-navy)]"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
