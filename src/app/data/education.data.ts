import { ES } from '../services/language/i18n/es';

export interface Education {
  degreeKey: keyof typeof ES;
  institutionKey: keyof typeof ES;
  periodKey: keyof typeof ES;
  descriptionKey?: keyof typeof ES;
  logo: string;
  skills: string[];
}

export const EDUCATION_DATA: Education[] = [
  {
    degreeKey: 'educationUnajDegree',
    institutionKey: 'educationUnajInstitution',
    periodKey: 'educationUnajPeriod',
    descriptionKey: 'educationUnajDescription',
    logo: 'assets/unaj-logo.jpg',
    skills: [
      'Ingeniería de Software',
      'Arquitectura de Computadoras & SO',
      'Bases de Datos Relacionales & NoSQL',
      'Redes de Comunicaciones',
      'Algoritmia & Estructuras de Datos',
      'Dirección de Proyectos Tecnológicos',
    ],
  },
  {
    degreeKey: 'educationSchoolDegree',
    institutionKey: 'educationSchoolInstitution',
    periodKey: 'educationSchoolPeriod',
    descriptionKey: 'educationSchoolDescription',
    logo: 'assets/logo-escuela.png',
    skills: [
      'Programación & Algoritmos',
      'Redes Informáticas & Cableado Estructurado',
      'Soporte Técnico & Hardware',
      'Sistemas Operativos',
      'Bases de Datos & Web',
    ],
  },
];
