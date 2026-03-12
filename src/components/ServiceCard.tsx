import Link from "next/link";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="rule-top pt-6">
      <div className="flex items-start gap-4 mb-4">
        <span className="micro-label text-[var(--color-text-tertiary)] mt-1">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl" aria-hidden="true">
              {service.icon}
            </span>
            <h3 className="text-lg font-medium">{service.shortTitle}</h3>
          </div>

          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-prose">
            {service.description}
          </p>

          <Link
            href="/services"
            className="micro-label text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
          >
            View details &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
