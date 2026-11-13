import { ES } from '../services/language/i18n/es';

export interface SkillCategory {
  titleKey: keyof typeof ES;
  icon: string;
  items: Array<{ name: string; highlight?: boolean }>;
}

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    titleKey: 'skillsGroupLanguages',
    icon: '💻',
    items: [
      { name: 'TypeScript', highlight: true },
      { name: 'JavaScript (ES6+)', highlight: true },
      { name: 'C# / .NET', highlight: true },
      { name: 'Python' },
    ],
  },
  {
    titleKey: 'skillsGroupFrontend',
    icon: '🎨',
    items: [
      { name: 'Angular (Standalone & Signals)', highlight: true },
      { name: 'Tailwind CSS', highlight: true },
      { name: 'React' },
      { name: 'HTML5 & CSS3 / PostCSS' },
      { name: 'Responsive UI / UX' },
    ],
  },
  {
    titleKey: 'skillsGroupBackend',
    icon: '⚡',
    items: [
      { name: 'NestJS', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'APIs RESTful (Diseño y consumo)', highlight: true },
      { name: 'Swagger / OpenAPI' },
      { name: 'Postman' },
      { name: '.NET Core' },
    ],
  },
  {
    titleKey: 'skillsGroupDatabases',
    icon: '🗄️',
    items: [
      { name: 'MongoDB', highlight: true },
      { name: 'SQL Server', highlight: true },
      { name: 'PostgreSQL' },
      { name: 'Apache Kafka' },
      { name: 'Modelado Relacional & NoSQL' },
    ],
  },
  {
    titleKey: 'skillsGroupDevops',
    icon: '🚀',
    items: [
      { name: 'Docker & Containers', highlight: true },
      { name: 'Ubuntu Server / Linux', highlight: true },
      { name: 'AWS Cloud Computing' },
      { name: 'Git & GitHub' },
      { name: 'SOTI MDM Enterprise' },
      { name: 'Migración de Servidores' },
    ],
  },
  {
    titleKey: 'skillsGroupSecurity',
    icon: '🛡️',
    items: [
      { name: 'JWT (JSON Web Tokens)', highlight: true },
      { name: 'OAuth2' },
      { name: 'Azure Active Directory (AD)' },
      { name: 'Intercambio JSON / XML' },
      { name: 'Gobierno de Identidades (IAM)' },
      { name: 'MidPoint / InvGate / Service Manager' },
    ],
  },
  {
    titleKey: 'skillsGroupProfessional',
    icon: '📋',
    items: [
      { name: 'Análisis Técnico-Funcional', highlight: true },
      { name: 'Relevamiento y Gestión de Requerimientos', highlight: true },
      { name: 'Arquitectura de Soluciones', highlight: true },
      { name: 'Automatización de Procesos IT', highlight: true },
      { name: 'Documentación Funcional y Técnica' },
      { name: 'Metodologías Ágiles (Scrum)' },
      { name: 'Comunicación con Stakeholders' },
      { name: 'Toma de Decisiones y Adaptabilidad' },
    ],
  },
];

export const LANGUAGES_DATA = [
  {
    nameKey: 'langSpanish' as keyof typeof ES,
    levelKey: 'langSpanishLevel' as keyof typeof ES,
    percentage: 100,
  },
  {
    nameKey: 'langEnglish' as keyof typeof ES,
    levelKey: 'langEnglishLevel' as keyof typeof ES,
    percentage: 75,
  },
];
