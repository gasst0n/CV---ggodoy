import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PERSONAL_DATA } from '../../data/personal.data';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
})
export class Header implements OnInit {
  personal = PERSONAL_DATA;
  activeSection = '';

  constructor(
    public lang: LanguageService,
    public i18n: I18nService,
    public theme: ThemeService,
  ) {}

  ngOnInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateActiveSection();
  }

  updateActiveSection(): void {
    if (typeof window === 'undefined') return;

    const sections = ['experience', 'projects', 'skills', 'education', 'contact'];
    const scrollPos = window.scrollY + 250;

    for (const sectionId of sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          this.activeSection = sectionId;
          return;
        }
      }
    }

    if (window.scrollY < 200) {
      this.activeSection = '';
    }
  }

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }
}
