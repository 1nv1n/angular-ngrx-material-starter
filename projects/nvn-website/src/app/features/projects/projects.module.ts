import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebsiteFeatureListComponent } from './website-feature-list/website-feature-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent, WebsiteFeatureListComponent],
  imports: [CommonModule, SharedModule, ProjectsRoutingModule]
})
export class ProjectsModule {}
