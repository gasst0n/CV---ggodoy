import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_DATA } from '../../data/contact.data';
import { ThemeService } from '../../services/theme.service';
import { LanguageService } from '../../services/language.service';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
})
export class Contact {
  contact = CONTACT_DATA;
  copiedEmail = false;

  constructor(
    public theme: ThemeService,
    public lang: LanguageService,
    public i18n: I18nService,
  ) {}

  copyEmail(): void {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(this.contact.email);
      this.copiedEmail = true;
      setTimeout(() => {
        this.copiedEmail = false;
      }, 2500);
    }
  }
}
