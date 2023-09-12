import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TowerService } from 'src/app/tower/services/tower.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    // Core modules
    CommonModule,

    // Material modules
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HeaderComponent implements OnInit {
  element: any;
  isFullScreen: boolean = false;

  constructor(
    private towerService: TowerService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    this.element = document.documentElement;
  }

  // Trigger fullscreen with support for different browsers
  openFullscreen() {
    if (this.element.requestFullscreen) {
      this.element.requestFullscreen();
    } else if (this.element.mozRequestFullScreen) {
      /* Firefox */
      this.element.mozRequestFullScreen();
    } else if (this.element.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.element.webkitRequestFullscreen();
    } else if (this.element.msRequestFullscreen) {
      /* IE/Edge */
      this.element.msRequestFullscreen();
    }
  }

  // Reload data on demand
  reloadData() {
    this.towerService.reload();
  }

  // Exit fullscreen with support for different browsers
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  // Listen for fullscreen change events
  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  fullScreenMode() {
    this.checkScreenMode();
  }

  // Check if the browser is in fullscreen mode
  checkScreenMode() {
    if (document.fullscreenElement) {
      //fullscreen
      this.isFullScreen = true;
    } else {
      //not in full screen
      this.isFullScreen = false;
    }
  }
}
