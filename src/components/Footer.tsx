import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="rule-top mt-24">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {/* Identity */}
          <div className="md:col-span-5">
            <p className="font-display text-xl mb-2">{siteConfig.name}</p>
            <p className="micro-label">{siteConfig.title}</p>
            <p className="micro-label mt-1">{siteConfig.location}</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="micro-label mb-3 text-[var(--color-text)]">Pages</p>
            <nav className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="micro-label hover:text-[var(--color-text)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="micro-label mb-3 text-[var(--color-text)]">
              Contact
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="micro-label hover:text-[var(--color-accent)] transition-colors block mb-2"
            >
              {siteConfig.email}
            </a>
            <div className="flex gap-4 mt-3">
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

        {/* Bottom bar */}
        <div className="rule-top mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="micro-label text-[var(--color-text-tertiary)]">
            &copy; {year} {siteConfig.name}
          </p>
          <p className="micro-label text-[var(--color-text-tertiary)]">
            Available for freelance projects
          </p>
        </div>
      </div>
    </footer>
  );
}
