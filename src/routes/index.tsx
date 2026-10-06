import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Globe, MapPin, Facebook } from "lucide-react";
import logoUrl from "@/assets/redsea-logo.png";
import sunsetRoadUrl from "@/assets/sunset-road.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Red Sea for Roads & General Contracting" },
      {
        name: "description",
        content:
          "Red Sea for Roads & General Contracting — specialized in roads, asphalt, infrastructure, and general contracting with engineering expertise and dependable quality.",
      },
      { property: "og:title", content: "Red Sea for Roads & General Contracting" },
      {
        property: "og:description",
        content:
          "We build roads that last. Roads, asphalt, infrastructure and general contracting — executed with confidence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const CONTACTS = [
  {
    label: "Call Us",
    sub: "+20 10 00597912",
    href: "tel:+201000597912",
    icon: Phone,
    variant: "action-btn-primary",
    external: false,
  },
  {
    label: "WhatsApp",
    sub: "+20 10 00597912",
    href: "https://wa.me/201000597912",
    icon: MessageCircle,
    variant: "action-btn-whatsapp",
    external: true,
  },
  {
    label: "Website",
    sub: "redsearoadseg.com",
    href: "https://www.redsearoadseg.com/",
    icon: Globe,
    variant: "",
    external: true,
  },
  {
    label: "Find Us on the Map",
    sub: "Google Maps",
    href: "https://maps.app.goo.gl/K8nTuKfXuivHPV5m6?g_st=ic",
    icon: MapPin,
    variant: "",
    external: true,
  },
  {
    label: "Facebook",
    sub: "redsea.roads",
    href: "https://www.facebook.com/redsea.roads",
    icon: Facebook,
    variant: "",
    external: true,
  },
];

const FOOTER_LINKS = [
  { href: "https://www.facebook.com/redsea.roads", icon: Facebook, label: "Facebook" },
  { href: "https://wa.me/201000597912", icon: MessageCircle, label: "WhatsApp" },
  { href: "https://www.redsearoadseg.com/", icon: Globe, label: "Website" },
  { href: "https://maps.app.goo.gl/K8nTuKfXuivHPV5m6?g_st=ic", icon: MapPin, label: "Location" },
];


function Index() {
  return (
    <div className="relative h-[100dvh] overflow-hidden font-sans">
      {/* Sunset road photo background */}
      <img
        src={sunsetRoadUrl}
        alt=""
        aria-hidden="true"
        className="fixed inset-0 h-full w-full object-cover"
        width={1088}
        height={1920}
      />
      {/* Dark overlay for readability */}
      <div
        className="fixed inset-0 bg-gradient-to-b from-background/70 via-background/55 to-background/85"
        aria-hidden="true"
      />

      <main className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-5 py-4">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="logo-glow">
            <img
              src={logoUrl}
              alt="Red Sea for Roads & General Contracting logo"
              className="h-14 w-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.6)] sm:h-16"
              width={160}
              height={171}
            />
          </div>

          <h1
            className="animate-fade-up mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl"
            style={{ animationDelay: "0.15s" }}
          >
            Red Sea for Roads
            <span className="mt-0.5 block text-sm font-semibold text-muted-foreground sm:text-base">
              &amp; General Contracting
            </span>
          </h1>

          <p
            className="animate-fade-up mt-2 text-sm text-muted-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            We build roads that last — roads, asphalt &amp; infrastructure.
          </p>
        </div>

        {/* Contact buttons */}
        <nav className="mt-5 flex w-full flex-col gap-2" aria-label="Contact">
          {CONTACTS.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`action-btn animate-fade-up ${c.variant}`}
              style={{ animationDelay: `${0.4 + i * 0.08}s` }}
            >
              <span className="action-icon">
                <c.icon className="h-[18px] w-[18px] text-foreground" strokeWidth={1.8} />
              </span>
              <span className="flex min-w-0 flex-col items-start">
                <span className="text-[15px] font-semibold leading-tight">{c.label}</span>
                <span className="truncate text-[11px] text-muted-foreground">{c.sub}</span>
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer
          className="animate-fade-up mt-5 flex w-full flex-col items-center gap-2.5 text-center"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="flex items-center gap-2">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card/50 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <l.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-muted-foreground/70">
            © 2026 Red Sea for Roads &amp; General Contracting. All Rights Reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
