import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SKILLS_CATEGORIES,
  SkillCategory,
  LANGUAGES_DATA,
} from '../../data/skills.data';
import { I18nService } from '../../services/i18n.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class SkillsComponent {
  // 6 Categorías del Stack Tecnológico
  techCategories: SkillCategory[] = SKILLS_CATEGORIES.filter(
    (c) => c.titleKey !== 'skillsGroupProfessional',
  );

  // Competencias Profesionales y Metodologías
  professionalCategory: SkillCategory = SKILLS_CATEGORIES.find(
    (c) => c.titleKey === 'skillsGroupProfessional',
  )!;

  // Idiomas
  languages = LANGUAGES_DATA;

  constructor(
    public i18n: I18nService,
    public lang: LanguageService,
  ) {}
}
