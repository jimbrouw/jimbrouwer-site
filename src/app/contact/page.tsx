import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about freelance projects, consulting, or technical production work.",
};

export default function ContactPage() {
  return (
    <div className="container-site pt-16 pb-24 md:pt-24">
      <div className="max-w-2xl">
        <p className="micro-label mb-4">Contact</p>
        <h1 className="font-display text-3xl md:text-4xl leading-tight mb-6">
          Let&apos;s talk about your project
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-12">
          Available for freelance projects, consulting engagements, and
          technical production work. Based in the UK, open to on-site and remote
          engagements.
        </p>

        {/* Email CTA */}
        <div className="rule-top pt-8 mb-12">
          <p className="micro-label mb-3 text-[var(--color-text)]">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-2xl md:text-3xl font-display text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        {/* What to include */}
        <div className="rule-top pt-8 mb-12">
          <p className="micro-label mb-4 text-[var(--color-text)]">
            What to include in your message
          </p>
          <div className="space-y-3">
            {[
              "A brief description of the project or context",
              "Your timeline and any key dates",
              "Whether you need on-site support or remote consulting",
              "Any technical specifications or challenges you're facing",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="micro-label text-[var(--color-text-tertiary)] mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="rule-top pt-8">
          <p className="micro-label mb-4 text-[var(--color-text)]">
            Elsewhere
          </p>
          <div className="flex gap-6">
            {siteConfig.links.linkedin && (
              <a
                href={siteConfig.links.linkedin}
                className="micro-label hover:text-[var(--color-text)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}
            {siteConfig.links.github && (
              <a
                href={siteConfig.links.github}
                className="micro-label hover:text-[var(--color-text)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
