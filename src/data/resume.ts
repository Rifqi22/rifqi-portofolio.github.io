export type ResumeSectionKey = "summary" | "education" | "experience";

export type TimelineEntry = {
  title: string;
  subtitle?: string;
  meta?: string;
  content?: string | string[];
};

export type ResumeData = {
  heading: { title: string };
  sections: {
    key: ResumeSectionKey;
    title: string;
    items: TimelineEntry[];
  }[];
};

export const resumeData: ResumeData = {
  heading: { title: "Resume" },

  sections: [
    // =====================
    // SUMMARY (UPDATED)
    // =====================
    {
      key: "summary",
      title: "Summary",
      items: [
        {
          title: "Mochammad Rifqi Naufal Alfayyadh",
          subtitle: "GIS Software Engineer • WebGIS • Full-Stack Development",
          content:
            "GIS Software Engineer with experience delivering full-stack web and WebGIS applications end-to-end—from requirements gathering to deployment. Strong in modern frontend (React, Vue, Next.js, Nuxt, TypeScript, Vite, Tailwind) and scalable backend services (Node.js/Express/Fastify, Python/FastAPI) with PostgreSQL, Directus, and geospatial stacks (Leaflet, Maplibre GL JS, Turf.js, PostGIS). Comfortable working independently or collaboratively, and experienced deploying to AWS with CI/CD automation (GitHub Actions, Jenkins). Also active as a GIS software instructor, delivering hands-on training in Google Earth Engine, QGIS, ENVI, and PostgreSQL.",
        },
      ],
    },

    // =====================
    // EDUCATION (KEEP / EDIT LATER)
    // =====================
    {
      key: "education",
      title: "Pendidikan",
      items: [
        {
          title: "Universitas Pendidikan Indonesia",
          subtitle: "S1 - Geographic Information Science",
          meta: "2020 - Present",
          content:
            "Active in the Geographic Information Science Student Association and the IMAGIS community whose concentration is in the field of GIS. Participating in external activities at MAPIN student section and GDSC.",
        },
        {
          title: "Dicoding Indonesia — Studi Independen (Front-end & Back-end Developer)",
          meta: "Aug 2023 - Dec 2023",
          content: [
            "Capstone project: built “Plan-Plan” (Todo app) using HTML, CSS, JavaScript, Tailwind, Flowbite.",
            "Implemented PWA features: Local/Session Storage, IndexedDB, Web App Manifest, Notifications.",
            "Built backend using Node.js and Hapi; designed & consumed REST APIs.",
            "Worked with DOM, Webpack, and modern web development workflow.",
          ],
        },
      ],
    },

    // =====================
    // EXPERIENCE (UPDATED)
    // =====================
    {
      key: "experience",
      title: "Professional Experience",
      items: [
        {
          title: "GIS Software Engineer",
          subtitle: "Braga Technologies (Full-time) — Hybrid • Bandung Regency, West Java",
          meta: "Apr 2024 - Present",
          content: [
            "Delivered 7 full-stack web and WebGIS applications tailored to client needs and optimized for geospatial data workflows.",
            "Contributed across the full development lifecycle: requirements gathering, development, testing, deployment, and iteration.",
            "Built responsive front-end interfaces with React.js, Vue.js, Next.js, Nuxt.js, TypeScript, Vite, Tailwind CSS, Nuxt UI, Headless UI.",
            "Developed scalable backend services using Node.js (Express.js, Fastify.js) and Python (FastAPI), integrated with PostgreSQL and Directus.",
            "Engineered geospatial features with Leaflet, Maplibre GL JS, Turf.js, and PostGIS (spatial queries & interactive maps).",
            "Used Python for geospatial data processing and API development to handle complex spatial datasets efficiently.",
            "Deployed apps on AWS (EC2, Elastic Beanstalk, S3, Route 53, RDS) and optimized infra for reliability/performance.",
            "Implemented CI/CD using GitHub Actions and Jenkins to automate testing and deployment workflows.",
          ],
        },

        {
          title: "GIS Software Instructor",
          subtitle: "LOGIS MAP (Contract) — Remote • Bandung, West Java",
          meta: "Jan 2024 - Present",
          content: [
            "Delivered private and regular trainings on Google Earth Engine (GEE), PostgreSQL, QGIS, and ENVI for diverse participant backgrounds.",
            "Led basic to advanced GEE instruction: remote sensing workflows, spatial analysis, and JavaScript scripting.",
            "Developed and maintained tutorial modules and hands-on exercises aligned to curriculum objectives.",
            "Facilitated interactive workshops using real-world geospatial scenarios and guided participants through tool usage.",
            "Provided mentorship and technical support to troubleshoot issues and help learners apply GIS tools in their projects.",
          ],
        },

        {
          title: "GIS Software Instructor",
          subtitle: "insight.spatial (Freelance) — Remote",
          meta: "Jun 2025 - Jun 2025",
          content: [
            "Conducted a specialized session on land cover classification in Google Earth Engine (supervised & unsupervised).",
            "Explained and compared methods (Random Forest, SVM, k-means, ISO clustering) including strengths/limitations.",
            "Guided hands-on implementation, interpretation of results, and use on satellite imagery workflows.",
            "Facilitated accuracy assessment using confusion matrix, overall accuracy, and kappa coefficient.",
            "Encouraged critical analysis to choose appropriate approaches for different land cover scenarios.",
          ],
        },

        {
          title: "Frontend Developer Expertise for AI Training",
          subtitle: "Outlier (Freelance) — Remote",
          meta: "May 2025 - Jun 2025",
          content: [
            "Refined LLM-generated code into production-ready UI with strong UX and responsive design using Tailwind CSS and TypeScript.",
            "Evaluated AI-generated code for functionality, accessibility, and frontend best practices; delivered technical feedback.",
            "Iterated on prompts/workflows to improve model output quality across frontend architecture and programming logic.",
          ],
        },

        {
          title: "GIS Software Instructor",
          subtitle: "Geosoftware.ID (Freelance) — Remote • Bandung, West Java",
          meta: "Apr 2024 - Apr 2024",
          content: [
            "Researched thematic topic: illegal mining impacts on environment (case: Bangka Belitung).",
            "Built Google Earth Engine (JavaScript) scripts to process and analyze Landsat 8 imagery.",
            "Performed supervised ML classification for Land Use/Land Cover change mapping (2013–2023).",
            "Computed spectral indices (NDVI, LST, NDBI, MNDWI, Built-up).",
            "Developed Environmental Criticality Index (ECI) and overlaid with quarry fields to analyze impacts.",
            "Calculated class extents in ECI and analyzed quarry dynamics over time.",
          ],
        },

        {
          title: "RDTR Drafter Team",
          subtitle:
            "Ministry of Agrarian Affairs and Spatial Planning/National Land Agency (Internship) — On-site • Kota Bogor",
          meta: "Feb 2023 - Jun 2023",
          content: [
            "Improved technical materials aligned with Ministerial Regulation ATR/BPN No. 11 of 2021.",
            "Evaluated base, thematic, and plan maps based on component completeness and symbology standards.",
            "Performed topology error checking (overlap, gap, invalid geometries) on shapefiles.",
          ],
        },
      ],
    },
  ],
};
