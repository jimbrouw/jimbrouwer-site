import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { SectionLabel } from "@/components/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects across AV installation, creative technology, and workflow design for galleries, artists, and production teams.",
};

export default function ProjectsPage() {
  return (
    <div className="container-site pt-16 pb-24 md:pt-24">
      <div className="max-w-2xl mb-12">
        <p className="micro-label mb-4">Projects</p>
        <h1 className="font-display text-3xl md:text-4xl leading-tight mb-4">
          Selected work
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          AV installations, interactive systems, and production workflows
          delivered for galleries, artists, and creative organisations.
        </p>
      </div>

      <SectionLabel label={`${projects.length + 1} Projects`} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
        {/* Art Tour App — video project */}
        <Link
          href="/art-tour-app"
          className="group block relative bg-[var(--color-bg-elevated)] overflow-hidden"
        >
          <div className="relative aspect-[4/3] bg-[var(--color-bg-elevated)] flex items-center justify-center">
            {/* Video play indicator */}
            <div className="flex flex-col items-center gap-3 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-text)] transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-12 h-12"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="micro-label">Video demo</span>
            </div>
          </div>
          <div className="p-4">
            <div className="metadata-strip mb-2">
              <span>2024</span>
            </div>
            <h3 className="font-display text-xl leading-snug mb-1 group-hover:text-[var(--color-accent)] transition-colors">
              Art Tour App
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2">
              Bespoke audio-visual tour application for gallery visitors.
            </p>
          </div>
        </Link>

        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
