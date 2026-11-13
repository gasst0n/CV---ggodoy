import { ES } from '../services/language/i18n/es';

export interface Experience {
  roleKey: keyof typeof ES;
  company: string;
  periodKey: keyof typeof ES;
  logo: string;
  responsibilitiesKeys: Array<keyof typeof ES>;
  stack?: string[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    roleKey: 'experienceCorreoRole',
    company: 'Correo Argentino',
    periodKey: 'experienceCorreoPeriod',
    logo: 'assets/logo-correo.png',
    responsibilitiesKeys: [
      'experienceCorreoResp1',
      'experienceCorreoResp2',
      'experienceCorreoResp3',
      'experienceCorreoResp4',
      'experienceCorreoResp5',
    ],
    stack: [
      'Angular',
      'NestJS',
      'TypeScript',
      'MongoDB',
      'Docker',
      'Ubuntu Server',
      'AWS',
      'SOTI MDM',
      'APIs REST',
      'Swagger / OpenAPI',
      'JWT',
      'MidPoint IAM',
      'Service Manager',
      'InvGate',
    ],
  },
  {
    roleKey: 'experienceStiRole',
    company: 'STI Network',
    periodKey: 'experienceStiPeriod',
    logo: 'assets/logo-sti.png',
    responsibilitiesKeys: [
      'experienceStiResp1',
      'experienceStiResp2',
      'experienceStiResp3',
      'experienceStiResp4',
    ],
    stack: [
      'Soporte Técnico N1/N2',
      'Migración de Servidores',
      'Sistemas ERP (Tango, Jazz)',
      'Redes & Switches',
      'Ticketing CRM / SLA',
      'Esquemas de Backup',
      'Infraestructura IT',
    ],
  },
];
