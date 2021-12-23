import { Component, ElementRef, ViewChild } from '@angular/core';
import { projects } from 'src/assets/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('aboutSection') about!: ElementRef;
  projects = projects;

  scrollDown() {
    this.about.nativeElement.scrollIntoView({behavior: 'smooth'})
  }
}
