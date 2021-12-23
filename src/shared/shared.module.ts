import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticlesComponent } from './particles/particles.component';
import { ProjectItemComponent } from './project-item/project-item.component';



@NgModule({
  declarations: [
    ParticlesComponent,
    ProjectItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParticlesComponent,
    ProjectItemComponent
  ]
})
export class SharedModule { }
