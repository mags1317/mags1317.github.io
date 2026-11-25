interface LabeledItem {
  label: string;
  details: string;
}

export interface Experience {
  role: string;
  employer: string;
  dates: string;
  highlights: string[];
  projects: string[];
}

interface Resume {
  name: string;
  email: string;
  phone: string;
  github: string;
  githubProfile: string;
  linkedin: string;
  summary: string;
  competencies: LabeledItem[];
  tools: LabeledItem[];
  experience: Experience[];
  education: string;
  languages: string[];
  certifications: LabeledItem[];
}

// Owner review: confirm the Tekzenit “Present” date and the current certification/course list.
export const resume = {
  "name": "Miguel Ángel García Sepúlveda",
  "email": "mags.1317@gmail.com",
  "phone": "+52 33 1126 8191",
  "github": "https://github.com/mags1317/mags1317",
  "githubProfile": "https://github.com/mags1317",
  "linkedin": "https://www.linkedin.com/in/miguel-garcia-info/",
  "summary": "Lead Full Stack Developer with 10+ years of experience designing and delivering scalable, secure, and AI-driven web applications. Expert in .NET, Angular, React, cloud-native development, and workflow automation. Proven ability to automate processes, mentor teams, and deliver measurable business impact through technology.",
  "competencies": [
    {
      "label": "Backend & Architecture",
      "details": ".NET Core, C#, ASP.NET, Web API, DDD, CQRS, SOLID Principles, XUnit (automated testing)"
    },
    {
      "label": "Frontend",
      "details": "Angular, ReactJS, Razor, SCSS, Cypress (frontend automated testing)"
    },
    {
      "label": "Cloud & DevOps",
      "details": "Azure Functions, App Service, API Management, Azure Key Vault, Data Factory, Redis, CI/CD, Docker, GitHub, Azure DevOps"
    },
    {
      "label": "Data & Storage",
      "details": "MS SQL Server, MySQL, PostgreSQL, Entity Framework, Dapper, LINQ"
    },
    {
      "label": "AI & Automation",
      "details": "n8n, Supabase, AI-driven chatbots, Workflow Automation"
    },
    {
      "label": "Security & Governance",
      "details": "OAuth2, JWT, Azure AD B2C, API Gateway, Identity Management"
    },
    {
      "label": "Code Quality & Observability",
      "details": "Application Insights, SonarQube, Snyk"
    },
    {
      "label": "Collaboration",
      "details": "Agile/Scrum, Backlog Management, Team Leadership, Mentorship"
    }
  ],
  "tools": [
    {
      "label": "IDEs & Editors",
      "details": "Visual Studio, VS Code, Cursor"
    },
    {
      "label": "Testing & APIs",
      "details": "Postman"
    },
    {
      "label": "Data & Analytics",
      "details": "Power BI"
    },
    {
      "label": "Collaboration & Project Management",
      "details": "Jira, Azure Boards, Notion, Slack, MS Teams, Figma"
    },
    {
      "label": "Version Control & Deployment",
      "details": "GitKraken, Docker, FileZilla, PowerShell"
    }
  ],
  "experience": [
    {
      "role": "Lead Full Stack Developer",
      "employer": "Tekzenit Mexico",
      "dates": "Dec 2017 – Present",
      "highlights": [
        "Lead a development team, delivering projects from planning through release with Scrum.",
        "Leading release meetings, from creating/presenting the change request to executing the release plan and the backout plan if necessary and communicating the end result of each release.",
        "Collaborate with clients to gather requirements, refine them into PBIs, and manage sprint backlogs.",
        "Automated CI/CD pipelines across 10+ projects, reducing deployment time and improving release reliability.",
        "Architected and developed REST APIs in .NET, integrated with Angular frontends and third-party services.",
        "Configured and managed Azure infrastructure: Functions, APIM, App Services, Key Vault, Redis, CDN, AD B2C.",
        "Built and maintained Angular, Razor, ReactJS frontends.",
        "Implemented automated testing: XUnit for .NET APIs and Cypress for Angular frontends (Automas).",
        "Applied Application Insights, SonarQube, and Snyk for monitoring, code quality, and security.",
        "Developed Tricolor.Brain (n8n + Supabase), an AI-driven chat platform delivering real-time business insights."
      ],
      "projects": [
        "Tricolor.com – Multi-tenant vehicle sales website (ASP.NET Core, Razor, Serilog, Cypress).",
        "G360 – Vehicle management system (Angular + .NET Core).",
        "Supply Chain – Administrative system (ASP.NET, DevExpress).",
        "Ganas Sites (2018–2021) – Multi-tenant platform for Tricolor, Ganas, GanasYa, RideNow (Laravel, SCSS).",
        "Authentication API – Unified authentication service (ASP.NET Core).",
        "Customer Check-In App – Migrated ReactJS to Angular.",
        "Automas – Vehicle credit application and management platform (Angular + .NET Core, Cypress, XUnit)."
      ]
    },
    {
      "role": "Full Stack Developer",
      "employer": "Accend / Enlace Fiscal",
      "dates": "Jan 2016 – Dec 2017",
      "highlights": [
        "Designed and developed web systems and APIs for CFDI validation and emission, modernizing client tax compliance.",
        "Built CFDI Ninja, a system and documented API for tax validation aligned with SAT catalogs (CFDI 3.3).",
        "Enhanced Enlace Fiscal APIs for CFDI version 3.3 issuance.",
        "Stack: Laravel, MySQL, Python, AWS (Lambda, S3, EC2, API Gateway, Aurora), JavaScript, CSS."
      ],
      "projects": []
    },
    {
      "role": "Software Developer",
      "employer": "CORB",
      "dates": "Jan 2014 – Dec 2015",
      "highlights": [
        "Developed web applications and e-commerce platforms using WordPress, Laravel, ReactJS, AngularJS, PHP, MySQL.",
        "Key Projects: Uranta (clothing store), Kimanta (real estate social network), Canadian School Website, Goth (polling project).",
        "Delivered end-to-end projects including database design, frontend development, and deployments."
      ],
      "projects": []
    }
  ],
  "education": "UdG Campus CUCEI – Degree in Informatics (2012–2016)",
  "languages": [
    "Spanish: Native",
    "English: Fluent (professional proficiency)"
  ],
  "certifications": [
    {
      "label": "SoloLearn",
      "details": "Programming Foundations (C#, C++, Java, Python, PHP, JavaScript, SQL, HTML, CSS, jQuery); AI & Data (Generative AI, Data Analytics, Prompt Engineering); Social Media Marketing"
    },
    {
      "label": "Microsoft Learn",
      "details": "AI Fundamentals, GitHub Copilot, Tailoring Trainings with AI, Intro to Visual Studio Code"
    }
  ]
} satisfies Resume;
