import type { ServiceId } from "./projects";

export interface Service {
  id: ServiceId;
  title: string;
  shortTitle: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: "av-installation",
    title: "AV Installation & Technical Delivery",
    shortTitle: "AV & Installation",
    description:
      "Projection mapping, multi-channel video, show control, signal routing, media servers, on-site commissioning. I handle the technical infrastructure that makes exhibitions and installations run.",
    deliverables: [
      "Technical design and specification",
      "Equipment sourcing and configuration",
      "On-site installation and commissioning",
      "Show control programming",
      "System documentation and handover",
    ],
    icon: "◈",
  },
  {
    id: "creative-technology",
    title: "Creative Technology & Consulting",
    shortTitle: "Creative Technology",
    description:
      "Sensor systems, interactive installations, real-time media, custom interfaces. I work with artists and studios to develop and deliver technology-driven creative projects.",
    deliverables: [
      "Technical direction and feasibility",
      "Prototype development",
      "Interactive system design",
      "Real-time media programming",
      "Hardware and software integration",
    ],
    icon: "◇",
  },
  {
    id: "workflow-automation",
    title: "Workflow Design & Automation Prototypes",
    shortTitle: "Workflows & Automation",
    description:
      "Production workflows, asset pipelines, automation concepts, internal tools. I help creative teams streamline how they work — from file management to deployment.",
    deliverables: [
      "Workflow analysis and design",
      "Automation prototyping",
      "Tool development",
      "Process documentation",
      "Team training and handover",
    ],
    icon: "◆",
  },
];

export function getService(id: ServiceId): Service | undefined {
  return services.find((s) => s.id === id);
}
