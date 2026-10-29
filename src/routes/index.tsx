import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clock,
  Cloud,
  Code2,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  Palette,
  Phone,
  Send,
  ShieldCheck,
  Smartphone,
  Users,
  X,
  Zap,
} from "lucide-react";
import dicMark from "@/assets/dic-mark.png";
import portfolioFintech from "@/assets/portfolio-fintech.jpg";
import portfolioHealth from "@/assets/portfolio-health.jpg";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioCloud from "@/assets/portfolio-cloud.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Digital Innovation Center (DIC) | IT Solutions — Ideas to Digital Reality",
      },
      {
        name: "description",
        content:
          "Digital Innovation Center (DIC) is a full-service IT solutions company building web platforms, mobile apps, cloud systems and AI-driven products. Ideas to Digital Reality.",
      },
      { property: "og:title", content: "Digital Innovation Center (DIC) | IT Solutions" },
      {
        property: "og:description",
        content:
          "Web, mobile, cloud and AI solutions engineered end to end. Ideas to Digital Reality.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    text: "High-performance websites, portals and web apps built on modern, scalable stacks.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    text: "Native and cross-platform mobile experiences your customers love to use daily.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    text: "Cloud migration, infrastructure automation and 24/7 reliability engineering.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Research-driven design systems and interfaces that turn visitors into customers.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data",
    text: "Machine learning, analytics dashboards and automation that sharpen decisions.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: LifeBuoy,
    title: "IT Consulting & Support",
    text: "Technology strategy, security audits and managed support that keeps you running.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
];

const VALUES = [
  {
    icon: Zap,
    title: "Innovation First",
    text: "We prototype fast and adopt emerging tech where it truly moves the needle.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Security",
    text: "Secure-by-default engineering, transparent pricing and honest timelines.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    text: "We work as an extension of your team, from first sketch to post-launch growth.",
  },
];

const PROJECTS = [
  {
    image: portfolioFintech,
    title: "FinSight Analytics Platform",
    category: "Fintech · Web Platform",
    text: "Real-time trading analytics dashboard processing 2M+ daily events for a brokerage firm.",
    tags: ["React", "Data Viz", "WebSockets"],
  },
  {
    image: portfolioHealth,
    title: "MediConnect Telehealth App",
    category: "Healthcare · Mobile",
    text: "HIPAA-ready telemedicine app with video consults, e-prescriptions and 40k+ active patients.",
    tags: ["Flutter", "WebRTC", "HIPAA"],
  },
  {
    image: portfolioEcommerce,
    title: "UrbanCart Commerce Suite",
    category: "Retail · E-commerce",
    text: "Headless storefront and inventory system that lifted conversion 32% for a retail chain.",
    tags: ["Next.js", "Headless CMS", "Payments"],
  },
  {
    image: portfolioCloud,
    title: "NimbusOps Cloud Control",
    category: "Enterprise · Cloud & AI",
    text: "Multi-cloud observability control plane with AI anomaly alerts across 3 regions.",
    tags: ["Kubernetes", "AI Ops", "Multi-cloud"],
  },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#home" className="flex items-center gap-3">
          <img src={dicMark} alt="DIC logo" className="h-10 w-10" width={40} height={40} />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-bold tracking-wide">
              DIGITAL INNOVATION CENTER
            </span>
            <span className="text-xs font-medium text-muted-foreground italic">
              Ideas to Digital Reality
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === href.slice(1)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-foreground md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-md bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="brand-glow relative scroll-mt-16 overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
            IT Solutions Company
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ideas to <span className="text-gradient">Digital Reality</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Digital Innovation Center (DIC) designs, builds and runs the technology
            behind ambitious businesses — web platforms, mobile apps, cloud
            infrastructure and AI-driven products, delivered end to end.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03] hover:bg-primary/90"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Get in Touch
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              ["120+", "Projects delivered"],
              ["60+", "Happy clients"],
              ["12", "Years of experience"],
              ["15+", "Countries served"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-display text-2xl font-bold text-primary sm:text-3xl">
                  {value}
                </dd>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal is-visible relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 blur-3xl" />
          <div className="flex flex-col items-center text-center">
            <img
              src={dicMark}
              alt="Digital Innovation Center mark"
              width={760}
              height={760}
              className="w-full max-w-sm drop-shadow-2xl sm:max-w-md"
            />
            <p className="mt-6 font-display text-2xl font-bold tracking-wide sm:text-3xl">
              DIGITAL INNOVATION CENTER
            </p>
            <p className="mt-2 text-lg text-muted-foreground italic">Ideas to Digital Reality</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-3xl">
          <span className="text-sm font-semibold tracking-wide text-secondary uppercase">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Your partner for every step of the digital journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Founded in 2014, Digital Innovation Center is a full-service IT solutions
            company. We take products from a one-line idea to production reality —
            strategy, design, engineering and operations under one roof. Our
            multidisciplinary team has shipped solutions for fintech, healthcare,
            retail and enterprise clients across the globe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="reveal rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex rounded-xl bg-secondary/10 p-3 text-secondary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="reveal">
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              What we do
            </h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Six practices, one accountable team — cover the full lifecycle of your
              digital products.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, text, color, bg }) => (
              <div
                key={title}
                className="reveal group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`inline-flex rounded-xl p-3 ${bg} ${color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold">{title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal max-w-3xl">
          <span className="text-sm font-semibold tracking-wide text-accent uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Work we're proud of
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of recent engagements — from regulated fintech platforms to
            consumer apps used by hundreds of thousands of people.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map(({ image, title, category, text, tags }) => (
            <article
              key={title}
              className="reveal group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wide text-primary uppercase">
                  {category}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const inputClasses =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

function Contact() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="scroll-mt-16 bg-muted/50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="reveal">
            <span className="text-sm font-semibold tracking-wide text-primary uppercase">
              Contact Us
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let's build your next big thing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your project and we'll get back to you within one
              business day with next steps and an honest estimate.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Mail, label: "Email", value: "hello@dic-solutions.com" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: MapPin, label: "Office", value: "Sector V, Salt Lake, Kolkata, India" },
                { icon: Clock, label: "Hours", value: "Mon–Sat, 9:00 AM – 7:00 PM IST" },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {label}
                    </p>
                    <p className="mt-0.5 font-medium">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {sent ? (
              <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
                <span className="inline-flex rounded-full bg-secondary/10 p-4 text-secondary">
                  <CheckCircle2 className="h-10 w-10" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">
                  Message sent — thank you!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Our team will reach out within one business day. Want to talk
                  sooner? Call us at +91 98765 43210.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    formRef.current?.reset();
                  }}
                  className="mt-6 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Your name
                    </label>
                    <input id="name" name="name" required placeholder="Jane Sharma" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      Phone <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input id="phone" name="phone" type="tel" placeholder="+91 ..." className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
                      I need help with
                    </label>
                    <select id="service" name="service" className={inputClasses} defaultValue="Web Development">
                      {SERVICES.map(({ title }) => (
                        <option key={title}>{title}</option>
                      ))}
                      <option>Something else</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your goals, timeline and budget..."
                    className={`${inputClasses} resize-y`}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <a href="#home" className="flex flex-col items-center gap-3 md:flex-row">
          <img src={dicMark} alt="DIC logo" width={760} height={760} className="h-14 w-14" />
          <div>
            <p className="font-display font-bold tracking-wide">DIGITAL INNOVATION CENTER</p>
            <p className="text-sm text-muted-foreground italic">Ideas to Digital Reality</p>
          </div>
        </a>
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital Innovation Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  useReveal();
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
