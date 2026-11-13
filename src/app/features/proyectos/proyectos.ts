import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, PROJECTS_DATA, ProjectScreenshot } from '../../data/projects.data';
import { I18nService } from '../../services/i18n.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.html',
})
export class Proyectos {
  projects: Project[] = PROJECTS_DATA;

  // Proyecto destacado CORPAT
  corpatProject = PROJECTS_DATA.find((p) => p.id === 'corpat')!;
  otherProjects = PROJECTS_DATA.filter((p) => p.id !== 'corpat');

  // Estado del carousel de capturas en la tarjeta de CORPAT
  activeCorpatScreenIndex = 0;

  // Estado del Modal Interactivo
  isModalOpen = false;
  modalProject: Project | null = null;
  activeModalScreenIndex = 0;
  isImageZoomed = false;

  constructor(
    public i18n: I18nService,
    public lang: LanguageService,
  ) {}

  selectCorpatScreen(index: number): void {
    this.activeCorpatScreenIndex = index;
  }

  nextCorpatScreen(): void {
    if (!this.corpatProject.screenshots) return;
    this.activeCorpatScreenIndex =
      (this.activeCorpatScreenIndex + 1) % this.corpatProject.screenshots.length;
  }

  prevCorpatScreen(): void {
    if (!this.corpatProject.screenshots) return;
    this.activeCorpatScreenIndex =
      (this.activeCorpatScreenIndex - 1 + this.corpatProject.screenshots.length) %
      this.corpatProject.screenshots.length;
  }

  openProjectModal(project: Project, screenshotIndex = 0): void {
    this.modalProject = project;
    this.activeModalScreenIndex = screenshotIndex;
    this.isImageZoomed = false;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalProject = null;
    this.isImageZoomed = false;
    document.body.style.overflow = 'auto';
  }

  selectModalScreen(index: number): void {
    this.activeModalScreenIndex = index;
  }

  nextModalScreen(): void {
    if (!this.modalProject?.screenshots) return;
    this.activeModalScreenIndex =
      (this.activeModalScreenIndex + 1) % this.modalProject.screenshots.length;
  }

  prevModalScreen(): void {
    if (!this.modalProject?.screenshots) return;
    this.activeModalScreenIndex =
      (this.activeModalScreenIndex - 1 + this.modalProject.screenshots.length) %
      this.modalProject.screenshots.length;
  }

  toggleImageZoom(): void {
    this.isImageZoomed = !this.isImageZoomed;
  }

  @HostListener('window:keydown.escape')
  onEscapePress(): void {
    if (this.isImageZoomed) {
      this.isImageZoomed = false;
    } else if (this.isModalOpen) {
      this.closeModal();
    }
  }
}
