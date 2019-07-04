import { AnnouncementComponent } from './announcement/announcement.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocumentComponent } from './document/document.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'announcement', component: AnnouncementComponent},
  { path: 'document', component: DocumentComponent },
  { path: 'information', component: InformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
