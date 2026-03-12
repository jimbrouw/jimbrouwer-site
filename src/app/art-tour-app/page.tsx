import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Art Tour App — Jim Brouwer",
  description:
    "A GPS-triggered audio tour app for the Nottingham Public Art Walk — 25 artworks, 2.5km, built for mobile with offline-first architecture.",
};

export default function ArtTourAppPage() {
  return (
    <article className="container-site pt-16 pb-24 md:pt-24">
      {/* Breadcrumb */}
      <div className="micro-label mb-8">
        <Link
          href="/projects"
          className="hover:text-[var(--color-text)] transition-colors"
        >
          Projects
        </Link>
        <span className="mx-2 text-[var(--color-text-tertiary)]">/</span>
        <span className="text-[var(--color-text)]">Art Tour App</span>
      </div>

      {/* Header */}
      <header className="max-w-3xl mb-12">
        <div className="metadata-strip mb-4">
          <span>2024</span>
          <span>Creative Technology</span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          Nottingham Public Art Walk App
        </h1>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
          GPS-triggered audio tour application for the Nottingham Public Art Walk —
          25 artworks across 2.5km of the city, with offline-first architecture
          and audio narration by Lucy Brouwer, art historian and tour guide.
        </p>
      </header>

      {/* Video — portrait format */}
      <div className="mb-12 flex justify-center">
        <div className="w-full max-w-xs">
          <div className="relative bg-[var(--color-bg-elevated)]" style={{ aspectRatio: "9/16" }}>
            <video
              className="w-full h-full object-contain"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/videos/art-tour-app.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="micro-label mt-2">[FIG.01] — App walkthrough demo</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-16">
        {["App Development", "GPS Audio", "Offline-First", "Mobile UX", "Public Art", "Creative Technology"].map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Sidebar metadata */}
        <aside className="md:col-span-3 md:sticky md:top-24 md:self-start">
          <div className="space-y-6">
            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">Role</p>
              <ul className="space-y-1">
                {["Lead Developer", "UX & Interface Design", "Technical Architecture"].map((r) => (
                  <li key={r} className="text-sm text-[var(--color-text-secondary)]">
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">Services</p>
              <div className="flex flex-wrap gap-1.5">
                {["Creative Technology", "Workflow Design"].map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">Year</p>
              <p className="text-sm text-[var(--color-text-secondary)]">2024</p>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">Collaborator</p>
              <p className="text-sm text-[var(--color-text-secondary)]">Lucy Brouwer — art historian & tour guide</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="md:col-span-8 md:col-start-5">
          {/* Brief */}
          <section className="mb-12">
            <SectionLabel label="Brief" />
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] max-w-prose">
              Design and build a self-contained mobile tour application guiding visitors
              through 25 public artworks across Nottingham city centre. GPS triggers
              audio narration automatically as users approach each stop, based on
              The Watson Fothergill Walk route. The app needed to work fully offline —
              no gallery wifi or mobile data required inside the route.
            </p>
          </section>

          {/* Technical Delivery */}
          <section className="mb-12">
            <SectionLabel label="Technical Delivery" />
            <ul className="space-y-2">
              {[
                "GPS-triggered audio playback at each of 25 artwork stops",
                "Offline-first architecture — fully functional without internet",
                "Background audio and lock screen controls for walking use",
                "Interactive map with walking route and tap-to-preview for any stop",
                "Onboarding flow with tour introduction audio by Lucy Brouwer",
                "Built to run on visitor's own device — no hardware cost to the organiser",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="micro-label text-[var(--color-text-tertiary)] mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Outcome */}
          <section className="mb-12">
            <SectionLabel label="Outcome" />
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] max-w-prose">
              Working prototype delivered covering the full 2.5km, 90-minute route.
              Demonstrates a viable model for low-cost, high-quality visitor engagement
              that can be replicated across future walks and exhibitions without
              specialist hardware or infrastructure investment.
            </p>
          </section>

          {/* App screenshots */}
          <section>
            <SectionLabel label="Documentation" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="relative bg-[var(--color-bg-elevated)]" style={{ aspectRatio: "9/16" }}>
                  <Image
                    src="/images/projects/art-tour-app/screen-home.jpg"
                    alt="App home screen — Nottingham Public Art Walk"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <p className="micro-label mt-2">[FIG.02] — Home screen</p>
              </div>
              <div>
                <div className="relative bg-[var(--color-bg-elevated)]" style={{ aspectRatio: "9/16" }}>
                  <Image
                    src="/images/projects/art-tour-app/screen-start.jpg"
                    alt="App before you start screen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 300px"
                  />
                </div>
                <p className="micro-label mt-2">[FIG.03] — Tour instructions</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Back link */}
      <div className="rule-top mt-16 pt-8">
        <Link
          href="/projects"
          className="micro-label text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
        >
          &larr; All projects
        </Link>
      </div>
    </article>
  );
}
