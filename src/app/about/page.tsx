import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Technical consultant and creative technologist based in the UK, specialising in AV installation, exhibition systems, and creative technology.",
};

export default function AboutPage() {
  return (
    <div className="container-site pt-16 pb-24 md:pt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Main content */}
        <div className="md:col-span-7">
          <p className="micro-label mb-4">About</p>
          <h1 className="font-display text-3xl md:text-4xl leading-tight mb-8">
            {siteConfig.name}
          </h1>

          <div className="space-y-5 text-base text-[var(--color-text-secondary)] leading-relaxed max-w-prose">
            <p>
              I&apos;m a technical consultant and creative technologist based in
              Nottingham, UK. With over 17 years of experience working with AV,
              video, 16mm and 35mm film, sound installations, HD media players
              and live sound engineering, my focus is on time-based digital
              media.
            </p>
            <p>
              I work with galleries, artists, curators, and production teams to
              deliver AV installations, exhibition systems, and creative
              technology projects. My work sits at the intersection of creative
              vision and technical delivery &mdash; translating ambitious
              artistic ideas into reliable systems that work on opening night
              and every day after.
            </p>
            <p>
              I&apos;m comfortable with the full lifecycle: from early technical
              feasibility conversations through to on-site installation,
              commissioning, and handover. Whether it&apos;s a multi-channel
              projection installation, a real-time interactive piece, or a
              custom production workflow.
            </p>
            <p>
              I&apos;m not a generalist freelancer. I specialise in the specific
              technical challenges that creative and cultural organisations face
              when delivering technology-driven projects. If you need someone who
              understands both the DMX universe count and the artistic intent,
              we&apos;ll get along.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-4 md:col-start-9">
          {/* Photo placeholder */}
          <div className="aspect-[3/4] bg-[var(--color-bg-elevated)] mb-6 flex items-center justify-center">
            <span className="micro-label text-[var(--color-text-tertiary)]">
              [Portrait]
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">
                Location
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {siteConfig.location}
              </p>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">
                Contact
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="micro-label mb-2 text-[var(--color-text)]">
                Availability
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Open to freelance projects, consulting engagements, and
                technical production work. Available for on-site and remote.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Capabilities */}
      <section className="mt-20">
        <SectionLabel label="Technical Capabilities" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              category: "AV & Video",
              items: [
                "Projection mapping",
                "LED systems",
                "Multi-channel video",
                "Show control",
                "Media servers",
                "HD media players",
              ],
            },
            {
              category: "Film & Sound",
              items: [
                "16mm film",
                "35mm film",
                "Sound installations",
                "Live sound engineering",
                "Spatial audio",
                "Multi-channel distribution",
              ],
            },
            {
              category: "Creative Tech",
              items: [
                "TouchDesigner",
                "Resolume Arena",
                "Sensor systems",
                "Real-time media",
                "Custom interfaces",
                "Time-based media",
              ],
            },
            {
              category: "Workflows",
              items: [
                "Production pipelines",
                "Asset management",
                "Automation prototypes",
                "Documentation",
                "Team training",
              ],
            },
          ].map((group) => (
            <div key={group.category} className="rule-top pt-4">
              <p className="micro-label mb-3 text-[var(--color-text)]">
                {group.category}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-[var(--color-text-secondary)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
