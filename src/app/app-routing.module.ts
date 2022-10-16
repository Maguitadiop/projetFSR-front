import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DeleteContactComponent } from './components/delete-contact/delete-contact.component';
import { ListContactComponent } from './components/list-contact/list-contact.component';

const routes: Routes = [
  {path: 'addcontact', component:ContactComponent},
  {path: 'deletecontact', component:DeleteContactComponent},
  {path: 'listcontact', component:ListContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
