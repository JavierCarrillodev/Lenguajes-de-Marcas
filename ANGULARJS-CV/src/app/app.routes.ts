import { Routes } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { FormacionComponent } from './formacion/formacion.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'personal', pathMatch: 'full' },
  { path: 'personal', component: PersonalComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'contacto', component: ContactoComponent },
];
