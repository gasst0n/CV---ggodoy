import { ES } from '../services/language/i18n/es';

export interface ProjectScreenshot {
  src: string;
  titleKey: keyof typeof ES;
  descKey: keyof typeof ES;
}

export interface ProjectMetric {
  valueKey: keyof typeof ES;
  labelKey: keyof typeof ES;
}

export interface Project {
  id: string;
  titleKey: keyof typeof ES;
  contextKey: keyof typeof ES;
  shortDescKey: keyof typeof ES;
  longDescKey: keyof typeof ES;
  badgeKey?: keyof typeof ES;
  featured?: boolean;
  metrics?: ProjectMetric[];
  screenshots?: ProjectScreenshot[];
  stack: string[];
  architecture?: Array<{ label: string; value: string }>;
  highlights?: Array<keyof typeof ES>;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'corpat',
    titleKey: 'projectCorpatTitle',
    contextKey: 'projectCorpatContext',
    shortDescKey: 'projectCorpatShortDesc',
    longDescKey: 'projectCorpatLongDesc',
    badgeKey: 'corpatBadge',
    featured: true,
    metrics: [
      { valueKey: 'corpatMetric1Value', labelKey: 'corpatMetric1Label' },
      { valueKey: 'corpatMetric2Value', labelKey: 'corpatMetric2Label' },
      { valueKey: 'corpatMetric3Value', labelKey: 'corpatMetric3Label' },
      { valueKey: 'corpatMetric4Value', labelKey: 'corpatMetric4Label' },
    ],
    screenshots: [
      {
        src: 'assets/corpat/dashboard_screen.png',
        titleKey: 'corpatScreen1Title',
        descKey: 'corpatScreen1Desc',
      },
      {
        src: 'assets/corpat/operaciones_screen.png',
        titleKey: 'corpatScreen2Title',
        descKey: 'corpatScreen2Desc',
      },
      {
        src: 'assets/corpat/Reportes_screen.png',
        titleKey: 'corpatScreen3Title',
        descKey: 'corpatScreen3Desc',
      },
      {
        src: 'assets/corpat/usuariosajustes_screen.png',
        titleKey: 'corpatScreen4Title',
        descKey: 'corpatScreen4Desc',
      },
    ],
    stack: [
      'Angular (Standalone)',
      'TypeScript',
      'NestJS',
      'Node.js',
      'MongoDB',
      'SOTI MDM',
      'Active Directory',
      'Docker',
      'Ubuntu Server',
      'AWS Cloud',
      'Swagger / OpenAPI',
      'JWT Auth',
      'Tailwind CSS',
    ],
    architecture: [
      { label: 'Frontend', value: 'Angular Standalone + TypeScript + Tailwind CSS (Diseño responsive)' },
      { label: 'Backend & APIs', value: 'NestJS / Node.js con documentación Swagger / OpenAPI y JWT' },
      { label: 'Base de Datos', value: 'MongoDB con esquemas optimizados para alta concurrencia' },
      { label: 'Integraciones IT', value: 'SOTI MDM Enterprise (sincronización móvil) + Directorio Activo' },
      { label: 'Infraestructura', value: 'Contenedores Docker desplegados sobre Ubuntu Server y AWS' },
    ],
  },
  {
    id: 'iam',
    titleKey: 'projectIamTitle',
    contextKey: 'projectIamContext',
    shortDescKey: 'projectIamShortDesc',
    longDescKey: 'projectIamLongDesc',
    featured: false,
    stack: [
      'APIs REST',
      'MidPoint IAM',
      'Service Manager',
      'InvGate',
      'JWT / OAuth2',
      'JSON / XML',
      'Swagger',
      'Postman',
    ],
    architecture: [
      { label: 'Gobierno IAM', value: 'Ecosistema MidPoint para ciclo de vida de identidades' },
      { label: 'Ticketing / ITSM', value: 'Service Manager & InvGate' },
      { label: 'Integración', value: 'Microservicios REST con seguridad basada en tokens y contratos JSON' },
    ],
  },
  {
    id: 'sti',
    titleKey: 'projectStiTitle',
    contextKey: 'projectStiContext',
    shortDescKey: 'projectStiShortDesc',
    longDescKey: 'projectStiLongDesc',
    featured: false,
    stack: [
      'Soporte N1 / N2',
      'Migración de Servidores',
      'Tango Gestión',
      'Jazz ERP',
      'LexDoctor',
      'Redes & Switches',
      'Esquemas de Backup',
      'CRM SLA',
    ],
    architecture: [
      { label: 'Infraestructura', value: 'Servidores físicos y virtualizados Windows/Linux' },
      { label: 'ERPs Corporativos', value: 'Tango, Jazz, LexDoctor, Transoft' },
      { label: 'Continuidad', value: 'Planes de contingencia y backups automatizados' },
    ],
  },
];
