import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './main-panel/group/group.component'
import { IndividualComponent } from './main-panel/individual/individual.component'

const routes: Routes = [
  { path: 'group', component: GroupComponent, pathMatch: 'full' },
  { path: 'individual', component: IndividualComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'group' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
