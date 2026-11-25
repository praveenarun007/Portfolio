export interface ArchitectureStage {
  label: string;
  component: string;
  detail: string;
}

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  domain: string;
  summary: string;
  highlights: ProjectHighlight[];
  stack: string[];
  sourceUrl: string;
  demoUrl: string;
  architecture: {
    overview: string;
    pattern: string;
    pipeline: ArchitectureStage[];
    engineeringDecisions: string[];
    specs: {
      label: string;
      value: string;
    }[];
  };
}

export interface TechnicalDomain {
  id: string;
  code: string;
  layer: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface ProfileLink {
  label: string;
  handle: string;
  href: string;
}

export const PROFILE = {
  name: "PRAVEEN A",
  fullName: "Praveen A",
  email: "praveenarun2008@gmail.com",
  status: "Open to SWE & AI/Cloud Internships",
  eyebrow:
    "ASPIRING SOFTWARE ENGINEER | ARTIFICIAL INTELLIGENCE & DATA SCIENCE",
  headline:
    "Engineering scalable web systems, cloud data pipelines, and applied AI.",
  bio: "B.E. Artificial Intelligence and Data Science undergraduate at Bannari Amman Institute of Technology. Focused on building structured full-stack applications, event-driven cloud data workflows, and low-latency machine learning systems with React, Node.js, Python, and AWS.",
  degree: "B.E. in Artificial Intelligence and Data Science",
  institution: "Bannari Amman Institute of Technology",
  location: "Tamil Nadu, India",
  activeStack: ["React", "Node.js", "Express", "MySQL", "Python", "AWS"],
  stackGroups: [
    { category: "Frontend", items: "React • JavaScript (ES6+) • HTML/CSS" },
    { category: "Backend & DB", items: "Node.js • Express • REST APIs • MySQL" },
    { category: "AI & Cloud", items: "Python • AWS Serverless • Signal DSP" },
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Machine Learning",
    "Cloud Computing",
    "Operating Systems",
    "Computer Networks",
  ],
  careerObjective:
    "To build a rigorous foundation in software architecture, distributed data systems, and applied intelligence while contributing to high-impact engineering initiatives within technology-driven organizations.",
  links: [
    {
      label: "GitHub",
      handle: "github.com/praveenarun007",
      href: "https://github.com/praveenarun007",
    },
    {
      label: "LinkedIn",
      handle: "linkedin.com/in/praveenarun007",
      href: "https://www.linkedin.com/in/praveenarun007/",
    },
    {
      label: "LeetCode",
      handle: "leetcode.com/praveenarun007",
      href: "https://leetcode.com/u/praveenarun007/",
    },
  ] satisfies ProfileLink[],
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "student-placement-portal",
    index: "01",
    title: "Student Placement Management Portal",
    domain: "Full-Stack • Database Systems",
    summary:
      "End-to-end recruitment workflow platform built with React, Node.js, Express, and MySQL for managing student eligibility, drive scheduling, and application tracking.",
    highlights: [
      { label: "Architecture", value: "3-Tier REST API + Normalized MySQL Schema" },
      { label: "Core Capability", value: "Role-based eligibility & multi-round tracking" },
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "REST API"],
    sourceUrl: "https://github.com/praveenarun007/Placement-app.git",
    demoUrl: "https://placement-portal-demo.vercel.app",
    architecture: {
      overview:
        "A role-separated recruitment operations platform uniting student profiles, placement cell coordination, and multi-stage company hiring drives under a normalized relational schema.",
      pattern: "3-Tier Client-Server Architecture • Normalized Relational Model",
      pipeline: [
        {
          label: "01 / CLIENT",
          component: "React SPA",
          detail:
            "Role-aware dashboards for students and coordinators with instant eligibility status filtering.",
        },
        {
          label: "02 / API GATEWAY",
          component: "Node.js + Express",
          detail:
            "Stateless REST endpoints enforcing role-based access control, request validation, and drive state transitions.",
        },
        {
          label: "03 / STORAGE",
          component: "MySQL Relational DB",
          detail:
            "Indexed tables linking students, academic records, eligibility rules, drives, and application rounds.",
        },
      ],
      engineeringDecisions: [
        "Structured foreign-key constraints across student, drive, and round tables to eliminate duplicate applications and enforce eligibility criteria at query time.",
        "Implemented parameterized SQL queries and composite indexes on CGPA, department, and drive status for deterministic filtering.",
        "Decoupled validation middleware in Express so drive eligibility rules remain auditable and testable independent of UI forms.",
      ],
      specs: [
        { label: "Data Consistency", value: "ACID Transactions (MySQL InnoDB)" },
        { label: "API Style", value: "Versioned REST / JSON" },
        { label: "Core Entities", value: "Students, Drives, Rounds, Offers" },
      ],
    },
  },
  {
    id: "serverless-etl-pipeline",
    index: "02",
    title: "Serverless ETL Pipeline",
    domain: "Data Engineering • AWS Cloud",
    summary:
      "Event-driven cloud data ingestion, transformation, and warehousing pipeline built with Python and AWS serverless architecture for automated, low-overhead data processing.",
    highlights: [
      { label: "Architecture", value: "Event-Driven S3 Trigger + Python Serverless" },
      { label: "Core Capability", value: "Idempotent schema validation & partitioned load" },
    ],
    stack: ["Python", "AWS Lambda", "Amazon S3", "Serverless", "ETL"],
    sourceUrl: "https://github.com/praveen-a/serverless-etl-pipeline",
    demoUrl: "https://github.com/praveen-a/serverless-etl-pipeline#architecture",
    architecture: {
      overview:
        "Zero-idle-compute ingestion workflow triggered automatically on raw object arrival, normalizing heterogeneous payloads into partitioned analytics-ready datasets.",
      pattern: "Event-Driven Serverless Pipeline • Extract-Transform-Load",
      pipeline: [
        {
          label: "01 / INGEST",
          component: "Raw S3 Landing Zone",
          detail:
            "Object-created events emit deterministic triggers upon upload of raw CSV/JSON batch artifacts.",
        },
        {
          label: "02 / TRANSFORM",
          component: "Python Compute (AWS Lambda)",
          detail:
            "Stateless Python workers validate schemas, deduplicate records, handle null normalization, and standardize timestamps.",
        },
        {
          label: "03 / LOAD",
          component: "Curated Storage & Warehouse",
          detail:
            "Writes clean partitioned outputs to curated storage and structured analytical tables for downstream querying.",
        },
      ],
      engineeringDecisions: [
        "Designed idempotent transformation handlers using deterministic object keys so retried invocations never duplicate downstream warehouse rows.",
        "Separated raw, staging, and curated prefixes in S3 to preserve full lineage and enable clean schema replay.",
        "Isolated dead-letter routing for malformed records so single-row anomalies do not block batch execution.",
      ],
      specs: [
        { label: "Compute Model", value: "On-Demand Serverless Functions" },
        { label: "Execution Trigger", value: "S3 ObjectCreated Event" },
        { label: "Runtime", value: "Python 3.x" },
      ],
    },
  },
  {
    id: "custom-voice-command-recognition",
    index: "03",
    title: "Custom Voice Command Recognition",
    domain: "AI & Machine Learning • Audio Processing",
    summary:
      "Machine learning acoustic classification system trained in Python to detect and execute custom spoken commands with low-latency inference.",
    highlights: [
      { label: "Architecture", value: "Real-Time DSP Feature Pipeline + Classifier" },
      { label: "Core Capability", value: "MFCC spectral extraction & confidence gating" },
    ],
    stack: ["Python", "Signal Processing", "MFCC", "Scikit-Learn / ML", "Audio"],
    sourceUrl: "https://github.com/praveen-a/custom-voice-command-recognition",
    demoUrl:
      "https://github.com/praveen-a/custom-voice-command-recognition#demo",
    architecture: {
      overview:
        "End-to-end acoustic pipeline converting raw microphone waveforms into spectral features for low-latency command classification and deterministic action dispatch.",
      pattern: "Real-Time DSP Feature Extraction + Supervised Classifier",
      pipeline: [
        {
          label: "01 / CAPTURE",
          component: "Audio Frame Buffer",
          detail:
            "Captures mono PCM audio windows with energy-based voice activity gating to discard ambient silence.",
        },
        {
          label: "02 / FEATURES",
          component: "Spectral & MFCC Extraction",
          detail:
            "Computes Mel-Frequency Cepstral Coefficients and delta statistics in Python for compact acoustic representation.",
        },
        {
          label: "03 / INFERENCE",
          component: "Classifier & Action Router",
          detail:
            "Evaluates confidence thresholds against trained command classes before triggering mapped local actions.",
        },
      ],
      engineeringDecisions: [
        "Applied pre-emphasis filtering and fixed-window normalization to keep feature vectors resilient across microphone gain variations.",
        "Enforced probability confidence thresholds to reject out-of-vocabulary speech and prevent false-positive command execution.",
        "Structured dataset recording and model evaluation scripts cleanly so new custom command classes can be retrained reproducibly.",
      ],
      specs: [
        { label: "Acoustic Features", value: "MFCC + Energy Envelope" },
        { label: "Inference Mode", value: "Local Low-Latency Evaluation" },
        { label: "Language", value: "Python" },
      ],
    },
  },
  {
    id: "real-estate-listing-platform",
    index: "04",
    title: "Real Estate Property Listing Platform",
    domain: "Full-Stack • Web Application",
    summary:
      "Interactive property discovery and listing platform featuring multi-parameter filtering, relational database modeling, and responsive UI built with React, Node.js, Express, and MySQL.",
    highlights: [
      { label: "Architecture", value: "URL-Synced Filter UI + Composable SQL Layer" },
      { label: "Core Capability", value: "Multi-criteria search & relational lead capture" },
    ],
    stack: ["React", "Node.js", "Express", "MySQL", "Responsive UI"],
    sourceUrl: "https://github.com/praveen-a/real-estate-listing-platform",
    demoUrl: "https://property-platform-demo.vercel.app",
    architecture: {
      overview:
        "Full-stack property marketplace engineered around composable multi-criteria search queries, clean relational modeling, and responsive listing workflows.",
      pattern: "RESTful Web Application • Query-Optimized Relational Backend",
      pipeline: [
        {
          label: "01 / INTERFACE",
          component: "React Filter & Detail Views",
          detail:
            "Synchronizes URL query state with multi-parameter filters for location, budget, property type, and amenities.",
        },
        {
          label: "02 / SERVICE LAYER",
          component: "Express Query Builder",
          detail:
            "Sanitizes dynamic filter parameters, executes paginated lookups, and manages listing creation endpoints.",
        },
        {
          label: "03 / PERSISTENCE",
          component: "MySQL Schema",
          detail:
            "Models properties, amenities, media assets, and agent inquiries with normalized join tables and indexed search columns.",
        },
      ],
      engineeringDecisions: [
        "Built composable backend query construction with explicit allowlisted filter columns to support flexible multi-parameter search safely.",
        "Normalized property attributes and inquiry records to maintain clean separation between catalog browsing and lead submission.",
        "Synchronized filter controls with shareable URL parameters for predictable back-button navigation and bookmarkable searches.",
      ],
      specs: [
        { label: "Search Strategy", value: "Indexed Multi-Parameter SQL" },
        { label: "Frontend State", value: "URL-Synced Filter State" },
        { label: "Stack", value: "React / Express / MySQL" },
      ],
    },
  },
];

