import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'app', component:JournalComponent},
  {path: '', redirectTo: "/app", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
