export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  type: "hero" | "detail" | "process" | "diagram" | "documentation";
}

export interface KeyDecision {
  decision: string;
  reasoning: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  year: number;
  summary: string;
  brief: string;
  role: string[];
  technicalDelivery: string[];
  keyDecisions: KeyDecision[];
  outcome: string;
  services: ServiceId[];
  tags: string[];
  featured: boolean;
  images: ProjectImage[];
  videoUrl?: string;
  videoPoster?: string;
  videoDescription?: string;
}

export type ServiceId =
  | "av-installation"
  | "creative-technology"
  | "workflow-automation";

export const projects: Project[] = [
  {
    id: "art-tour-app",
    title: "Nottingham Public Art Walk App",
    client: "Collaborator Lucy Brouwer",
    year: 2024,
    summary:
      "GPS-triggered audio tour application for the Nottingham Public Art Walk — 25 artworks across 2.5km of the city, with offline-first architecture and audio narration by Lucy Brouwer, art historian and tour guide.",
    brief:
      "Design and build a self-contained mobile tour application guiding visitors through 25 public artworks across Nottingham city centre. GPS triggers audio narration automatically as users approach each stop, based on The Watson Fothergill Walk route. The app needed to work fully offline — no gallery wifi or mobile data required inside the route.",
    role: [
      "Lead Developer",
      "UX & Interface Design",
      "Technical Architecture",
    ],
    technicalDelivery: [
      "GPS-triggered audio playback at each of 25 artwork stops",
      "Offline-first architecture — fully functional without internet",
      "Background audio and lock screen controls for walking use",
      "Interactive map with walking route and tap-to-preview for any stop",
      "Onboarding flow with tour introduction audio by Lucy Brouwer",
      "Built to run on visitor's own device — no hardware cost to the organiser",
    ],
    keyDecisions: [],
    outcome:
      "Working prototype delivered covering the full 2.5km, 90-minute route. Demonstrates a viable model for low-cost, high-quality visitor engagement that can be replicated across future walks and exhibitions without specialist hardware or infrastructure investment.",
    services: ["creative-technology"],
    tags: ["gps", "audio-tour", "offline-first", "mobile-app"],
    featured: true,
    images: [
      {
        src: "/images/projects/art-tour-app/screen-home.jpg",
        alt: "App home screen showing the Nottingham Public Art Walk map",
        caption: "[FIG.01] — Home screen with interactive map and artwork stops",
        type: "hero",
      },
      {
        src: "/images/projects/art-tour-app/screen-start.jpg",
        alt: "App onboarding screen",
        caption: "[FIG.02] — Onboarding and tour introduction screen",
        type: "detail",
      },
    ],
    videoUrl: "https://9rojz9u5sdd0aq0g.public.blob.vercel-storage.com/Sequence%2001.mp4",
    videoPoster: "/images/projects/art-tour-app/screen-home.jpg",
    videoDescription:
      "Prototype demo of the Nottingham Public Art Walk app — 25 public artworks, GPS-triggered audio, fully offline. Devised by Lucy Brouwer, built by Jim using vibe coding, Xcode and Google Maps.",
  },
  {
    id: "donald-rodney",
    title: "Donald Rodney",
    client: "Nottingham Contemporary",
    year: 2024,
    summary:
      "AV installation and technical delivery for a major retrospective exhibition at Nottingham Contemporary.",
    brief:
      "Technical delivery for a retrospective exhibition requiring multi-format video playback, archival media handling, and gallery-grade AV systems across multiple rooms.",
    role: [
      "AV technical lead",
      "Installation and commissioning",
      "Media playback systems",
    ],
    technicalDelivery: [
      "Multi-room video installation with synchronised playback",
      "HD media player configuration and deployment",
      "Gallery AV infrastructure and signal routing",
      "On-site installation and commissioning",
    ],
    keyDecisions: [],
    outcome:
      "Exhibition successfully opened and ran at Nottingham Contemporary, 2024.",
    services: ["av-installation"],
    tags: ["gallery", "video", "multi-room", "retrospective"],
    featured: true,
    images: [
      {
        src: "/images/projects/donald-rodney/hero.jpg",
        alt: "Donald Rodney exhibition installation view at Nottingham Contemporary",
        caption: "[FIG.01] — Installation view, Nottingham Contemporary, 2024",
        type: "hero",
      },
      {
        src: "/images/projects/donald-rodney/detail-01.jpg",
        alt: "Exhibition detail view",
        caption: "[FIG.02] — Gallery detail",
        type: "detail",
      },
      {
        src: "/images/projects/donald-rodney/detail-02.jpg",
        alt: "Installation documentation",
        caption: "[FIG.03] — Installation documentation",
        type: "detail",
      },
    ],
  },
  {
    id: "allan-webber",
    title: "Allan Webber",
    client: "Nottingham Contemporary",
    year: 2024,
    summary:
      "AV installation for Allan Webber exhibition at Nottingham Contemporary.",
    brief:
      "Technical delivery for an exhibition requiring precise AV setup and media playback systems.",
    role: [
      "AV installation",
      "Technical delivery",
      "On-site commissioning",
    ],
    technicalDelivery: [
      "Video playback and display systems",
      "AV infrastructure setup",
      "On-site installation and testing",
    ],
    keyDecisions: [],
    outcome:
      "Exhibition successfully delivered at Nottingham Contemporary, 2024.",
    services: ["av-installation"],
    tags: ["gallery", "video", "installation"],
    featured: false,
    images: [
      {
        src: "/images/projects/allan-webber/hero.jpg",
        alt: "Allan Webber exhibition installation at Nottingham Contemporary",
        caption: "[FIG.01] — Installation view, Nottingham Contemporary, 2024",
        type: "hero",
      },
    ],
  },
  {
    id: "meriem-bennani",
    title: "Meriem Bennani",
    client: "Nottingham Contemporary",
    year: 2022,
    summary:
      "Multi-channel video installation and AV delivery for Meriem Bennani's exhibition at Nottingham Contemporary.",
    brief:
      "Large-scale video installation requiring multi-channel synchronised playback, precise projection, and immersive sound design across multiple gallery spaces.",
    role: [
      "AV technical lead",
      "Multi-channel video installation",
      "Projection and display systems",
      "On-site commissioning",
    ],
    technicalDelivery: [
      "Multi-channel synchronised video playback",
      "Projection systems and display configuration",
      "Sound installation and distribution",
      "HD media player deployment",
      "Gallery AV infrastructure",
    ],
    keyDecisions: [],
    outcome:
      "Exhibition ran successfully at Nottingham Contemporary, 2022. Photo credits: Stuart Whipps.",
    services: ["av-installation"],
    tags: ["projection", "multi-channel", "video", "gallery", "sound"],
    featured: true,
    images: [
      {
        src: "/images/projects/meriem-bennani/hero-010.jpg",
        alt: "Meriem Bennani exhibition installation at Nottingham Contemporary",
        caption:
          "[FIG.01] — Installation view, Nottingham Contemporary, 2022. Photo: Stuart Whipps",
        type: "hero",
      },
      {
        src: "/images/projects/meriem-bennani/detail-01.jpg",
        alt: "Multi-channel video installation detail",
        caption: "[FIG.02] — Gallery detail",
        type: "detail",
      },
      {
        src: "/images/projects/meriem-bennani/detail-02.jpg",
        alt: "Exhibition documentation",
        caption: "[FIG.03] — Installation documentation",
        type: "detail",
      },
    ],
  },
  {
    id: "abbas-zahedi",
    title: "Abbas Zahedi",
    client: "Nottingham Contemporary",
    year: 2023,
    summary:
      "AV installation and technical delivery for Abbas Zahedi's exhibition at Nottingham Contemporary.",
    brief:
      "Technical delivery for an exhibition incorporating video, sound, and spatial elements requiring careful AV integration.",
    role: [
      "AV installation",
      "Sound and video systems",
      "On-site commissioning",
    ],
    technicalDelivery: [
      "Video playback and display systems",
      "Sound installation and distribution",
      "Gallery AV infrastructure",
      "On-site installation and testing",
    ],
    keyDecisions: [],
    outcome:
      "Exhibition successfully delivered at Nottingham Contemporary, 2023.",
    services: ["av-installation"],
    tags: ["gallery", "video", "sound", "installation"],
    featured: false,
    images: [
      {
        src: "/images/projects/abbas-zahedi/hero.jpg",
        alt: "Abbas Zahedi exhibition at Nottingham Contemporary",
        caption: "[FIG.01] — Installation view, Nottingham Contemporary, 2023",
        type: "hero",
      },
      {
        src: "/images/projects/abbas-zahedi/detail-01.jpg",
        alt: "Exhibition detail view",
        caption: "[FIG.02] — Gallery detail",
        type: "detail",
      },
      {
        src: "/images/projects/abbas-zahedi/detail-02.jpg",
        alt: "Installation documentation",
        caption: "[FIG.03] — Installation documentation",
        type: "detail",
      },
    ],
  },
  {
    id: "charlotte-johannesson",
    title: "Charlotte Johannesson",
    client: "Nottingham Contemporary",
    year: 2023,
    summary:
      "AV technical delivery for Charlotte Johannesson's exhibition at Nottingham Contemporary.",
    brief:
      "Technical installation for an exhibition featuring digital and video-based works requiring specialist display and playback systems.",
    role: [
      "AV installation",
      "Display systems",
      "Technical delivery",
    ],
    technicalDelivery: [
      "Video display and playback systems",
      "Gallery AV infrastructure",
      "On-site installation and commissioning",
    ],
    keyDecisions: [],
    outcome:
      "Exhibition successfully delivered at Nottingham Contemporary, 2023.",
    services: ["av-installation"],
    tags: ["gallery", "digital", "video", "display"],
    featured: false,
    images: [
      {
        src: "/images/projects/charlotte-johannesson/hero.jpg",
        alt: "Charlotte Johannesson exhibition at Nottingham Contemporary",
        caption: "[FIG.01] — Installation view, Nottingham Contemporary, 2023",
        type: "hero",
      },
      {
        src: "/images/projects/charlotte-johannesson/detail-01.jpg",
        alt: "Exhibition detail",
        caption: "[FIG.02] — Gallery detail",
        type: "detail",
      },
    ],
  },
  {
    id: "mark-leckey-liverpool-biennial",
    title: "Mark Leckey — Liverpool Biennial",
    client: "Liverpool Biennial",
    year: 2016,
    summary:
      "AV installation for Mark Leckey's work at Blade Factory during Liverpool Biennial 2016.",
    brief:
      "Technical delivery for Mark Leckey's large-scale installation at Blade Factory, a major industrial venue used for Liverpool Biennial. The work required projection, video, and sound systems in a challenging architectural space.",
    role: [
      "AV installation",
      "Projection systems",
      "Sound installation",
      "On-site technical delivery",
    ],
    technicalDelivery: [
      "Large-format projection in industrial venue",
      "Sound system installation and configuration",
      "Media playback systems",
      "On-site installation at Blade Factory",
    ],
    keyDecisions: [],
    outcome:
      "Installation delivered for Liverpool Biennial 2016 at Blade Factory. Photo: Mark McNulty.",
    services: ["av-installation"],
    tags: ["projection", "biennial", "industrial", "sound", "large-scale"],
    featured: true,
    images: [
      {
        src: "/images/projects/mark-leckey-liverpool-biennial/hero.jpg",
        alt: "Mark Leckey installation at Blade Factory, Liverpool Biennial 2016",
        caption:
          "[FIG.01] — Mark Leckey, Dream English Kid, Blade Factory, Liverpool Biennial 2016. Photo: Mark McNulty",
        type: "hero",
      },
    ],
  },
  {
    id: "aquatopia",
    title: "Aquatopia",
    client: "Nottingham Contemporary",
    year: 2012,
    summary:
      "AV installation and technical delivery for the Aquatopia exhibition at Nottingham Contemporary.",
    brief:
      "Multi-room exhibition requiring video, sound, and media playback systems across multiple gallery spaces. An early major technical delivery project at Nottingham Contemporary.",
    role: [
      "AV installation",
      "Multi-room video systems",
      "Sound installation",
      "Technical delivery",
    ],
    technicalDelivery: [
      "Multi-room video and sound installation",
      "Media playback systems across galleries G2, G3, G4",
      "Gallery AV infrastructure",
      "On-site installation and commissioning",
    ],
    keyDecisions: [],
    outcome:
      "Exhibition successfully ran at Nottingham Contemporary, 2012.",
    services: ["av-installation"],
    tags: ["gallery", "multi-room", "video", "sound"],
    featured: false,
    images: [
      {
        src: "/images/projects/aquatopia/hero.jpg",
        alt: "Aquatopia exhibition installation view at Nottingham Contemporary",
        caption: "[FIG.01] — Installation view, Gallery 2, Nottingham Contemporary, 2012",
        type: "hero",
      },
      {
        src: "/images/projects/aquatopia/detail-01.jpg",
        alt: "Gallery 3 installation view",
        caption: "[FIG.02] — Installation view, Gallery 3",
        type: "detail",
      },
      {
        src: "/images/projects/aquatopia/detail-02.jpg",
        alt: "Gallery 4 installation view",
        caption: "[FIG.03] — Installation view, Gallery 4",
        type: "detail",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
