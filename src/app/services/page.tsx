import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AV installation, creative technology consulting, and workflow design for galleries, artists, and production teams.",
};

export default function ServicesPage() {
  return (
    <div className="container-site pt-16 pb-24 md:pt-24">
      <div className="max-w-2xl mb-16">
        <p className="micro-label mb-4">Services</p>
        <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
          What I do
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          From exhibition AV and projection systems to bespoke creative
          technology workflows, I help creative teams make complex technical
          setups clear, stable and production-ready.
        </p>
      </div>

      {/* Service sections */}
      <div className="space-y-20">
        {services.map((service, i) => {
          const relatedProjects = projects.filter((p) =>
            p.services.includes(service.id)
          );

          return (
            <section key={service.id}>
              <SectionLabel
                label={service.shortTitle}
                number={String(i + 1).padStart(2, "0")}
              />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl" aria-hidden="true">
                      {service.icon}
                    </span>
                    <h2 className="text-xl font-medium">{service.title}</h2>
                  </div>

                  <p className="text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-prose">
                    {service.description}
                  </p>
                </div>

                <div className="md:col-span-6 md:col-start-7">
                  {/* Deliverables */}
                  <div className="mb-8">
                    <p className="micro-label mb-3 text-[var(--color-text)]">
                      Typical deliverables
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((d, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="micro-label text-[var(--color-text-tertiary)] mt-0.5 shrink-0">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm text-[var(--color-text-secondary)]">
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Related projects */}
                  {relatedProjects.length > 0 && (
                    <div>
                      <p className="micro-label mb-3 text-[var(--color-text)]">
                        Related projects
                      </p>
                      <div className="space-y-2">
                        {relatedProjects.map((p) => (
                          <Link
                            key={p.id}
                            href={`/projects/${p.id}`}
                            className="flex items-center justify-between py-2 rule-bottom group"
                          >
                            <span className="text-sm group-hover:text-[var(--color-accent)] transition-colors">
                              {p.title}
                            </span>
                            <span className="micro-label text-[var(--color-text-tertiary)]">
                              {p.year}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="rule-top mt-20 pt-12">
        <div className="max-w-2xl">
          <p className="font-display text-2xl leading-snug mb-6">
            Have a project that needs technical support?
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-text)] text-[var(--color-bg)] micro-label text-sm hover:bg-[var(--color-accent)] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}
