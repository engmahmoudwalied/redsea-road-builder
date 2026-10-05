import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Globe, MapPin, Facebook } from "lucide-react";
import logoAsset from "@/assets/redsea-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "شركة البحر الأحمر للطرق والمقاولات العامة | Red Sea for Roads" },
      {
        name: "description",
        content:
          "شركة البحر الأحمر للطرق والمقاولات العامة، متخصصة في تنفيذ أعمال الطرق والأسفلت والبنية التحتية والمقاولات العامة.",
      },
      {
        property: "og:title",
        content: "شركة البحر الأحمر للطرق والمقاولات العامة | Red Sea for Roads",
      },
      {
        property: "og:description",
        content:
          "متخصصون في تنفيذ أعمال الطرق والأسفلت والبنية التحتية والمقاولات العامة، بخبرة هندسية وجودة تعتمد عليها.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const CONTACTS = [
  {
    label: "اتصل بنا",
    sub: "+20 10 00597912",
    href: "tel:+201000597912",
    icon: Phone,
    variant: "action-btn-primary",
    external: false,
  },
  {
    label: "تواصل عبر واتساب",
    sub: "+20 10 00597912",
    href: "https://wa.me/201000597912",
    icon: MessageCircle,
    variant: "action-btn-whatsapp",
    external: true,
  },
  {
    label: "الموقع الإلكتروني",
    sub: "redsearoadseg.com",
    href: "https://www.redsearoadseg.com/",
    icon: Globe,
    variant: "",
    external: true,
  },
  {
    label: "موقعنا على الخريطة",
    sub: "Google Maps",
    href: "https://maps.app.goo.gl/K8nTuKfXuivHPV5m6?g_st=ic",
    icon: MapPin,
    variant: "",
    external: true,
  },
  {
    label: "فيسبوك",
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

function RoadBackground() {
  return (
    <div className="road-scene" aria-hidden="true">
      <div className="road-grid" />
      <div className="road-perspective">
        <div className="road-lane" />
        <div className="road-edge road-edge-blue" />
        <div className="road-edge road-edge-red" />
      </div>
      <div
        className="light-streak"
        style={{
          top: "18%",
          left: "8%",
          width: "220px",
          height: "90px",
          background: "oklch(0.48 0.15 255 / 0.18)",
        }}
      />
      <div
        className="light-streak"
        style={{
          top: "55%",
          right: "6%",
          width: "180px",
          height: "70px",
          background: "oklch(0.55 0.2 25 / 0.14)",
          animationDelay: "-6s",
        }}
      />
      {[
        { top: "22%", left: "18%", delay: "0s" },
        { top: "38%", left: "78%", delay: "-4s" },
        { top: "62%", left: "12%", delay: "-8s" },
        { top: "15%", left: "62%", delay: "-2s" },
        { top: "72%", left: "84%", delay: "-10s" },
      ].map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
        />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div dir="rtl" className="relative min-h-screen font-sans">
      <RoadBackground />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-5 py-12">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="logo-glow animate-fade-up">
            <img
              src={logoAsset.url}
              alt="شعار شركة البحر الأحمر للطرق والمقاولات العامة"
              className="h-32 w-32 rounded-3xl border border-border object-cover shadow-2xl sm:h-36 sm:w-36"
              width={144}
              height={144}
            />
          </div>

          <h1
            className="animate-fade-up mt-7 text-2xl font-bold leading-snug tracking-tight sm:text-3xl"
            style={{ animationDelay: "0.15s" }}
          >
            شركة البحر الأحمر للطرق
            <br />
            والمقاولات العامة
          </h1>

          <p
            className="animate-fade-up mt-2 text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase"
            dir="ltr"
            style={{ animationDelay: "0.25s" }}
          >
            Red Sea for Roads
          </p>

          <p
            className="animate-fade-up mt-5 text-lg font-semibold text-foreground"
            style={{ animationDelay: "0.35s" }}
          >
            نبني طرقاً تدوم... وننفذ بثقة
          </p>

          <p
            className="animate-fade-up mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.45s" }}
          >
            متخصصون في تنفيذ أعمال الطرق والأسفلت والبنية التحتية والمقاولات
            العامة، بخبرة هندسية وجودة تعتمد عليها.
          </p>
        </div>

        {/* Contact buttons */}
        <nav className="mt-9 flex w-full flex-col gap-3" aria-label="طرق التواصل">
          {CONTACTS.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`action-btn animate-fade-up ${c.variant}`}
              style={{ animationDelay: `${0.55 + i * 0.1}s` }}
            >
              <span className="action-icon">
                <c.icon className="h-5 w-5 text-foreground" strokeWidth={1.8} />
              </span>
              <span className="flex min-w-0 flex-col items-start">
                <span className="text-base font-semibold leading-tight">{c.label}</span>
                <span className="truncate text-xs text-muted-foreground" dir="ltr">
                  {c.sub}
                </span>
              </span>
            </a>
          ))}
        </nav>

        {/* Footer */}
        <footer
          className="animate-fade-up mt-12 flex w-full flex-col items-center gap-4 border-t border-border pt-7 text-center"
          style={{ animationDelay: "1.15s" }}
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
              شركة البحر الأحمر للطرق والمقاولات العامة
            </p>
            <p className="text-[11px] text-muted-foreground/70" dir="ltr">
              © 2026 Red Sea for Roads. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
