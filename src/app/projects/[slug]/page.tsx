import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { getService } from "@/data/services";
import { SectionLabel } from "@/components/SectionLabel";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const relatedServices = project.services
    .map((id) => getService(id))
    .filter(Boolean);

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
        <span className="text-[var(--color-text)]">{project.title}</span>
      </div>

      {/* Header */}
      <header className="max-w-3xl mb-12">
        <div className="metadata-strip mb-4">
          <span>{project.year}</span>
          <span>{project.client}</span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
          {project.title}
        </h1>

        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
          {project.summary}
        </p>
      </header>

      {/* Hero image */}
      {project.images.find((img) => img.type === "hero") && (
        <div className="mb-2">
          <div className="relative aspect-[16/9] bg-[var(--color-bg-elevated)]">
            <Image
              src={project.images.find((img) => img.type === "hero")!.src}
              alt={project.images.find((img) => img.type === "hero")!.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
          </div>
          <p className="micro-label mt-2">
            {project.images.find((img) => img.type === "hero")!.caption}
          </p>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-16">
        {project.tags.map((tag) => (
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
                {project.role.map((r) => (
                  <li
                    key={r}
                    className="text-sm text-[var(--color-text-secondary)]"
                  >
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">
                Services
              </p>
              <div className="flex flex-wrap gap-1.5">
                {relatedServices.map(
                  (svc) =>
                    svc && (
                      <span key={svc.id} className="tag">
                        {svc.shortTitle}
                      </span>
                    )
                )}
              </div>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">Year</p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {project.year}
              </p>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">
                Client
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {project.client}
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="md:col-span-8 md:col-start-5">
          {/* Brief */}
          <section className="mb-12">
            <SectionLabel label="Brief" />
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] max-w-prose">
              {project.brief}
            </p>
          </section>

          {/* Technical Delivery */}
          <section className="mb-12">
            <SectionLabel label="Technical Delivery" />
            <ul className="space-y-2">
              {project.technicalDelivery.map((item, i) => (
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

          {/* Key Decisions */}
          {project.keyDecisions.length > 0 && (
            <section className="mb-12">
              <SectionLabel label="Key Decisions" />
              <div className="space-y-6">
                {project.keyDecisions.map((kd, i) => (
                  <div key={i} className="rule-top pt-4">
                    <p className="text-base font-medium mb-2">{kd.decision}</p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {kd.reasoning}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outcome */}
          <section className="mb-12">
            <SectionLabel label="Outcome" />
            <p className="text-base leading-relaxed text-[var(--color-text-secondary)] max-w-prose">
              {project.outcome}
            </p>
          </section>

          {/* Additional images */}
          {project.images.filter((img) => img.type !== "hero").length > 0 && (
            <section>
              <SectionLabel label="Documentation" />
              <div className="space-y-6">
                {project.images
                  .filter((img) => img.type !== "hero")
                  .map((img, i) => (
                    <div key={i}>
                      <div className="relative aspect-[16/10] bg-[var(--color-bg-elevated)]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1280px) 100vw, 900px"
                        />
                      </div>
                      <p className="micro-label mt-2">{img.caption}</p>
                    </div>
                  ))}
              </div>
            </section>
          )}
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
