import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const heroImage = project.images.find((img) => img.type === "hero");

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block"
    >
      <article>
        {/* Image */}
        <div className="relative aspect-[16/10] bg-[var(--color-bg-elevated)] mb-4 overflow-hidden">
          {heroImage ? (
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="micro-label text-[var(--color-text-tertiary)]">
                [NO IMAGE]
              </span>
            </div>
          )}

          {/* Index overlay */}
          <span className="absolute top-3 left-3 micro-label text-[0.625rem] text-[var(--color-white)] mix-blend-difference">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Metadata strip */}
        <div className="metadata-strip mb-2">
          <span>{project.year}</span>
          <span>{project.client}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-medium leading-snug group-hover:text-[var(--color-accent)] transition-colors mb-2">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          {project.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
