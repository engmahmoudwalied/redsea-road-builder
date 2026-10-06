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
    <div className="relative min-h-screen font-sans">
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


      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-5 py-12">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="logo-glow animate-fade-up">
            <img
              src={logoUrl}
              alt="Red Sea for Roads & General Contracting logo"
              className="h-24 w-auto drop-shadow-[0_14px_30px_rgba(0,0,0,0.6)] sm:h-28"
              width={160}
              height={171}
            />

          </div>

          <h1
            className="animate-fade-up mt-8 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
            style={{ animationDelay: "0.15s" }}
          >
            Red Sea for Roads
            <span className="mt-1 block text-lg font-semibold text-muted-foreground sm:text-xl">
              &amp; General Contracting
            </span>
          </h1>

          <p
            className="animate-fade-up mt-5 text-lg font-semibold text-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            We build roads that last — executed with confidence.
          </p>

          <p
            className="animate-fade-up mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.4s" }}
          >
            Specialized in roads, asphalt, infrastructure, and general
            contracting — engineering expertise and quality you can rely on.
          </p>
        </div>

        {/* Contact buttons */}
        <nav className="mt-9 flex w-full flex-col gap-3" aria-label="Contact">
          {CONTACTS.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`action-btn animate-fade-up ${c.variant}`}
              style={{ animationDelay: `${0.5 + i * 0.1}s` }}
            >
              <span className="action-icon">
                <c.icon className="h-5 w-5 text-foreground" strokeWidth={1.8} />
              </span>
              <span className="flex min-w-0 flex-col items-start">
                <span className="text-base font-semibold leading-tight">{c.label}</span>
                <span className="truncate text-xs text-muted-foreground">{c.sub}</span>
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer
          className="animate-fade-up mt-12 flex w-full flex-col items-center gap-4 border-t border-border pt-7 text-center"
          style={{ animationDelay: "1.1s" }}
        >
          <div className="flex items-center gap-2">
            {FOOTER_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/50 text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <l.icon className="h-4 w-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">
              Red Sea for Roads &amp; General Contracting
            </p>
            <p className="text-[11px] text-muted-foreground/70">
              © 2026 Red Sea for Roads. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
