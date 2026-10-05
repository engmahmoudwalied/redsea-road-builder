import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Globe, MapPin, Facebook } from "lucide-react";
import { useEffect, useRef } from "react";
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

/**
 * Cinematic animated road: a perspective highway rendered on canvas.
 * Lane dashes flow toward the viewer, blue/red edge lights glow softly,
 * and faint particles drift upward. Honors prefers-reduced-motion.
 */
function RoadCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 26 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.6,
      s: 0.008 + Math.random() * 0.02,
      o: 0.1 + Math.random() * 0.35,
    }));

    const VANISH_Y = 0.42; // horizon line (fraction of height)
    let t = 0;

    const project = (depth: number) => {
      // depth 0 (horizon) -> 1 (viewer)
      const y = h * VANISH_Y + (h - h * VANISH_Y) * depth * depth;
      const half = 4 + (Math.min(w, 900) * 0.42) * depth * depth;
      return { y, half };
    };

    const draw = () => {
      t += 0.0016;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;

      // Asphalt body
      ctx.beginPath();
      const far = project(0);
      const near = project(1);
      ctx.moveTo(cx - far.half, far.y);
      ctx.lineTo(cx + far.half, far.y);
      ctx.lineTo(cx + near.half, near.y);
      ctx.lineTo(cx - near.half, near.y);
      ctx.closePath();
      const asphalt = ctx.createLinearGradient(0, far.y, 0, near.y);
      asphalt.addColorStop(0, "rgba(16, 22, 34, 0.0)");
      asphalt.addColorStop(0.4, "rgba(14, 19, 30, 0.55)");
      asphalt.addColorStop(1, "rgba(10, 14, 22, 0.9)");
      ctx.fillStyle = asphalt;
      ctx.fill();

      // Edge lights: blue left, red right
      const edge = (side: -1 | 1, color: string) => {
        ctx.beginPath();
        for (let d = 0; d <= 1.001; d += 0.05) {
          const p = project(d);
          const x = cx + side * p.half;
          if (d === 0) ctx.moveTo(x, p.y);
          else ctx.lineTo(x, p.y);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.2;
        ctx.shadowColor = color;
        ctx.shadowBlur = 14;
        ctx.stroke();
        ctx.shadowBlur = 0;
      };
      const pulse = 0.55 + 0.2 * Math.sin(t * 40);
      edge(-1, `rgba(64, 110, 220, ${pulse})`);
      edge(1, `rgba(220, 70, 60, ${pulse * 0.85})`);

      // Center lane dashes flowing toward viewer
      const DASHES = 14;
      for (let i = 0; i < DASHES; i++) {
        const d0 = ((i / DASHES + t * 6) % 1);
        const d1 = Math.min(d0 + 0.035, 1);
        const p0 = project(d0);
        const p1 = project(d1);
        const alpha = 0.12 + d0 * 0.5;
        ctx.beginPath();
        ctx.moveTo(cx, p0.y);
        ctx.lineTo(cx, p1.y);
        ctx.strokeStyle = `rgba(226, 232, 245, ${alpha})`;
        ctx.lineWidth = 0.8 + d0 * 3.2;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      // Horizon glow
      const glow = ctx.createRadialGradient(cx, h * VANISH_Y, 0, cx, h * VANISH_Y, w * 0.4);
      glow.addColorStop(0, "rgba(70, 110, 200, 0.10)");
      glow.addColorStop(1, "rgba(70, 110, 200, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h * 0.8);

      // Drifting particles
      for (const p of particles) {
        p.y -= p.s * 0.16;
        if (p.y < -0.02) {
          p.y = 1.02;
          p.x = Math.random();
        }
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(190, 205, 235, ${p.o * (0.6 + 0.4 * Math.sin(t * 90 + p.x * 20))})`;
        ctx.fill();
      }

      if (!reduced) raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="fixed inset-0 h-full w-full" aria-hidden="true" />;
}

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
      <RoadCanvas />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center justify-center px-5 py-12">
        {/* Hero */}
        <div className="flex flex-col items-center text-center">
          <div className="logo-glow animate-fade-up">
            <img
              src={logoUrl}
              alt="Red Sea for Roads & General Contracting logo"
              className="h-36 w-auto drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)] sm:h-40"
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
