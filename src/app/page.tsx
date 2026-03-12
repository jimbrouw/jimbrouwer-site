import Link from "next/link";
import { siteConfig } from "@/data/site";
import { getFeaturedProjects } from "@/data/projects";
import { services } from "@/data/services";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ─── Hero ─── */}
      <section className="container-site pt-20 pb-16 md:pt-40 md:pb-28">
        <div className="max-w-4xl">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-xl md:text-2xl leading-snug mb-6 max-w-3xl">
            {siteConfig.heroHeadline}
          </p>
          <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Micro annotation strip */}
        <div className="metadata-strip mt-14 pt-6 rule-top">
          <span>AV Installation</span>
          <span>Creative Technology</span>
          <span>Workflow Design</span>
          <span>{siteConfig.location}</span>
        </div>
      </section>

      {/* ─── Selected Projects ─── */}
      <section className="container-site section-gap">
        <SectionLabel label="Selected Projects" number="01" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-10 pt-6 rule-top">
          <Link
            href="/projects"
            className="micro-label text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            View all projects &rarr;
          </Link>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="container-site section-gap">
        <SectionLabel label="Services" number="02" />

        <div className="max-w-2xl mb-10">
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            From exhibition AV and projection systems to bespoke creative
            technology workflows, I help creative teams make complex technical
            setups clear, stable and production-ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </section>

      {/* ─── Credibility ─── */}
      <section className="container-site section-gap">
        <SectionLabel label="Experience" number="03" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="font-display text-2xl md:text-3xl leading-snug">
              17+ years working with AV, video, film, sound installations and
              time-based digital media for cultural and creative organisations.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-7">
            <div className="grid grid-cols-2 gap-6">
              <div className="rule-top pt-4">
                <p className="micro-label mb-1 text-[var(--color-text)]">
                  Contexts
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Galleries, museums, touring exhibitions, live events,
                  festivals, artist studios, production companies.
                </p>
              </div>
              <div className="rule-top pt-4">
                <p className="micro-label mb-1 text-[var(--color-text)]">
                  Approach
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Technical precision. Clear communication. Systems that work on
                  opening night and every day after.
                </p>
              </div>
              <div className="rule-top pt-4">
                <p className="micro-label mb-1 text-[var(--color-text)]">
                  Systems
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Projection, LED, media servers, show control, Dante audio,
                  DMX, OSC, sensors, real-time media.
                </p>
              </div>
              <div className="rule-top pt-4">
                <p className="micro-label mb-1 text-[var(--color-text)]">
                  Based
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {siteConfig.location}. Available for on-site and remote
                  engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="container-site section-gap">
        <SectionLabel label="Get in Touch" number="04" />

        <div className="max-w-2xl">
          <p className="font-display text-2xl md:text-3xl leading-snug mb-6">
            Available for freelance projects, consulting, and technical
            production work.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] micro-label text-sm hover:bg-[var(--color-accent)] transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </section>
    </>
  );
}
