import { Component } from '@angular/core';
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
export class Header {
  personal = PERSONAL_DATA;
  mobileMenuOpen = false;

  constructor(
    public lang: LanguageService,
    public i18n: I18nService,
    public theme: ThemeService,
  ) {}

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