export const TECHNICAL_DOMAINS: TechnicalDomain[] = [
  {
    id: "software-fullstack",
    code: "01",
    layer: "APPLICATION LAYER",
    title: "Software & Full-Stack Engineering",
    description:
      "Component-driven web interfaces, stateless REST service architectures, and clean client-server separation.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "REST APIs",
      "JavaScript (ES6+)",
      "HTML / CSS",
    ],
  },
  {
    id: "ai-ml",
    code: "02",
    layer: "INTELLIGENCE LAYER",
    title: "AI & Machine Learning",
    description:
      "Supervised modeling, acoustic feature engineering, and low-latency inference pipelines for practical intelligent systems.",
    technologies: [
      "Python",
      "Acoustic & Signal Processing",
      "Predictive Modeling",
      "Intelligent Systems",
    ],
  },
  {
    id: "data-databases",
    code: "03",
    layer: "DATA LAYER",
    title: "Data Engineering & Databases",
    description:
      "Normalized relational modeling, automated batch transformations, and deterministic query performance.",
    technologies: [
      "MySQL",
      "ETL Pipeline Design",
      "Relational Schema Modeling",
      "Query Optimization",
    ],
  },
  {
    id: "cloud-systems",
    code: "04",
    layer: "INFRASTRUCTURE LAYER",
    title: "Cloud & Systems Engineering",
    description:
      "Event-driven serverless workflows, cloud storage partitioning, and foundational Unix/version-control tooling.",
    technologies: [
      "AWS (Serverless Architecture)",
      "Cloud Storage & Compute",
      "Git",
      "Linux",
    ],
  },
];
